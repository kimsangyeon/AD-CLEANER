const {tagId, tagClass, iframeSrc} = consts;

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
		if (iframeSrc.indexOf(el.src) > -1) {
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
