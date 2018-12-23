window.onload = () => {
	console.log("===AD CLEANMER===");

	findTagToId();
	findTagToClass();
	removeTagToName();
};

/**
	Remove Tag
*/
removeTag = (el) => {
	el && el.remove();
}

/**
	Find Tag to Id
*/
findTagToId = () => {
	/* asiatoday wp_adbn_root */
	removeTagToId('wp_adbn_root');
	
	/* asiatoday scrollDiv */
	removeTagToId('scrollDiv');

	/* asiatoday ad_optima_wrap */
	removeTagToId('ad_optima_wrap');

	/* asiatoday tmpILSA_Container */
	removeTagToId('tmpILSA_Container');

	/* asiatoday wingBnLeft */
	removeTagToId('wingBnLeft');

	/* asiatoday wingBnRight */
	removeTagToId('wingBnRight');

	/* asiatoday scrolling_banner */
	removeTagToId('scrolling_banner');

	/* asiatoday scrolling_left_banner */
	removeTagToId('scrolling_left_banner');

	/* dt.co.kr topad */
	removeTagToId('topad');

	/* dt.co.kr top_ad */
	removeTagToId('top_ad');

	/* dt.co.kr top_ad */
	removeTagToId('noticeAd_pc_wrap');

	/* dt.co.kr top_ad */
	removeTagToId('bnr');

	/* dt.co.kr right_skyWingBanner */
	removeTagToId('right_skyWingBanner');
}

/**
	Remove with id.
 */
removeTagToId = (id) => {
	const el = document.getElementById(id);
	removeTag(el);
};

findTagToClass = () => {
	removeTagToClass('ad-container')

	/* hankookilbo ad container */
	removeTagToClass('ad-container');

	/* asiatoday gad_wrap */
	removeTagToClass('gad_wrap');

	/* asiatoday gad_wrap */
	removeTagToClass('ad_box');

	/* asiatoday gad_wrap */
	removeTagToClass('iwmads-wrapper');

	/* asiatoday ixx-popup-wrap */
	removeTagToClass('ixx-popup-wrap');

	/* asiatoday link_site */
	removeTagToClass('link_site');

	/* asiatoday mt15 */
	removeTagToClass('mt15');

	/* asiatoday mb08 */
	removeTagToClass('mb08');

	/* dt.co.kr trc_rbox_container */
	removeTagToClass('trc_rbox_container');

	/* dt.co.kr trc_related_container */
	removeTagToClass('trc_related_container');
};

/**
	Remove with class.
 */
removeTagToClass = (className) => {
	const el = document.getElementsByClassName(className);
	Array.from(el).forEach(el => el.remove());
};

/**
	Remove with Tag Name.
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

		/* dt.co.kr io1.innorame.com */
		if (el.src.indexOf('io1.innorame.com') > -1) {
			el.remove();
		}

		/* dt.co.kr /ads/ */
		if (el.src.indexOf('/ads/') > -1) {
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

	const elImage = document.getElementsByTagName('img');
	Array.from(elImage).forEach(el => {
		/* dt.co.kr banner */
		if (el.src.indexOf('banner') > -1) {
			el.remove();
		}
	});
};
