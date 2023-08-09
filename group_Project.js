// Global variables
//form submission content element
let formContent = document.getElementById('theForm');
//field and label elements
const cityField = document.getElementById('City');
const cityLabel = document.getElementById('cityLabel');
const countryField = document.getElementById('Country');
const countryLabel = document.getElementById('countryLabel');
const emailField = document.getElementById('Email');
const emailLabel = document.getElementById('emailLabel');
const form = document.getElementById('theForm');
const idField = document.getElementById('userID');
const idLabel = document.getElementById('userIDLabel');
const nameField = document.getElementById('First');
const nameLabel = document.getElementById('firstLabel');
const phoneField = document.getElementById('Phone');
const phoneInput = document.getElementById('Phone');
const phoneLabel = document.getElementById('phoneLabel');
const referenceField = document.getElementById('RefCod');
const stateField = document.getElementById('State');
const stateLabel = document.getElementById('stateLabel');
const surnameField = document.getElementById('Last');
const surnameLabel = document.getElementById('lastLabel');
//error messages
const errorMessage01 = document.getElementById('error-message01');
const errorMessage02 = document.getElementById('error-message02');
const errorMessage03 = document.getElementById('error-message03');
const errorMessage04 = document.getElementById('error-message04');
const errorMessage05 = document.getElementById('error-message05');
const errorMessage06 = document.getElementById('error-message06');
const errorMessage07 = document.getElementById('error-message07');
const errorMessage08 = document.getElementById('error-message08');
const errorMessage09 = document.getElementById('error-message09');
//dropdown
const countryDropdown = document.getElementById("Country");
const cityDropdown = document.getElementById("City");
const stateDropdown = document.getElementById("State");
//icons
const unValidCross = document.getElementById('cross');
const validTick = document.getElementById('tick');

let showErrorMessage = false;
let formSubmitted = false;

//arrays and obj
//array of cities to their respective countries
const citiesByCountry = {
  "": ["-- Select a Country --"],
  US: ["-- Select a City --", "New York", "Los Angeles", "Chicago"],
  Canada: ["-- Select a City --", "Toronto", "Vancouver", "Montreal"],
  ZA: ["-- Select a City --", "Johannesburg", "Cape Town", "Pretoria", "Durban"],
  India: ["-- Select a City --", "Mumbai", "Delhi", "Bangalore", "Pune"],
  UK: ["-- Select a City --", "London", "Edinburgh", "Belfast"],
};
//array of states to their respective countries
const statesByCountry = {
  "": ["-- Select a Country --"],
  US: ["-- Select a State --", "New York", "California", "Illinois"],
  Canada: ["-- Select a State --", "Ontario", "British Columbia", "Quebec"],
  India: ["-- Select a State --", "Maharashtra", "Delhi", "Karnataka"],
  UK: ["-- Select a State --", "Scotland", "Northern Ireland", "England"],
  ZA: ["-- Select a Province --", "Gauteng", "Eastern Cape", "Western Cape", "Free State", "Kwa-Zulu Natal",],
};
//field value constraints
const fields = [
  { input: nameField, error: errorMessage01, validation: /^[A-Za-z]+$/, errorMsg: 'Name may only contain letters' },
  { input: surnameField, error: errorMessage02, validation: /^[A-Za-z ]+$/, errorMsg: 'Last Name may only contain letters' },
  { input: phoneInput, error: errorMessage03, validation: /^\d{10}$/, errorMsg: 'Please enter a valid phone number!' },
  // Add more fields here with their corresponding error messages and validation patterns
  { input: emailField, error: errorMessage04, validation: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, errorMsg: 'Please enter a valid email address!' },
  { input: idField, error: errorMessage05, validation: /.+/, errorMsg: 'Please enter a valid ID!' },
  { input: countryField, error: errorMessage06, validation: /.+/, errorMsg: 'Please select a country!' },
  { input: stateField, error: errorMessage07, validation: /.+/, errorMsg: 'Please enter a state!' },
  { input: cityField, error: errorMessage08, validation: /.+/, errorMsg: 'Please enter a city!' },
  { input: referenceField, error: errorMessage09, validation: /.+/, errorMsg: 'Please enter a reference code!' }
];
//user values for their submitted form 
const userData = {
  firstName: /^[A-Za-z]+$/,
  lastName: /^[A-Za-z ]+$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
  userID: /.+/,
  country: /.+/,
  state: /.+/,
  city: /.+/,
  phoneNumber: /^\d{10}$/,
  referenceCode: /.+/
};

