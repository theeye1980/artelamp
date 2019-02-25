function cartOpener(){
  $('.headercart p').click(function(){
    $(this).closest('.headercart').toggleClass('open');
    $('.cartclose').slideToggle();
  });
}
function clearmask(){
	$('.masktel').on('click', function(){
		var a = document.querySelector('.masktel');
		a.placeholder='';
	})
}
function perebros(){
	$('#oformit').on('click', function() { // Переброс пользователя на корзину из летающей корзины
		document.location.href = 'https://www.artelamp.it/ru/cart.html';
	});
	$('#kupit').on('click', function() { // Переброс пользователя на корзину из летающей корзины
		document.location.href = 'https://www.artelamp.it/ru/cart.html';
	});
}

function cartFloat(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
    $('.headercart').addClass('fix');
    } else {
    $('.headercart').removeClass('fix');
    }
  });
}
function delCartUn(){
  $('.closecartbtn').click(function(){
    $(this).closest('.newcart-un').remove();
  });
}
function cartCalc(){
  $('.cartcalc .ccalc-minus').click(function(){
	var action = $(this).data('action'); //мои потуги
    var a = $(this).closest('.cartcalc').find('input').val();
	var total_goods=$('#total_goods').html();
	
	total_goods=parseInt(total_goods);
	console.log('total_goods: ', total_goods);
	
	var price_i=$(this).parent().parent().parent(); //	 ('.cartcloseun2 span');
	var real_price=$(price_i).find("span").html();
	
	var sum=$('#final_fly_cart_sum').html();
	sum=$.trim(sum);
	sum=parseInt(sum);
	
	var new_sum=sum-real_price;

	//alert('пауза');
    if(a>1){
      var b = +a-1;
      $(this).closest('.cartcalc').find('input').val(b);
	  // уменьшаем итоговую сумму на нужное действие
	  $('#final_fly_cart_sum').html(new_sum + ' руб.');
	  $('#total_goods').html(total_goods-1);
	  if(action){
	  var param=[];
			param[0]='plus';
			param[1]=action;
			param[2]=b
					  
			pereschet_itogo(param); 
	  }
	  
	  
	  
    }else{
      $(this).closest('.cartcalc').find('input').val(a);
    }
	
  });
  $('.cartcalc .ccalc-plus').click(function(){
	var action = $(this).data('action'); //мои потуги
    var a = $(this).closest('.cartcalc').find('input').val();
	var total_goods=$('#total_goods').html();
	total_goods=parseInt(total_goods);
	
	var price_i=$(this).parent().parent().parent(); //	 ('.cartcloseun2 span');
	var real_price=$(price_i).find("span").html();
	
	var sum=$('#final_fly_cart_sum').html();
	sum=$.trim(sum);
	sum=parseInt(sum);
	
	var new_sum=sum+parseInt(real_price);

	console.log('price_i: ', price_i.html());
	console.log('real_price: ', real_price);
	console.log('sum: ', sum);
	console.log('new_sum: ', new_sum);
	
	
    var n = $(this).closest('.cartcalc').attr('data-maxval');
    if(a == n){
      var b = a;
      $(this).closest('.cartcalc').find('.cartcalcmaxinf').fadeIn(500).delay(2000).fadeOut(500);
    }else{
      var b = +a+1;
      $(this).closest('.cartcalc').find('input').val(b);
	  $('#final_fly_cart_sum').html(new_sum + ' руб.');
	  $('#total_goods').html(total_goods+1);
	  //запускаем перерисовку ajax корзины
	  if(action){
	  var param=[];
			param[0]='plus';
			param[1]=action;
			param[2]=b
					  
			pereschet_itogo(param); 
	  }
    }
  });
}

