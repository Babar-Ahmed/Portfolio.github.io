 function createPdf(){

if(document.getElementById('name').value == "" || document.getElementById("Birthday").value=="") || document.getElementById("Adress").value=""{
    alert("plaese fill form");
  }
  else{
     var doc = new jsPDF();
     doc.text(document.getElementById("name").value,10,10);
      doc.text(document.getElementById("Birthday").value,25,25);
       doc.text(document.getElementById("Adress").value,35,35);
    
      doc.save("output.pdf");

  }
}
