function fnValidar03()
{	
    var elementoPref = document.getElementsByName("chkPrefer");
    for(var i=0; i <elementoPref.length; i++)
   {
       if(!elementoPref[i].checked)
       {
    alert("elemento sin check"+ elementoPref[i].value);
    return false;
   }
}
var elementEstado=document.getElementsByName("radEstado");
var selecionado=false;
var valorSeleccionado="";
for(var i=0; i<elementEstado.length;i++)
{
    if(elementEstado[i].checked)
    {
        valorSeleccionado=elementEstado[i].value;
        selecionado=true;
    }
}
    if(!selecionado){
    alert("elija estado civil");
    return false;
}
alert("elija estado elegido"+ valorSeleccionado);
   /// caso contrario ///
   return true;

}