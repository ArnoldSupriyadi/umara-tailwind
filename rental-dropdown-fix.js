// Rental Car Destination City Dropdown Handler
// This script fixes the empty destination_city dropdown when JAKARTA KOTA is selected as origin

// City data for different customer types when origin is JAKARTA KOTA
const cityData = {
    'JAKARTA KOTA': {
        'drop_off': [
            { value: 'JAKARTA SELATAN', text: 'Jakarta Selatan' },
            { value: 'JAKARTA UTARA', text: 'Jakarta Utara' },
            { value: 'JAKARTA TIMUR', text: 'Jakarta Timur' },
            { value: 'JAKARTA BARAT', text: 'Jakarta Barat' },
            { value: 'JAKARTA PUSAT', text: 'Jakarta Pusat' },
            { value: 'TANGERANG', text: 'Tangerang' },
            { value: 'TANGERANG SELATAN', text: 'Tangerang Selatan' },
            { value: 'BEKASI', text: 'Bekasi' },
            { value: 'DEPOK', text: 'Depok' },
            { value: 'BOGOR', text: 'Bogor' },
            { value: 'BANDUNG', text: 'Bandung' },
            { value: 'SURABAYA', text: 'Surabaya' },
            { value: 'YOGYAKARTA', text: 'Yogyakarta' },
            { value: 'SEMARANG', text: 'Semarang' },
            { value: 'MEDAN', text: 'Medan' }
        ],
        'pick_up': [
            { value: 'JAKARTA SELATAN', text: 'Jakarta Selatan' },
            { value: 'JAKARTA UTARA', text: 'Jakarta Utara' },
            { value: 'JAKARTA TIMUR', text: 'Jakarta Timur' },
            { value: 'JAKARTA BARAT', text: 'Jakarta Barat' },
            { value: 'JAKARTA PUSAT', text: 'Jakarta Pusat' }
        ]
    }
};

// Function to populate destination cities based on origin and customer type
function populateDestinationCities(originValue, customerType) {
    const destinationSelect = document.querySelector('select[name="destination_city"], #destination_city, .destination_city');
    
    if (!destinationSelect) {
        console.warn('Destination city dropdown not found');
        return;
    }

    // Clear existing options except the first placeholder option
    const firstOption = destinationSelect.querySelector('option:first-child');
    destinationSelect.innerHTML = '';
    
    if (firstOption) {
        destinationSelect.appendChild(firstOption);
    } else {
        // Add default placeholder option
        const placeholderOption = document.createElement('option');
        placeholderOption.value = '';
        placeholderOption.textContent = 'Please select an item in the list';
        placeholderOption.disabled = true;
        placeholderOption.selected = true;
        destinationSelect.appendChild(placeholderOption);
    }

    // Check if we have data for the selected origin and customer type
    if (cityData[originValue] && cityData[originValue][customerType]) {
        const cities = cityData[originValue][customerType];
        
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.value;
            option.textContent = city.text;
            destinationSelect.appendChild(option);
        });
        
        // Enable the dropdown
        destinationSelect.disabled = false;
        console.log(`Populated ${cities.length} cities for ${originValue} - ${customerType}`);
    } else {
        // Disable the dropdown if no data available
        destinationSelect.disabled = true;
        console.log(`No city data available for ${originValue} - ${customerType}`);
    }
}

// Function to handle origin dropdown change
function handleOriginChange() {
    const originSelect = document.querySelector('select[name="origin"], #origin, .origin');
    const customerTypeInputs = document.querySelectorAll('input[name="customer_type"], input[name="cust_type"]');
    
    if (!originSelect) {
        console.warn('Origin dropdown not found');
        return;
    }

    const originValue = originSelect.value;
    let customerType = null;

    // Get selected customer type
    customerTypeInputs.forEach(input => {
        if (input.checked) {
            customerType = input.value;
        }
    });

    console.log(`Origin changed to: ${originValue}, Customer type: ${customerType}`);

    if (originValue && customerType) {
        populateDestinationCities(originValue, customerType);
    }
}

// Function to handle customer type change
function handleCustomerTypeChange() {
    const originSelect = document.querySelector('select[name="origin"], #origin, .origin');
    const customerTypeInputs = document.querySelectorAll('input[name="customer_type"], input[name="cust_type"]');
    
    if (!originSelect) {
        console.warn('Origin dropdown not found');
        return;
    }

    const originValue = originSelect.value;
    let customerType = null;

    // Get selected customer type
    customerTypeInputs.forEach(input => {
        if (input.checked) {
            customerType = input.value;
        }
    });

    console.log(`Customer type changed to: ${customerType}, Origin: ${originValue}`);

    if (originValue && customerType) {
        populateDestinationCities(originValue, customerType);
    }
}

// Initialize the dropdown functionality
function initializeRentalDropdown() {
    console.log('Initializing rental dropdown functionality...');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupEventListeners);
    } else {
        setupEventListeners();
    }
}

// Setup event listeners
function setupEventListeners() {
    // Find and attach event listeners to origin dropdown
    const originSelect = document.querySelector('select[name="origin"], #origin, .origin');
    if (originSelect) {
        originSelect.addEventListener('change', handleOriginChange);
        console.log('Origin dropdown event listener attached');
    } else {
        console.warn('Origin dropdown not found - will retry in 2 seconds');
        setTimeout(setupEventListeners, 2000);
        return;
    }

    // Find and attach event listeners to customer type radio buttons
    const customerTypeInputs = document.querySelectorAll('input[name="customer_type"], input[name="cust_type"]');
    if (customerTypeInputs.length > 0) {
        customerTypeInputs.forEach(input => {
            input.addEventListener('change', handleCustomerTypeChange);
        });
        console.log(`Customer type radio button event listeners attached (${customerTypeInputs.length} inputs)`);
    } else {
        console.warn('Customer type inputs not found');
    }

    // Check initial state and populate if needed
    setTimeout(() => {
        const originValue = originSelect.value;
        let customerType = null;
        
        customerTypeInputs.forEach(input => {
            if (input.checked) {
                customerType = input.value;
            }
        });

        if (originValue === 'JAKARTA KOTA' && customerType === 'drop_off') {
            populateDestinationCities(originValue, customerType);
        }
    }, 500);
}

// Auto-initialize when script loads
initializeRentalDropdown();

// Export functions for manual use if needed
window.RentalDropdownFix = {
    populateDestinationCities,
    handleOriginChange,
    handleCustomerTypeChange,
    initializeRentalDropdown
};

console.log('Rental dropdown fix script loaded successfully');