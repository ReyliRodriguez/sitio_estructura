function fnValidar02()
{
    var xNombre=document.getElementById("txtNombres").value;
    if(xNombre == "")

   {

    alert("FALTA nombres..");
    return false;
   }

   return true;
  
}