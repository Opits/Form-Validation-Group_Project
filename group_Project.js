const 
nameField = document.getElementById('First'),
nameLabel = document.getElementById('firstLabel'),

surnameField = document.getElementById('Last'),
surnameLabel = document.getElementById('lastLabel'),

emailField = document.getElementById('Email'),
emailLabel = document.getElementById('emailLabel'),

idField = document.getElementById('userID'),
idLabel = document.getElementById('userIDLabel'),

countryField = document.getElementById('Country'),
countryLabel = document.getElementById('countryLabel'),

stateField = document.getElementById('State'),
stateLable = document.getElementById('stateLable'),

cityField = document.getElementById('City'),
cityLable = document.getElementById('cityLable'),

phoneField = document.getElementById('Phone'),
phoneLabel = document.getElementById('phoneLabel'),

referenceField = document.getElementById('RefCod'),

phoneInput = document.getElementById('Phone'), 

errorMessage = document.getElementById('error-message'),
errorMessage2 = document.getElementById('error-message02'),
errorMessage3 = document.getElementById('error-message03');

validTick = document.getElementById('tick'),
unvalidCross = document.getElementById('cross');

let showErrorMessage = false; 

//function to highlight a field when clicked on
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

 //function to remove the highlight from the field once clicked off of it
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

nameField.addEventListener('focus',function ()
{
  errorMessage.textContent = '';
});

nameField.addEventListener('blur', function ()
{
    showErrorMessage = true;

    if(!/^[A-Za-z]+$/.test(nameField.value))
    {
        errorMessage.textContent = 'Name may only contain letters'
    }
    else
    {
        errorMessage.textContent=''
    }
});

surnameField.addEventListener('focus',function ()
{
  errorMessage2.textContent = '';
});

surnameField.addEventListener('blur', function ()
{
    showErrorMessage = true;

    if(!/^[A-Z a-z]+$/.test(surnameField.value))
    {
        errorMessage2.textContent = 'Last Name may only contain letters'
    }
    else
    {
        errorMessage2.textContent=''
    }
});

phoneInput.addEventListener('focus', function () 
{
    errorMessage3.textContent = '';
});

phoneInput.addEventListener('blur', function () 
{
 showErrorMessage = true;

 if(!/^\d{10}$/.test(phoneInput.value))
 {
    errorMessage3.textContent = 'Please enter a valid phone number!'
 }
 else
 {
    errorMessage3.textContent ='';
 }
});

//If the email-filed includes an "@" it will display a green tick, else it will display a red cross.

emailField.addEventListener('input', function () 
{
  if (emailField.value.includes('@'))
  {
    validTick.style.display = 'inline';
    unvalidCross.style.display = 'none';
  }
  else
  {
    validTick.style.display = 'none';
    unvalidCross.style.display = 'inline';
  }
});


document.addEventListener('click', highlightClick);

document.addEventListener('click', unhighlightClick);
 

