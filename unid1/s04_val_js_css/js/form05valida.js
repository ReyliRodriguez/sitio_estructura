function fnValidar05()
{	
    var xtexto=document.getElementById("txttexto").Value;
    if(!(/^\d{3}\s\d{3}\s\d{3}$/.test(xtexto)))
    {
        alert("Escriba n9 numeros entre 3 y separados por un espacio...");
        return false;

    }
    var xnumero=document.getElementById("txtnumero").value;
    if(!(/^\d{9}$/.test(xtexto)))
    {
        alert("FALTA NUMEROS...")
        return false;

    }
    var xfijo=document.getElementById("txtfijo").value;
    if(!(/^05[45]\s\d{6}/.test(xfijo)))
{
    alert("Numero de telefono fijo...")
        return false;
}
///caso contrario///
return true
}