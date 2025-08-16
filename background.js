chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const selectedText = window.getSelection().toString();
      if (!selectedText) {
        return;
      }

      const synth = window.speechSynthesis;
      const utterThis = new SpeechSynthesisUtterance(selectedText);
      utterThis.lang = 'ja-JP';
      utterThis.pitch = 1;
      utterThis.rate = 1;
      synth.speak(utterThis);
    }
  });
});
