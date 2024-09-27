

// This event listener runs when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    console.log("TabOrganizer has been installed or updated.");
});

// Example: Listener for tab updates (optional, can be expanded later)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        console.log(`Tab updated: ${tab.url}`);
    }
});

// Example: Listener for when a tab is closed (optional)
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    console.log(`Tab closed: ${tabId}`);
});
