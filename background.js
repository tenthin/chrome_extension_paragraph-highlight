console.log("extension is up and running printing from background script")
chrome.action.onClicked.addListener(buttonClicked);
function buttonClicked(tab) {
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id,msg);
}