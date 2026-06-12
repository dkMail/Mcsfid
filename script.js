let counter = 1;

function generateID() {
  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let phone = document.getElementById("phone").value;

  let id = "MCSF-" + String(counter).padStart(4, '0');
  counter++;

  document.getElementById("cardName").innerText = name;
  document.getElementById("cardRole").innerText = role;
  document.getElementById("cardPhone").innerText = phone;
  document.getElementById("cardId").innerText = "ID: " + id;

  let file = document.getElementById("photo").files[0];
  let reader = new FileReader();

  reader.onload = function(e) {
    document.getElementById("previewPhoto").src = e.target.result;
  }

  if(file) reader.readAsDataURL(file);
}

async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  let card = document.getElementById("card");

  let canvas = await html2canvas(card);
  let imgData = canvas.toDataURL("image/png");

  let pdf = new jsPDF();
  pdf.addImage(imgData, 'PNG', 10, 10);
  pdf.save("MCSF_ID_Card.pdf");
}
