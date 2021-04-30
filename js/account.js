
//   поля для расчета
var p_fund      = $('#prise_fund');
var p_build     = $('#prise_build');
var p_roof      = $('#prise_roof');
var p_all       = $('#prise_all');
var request_privat;
var obj_priv;


// определение запроса Тип
(window.XMLHttpRequest) ? request_privat = new XMLHttpRequest()
 : request_privat = new ActiveXObject("Microsoft.XMLHTTP")

request_privat.open("GET", "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");




request_privat.responseType = 'json'
request_privat.send()





request_privat.onload = function() {
  
 
  if (request_privat.status === 200) {
   
    
    // console.log(obj_priv);
    // console.log(obj_priv[0].ccy);
    // console.log(obj_priv[0].sale);
     
   
  }
   
  
   
}

// цена за доллар
 



   










$(function() {
  

 
     
     
 



})