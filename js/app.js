function validateLogin() {
    if(window.location.href.includes('login')) {
        if(document.getElementById('emailId').value == 'ayuehealth@gmail.com' && document.getElementById('pass').value == '9527657075') {
            window.location.replace('https://docs.google.com/forms/d/1P7FH2R8f1TULjTlQx1o4n41m3mo-rHobKeE3DxTdgw8/edit#responses');
            return false;
        } else {
            document.getElementById('invalidMessage').style.display = 'block';
            return false;
        }
    }
}