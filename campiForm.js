document.addEventListener("DOMContentLoaded", () => {
  fetch('campi.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Errore durante il caricamento del file JSON');
      }
      return response.json();
    })
    .then(form => {
      let formDom = document.getElementById("myform");
      const openFirstDiv = `<div class="form row">`;
      const openSecondDiv = `<div class="form-group col-md-6">`;

      let buffer = "";
      formDom.innerHTML = "";

      for (let i = 0; i < form.length; i += 2) {
        buffer += openFirstDiv + openSecondDiv;
        buffer += `<label for="${form[i].id}">${form[i].testo}:</label>`
        buffer += `<input required class="form-control" type="${form[i].type}" id="${form[i].id}" placeholder="${form[i].placeholder}"/></div>`
        buffer += openSecondDiv;
        buffer += `<label for="${form[i + 1].id}">${form[i + 1].testo}:</label>`
        buffer += `<input required class="form-control" type="${form[i + 1].type}" id="${form[i + 1].id}" placeholder="${form[i + 1].placeholder}"/></div></div><br />`
      }

      formDom.innerHTML = buffer + `<input required type="submit" value="Invia" class="btn btn-primary mb-2"/>`;
    })
    .catch(errore => {
      console.error('Errore durante il caricamento del file JSON:', error);
    });
});