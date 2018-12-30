window.onload = () => {
	console.log("===AD CLEANMER===");

	findTagToId();
	findTagToClass();
	removeTagToName();
};
				
const tagId = [
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
const tagClass = [
	/* hankookilbo */
	'ad-container',
	/* asiatoday */
	'gad_wrap', 'ad_box', 'iwmads-wrapper', 'ixx-popup-wrap', 'link_site', 'mt15', 'mb08',
	/* dt.co.kr */
	'trc_rbox_container', 'trc_related_container',
	/* newsway */
	'rightList', 'text_ad', 'bannerad_02',
	/* viva100 */
	'con_right', 'con_right2', 'ads_bottom',
	/* nocutnews */
	'ad_sky', 'ad_sky2', 'ad_top1', 'head_adr2',
	/* zdnet */
	'view_ad', 'scroll_ad', 'bn_box'
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
	tagId.forEach(id => removeTagToId(id));
}

/**
	Remove with id.
 */
removeTagToId = (id) => {
	const el = document.getElementById(id);
	removeTag(el);
};

/**
	Find Tag to Class
*/
findTagToClass = () => {
	tagClass.forEach(cl => removeTagToClass(cl));

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
