function fnValidar01()
{
     var ximagen=document.getElementById("fileImagen").value;
     if(xtexto == ""||/.../.test(xtexto))

    {

     alert("FALTA texto..");
     return false;
    }
    var xNumero=document.getElementById("txtNumero").value;
     if(xNumero == ""||/.../.test(xtexto))

    {

     alert("FALTA xnumero..");
     return false;
    }
	return true;
}