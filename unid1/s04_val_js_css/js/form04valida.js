function fnValidar04()
{	
    var elementoPrefer = document.getElementById("lstpreferencias").value;
    for(var i=0; i <elementoPrefer.lenght;i++)
   {
       if(!elementoPrefer[i].checked)
       {
    alert("seleccione dos preferencias "+ elementoPrefer[i].value);
    return false;
   }
   ///caso contrario///
   return true;
}
}