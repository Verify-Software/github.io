
/** *************************************
	
    @Yazar Avanzare
	@Web sitesi www.avanzare.co
	@Son Güncelleme 08:26 Salı, Kas 04, 2014

	İÇİNDEKİLER
	--------------------------
	 1. Ön Yükleyici + Animasyon
	 2. Mobil Algılama
     3. Arkaplan
	 4. Döngü
	 5. Bindirme
	 6. Ajax Abone Ol
	 7. Ajax İletişim
		
 ** *************************************/
 

/** 1. ÖNYÜKLEYİCİ + ANİMASYON
 ************************************************ ***/
$(pencere).load(fonksiyon() {
	
	$('.socket').addClass('animasyonlu fadeOut');	
	
	//PARALAKS
	$('gövde').paralaks({
	  skalerX: 25,
	  skaler Y: 15,
	  sürtünmeX: 0.1,
	  sürtünmeY: 0.1,
	});
	
	  setTimeout(işlev() {
		  $('#prelaoder').addClass('animasyonlu fadeOut').fadeOut(2000);	
	  
		  setTimeout(işlev() {
			  $('#home-screen .content-block img.logo').addClass('animasyonlu fadeInDown');
			  
			  setTimeout(işlev() {
				  $('#home-screen .content-block h1').addClass('animasyonlu fadeInUp');	
				  
				  setTimeout(işlev() {
					  $('#home-screen .content-block p').addClass('animasyonlu fadeInUp');
					  
					  setTimeout(işlev() {
						  $('.arrow-wrap').addClass('animasyonlu fadeInUp');
					  
						  setTimeout(işlev() {
							  $('#canvas-container').addClass('animasyonlu fadeInUp');  
		  
							  setTimeout(işlev() {
								  activeOverlays = 1;
								  $('#canvas-container').css('opacity','1');  
								  $('.arrow-wrap').css('opacity','1');
								  $('#home-screen .content-block p').css('opacity','1');
								  $('#home-screen .content-block h1').css('opacity','1');
								  $('#home-screen .content-block img.logo').css('opacity','1');
								  
							  }, 1000);
						  }, 500);
					  }, 500);
				  }, 500);
			  }, 500);
		  }, 1000);
	  }, 1000);
  
});

$(document).ready( function(){

	var activeOverlays = 0;
	
	$(".overlay-content .social-icons li a").tooltip({
		kapsayıcı: 'vücut',
		gecikme: { "göster": 100, "gizle": 0 }
	});
	$(".overlay-content .social-icons li a").click(function(){
		$(this).tooltip('gizle')
	});
	
});

/** 2. MOBİL ALGILAMA
 ************************************************ ***/

