const nameField = document.getElementById('First');
const nameLabel = document.getElementById('firstLabel');

const surnameField = document.getElementById('Last');
const surnameLabel = document.getElementById('lastLabel');

const emailField = document.getElementById('Email');
const emailLabel = document.getElementById('emailLabel');

const idField = document.getElementById('userID');
const idLabel = document.getElementById('userIDLabel');

const countryField = document.getElementById('Country');
const countryLabel = document.getElementById('countryLabel');

const stateField = document.getElementById('State');
const stateLable = document.getElementById('stateLable');

const cityField = document.getElementById('City');
const cityLable = document.getElementById('cityLable');

const phoneField = document.getElementById('Phone');
const phoneLabel = document.getElementById('phoneLabel');

const referenceField = document.getElementById('RefCod');


function highlightClick()
{
    nameField.classList.add('highlightField');
    nameLabel.classList.add('highlightHead');

    surnameField.classList.add('highlightField');
    surnameLabel.classList.add('highlightHead');

    emailField.classList.add('highlightField');
    emailLabel.classList.add('highlightHead');

    idField.classList.add('highlightField');
    idLabel.classList.add('highlightHead');

    countryField.classList.add('highlightField');
    countryLabel.classList.add('highlightHead');

    stateField.classList.add('highlightField');
    stateLable.classList.add('highlightHead');

    cityField.classList.add('highlightField');
    cityLable.classList.add('highlightHead');

    phoneField.classList.add('highlightField');
    phoneLabel.classList.add('highlightHead');

    referenceField.classList.add('highlightField');
}


 function unhighlightClick(e)
{
    if (e.target !== nameField)
    {
        nameField.classList.remove('highlightField');
        nameLabel.classList.remove('highlightHead');
    }

    if (e.target !== surnameField)
    {
        surnameField.classList.remove('highlightField');
        surnameLabel.classList.remove('highlightHead');
    }

    if (e.target !== emailField)
    {
        emailField.classList.remove('highlightField');
        emailLabel.classList.remove('highlightHead');
    }

    if (e.target !== idField)
    {
        idField.classList.remove('highlightField');
        idLabel.classList.remove('highlightHead');
    }

    if (e.target !== countryField)
    {
        countryField.classList.remove('highlightField');
        countryLabel.classList.remove('highlightHead');
    }

    if (e.target !== stateField)
    {
        stateField.classList.remove('highlightField');
        stateLable.classList.remove('highlightHead');
    }

    if (e.target !== cityField)
    {
        cityField.classList.remove('highlightField');
        cityLable.classList.remove('highlightHead');
    }

    if (e.target !== phoneField)
    {
       phoneField.classList.remove('highlightField');
       phoneLabel.classList.remove('highlightHead');
    }

    if (e.target !== referenceField)
    {
        referenceField.classList.remove('highlightField');
    }
} 


document.addEventListener('click', highlightClick);
 
document.addEventListener('click', unhighlightClick);


