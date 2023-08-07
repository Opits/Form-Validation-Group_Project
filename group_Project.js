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
    stateLabel = document.getElementById('stateLabel'),

    cityField = document.getElementById('City'),
    cityLabel = document.getElementById('cityLabel'),

    phoneField = document.getElementById('Phone'),
    phoneLabel = document.getElementById('phoneLabel'),

    referenceField = document.getElementById('RefCod');


referenceField.classList.add('highlightField');
document.getElementById(nameField.id + 'Label').classList.add('highlightHead');

function highlightClick(e) {
    try {
        var doc = (e.target.id), label = document.getElementById(doc + 'Label');

        
        var element = document.querySelectorAll('input, label'), counter = 0;
        while (counter < element.length) {
//           console.log(element[counter].classList.contains('highlightField') + ' ' + element[counter].classList.contains('highlightHead'));
            if (element[counter].classList.contains('highlightField')) {
                element[counter].classList.remove('highlightField');
            }
            if (element[counter].classList.contains('highlightHead')) {
                element[counter].classList.remove('highlightHead');}
            counter++;
        }
        if (!e.target.classList.contains('highlightField')) {
            console.log(doc + ' ' + label.textContent);
            e.target.classList.add('highlightField');
            label.classList.add('highlightHead');

        }

    } catch {

    }

}



document.addEventListener('click', highlightClick);


