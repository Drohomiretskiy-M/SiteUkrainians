 function showSaidebar() {
 	document.getElementById('login-fb').style.display = 'none';
 	document.getElementById('login-vk').style.display = 'block';
 	document.getElementById('other-reg').style.display = 'none';
 	document.getElementById('email-reg').style.display = 'block';
 	document.getElementById('saidebar').style.height = '350px';
 }

 function authorization() {
 	document.getElementById('saidebar-log').style.display = 'none';
 	document.getElementById('saidebar-log2').style.display = 'block';

 }

 function aboutContent() {
 	document.getElementById('main-page').style.display = 'none';
 	document.getElementById('contact-page').style.display = 'none';
 	document.getElementById('confid-page').style.display = 'none';
 	document.getElementById('about-page').style.display = 'block';

 }

 function contactContent() {
 	document.getElementById('main-page').style.display = 'none';
 	document.getElementById('about-page').style.display = 'none';
 	document.getElementById('confid-page').style.display = 'none';
 	document.getElementById('contact-page').style.display = 'block';

 }

 function contactConfid() {
 	document.getElementById('main-page').style.display = 'none';
 	document.getElementById('about-page').style.display = 'none';
 	document.getElementById('contact-page').style.display = 'none';
 	document.getElementById('confid-page').style.display = 'block';

 }
