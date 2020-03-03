function validate() {
    'use strict';
    var password = document.getElementById('pass').value, validPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"), passResult = validPass.test(password);
        
    if (passResult === false) {
        alert('Please enter a valid password');
        return false;
    }
    return true;
}