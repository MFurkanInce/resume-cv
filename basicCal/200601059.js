function toplamaIslemi(first,second)
{
 
    ilkSayi =  parseInt(document.getElementById("first").value);
    ikinciSayi  =  parseInt(document.getElementById("second").value);

    document.getElementById("sonuc").innerHTML = ilkSayi + ikinciSayi;
   
}
   
function cikarmaIslemi(first,second)
{
    
    ilkSayi =  parseInt(document.getElementById("first").value);
    ikinciSayi  =  parseInt(document.getElementById("second").value);
       
    document.getElementById("sonuc").innerHTML = ilkSayi - ikinciSayi;
      
}
   
function carpmaIslemi(first,second)
{
    
    ilkSayi =  parseInt(document.getElementById("first").value);
    ikinciSayi  =  parseInt(document.getElementById("second").value);
    
    document.getElementById("sonuc").innerHTML = ilkSayi * ikinciSayi;
      
}
   
function bolmeIslemi(first,second)
{
    
    ilkSayi =  parseInt(document.getElementById("first").value);
    ikinciSayi  =  parseInt(document.getElementById("second").value);       

    document.getElementById("sonuc").innerHTML = ((ilkSayi / ikinciSayi).toFixed(3));
      
}