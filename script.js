// // переменные для поиска элементов ДОМ
// // модалки
// var loginLink = document.querySelector('.login-link'); 
// var mapLink = document.querySelector('.how-find');
// var loginPopup = document.querySelector('.modal-login');
// var mapPopup = document.querySelector('.modal-map')
// var closeModalLogin = document.querySelector(".modal-login-close");
// var closeModalMap = document.querySelector(".modal-map-close");

// // form 

// // функция для открытия/закрытия модалки 
// function modalOpenClose(watHappens,watOpen,watClose,focus) { 
// 	watHappens.addEventListener('click', function (event) {
// 		event.preventDefault();
// 		watOpen.classList.add('modal-show');
// 		watClose.classList.add('modal-close');
// 		login.focus();
// 	});

// 	if (watOpen == loginPopup) {
// 	var form = watOpen.querySelector('.login-form');
// 	var login = watOpen.querySelector('[name=login]');
// 	var password = watOpen.querySelector('[name=password]');
// 	var loginButton = watOpen.querySelector('[type=submit]');

// 	form.addEventListener('submit', function(event) {

		
// 			if (!login.value || !password.value) {
// 				event.preventDefault();
// 				watOpen.classList.remove("modal-login-err");
//             	watOpen.offsetWidth = watOpen.offsetWidth;
//             	watOpen.classList.add("modal-login-err");
//             	if (login.value) {
//             		password.focus();
//             	} else {
//             		login.focus();
//             	}
// 			}
	
// 	});}
	
// 	watClose.addEventListener('click', function (event) {
// 		event.preventDefault();
// 		watOpen.classList.remove('modal-show');
// 		watClose.classList.remove('modal-close');
// 		watOpen.classList.remove('modal-login-err');
// 	});

// 	window.addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 27) {
//         evt.preventDefault();
//         if (watOpen.classList.contains("modal-show") || 
//         	watClose.classList.contains('modal-close')) {
//             watOpen.classList.remove("modal-show");
//         	watClose.classList.remove('modal-close');
// 			watOpen.classList.remove('modal-login-err');
//         }
//     }
// 	});
// }

// modalOpenClose(loginLink,loginPopup,closeModalLogin); 	// модалка входа
// modalOpenClose(mapLink,mapPopup,closeModalMap);			// модалка карты



