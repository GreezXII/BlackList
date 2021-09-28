browser.messageDisplay.onMessageDisplayed.addListener((tab, message) => {
    let output = "Message displayed in tab " + tab.id + ":" + message.author;
    console.log(output);
  });