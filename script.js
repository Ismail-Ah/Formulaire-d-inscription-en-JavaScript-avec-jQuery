$(document).ready(function() {
    $("#add_Etudiant").on("click", function(e) {
      e.preventDefault();
      var cne = $("#q1").val()
      var nom = $("#q2").val()
      var prenom =$("#q3").val()
      var email =$("#q4").val()
      var tel = $("#q5").val()
      var ville =$("#q7").val()
      if (verefication(cne,nom,prenom,email,tel,ville)){
        let i = trier_etud(cne);
        var table = document.getElementById("table_etud");
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML =nom+" &nbsp"+prenom;
        cell2.innerHTML =cne;
        cell3.innerHTML =email;
        cell4.innerHTML =tel;
        cell5.innerHTML =ville;
      }
    })
})
function verefication(cne,nom,prenom,email,tel,ville){
  if (cne=="" || nom=="" || prenom=="" || email =="" || tel == "" || ville == ""){
      window.alert("Remplir tous les champs !");
      return false;
  }
  var re = /\S+@\S+\.\S+/;
  if (!re.test(email)){
    window.alert("email invalid !");
    return false;
  }
  if (!(/^\d{10}$/.test(tel))) {
    window.alert("tel invalid !");
    return false;
  }
  var re = /\S/;
  if (!re.test(cne)){
    window.alert("cne invalid !");
    return false;
  }
  return true;
}
function trier_etud(cne){
  var table = document.getElementById("table_etud");
  table.style.visibility="visible";
  let i=1;
  var l = table.rows.length;
  if(l<=1) return l; 
  for (i;i<l;i++){
    var cne1 = table.rows[i].cells[1].textContent;
    if(cne1>cne){
      return i;
    }
  }
  return i ;

}