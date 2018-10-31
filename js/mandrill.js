function sendEmailMandrill(pdfBase64String){
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
        'message': {
          "html": `<div>
          <p>Estimado colaborador, te comunicamos que el cliente  , 
          de la empresa , desea reunirse contigo en este instante. 
         Por favor, comunicate con el área de Recepción para confirmar su ingreso o al numero  del cliente.</p>
         Atte.
         Empresa Co-Working
         </div>`,

          "text": "Example text content",
          "subject": `Visita de `,
          "from_email": "lucero.a@laboratoria.la",
          "from_name": "Registro de visitantes",
          "to": [
              {
                  "email": "gutierrezanicamalucero@gmail.com",
                  "name": "Grecia G.A.",
                  "type": "to"
              }
          ],
          "headers": {
              "Reply-To": "gutierrezanicamalucero@gmail.com"
          }
          
      },
      "async": false,
      "ip_pool": "Main Pool",
      "send_at": "2018-10-10 10:00:00"
      }
    });
  }
