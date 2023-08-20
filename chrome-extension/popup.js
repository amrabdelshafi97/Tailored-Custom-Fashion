const onlineImgBtn = document.getElementById('online-img-btn');
const personalImgBtn = document.getElementById('personal-img-btn');
const mergeImg = document.getElementById('merge-btn');

onlineImgBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'freeze',
      event: 'setProductImage',
    });
  });
});

personalImgBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'freeze',
      event: 'setPersonalImage',
    });
  });
});

mergeImg.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'freeze',
      event: 'merge',
    });
  });
});