(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|android|ipad|playbook| silk|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm ( işletim sistemi)?|telefon|p(ix|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(tarayıcı|link)|vodafone|wap|windows (ce) |phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo| s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(eski|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw| au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\ -(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc \-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8| ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|git(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c| ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-| \/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc \-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[aw])|libw|lynx|m1\-w |m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo( 01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne( (c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t )|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio| pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo )|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1) )|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)| so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk )|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9 |up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx (52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|beyaz|wi(g |nc|nw)|wmlb|wonu|x700|yas\ -|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);	

   
/**3. ARKA PLAN
 ************************************************ ***/
$(document).ready( function(){

$('#bg-image').backstretch([
"https://www.imagevisit.com/images/2022/06/19/jiq-M0Oe.jpg "
, "https://www.imagevisit.com/images/2022/06/19/1617fbcd1239ada9d.jpg "
, "https://www.imagevisit.com/images/2022/06/19/2.jpg "
, "https://www.imagevisit.com/images/2022/06/19/3669a028e990bfb46.jpg "
, "https://www.imagevisit.com/images/2022/06/21/4.jpg "
, "https://www.imagevisit.com/images/2022/06/21/56b808f587ba2b0be.jpg "
, "https://www.imagevisit.com/images/2022/06/21/6.jpg "


], {süre: 7000, solma: 500});

});

$(document).ready( function(){

	// TUVAL
	işlev çağrısıCanvas (tuval) {
		
		// AYARLAR
		var ekran noktasıBölünmüş = 10000
		var hareketliHız = 0.1
		
		var viewportWidth = $(pencere).width();
		var viewportHeight = $(pencere).height();
		
		// Ekran Noktalarını Hesapla
		var nbCalculated = Math.round(viewportHeight*viewportWidth/screenpointSplitt)
		
		// YAPILANDIRMA
		var _this = bu,
		
			ctx = canvas.getContext('2d');
	
		_this.config = {
			
			yıldız: {
				renk: 'rgba(255, 255, 255, 1)'
			},
			
			astar: {
				renk: 'rgba(255, 255, 255, 1)',
				genişlik: 0.1
			},
			
			konum: {
				x: tuval genişliği * 0,5,
				y: tuval.yükseklik * 0,5
			},
			
			hız:hareketliHız,
			uzunluk: nbHesaplanmış,
			mesafe: 120,
			yarıçap: 120,
			yıldızlar: []
			
		};
		
		işlev Yıldız () {
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
	
			this.vx = (_this.config.velocity - (Math.random() * 0.3));
			this.vy = (_this.config.velocity - (Math.random() * 0.3));
	
			this.yarıçap = Math.random();
		}
	
		Yıldız.prototip = {
			oluştur: işlev(){
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
				ctx.fill();
			},
	
			canlandırın: işlev(){
				var ben;
				for(i = 0; i < _this.config.length; i++){
	
					var yıldız = _this.config.stars[i];
	
					if(yıldız.y < 0 || yıldız.y > tuval.yükseklik){
						yıldız.vx = yıldız.vx;
						star.vy = - star.vy;
					}
					else if(star.x < 0 || star.x > canvas.width){
						yıldız.vx = - yıldız.vx;
						star.vy = star.vy;
					}
					yıldız.x += yıldız.vx;
					star.y += star.vy;
				}
			},
	
			satır: işlev(){
				var uzunluk = _this.config.uzunluk,
					Ben yıldız,
					yıldız,
					Ben,
					J;
	
				for(i = 0; i < uzunluk; i++){
					for(j = 0; j < uzunluk; j++){
						iStar = _this.config.stars[i];
						jStar = _this.config.stars[j];
	
						eğer(
							(iStar.x - jStar.x) < _this.config.distance &&
							(iStar.y - jStar.y) < _this.config.distance &&
							(iStar.x - jStar.x) > - _this.config.distance &&
							(iStar.y - jStar.y) > - _this.config.distance
						) {
							eğer(
								(iStar.x - _this.config.position.x) < _this.config.radius &&
								(iStar.y - _this.config.position.y) < _this.config.radius &&
								(iStar.x - _this.config.position.x) > - _this.config.yarıçap &&
								(iStar.y - _this.config.position.y) > - _this.config.radius
							) {
								ctx.beginPath();
								ctx.moveTo(iStar.x, iStar.y);
								ctx.lineTo(jStar.x, jStar.y);
								ctx.stroke();
								ctx.closePath();
							}
						}
					}
				}
			}
		};
	
		_this.createStars = işlev () {
			var uzunluk = _this.config.uzunluk,
				yıldız,
				Ben;
	
			ctx.clearRect(0, 0, tuval.genişlik, tuval.yükseklik);
			for(i = 0; i < uzunluk; i++){
				_this.config.stars.push(yeni Yıldız());
				yıldız = _this.config.stars[i];
	
				star.create();
			}
	
			Yıldız yolu();
			star.animate();
		};
	
		_this.setCanvas = işlev () {
			canvas.width = pencere.innerWidth;
			canvas.height = pencere.innerHeight;
		};
	
		_this.setContext = işlev () {
			ctx.fillStyle = _this.config.star.color;
			ctx.strokeStyle = _this.config.line.color;
			ctx.lineWidth = _this.config.line.width;
		};
	
		_this.loop = işlev (geri arama) {
			geri çağırmak();
	
			reqAnimFrame(işlev () {
				_this.loop(fonksiyon () {
					geri çağırmak();
				});
			});
		};
	
		_this.bind = işlev () {
			$(window).on('mousemove', function(e){
				_this.config.position.x = e.pageX;
				_this.config.position.y = e.pageY;
			});
		};
	
		_this.init = işlev () {
			_this.setCanvas();
			_this.setContext();
	
			_this.loop(fonksiyon () {
				_this.createStars();
			});
	
			_this.bind();
		};
	  
	  _bunu döndür;
	}
	
    //istekAnimasyonÇerçevesi

	var reqAnimFrame = pencere.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || işlev (geri arama) {
		window.setTimeout(geri arama, 1000 / 60);
	};
	
	callCanvas($('canvas')[0]).init();	
	
	//Tuvalı Yeniden Boyutlandır
	var waitForFinalEvent = (işlev () {
	  var zamanlayıcılar = {};
	  dönüş işlevi (geri arama, ms, uniqueId) {
		eğer (!uniqueId) {
		  uniqueId = "Bunu uniqueId olmadan iki kez arama";
		}
		eğer (zamanlayıcılar[benzersizKimlik]) {
		  clearTimeout (zamanlayıcılar[benzersizKimlik]);
		}
		zamanlayıcılar[uniqueId] = setTimeout(geri arama, msn);
	  };
	})();
	
	$(window).resize(işlev ()) {
		waitForFinalEvent(işlev(){
			callCanvas($('canvas')[0]).init();	

		}, 400, "benzersiz bir dizi");
	});

});

