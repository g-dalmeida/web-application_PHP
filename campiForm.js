let form = [
    {
        "id": "name",
        "testo": "Nome",
        "type": "text",
        "placeholder": "Es. Mario",
    },
    {
        "id": "surname",
        "testo": "Cognome",
        "type": "text",
        "placeholder": "Es. Rossi",
    },
    {
        "id": "email",
        "testo": "Email",
        "type": "text",
        "placeholder": "Es. mariorossi@gmail.com",
    },
    {
        "id": "phone",
        "testo": "Numero di telefono",
        "type": "text",
        "placeholder": "339-4567890",
    },
    {
        "id": "birth",
        "testo": "Data di nascita",
        "type": "date",
        "placeholder": "",
    },
    {
        "id": "cf",
        "testo": "Codice fiscale",
        "type": "text",
        "placeholder": "Es. RSSMRA80L05F593A",
    },
    {
        "id": "pn",
        "testo": "Paese di nascita",
        "type": "text",
        "placeholder": "Es. Roma",
    },
    {
        "id": "pron",
        "testo": "Provincia di nascita (Formato XX)",
        "type": "text",
        "placeholder": "Es. RM",
    },
    {
        "id": "pares",
        "testo": "Paese di residenza",
        "type": "text",
        "placeholder": "Es. Roma",
    },
    {
        "id": "prores",
        "testo": "Provincia di residenza (Formato XX)",
        "type": "text",
        "placeholder": "Es. RM",
    },
    {
        "id": "cr",
        "testo": "Comune di residenza",
        "type": "text",
        "placeholder": "Es. Roma",
    },
    {
        "id": "address",
        "testo": "Indirizzo di residenza",
        "type": "text",
        "placeholder": "Es. Via le dita dal naso",
    },
    {
        "id": "civico",
        "testo": "Numero civico",
        "type": "number",
        "placeholder": "Es. 14",
    },
    {
        "id": "cap",
        "testo": "Codice di avviamento postale (CAP)",
        "type": "text",
        "placeholder": "Es. 06081",
    }
]

let formDom = document.getElementById("myform");
const openFirstDiv = `<div class="form row">`
const openSecondDiv = `<div class="form-group col-md-6">`

let buffer = "";
formDom.innerHTML = "";

for (let i = 0; i < form.length; i += 2) {
    buffer += openFirstDiv + openSecondDiv;
    buffer += `<label for="${form[i].id}">${form[i].testo}:</label>`
    buffer += `<input required class="form-control" type="${form[i].type}" id="${form[i].id}" name="${form[i].id}" placeholder="${form[i].placeholder}"/></div>`
    buffer += openSecondDiv;
    buffer += `<label for="${form[i + 1].id}">${form[i + 1].testo}:</label>`
    buffer += `<input required class="form-control" type="${form[i + 1].type}" id="${form[i + 1].id}" name="${form[i + 1].id}" placeholder="${form[i + 1].placeholder}"/></div></div><br />`
}

formDom.innerHTML = buffer + `<input required type="submit" value="Invia" class="btn btn-primary mb-2"/>`;