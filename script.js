let textPattern = /^[A-Z][a-zA-Z' -]*$/;
let paesePattern = /^[A-Z][a-zA-Zàèéìòù' -]+(?: [a-zA-Zàèéìòù' -]+)*$/;
let phonePattern = /^\d{3}[ -]?\d{7}$/;
let cfPattern = /^[A-Z]{6}\d{2}[A-EHLMPR-T]{1}\d{2}[A-Z\d]{4}[A-Z]{1}$/;
//Una lettera per il mese di nascita (A per gennaio, B per febbraio, ..., T per dicembre). 
//Sono escluse le lettere "F", "G", "I", "K", "N", "O", "Q", "U", "V", "W", "X", "Y", "Z".
let provPattern = /^[A-Z]{2}$/;
let indirizzoPattern = /^(Via|Viale|Piazza)\s+[A-Za-z\s]+$/;
let capPattern = /^\d{5}$/;
let civicoPattern = /^\d{1,5}([ /-]?\d*[A-Za-z]*)?$/;
let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/;

let errorMessages = "";





function controlRegex(event) {
    event.preventDefault();


    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let cf = document.getElementById("cf").value;
    let pn = document.getElementById("pn").value;
    let pron = document.getElementById("pron").value;
    let pares = document.getElementById("pares").value;
    let prores = document.getElementById("prores").value;
    let cr = document.getElementById("cr").value;
    let address = document.getElementById("address").value;
    let civico = document.getElementById("civico").value;
    let cap = document.getElementById("cap").value;



    if (!new RegExp(textPattern).test(name)) {
        errorMessages += "Il nome deve iniziare con una lettera maiuscola e può contenere lettere, apostrofi, spazi e trattini.\n";
    }

    if (!new RegExp(textPattern).test(surname)) {
        errorMessages += "Il cognome deve iniziare con una lettera maiuscola e può contenere lettere, apostrofi, spazi e trattini.\n";
    }

    if (!new RegExp(emailPattern).test(email)) {
        errorMessages += "L'email non è valida.\n";
    }

    if (!new RegExp(phonePattern).test(phone)) {
        errorMessages += "Il numero di telefono deve avere il formato corretto.\n";
    }

    if (!new RegExp(cfPattern).test(cf)) {
        errorMessages += "Il codice fiscale non è valido.\n";
    }

    if (!new RegExp(paesePattern).test(pn)) {
        errorMessages += "Il paese di nascita non è valido.\n";
    }

    if (!new RegExp(provPattern).test(pron)) {
        errorMessages += "La provincia di nascita deve avere il formato XX.\n";
    }

    if (!new RegExp(paesePattern).test(pares)) {
        errorMessages += "Il paese di residenza non è valido.\n";
    }

    if (!new RegExp(provPattern).test(prores)) {
        errorMessages += "La provincia di residenza deve avere il formato XX.\n";
    }

    if (!new RegExp(textPattern).test(cr)) {
        errorMessages += "Il comune di residenza non è valido.\n";
    }

    if (!new RegExp(indirizzoPattern).test(address)) {
        errorMessages += "L'indirizzo deve iniziare con 'Via', 'Viale' o 'Piazza'.\n";
    }

    if (!new RegExp(civicoPattern).test(civico)) {
        errorMessages += "Il numero civico non è valido.\n";
    }

    if (!new RegExp(capPattern).test(cap)) {
        errorMessages += "Il CAP non è valido.\n";
    }

    if (errorMessages.length > 0) {
        alert(errorMessages);
        errorMessages = "";
    }
    else {
        window.location.href = "final.html";
    }
};
