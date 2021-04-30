var foto = $('#foto')
var f_img = $('.foto_img')
var names = ['img/img2/1 (1).jpg',
             'img/img2/1 (2).jpg',
             'img/img2/1 (3).jpg',
              'img/img2/1 (4).jpg',
              'img/img2/1 (5).jpg',
              'img/img2/1 (6).jpg',
              'img/img2/1 (2).jpg',
             'img/img2/1 (3).jpg',
              'img/img2/1 (4).jpg',
              'img/img2/1 (2).jpg',
             'img/img2/1 (3).jpg',
              'img/img2/1 (4).jpg',
              'img/img2/1 (2).jpg',
             'img/img2/1 (3).jpg',
              'img/img2/1 (4).jpg',
              'img/img2/1 (2).jpg',
             'img/img2/1 (3).jpg',
              'img/img2/1 (4).jpg',
            ]; // массив адресов
 
var img = []; //  искомый массив 
for (var j = 0, i = names.length; j < i; j++)
   {
   img[j] = new Image ();
   console.log(img[j]);
   img[j].src = names [j];
   foto.append('<div class="foto_img"><img src=" '+  img[j].src +  ' " alt=""> </div>')
    
   }