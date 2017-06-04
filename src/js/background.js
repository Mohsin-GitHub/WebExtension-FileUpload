function onCreated(tab) {
    console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
    console.log(`Error: ${error}`);
}

//if (browser.platform == "CH") {
//    chrome.browserAction.onClicked.addListener(function () {
//        var creating = browser.tabs.create({
//            url: "./index.html"
//        });
//        creating.then(onCreated, onError);
//    });
//}

//if (browser.platform == "FF") {
    browser.browserAction.onClicked.addListener(function () {
        var creating = browser.tabs.create({
            url: "index.html"
        });
        creating.then(onCreated, onError);
    });
//}
