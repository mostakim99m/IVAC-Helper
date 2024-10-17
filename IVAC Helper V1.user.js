// ==UserScript==
// @name        IVAC Helper V1
// @description Close notice, click ok, allow paste & enable pay button by Mostakim
// @match       *://payment.ivacbd.com/*
// @grant       GM_addStyle
// @version     1.0
// @author      by Mostakim
// ==/UserScript==


GM_addStyle(`
    .emergencyNoticeCloseBtn {display: block;}
    .col-md-7.text-right>:nth-child(1){position:fixed;color:#c300e3;font-size:large}
`);

(function() {
	let err504 = document.documentElement.outerHTML.includes('Gateway Time-out');
	let err502 = document.documentElement.outerHTML.includes('Bad Gateway');
	let err500 = document.documentElement.outerHTML.includes('Server Error');
	if (err504 || err502 || err500 == true) {
		location.reload();
	}
})();

(function() {
	document.addEventListener('paste', function(e) {
		e.stopImmediatePropagation();
		return true;
	}, true);
})();

var evt = document.createEvent("HTMLEvents");
evt.initEvent("click", true, true);


window.addEventListener('load', function() {

	xbtn = setInterval(function() {

		(function exists() {
			if (!document.querySelector("#emergencyNoticeCloseBtn")) {
				return setTimeout(exists);
			}
			document.querySelector("#emergencyNoticeCloseBtn").dispatchEvent(evt);
			clearInterval(xbtn);
		})();
	}, 300);

	(function exists() {
		if (!document.querySelector('.modal-close.btn-secondary.btn-space.btn-sm.btn')) {
			return setTimeout(exists);
		}
		document.querySelector('.modal-close.btn-secondary.btn-space.btn-sm.btn').dispatchEvent(evt);
	})();

	(function exists() {
		if (!document.querySelector('div:nth-child(8) > div > button')) {
			return setTimeout(exists);
		}
		document.querySelector("div:nth-child(8) > div > button").removeAttribute('disabled');
	})();

});


(function() {
	const p1 = document.querySelector('.col-md-7.text-right');
	const n1 = document.createElement("h3");
	n1.innerHTML = 'IVAC Helper by Mostakim Alam';
	p1.insertBefore(n1, p1.firstChild);
})();