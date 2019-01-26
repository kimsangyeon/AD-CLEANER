const {TAG_ID, TAG_CLASS, IFRAME_SRC} = consts;

let removeTagCount = 0;

window.onload = () => {
    console.log("===AD CLEANMER===");
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message == "AD_CLEAN") {
        findTagToId();
        findTagToClass();
        removeTagToName();
        
        sendResponse({REMOVE_TAG_COUNT: removeTagCount});
    }
});

/**
    Remove Tag
*/
removeTag = (el) => {
    if (el) {
        el.remove();
        removeTagCount++;
    }
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
    Array.from(el).forEach(el => removeTag(el));
};

/**
    Remove with Tag Name.
 */
removeTagToName = () => {
    const elIframe = document.getElementsByTagName('iframe');
    Array.from(elIframe).forEach(el => {
        if (IFRAME_SRC.indexOf(el.src) > -1) {
            removeTag(el);
        }
    });

    const elIns = document.getElementsByTagName('ins');
    Array.from(elIns).forEach(el => {
        /* asiatoday adsbyadop */
        if (el.className.indexOf('adsbyadop') > -1) {
            removeTag(el);
        }
    });

    const elEmbed = document.getElementsByTagName('embed');
    Array.from(elEmbed).forEach(el => {
        /* asiatoday adver */
        if (el.className.indexOf('adver') > -1) {
            removeTag(el);
        }
    });

    const elImage = document.getElementsByTagName('img');
    Array.from(elImage).forEach(el => {
        /* dt.co.kr banner */
        if (el.src.indexOf('banner') > -1) {
            removeTag(el);
        }
    });
};