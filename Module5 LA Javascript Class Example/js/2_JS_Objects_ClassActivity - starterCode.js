function formValidation() {
    directFName = document.getElementById("fName").value;
    directLName = document.getElementById("lName").value;
    directAddress = document.getElementById("address").value;
    directContactNumber = document.getElementById("contactNumber").value;
    directEMail = document.getElementById("eMail").value;
    directBirthday = document.getElementById("birthday").value;

    if (directFName === '' || directLName === '' || directAddress === '' || directAddress === '' || directAddress === '' || directBirthday === '') {
        document.getElementById("output").innerHTML = "Input(s) missing!"
    }

    else {
        document.getElementById("output").innerHTML =
            "</br> Employee's firstname:  " + directFName
            + "</br> Employee's lastname:     " + directLName
            + "</br> Employee's adress:    " + directAddress
            + "</br> Employee's phone number:    " + directAddress
            + "</br> Employee's email:    " + directAddress
            + "</br> Employee's birthday:    " + directBirthday;

    }

}