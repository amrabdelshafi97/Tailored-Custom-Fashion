let curEvent = '';

function setProductImg(src) {
  chrome.storage.local.set({ product: src });
}

function setPersonalImage(src) {
  chrome.storage.local.set({ presonal: src });
}

function handleImageHover(event) {
  const imageElement = event.target;

  imageElement.style.border = '2px solid blue';
  imageElement.style.cursor = 'pointer';

  // Remove the border on mouseout
  imageElement.addEventListener('mouseout', () => {
    imageElement.style.border = 'none';
  });

  imageElement.addEventListener('click', () => {
    if (curEvent === 'setProductImage') {
      setProductImg(imageElement.src);
    } else if (curEvent === 'setPersonalImage') {
      setPersonalImage(imageElement.src);
    }
  });
}

document.addEventListener('mouseover', function (event) {
  if (event.target.tagName === 'IMG') {
    handleImageHover(event);
  }
});

chrome.runtime.onMessage.addListener(function (message) {
  if (message.action === 'freeze') {
    const elementsWithListeners = document.querySelectorAll('*');
    elementsWithListeners.forEach((element) => {
      const clone = element.cloneNode(true);
      element.parentNode.replaceChild(clone, element);
    });
    curEvent = message.event;
    if (curEvent === 'merge') {
      chrome.storage.local.get('product').then(
        (item) => {
          console.log(item.product);
        },
        (error) => {
          console.log(error);
        }
      );
      chrome.storage.local.get('presonal').then(
        (item) => {
          console.log(item.presonal);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
});
