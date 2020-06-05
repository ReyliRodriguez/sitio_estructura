function fnValidar02()
{
    
        var xvalor=document.getElementById("lstpreferencias").value;
        if(xvalor =="")
   
       {
        alert("selecione una preferencia ...");
        return false;
       }
       /// caso contrario ///
       return true;
   
}