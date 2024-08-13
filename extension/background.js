chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'listElements') {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        function: listDataTestids
      });
    }
  });
  
  function listDataTestids() {
    const elements = document.querySelectorAll('[data-testid]');
    const results = [];
  
    elements.forEach(element => {
      results.push({
        selector: element.tagName + '[data-testid="' + element.dataset.testid + '"]',
        value: element.dataset.testid
      });
    });
  
    chrome.runtime.sendMessage({ action: 'displayResults', data: results });
  }
  