//all fields for highlight function
nameField.addEventListener('focus', highlightClick);
surnameField.addEventListener('focus', highlightClick);
emailField.addEventListener('focus', highlightClick);
idField.addEventListener('focus', highlightClick);
countryField.addEventListener('focus', highlightClick);
stateField.addEventListener('focus', highlightClick);
cityField.addEventListener('focus', highlightClick);
phoneField.addEventListener('focus', highlightClick);
referenceField.addEventListener('focus', highlightClick);
phoneInput.addEventListener('focus', highlightClick);
//highlight a field when clicked on
function highlightClick(e) {
  try {
    const targetId = e.target.id;
    const inputElement = document.getElementById(targetId);
    const labelElement = document.querySelector(`label[for="${targetId}"]`);

    const elementsToClear = document.querySelectorAll('.highlightField, .highlightHead');
    elementsToClear.forEach(element => {
      element.classList.remove('highlightField', 'highlightHead');
    });

    if (inputElement) {
      inputElement.classList.add('highlightField');
    }
    if (labelElement) {
      labelElement.classList.add('highlightHead');
    }
  } catch (err) {
    console.log(err);
  }
}

// event listener for the form Submit button
form.addEventListener("submit", function (event) {

  event.preventDefault();

  formSubmitted = true;
  fields.forEach(field => {
    const isValid = field.validation.test(field.input.value);
    if (!isValid) {
      field.error.textContent = field.errorMsg;
      formSubmitted = false;
    } else {
      field.error.textContent = '';
    }
  });

  if (formSubmitted == true) {
    userData.firstName = document.getElementById("First").value;
    userData.lastName = document.getElementById("Last").value;
    userData.email = document.getElementById("Email").value;
    userData.userID = document.getElementById("userID").value;
    userData.country = document.getElementById("Country").value;
    userData.state = document.getElementById("State").value;
    userData.city = document.getElementById("City").value;
    userData.phoneNumber = document.getElementById("Phone").value;
    userData.referenceCode = document.getElementById("RefCod").value;

    console.log(userData);
    loadNewPage();
  }
});
//dynamically link the countries to their respective states and cities
populateCitiesAndStates();
function populateCitiesAndStates() {
  const selectedCountry = countryDropdown.value;
  const cities = citiesByCountry[selectedCountry];
  const states = statesByCountry[selectedCountry];

  cityDropdown.innerHTML = "";
  stateDropdown.innerHTML = "";

  if (cities) {
    cities.forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      cityDropdown.appendChild(option);
    });
  }

  if (states) {
    states.forEach(state => {
      const option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateDropdown.appendChild(option);
    });
  }
}

//If the email-filed includes an "@" it will display a green tick, else it will display a red cross.
emailField.addEventListener('input', function () {
  if (emailField.value.includes('@')) {
    validTick.style.display = 'inline';
    unValidCross.style.display = 'none';
  }
  else {
    validTick.style.display = 'none';
    unValidCross.style.display = 'inline';
  }
});

//dynamically changes the page to show the user their input field values
function loadNewPage() {
  formContent = document.getElementById('theForm');
  // Hides the original content
  formContent.classList.add('hidden');

  // Creates the new content for the new page
  const newContent = document.createElement('div');  
  newContent.id = 'newContent'
  newContent.innerHTML = `
        <p>This is the new content.</p>
        <list>
          <ul>
            <li id="name">name: </li>
            <li id="surname">surname: </li>
            <li id="email">email: </li>
            <li id="id">id: </li>
            <li id="country">country: </li>
            <li id="state">state: </li>
            <li id="city">city: </li>
            <li id="phone">phone: </li>
            <li id="ref">ref: </li>
          </ul>
        </list>
        <a href="#" id="goBack">Go Back</a>
    `;

  // Append the new content
  document.body.appendChild(newContent);

  // Attach an event listener to the "Go Back" link to revert to the original page
  document.getElementById('goBack').addEventListener('click', loadOriginalPage);

  // Append the user data values to the list items
  document.querySelector('#name').textContent += userData.firstName;
  document.querySelector('#surname').textContent += userData.lastName;
  document.querySelector('#email').textContent += userData.email;
  document.querySelector('#id').textContent += userData.userID;
  document.querySelector('#country').textContent += userData.country;
  document.querySelector('#state').textContent += userData.state;
  document.querySelector('#city').textContent += userData.city;
  document.querySelector('#phone').textContent += userData.phoneNumber;
  document.querySelector('#ref').textContent += userData.referenceCode;
}
//removes the page that show the user his data
function loadOriginalPage() {
  // Shows original content
  formContent.classList.remove('hidden');

  // Removes new content
  const newContent = document.getElementById('newContent');
  if (newContent) {
    newContent.remove();
  }

  reset();
}

//reset button event listener that trigger the function reset
form.addEventListener("reset", reset);

//a function to rest the input fields
function reset(event) {
  formSubmitted = false;
  validTick.style.display = 'none';
  unValidCross.style.display = 'none';

  fields.forEach(field => {
    field.input.value = ''; // Clear the input field value
    field.error.textContent = '';
  });
}