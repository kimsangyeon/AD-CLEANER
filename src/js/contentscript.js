window.onload = () => {
	console.log("===AD CLEANMER===");

	removeTagToId();
	removeTagToClass();
	removeTagToName();
};

/**
	Find Tag to remove with id.
 */
removeTagToId = () => {
	/* asiatoday wp_adbn_root */
	const elAdbnRoot = document.getElementById('wp_adbn_root');
	elAdbnRoot.remove();

	/* asiatoday sliderAdText */
	const elAdText = document.getElementById('sliderAdText');
	elAdText.closest('#scrollDiv').remove();

	/* asiatoday ad_optima_wrap */
	const elAdOptima = document.getElementById('ad_optima_wrap');
	elAdOptima.remove();

	/* asiatoday tmpILSA_Container */
	const elAdtmpILSA = document.getElementById('tmpILSA_Container');
	elAdtmpILSA.remove();
};

/**
	Find Tag to remove with class.
 */
removeTagToClass = () => {
/* hankookilbo ad container */
	const elAdContainer = document.getElementsByClassName('ad-container');
	Array.from(elAdContainer).forEach(el => el.remove());

	/* asiatoday gad_wrap */
	const elAdWap = document.getElementsByClassName('gad_wrap');
	Array.from(elAdWap).forEach(el => el.remove());

	/* asiatoday gad_wrap */
	const elAdBox = document.getElementsByClassName('ad_box');
	Array.from(elAdBox).forEach(el => el.remove());

	/* asiatoday gad_wrap */
	const elAdIwmads = document.getElementsByClassName('iwmads-wrapper');
	Array.from(elAdIwmads).forEach(el => el.remove());

	/* asiatoday ixx-popup-wrap */
	const elAdIxxpopup = document.getElementsByClassName('ixx-popup-wrap');
	Array.from(elAdIxxpopup).forEach(el => el.remove());
};

/**
	Find Tag to remove with Tag Name.
 */
removeTagToName = () => {
	const elIframe = document.getElementsByTagName('iframe');
	Array.from(elIframe).forEach(el => {
		/* kwangju pub.adpnut.com */
		if (el.src.indexOf('pub.adpnut.com') > -1) {
			el.remove();
		}

		/* asiatoday compass.adop.cc */
		if (el.src.indexOf('compass.adop.cc') > -1) {
			el.remove();
		}

		/* asiatoday ad.idnad.co.kr */
		if (el.src.indexOf('ad.idnad.co.kr') > -1) {
			el.remove();
		}

		/* asiatoday adex.ednplus.com */
		if (el.src.indexOf('adex.ednplus.com') > -1) {
			el.remove();
		}

		/* asiatoday adgrp */
		if (el.src.indexOf('adgrp') > -1) {
			el.remove();
		}

		/* asiatoday dsp.adzon.net */
		if (el.src.indexOf('dsp.adzon.net') > -1) {
			el.remove();
		}
	});

	const elIns = document.getElementsByTagName('ins');
	Array.from(elIns).forEach(el => {
		/* asiatoday adsbyadop */
		if (el.className.indexOf('adsbyadop') > -1) {
			el.remove();
		}
	});
};
