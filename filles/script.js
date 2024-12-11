// Handle Sign In
const signinForm = document.getElementById('signinForm');

signinForm && signinForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === "akshay" && password === "akshay123") {
    // Save to localStorage to simulate a logged-in user
    localStorage.setItem('user', JSON.stringify({ username: "admin" }));
    window.location.href = 'index.html'; // Redirect to HR management page
  } else {
    alert('Invalid username or password');
  }
});

// Check if user is logged in (before allowing access to index.html)
if (window.location.pathname === '/index.html') {
  if (!localStorage.getItem('user')) {
    window.location.href = 'signin.html'; // Redirect to sign-in page if not logged in
  }
}

// Handle Employee Management
const employeeForm = document.getElementById('employeeForm');
const stateSelect = document.getElementById('state');
const citySelect = document.getElementById('city');
const searchInput = document.getElementById('searchInput');
const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

// Sample state/city data
const stateCityData = {
  "California": {
    cities: {
      "Los Angeles": "A bustling city known for its entertainment industry.",
      "San Francisco": "Known for the Golden Gate Bridge and tech industry."
    }
  },
  "Texas": {
    cities: {
      "Dallas": "Modern architecture and business hub.",
      "Austin": "Tech city and live music capital."
    }
  },
  "Florida": {
    cities: {
      "Miami": "Popular for beaches and nightlife.",
      "Orlando": "Home of major theme parks."
    }
  }
};

// Populate state dropdown
Object.keys(stateCityData).forEach(state => {
  const option = document.createElement('option');
  option.value = state;
  option.textContent = state;
  stateSelect.appendChild(option);
});

// Update city dropdown based on selected state
stateSelect.addEventListener('change', function() {
  const selectedState = stateSelect.value;
  citySelect.innerHTML = '<option value="">Select a City</option>'; // Clear city dropdown

  if (selectedState) {
    const cities = stateCityData[selectedState].cities;
    Object.keys(cities).forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
});

// Handle Employee Form Submission
employeeForm && employeeForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const empName = document.getElementById('empName').value.trim();
  const empEmail = document.getElementById('empEmail').value.trim();
  const empPosition = document.getElementById('empPosition').value.trim();
  const empState = stateSelect.value;
  const empCity = citySelect.value;

  if (!empName || !empEmail || !empPosition || !empState || !empCity) {
    alert('Please fill out all fields.');
    return;
  }

  const employee = { name: empName, email: empEmail, position: empPosition, state: empState, city: empCity };
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  employees.push(employee);
  localStorage.setItem('employees', JSON.stringify(employees));

  loadEmployees(); // Reload employee list

  employeeForm.reset();
});

// Load employees from localStorage
function loadEmployees() {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  employeeTable.innerHTML = '';

  employees.forEach((employee, index) => {
    const row = employeeTable.insertRow();
    row.insertCell(0).textContent = employee.name;
    row.insertCell(1).textContent = employee.email;
    row.insertCell(2).textContent = employee.position;
    row.insertCell(3).textContent = employee.state;
    row.insertCell(4).textContent = employee.city;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
      deleteEmployee(index);
    };
    row.insertCell(5).appendChild(deleteButton);
  });
}

// Delete employee
function deleteEmployee(index) {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  employees.splice(index, 1);
  localStorage.setItem('employees', JSON.stringify(employees));
  loadEmployees();
}

// Search Employees
const searchBtn = document.getElementById('searchBtn');
searchBtn && searchBtn.addEventListener('click', function() {
  const searchQuery = searchInput.value.toLowerCase();
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchQuery) ||
    employee.position.toLowerCase().includes(searchQuery)
  );

  employeeTable.innerHTML = '';
  filteredEmployees.forEach(employee => {
    const row = employeeTable.insertRow();
    row.insertCell(0).textContent = employee.name;
    row.insertCell(1).textContent = employee.email;
    row.insertCell(2).textContent = employee.position;
    row.insertCell(3).textContent = employee.state;
    row.insertCell(4).textContent = employee.city;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
      deleteEmployee(index);
    };
    row.insertCell(5).appendChild(deleteButton);
  });
});

// Initialize employees list
loadEmployees();