$(document).ready( function(){
	
	// ARKA PLAN PARALAKSINI AYARLA
    $('#bg-image').css('dönüştür', 'ölçek(1.06)');
    $('#bg-image .backstretch').attr('veri derinliği', 0.1);
	$('#bg-image .backstretch').addClass('katman');
	$('#wrapper_mbYTP_bgndVideo').css('dönüştür', 'ölçek(1.06)');
    $('#bg-video').attr('veri derinliği', 0.1);
	$('#bg-video').addClass('katman');

});

/** 4. DÖNGÜ
 ************************************************ ***/
$(document).ready( function(){
	
	$('.slider').cycle({
		fx: 'scrollVert',
		zaman aşımı: 7000,
		gecikme: 1000,
		hız: 500,
		slaytlar: '.slide'
	});
	
});


/** 5. KAPLAMA
 ************************************************ ***/
$(document).ready( function(){
	
	
	//TEMEL FONKSİYONLAR
	işlev hideFrontContent() {
		$('.content-block .container').fadeOut('slow');
	}
		
	işlev showFrontContent() {
		$('.content-block .container').fadeIn('slow');
	}
	
	function hideOverlayContent() {
		$('.overlay .overlay-container').fadeOut('slow');
		$('.overlay .overlay-container').removeClass('fadeInUp');
		$('.overlay .overlay-container').addClass('fadeOutDown');
	}
		
	showOverlayContent() işlevi {
		$('.overlay .overlay-container').fadeIn('slow');
		$('.overlay .overlay-container').removeClass('fadeOutDown');
		$('.overlay .overlay-container').addClass('fadeInUp');
	}
	
	işlev showCloseButton() {
		$('.close-overlay').fadeIn('yavaş');
		$('.close-overlay').removeClass('fadeOutUpBig');
		$('.close-overlay').addClass('fadeInDownBig');
	}
	
	işlev hideCloseButton() {
		$('.close-overlay').fadeOut('slow');
		$('.close-overlay').removeClass('fadeInDownBig');
		$('.close-overlay').addClass('fadeOutUpBig');
	}
	
	işlev showContactCloseButton() {
		$('.close-contact').fadeIn('slow');
		$('.close-contact').removeClass('fadeOutUpBig');
		$('.close-contact').addClass('fadeInDownBig');
	}
	
	işlev hideContactCloseButton() {
		$('.close-contact').fadeOut('slow');
		$('.close-contact').removeClass('fadeInDownBig');
		$('.close-contact').addClass('fadeOutUpBig');
	}
	
	işlev showOverlay() {
		$('.overlay').removeClass('hideOverlay');
		$('.overlay').addClass('showOverlay');
	}
	
	function hideOverlay() {
		$('.overlay').removeClass('showOverlay');
		$('.overlay').addClass('hideOverlay');
	}
	
	showOverlayContact() işlevi {
		$('.overlay-contact').removeClass('hideOverlay');
		$('.overlay-contact').addClass('showOverlay');
	}
	
	function hideOverlayContact() {
		$('.overlay-contact').removeClass('showOverlay');
		$('.overlay-contact').addClass('hideOverlay');
	}

	function hideOverlayContactContent() {
		$('.overlay-contact .overlay-container').fadeOut('slow');
		$('.overlay-contact .overlay-container').removeClass('fadeInUp');
		$('.overlay-contact .overlay-container').addClass('fadeOutDown');
	}
		
	işlev showOverlayContactContent() {
		$('.overlay-contact .overlay-container').fadeIn('slow');
		$('.overlay-contact .overlay-container').removeClass('fadeOutDown');
		$('.overlay-contact .overlay-container').addClass('fadeInUp');
	}
	
	
   	//DURUM DEĞİŞİKLİKLERİ
	var overlayStatus = 0;
	var overlayContactStatus = 0;
	var statusforGoTo = 0;
	
	
	//FONKSİYON BAĞLANTI YERLEŞİMİ
	openOverlay() işlevi {
		
		hideFrontContent();
		
			setTimeout(işlev() {	
			showOverlay();
			showCloseButton();
			
			  setTimeout(işlev() {
				showOverlayContent();
				
				  setTimeout(işlev() {
					  bindirme Durumu = 1;
					  statusforGoTo = 1;
	
				  
				  }, 800);
			  }, 400);
		   }, 400);
		  
	}

	fonksiyon kapatOverlay() {
		
		hideCloseButton();
		hideOverlayContent();
		
		  setTimeout(işlev() {	 
			hideOverlay();
			  
			  setTimeout(işlev() {
				  showFrontContent();
				  
				  setTimeout(işlev() {
					  activeOverlays = 1;
					  statusforGoTo = 0;
	
				  
				  }, 1000);
			  }, 400);
		  }, 600);
		  
	}
	
	//FONKSİYON BAĞLANTI YERLEŞİMİ KONTAK
	openOverlayContact() işlevi {
		
		hideCloseButton();
		hideOverlayContent();
		
			setTimeout(işlev() {
			showOverlayContact();
			showContactCloseButton();
			
				setTimeout(işlev() {
					showOverlayContactContent();
						  
					setTimeout(işlev() {
						bindirmeContactStatus = 1;
	  
					}, 1000);
				}, 400);
			}, 200);
		  
	}
	
	closeOverlayContact() işlevi {
		
		hideContactCloseButton();
		hideOverlayContactContent();
		showCloseButton();	
			setTimeout(işlev() {	 
				hideOverlayContact();
				showOverlayContent();
								  
				  setTimeout(işlev() {
					  bindirme Durumu = 1;
					  statusforGoTo = 1;
	
				  
				  }, 1000); 	
			  }, 400);		
		  
	}
	
	
	
	
	//ÇAĞRI FONKSİYONLARI YERLEŞİMİ
	$('.open-overlay').click(function() {
		
		openOverlay();
		  			  
	});	
	
	
	$('.close-overlay').click(function() {
		
		kapatOverlay();
		  				  
	});
	

	$('.overlay').bind('fare tekerleği', function(e) {
		if(e.originalEvent.wheelDelta / -120 > 0) {
			//uyarı('aşağı');
		} başka {
			
				processfinshedOverlay1();
				function processfinshedOverlay1() {
				  if(overlayStatus == 1) {
					  kapatOverlay();
					  bindirme Durumu = 0;
					  statusforGoTo = 0;
					  
				  }başka {}
				}
		  	
		}

	});


	$('#front-page').bind('mousewheel', function(e) {
		if(e.originalEvent.wheelDelta / 120 > 0) {
			//uyarı('yukarı');
		} başka {
			
		    preloadprocessfinshed();
			işlev preloadprocessfinshed() {
			  if(activeOverlays == 1) {
				  openOverlay();
				  activeOverlays = 0;
				  
			  }başka {}
			}
		  	
		}

	});
	
	
	
	//ÇAĞRI FONKSİYONU YERLEŞİMİ İLETİŞİM
	$('.open-contact').click(function() {
		
		 openOverlayContact();
		  				  
	});
	
	$('.close-contact').click(function() {
		
		closeOverlayContact();
		  				  
	});
	
	
	$('.overlay').bind('fare tekerleği', function(e) {
		if(e.originalEvent.wheelDelta / 120 > 0) {
			//uyarı('yukarı');
		} başka {
			
			processfinshedGoTo();
			işlev processfinshedGoTo() {
			  if(statusforGoTo == 1) {
				  openOverlayContact();
				  statusforGoTo = 0;
				  bindirme Durumu = 0;
				  
			  }başka {}
			}
		  	
		}

	});
	
	$('.overlay-contact').bind('mousewheel', function(e) {
		if(e.originalEvent.wheelDelta / -120 > 0) {
			//uyarı('aşağı');
		} başka {
			
		  	processfinshedOverlayContact1();
			function processfinshedOverlayContact1() {
			  if(overlayContactStatus == 1) {
				  closeOverlayContact();
				  bindirmeContactStatus = 0;
				  
			  }başka {}
			}
			
		}

	});

	
});

