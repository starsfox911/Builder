// обьект для блока comlete

var est = 1992; // год основания
var data = new Date()
var info_obj = {        
    exp_year:data.getFullYear()-est,
    house:172,
    repairs: 852,
    warranty:1

} //закрыли info_obj

$(function(){ 
    function video() {
        
    
    $('#video').vide({
        mp4:'video/cover',
        mkv:'video/cover',
        poster: 'video/Poster'
      
    });//вайд(переделать)
 }    
    setTimeout(video,6000);
    // вывод в complete
    $('#c_i_1').html(info_obj.exp_year);
    $('#c_i_2').html(info_obj.house);
    $('#c_i_3').html(info_obj.repairs);
    $('#c_i_4').html(info_obj.warranty);

    $('.whatdo_item').click(function() {
        window.location.href="account.html" 
        
    })

})//закрыли главную
// сделать проверку формы