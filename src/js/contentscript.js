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

	/* asiatoday wingBnLeft */
	const elAdWingBnLeft = document.getElementById('wingBnLeft');
	elAdWingBnLeft.remove();

	/* asiatoday wingBnRight */
	const elAdWingBnRight = document.getElementById('wingBnRight');
	elAdWingBnRight.remove();

	/* asiatoday scrolling_banner */
	const elAdScrollBanner = document.getElementById('scrolling_banner');
	elAdScrollBanner.remove();

	/* asiatoday scrolling_left_banner */
	const elAdScrollLeftBanner = document.getElementById('scrolling_left_banner');
	elAdScrollLeftBanner.remove();
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

	/* asiatoday link_site */
	const elAdLinkSite = document.getElementsByClassName('link_site');
	Array.from(elAdLinkSite).forEach(el => el.remove());

	/* asiatoday mt15 */
	const elAdMt15 = document.getElementsByClassName('mt15');
	Array.from(elAdMt15).forEach(el => el.remove());

	/* asiatoday mb08 */
	const elAdMb08 = document.getElementsByClassName('mb08');
	Array.from(elAdMb08).forEach(el => el.remove());
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

		/* asiatoday ad.adinc.k */
		if (el.src.indexOf('ad.adinc.kr') > -1) {
			el.remove();
		}

		/* asiatoday was.livere.me */
		if (el.src.indexOf('was.livere.me') > -1) {
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

	const elEmbed = document.getElementsByTagName('embed');
	Array.from(elEmbed).forEach(el => {
		/* asiatoday adver */
		if (el.className.indexOf('adver') > -1) {
			el.remove();
		}
	});

};
