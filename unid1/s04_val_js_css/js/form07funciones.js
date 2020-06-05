function pasarTexto()
{
    var xValor = document.getElementById("Texto1").Value;
    document.getElementById("texto2").value=xValor;

}
function fnConcatenar()
{
var xtexto1=document.getElementById("texto1").value;
var xtexto3=document.getElementById("texto3").value;
document.getElementById("texto4").value= xtexto1 + "/"+xtexto3;
}