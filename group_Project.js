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
                element[counter].classList.remove('highlightHead');
            }
            counter++;
        }
        if (!e.target.classList.contains('highlightField')) {
            console.log(doc + ' ' + label.textContent);
            e.target.classList.add('highlightField');
            label.classList.add('highlightHead');
        }
    } catch(err) {
        console.log(err);
    }

}
document.addEventListener('click', highlightClick);

//part 4 

const fileInput = document.getElementById("fileInput");
const bytesSizeSpan = document.getElementById("bytesSize");
const kbSizeSpan = document.getElementById("kbSize");
const mbSizeSpan = document.getElementById("mbSize");

fileInput.addEventListener("change", function () {
    try {        
    const selectedFile = this.files[0];
    const fileSizeBytes = selectedFile.size;
    const fileSizeKB = fileSizeBytes / 1024;
    const fileSizeMB = fileSizeKB / 1024;

    bytesSizeSpan.textContent = fileSizeBytes + " bytes";
    kbSizeSpan.textContent = fileSizeKB.toFixed(2) + " KB";
    mbSizeSpan.textContent = fileSizeMB.toFixed(2) + " MB";

    var userInput = prompt("Enter a nr : ");

    switch (userInput) {
        case "1": console.log(selectedFile); break; 
        case "2": console.log(bytesSizeSpan); break; 
        case "3": console.log(kbSizeSpan); break; 
        case "4": console.log(mbSizeSpan); break; 
        default: console.log("wrong input"); break;}
    } catch (error) {
        console.log("error: part 4/file size" )
    }

});

