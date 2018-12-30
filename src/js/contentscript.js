const {TAG_ID, TAG_CLASS, IFRAME_SRC} = consts;

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
	TAG_ID.forEach(id => removeTagToId(id));
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
	TAG_CLASS.forEach(cl => removeTagToClass(cl));

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
		if (IFRAME_SRC.indexOf(el.src) > -1) {
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
