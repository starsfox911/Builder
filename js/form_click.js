$(function(){
        var name = $('#val_name').val();
        var phone = $('#val_phone').val();
        var mail = $('#val_mail').val();
        var city = $('#val_city').val();
        var c_name = /^[a-z][-a-z_]*$/i;
        
        $( "#for1m_tg" ).dialog({
            autoOpen: true,//выключаем автовызов
              show: {
              effect: "bounce",
              duration: 1000
               },
            hide: {
              effect: "pulsate",
              duration: 500
               }
             });
       $('#form_tg').click(function() {
           $('#dialog').dialog({
            autoOpen: true,//выключаем автовызов
              show: {
              effect: "bounce",
              duration: 1300
               },
            hide: {
              effect: "pulsate",
              duration: 600
               }
             }
           );
           $('#dialog').css({'display':'block'})



           
       })
        
        


       
           
           
       
        
    });


   









//закрыли главную