/** 6. AJAX ABONE OL
 ************************************************ ***/
$(document).ready( function(){
	
	$('.subscribe-form').submit(function() {
		  var postdata = $('.subscribe-form').serialize();
		  $.ajax({
			  yazın: 'GÖNDERİ',
			  url: 'varlıklar/abone olma.php',
			  veri: son veri,
			  veriTürü: 'json',
			  başarı: function(json) {
				  if(json.valid == 0) {
					  $('.status-message').html(json.error);
					  $('.status-message').fadeIn('yavaş');
					  $('.status-message').css('margin-top','5px');
				  }
				  başka {
					  $("giriş, metin alanı").val('');
					  $('.subscribe-form button').prop('disabled',true);
					  $('.status-message').html(json.message);
					  $('.status-message').fadeIn('yavaş');
					  $('.status-message').css('margin-top','5px');
				  }
			  }
			});
			yanlış dönüş;
		});
		
});


/** 7. AJAX İLETİŞİMİ
 ************************************************ ***/
$(document).ready( function(){
	
	$('.contact-form').submit(function() {
	
			$('.contact-form .nameLabel').html('Ad');
			$('.contact-form .emailLabel').html('Email');
			$('.contact-form .messageLabel').html('Mesaj');
	
			var postdata = $('.contact-form').serialize();
			$.ajax({
				yazın: 'GÖNDERİ',
				url: 'varlıklar/sendmail.php',
				veri: son veri,
				veriTürü: 'json',
				başarı: function(json) {
					if(json.nameMessage != '') {
						$('.contact-form .nameLabel').append(' - <span class="status"> ' + json.nameMessage + '</span>');
					}
					if(json.emailMessage != '') {
						$('.contact-form formu .emailLabel').append(' - <span class="status"> ' + json.emailMessage + '</span>');
					}
					if(json.messageMessage != '') {
						$('.contact-form .messageLabel').append(' - <span class="status"> ' + json.messageMessage + '</span>');
					}
					if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
							$('.contact-form .status-message-contact').addClass('animated fadeIn').html('E-POSTA BAŞARIYLA GÖNDERİLDİ.');
							$('input[type="text"],textarea').val('');
					}
				}
			});
			yanlış dönüş;
		});	
			
});