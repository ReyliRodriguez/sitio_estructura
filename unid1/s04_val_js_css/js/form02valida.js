function fnValidar02()
{
    
        var xValor=document.getElementById("listPreferencias").value;
        if(xValor =="")
   
       {
        alert("selecione una preferencia ...");
        return false;
       }
       /// caso contrario ///
       return true;
   
}