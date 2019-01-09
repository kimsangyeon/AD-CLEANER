
window.onload = () => {
	const elAdCleanBtn = document.getElementById("ad-clean-btn");
	elAdCleanBtn.onclick = cleanAD;
}

function cleanAD() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {message: "AD_CLEAN"}, function(response) {
			alert(response.REMOVE_TAG_COUNT);
		});
	});
}