window.onload = () => {
	console.log("===AD CLEANMER===");

	findTagToId();
	findTagToClass();
	removeTagToName();
};
				
const tagIds = [
	/* asiatoday */
	'wp_adbn_root', 'scrollDiv', 'ad_optima_wrap', 'tmpILSA_Container', 'wingBnLeft',
	'wingBnRight', 'scrolling_banner', 'scrolling_left_banner', 'inbnetDSP_B', 'section_aside',
	/* dt.co.kr */
	'topad', 'top_ad', 'noticeAd_pc_wrap', 'bnr', 'right_skyWingBanner',
	/* newsway */
	'aswift_0_expand', 'aswift_1_expand',
	/* viva100 */
	'dablewidget_GokvjEXv', 'viewElpVideo', 'I_viva100_bottomcenter_580_400',
	/* nocutnews */
	'pnlRightArea',
	/* zdnet */
	'ifgc', 'main_right_Floating_banner', 'mtMenu'
];

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
	tagIds.forEach(id => removeTagToId(id));
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

	/* newsway rightList */
	removeTagToClass('rightList');

	/* newsway text_ad */
	removeTagToClass('text_ad');

	/* newsway bannerad_02 */
	removeTagToClass('bannerad_02');

	/* viva100 con_right */
	removeTagToClass('con_right')
	
	/* viva100 con_right */
	removeTagToClass('con_right2');

	/* viva100 ads_bottom */
	removeTagToClass('ads_bottom');

	/* nocutnews ad_sky */
	removeTagToClass('ad_sky');

	/* nocutnews ad_sky */
	removeTagToClass('ad_sky2');

	/* nocutnews ad_top1 */
	removeTagToClass('ad_top1');

	/* nocutnews head_adr2 */
	removeTagToClass('head_adr2');

	/* zdnet view_ad */
	removeTagToClass('view_ad');

	/* zdnet scroll_ad */
	removeTagToClass('scroll_ad');

	/* zdnet bn_box */
	removeTagToClass('bn_box');
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
