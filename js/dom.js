const formMain = document.getElementById("form_main");
const formQuestions = document.getElementById("form_questions");
const formAdministrator = document.getElementById("form_administrator");
const formResult = document.getElementById("form_result");
const formGraphic = document.getElementById("form_graphic");
const closeFormQuestions = document.getElementById("close_form_questions");
const closeFormAdministrator = document.getElementById("close_form_administrator");
const btnStart = document.getElementById("start");
const btnAdmin = document.getElementById("admin");
const btnSelectProfile = document.getElementById("select_profile");
const btnGoBack = document.getElementById("go_back");
const btnNextFormAdministrator = document.getElementById('next_form_administrator');
const btnRegisterDate = document.getElementById('register_date');

btnStart.addEventListener('click', () => {
	formMain.classList.add('none');
	formMain.classList.replace('show', 'none');
	formQuestions.classList.replace('none', 'show');
	formAdministrator.classList.replace('show', 'none');
	formResult.classList.replace('show', 'none');
	formGraphic.classList.replace('show', 'none');
});

btnAdmin.addEventListener('click', () => {
	formMain.classList.add('none');
	formMain.classList.replace('show', 'none');
	formQuestions.classList.replace('show', 'none');
	formAdministrator.classList.replace('none', 'show');
	formResult.classList.replace('show', 'none');
	formGraphic.classList.replace('show', 'none');
});

closeFormAdministrator.addEventListener('click', () => {
	formMain.classList.replace('none', 'show');
	formQuestions.classList.replace('show', 'none');
	formAdministrator.classList.replace('show', 'none');
	formResult.classList.replace('show', 'none');
	formGraphic.classList.replace('show', 'none');
});

closeFormQuestions.addEventListener('click', () => {
	formMain.classList.replace('none', 'show');
	formQuestions.classList.replace('show', 'none');
	formAdministrator.classList.replace('show', 'none');
	formResult.classList.replace('show', 'none');
	formGraphic.classList.replace('show', 'none');
});

btnNextFormAdministrator.addEventListener('click', () => {
	formMain.classList.replace('show', 'none');
	formQuestions.classList.replace('show', 'none');
	formAdministrator.classList.replace('show', 'none');
	formResult.classList.replace('none', 'show');
	formGraphic.classList.replace('show', 'none');
});

btnSelectProfile.addEventListener('click', () =>{
	formMain.classList.replace('show', 'none');
	formQuestions.classList.replace('show', 'none');
	formAdministrator.classList.replace('show', 'none');
	formResult.classList.replace('show', 'none');
	formGraphic.classList.replace('none', 'show');
});

btnGoBack.addEventListener('click', () =>{
	formMain.classList.replace('show', 'none');
	formQuestions.classList.replace('none', 'show');
	formAdministrator.classList.replace('show', 'none');
	formResult.classList.replace('show', 'none');
	formGraphic.classList.replace('show', 'none');
});


btnRegisterDate.addEventListener('click', () => {
	const pdfBase64String= "../doc/Contrato1.pdf";
  sendEmailMandrill(pdfBase64String);
})


// Guardo datos del Registro del visitante en Firebase
// btnRegisterDate.addEventListener('click', () => {

// 	const pdfBase64String= "../doc/Contrato1.pdf";
// 	const dataURL = pdfBase64String.toDataURL();
//   console.log(dataURL);
//   console.log(pdfBase64String);
//   const data = firebase.database().ref().child('documento');
//   data.push({
//     pdf: dataURL,
//   })
  
//   alert("Estimado visitante su Registro fue exitoso")

//   let ref = firebase.database().ref('/documento');
//   ref.once('value', (data) => {
//     data.forEach(documento => {
//       let document = documento.key,
//         extraerDataVisitator = documento.val();
//       sendEmailMandrill(extraerDataVisitator);
//     })
//   })
// })

// generatePdf(inputData, function (err, doc) { 
// 	if (err) return callback(err); 
// 	var bufferChunks = []; 
// 	doc.on('readable', function() { 
// 	 // Store buffer chunk to array 
// 	 bufferChunks.push(doc.read()); 
// 	}); 

// 	doc.on('end', function() { 
// 	 var pdfBuffer = Buffer.concat(bufferChunks), 
// 		pdfBase64String = pdfBuffer.toString('base64'); 
// 	 // This string is perfectly ok to use as an attachment to the mandrillAPI 
// 	 sendEmailMandrill(pdfBase64String); 
// 	}); 
//  }); 