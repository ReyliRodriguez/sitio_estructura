function fnValidar03()
{	
    var elementoPrefer = document.getElementById("lstpreferencias").value;
    for(var i=0; i <elementoPrefer.lenght;i++)
   {
       if(!elementoPrefer[i].checked)
       {
    alert("element sin check"+ elementoPrefer[i].value);
    return false;
   }
}
var elementEstado=document.getElementById("radEstado");
var selecionado=false;
var valorSeleccionado="";
for(var i=0; i<elementEstado.lenght;i++)
{
    if(elementEstado[i].checked)
    {
        valorSeleccionado=elementEstado[i].value;
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