function pereschet_itogo(param){
		 // Блок перерисовки корзины в режиме ajax
		 var output = $("#newcartcontainer"); // блок вывода информации
		 
		$.ajax({
		  url: '/itogsumm-pereschet.html', // путь к php-обработчику
		  type: 'POST', // метод передачи данных
		  dataType: 'html', // тип ожидаемых данных в ответе
		  data: {key: param}, // данные, которые передаем на сервер
		  beforeSend: function(){ // Функция вызывается перед отправкой запроса
			output.text('Запрос отправлен. Ждите ответа.');
		  },
		  error: function(req, text, error){ // отслеживание ошибок во время выполнения ajax-запроса
			output.text('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
		  },
		  complete: function(){ // функция вызывается по окончании запроса
			//output.append('<p>Запрос полностью завершен!</p>');
		  },
		  success: function(json){ // функция, которая будет вызвана в случае удачного завершения запроса к серверу
			// json - переменная, содержащая данные ответа от сервера. Обзывайте её как угодно ;)
			output.html(json); // выводим на страницу данные, полученные с сервера
			cartCalc();
			delCartUn();
			}
		});
	
}

$(document).ready(function() {	
	
	cartOpener();
	cartFloat();
	perebros();
	clearmask();
	$(".btnme").on("click", function(artikle){
		 //Перересовка блока летающей корзины при добавлении товара в корзину из карточки товара
		 $('#cart1').modal('show'); 
		 var action = $(this).data('action');
		 var output = $("#output"); // блок вывода информации
		 
		// alert(action);
		$.ajax({
		  url: '/ajax-header.html', // путь к php-обработчику
		  type: 'POST', // метод передачи данных
		  dataType: 'html', // тип ожидаемых данных в ответе
		  data: {key: action}, // данные, которые передаем на сервер
		  beforeSend: function(){ // Функция вызывается перед отправкой запроса
			output.text('Запрос отправлен. Ждите ответа.');
		  },
		  error: function(req, text, error){ // отслеживание ошибок во время выполнения ajax-запроса
			output.text('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
		  },
		  complete: function(){ // функция вызывается по окончании запроса
			//output.append('<p>Запрос полностью завершен!</p>');
		  },
		  success: function(json){ // функция, которая будет вызвана в случае удачного завершения запроса к серверу
			// json - переменная, содержащая данные ответа от сервера. Обзывайте её как угодно ;)
			output.html(json); // выводим на страницу данные, полученные с сервера
			cartOpener();
			cartCalc();
			perebros();
		  }
		});
		
		var vsplyvashka = $("#vsplyvashka"); // блок вывода информации
		$.ajax({
		  url: '/vsplyvashka.html', // путь к php-обработчику
		  type: 'POST', // метод передачи данных
		  dataType: 'html', // тип ожидаемых данных в ответе
		  data: {key: action}, // данные, которые передаем на сервер
		  beforeSend: function(){ // Функция вызывается перед отправкой запроса
			vsplyvashka.text('Запрос отправлен. Ждите ответа.');
		  },
		  error: function(req, text, error){ // отслеживание ошибок во время выполнения ajax-запроса
			vsplyvashka.text('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
		  },
		  complete: function(){ // функция вызывается по окончании запроса
			//output.append('<p>Запрос полностью завершен!</p>');
		  },
		  success: function(json){ // функция, которая будет вызвана в случае удачного завершения запроса к серверу
			// json - переменная, содержащая данные ответа от сервера. Обзывайте её как угодно ;)
			vsplyvashka.html(json); // выводим на страницу данные, полученные с сервера
		  }
		});
		
		
	});
	
	
})

function messageQ3(){
	$('.close').click();
    $('#cart3').modal('show');   
}



function messageQ(){
    $('#cart1').modal('show');   
}

function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}


function setCookie(name, value, options) {
      options = options || {};
      var expires = options.expires;

      if (typeof expires == "number" && expires) {
          var d = new Date();
          d.setTime(d.getTime() + expires * 1000);
          expires = options.expires = d;
      }
      if (expires && expires.toUTCString) {
          options.expires = expires.toUTCString();
      }

      value = encodeURIComponent(value);

      var updatedCookie = name + "=" + value;

      for (var propName in options) {
          updatedCookie += "; " + propName;
          var propValue = options[propName];
          if (propValue !== true) {
              updatedCookie += "=" + propValue;
          }
       }

      document.cookie = updatedCookie;
}



function sumCartCalk(){  //мои тренировки
	var sumCart=0;
	var n=$('.cartcloseun2').length;
	var as =$(".cartcloseun2 p span").html();
	alert (as);
	alert (n);
	
}
// Функция для ajax

