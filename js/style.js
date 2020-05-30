let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 150, 150);

function onBorderToggle() {
  const state = document.getElementById('border-toggler').checked;
  const allElements = document.querySelectorAll('*');
  if (!state) {
    for (const el of allElements) {
      el.classList.remove('solid-border');
    }
    return;
  }
  for (const el of allElements) {
    el.classList.add('solid-border');
  }
  return;
}

function detectBrowser() {
  // Opera 8.0+
  let isOpera =
    (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  let isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  let isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

  // Internet Explorer 6-11
  let isIE = /*@cc_on!@*/ false || !!document.documentMode;

  // Edge 20+
  let isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 79
  let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  // Edge (based on chromium) detection
  let isEdgeChromium = isChrome && navigator.userAgent.indexOf('Edg') != -1;

  // Blink engine detection
  let isBlink = (isChrome || isOpera) && !!window.CSS;

  if (isOpera) {
    return 'Opera';
  }

  if (isFirefox) {
    return 'FireFox';
  }

  if (isSafari) {
    return 'Safari';
  }

  if (isIE) {
    return 'IE';
  }

  if (isEdge) {
    return 'Edge';
  }

  if (isChrome) {
    return 'Chrome';
  }

  if (isEdgeChromium) {
    return 'EdgeChromium';
  }

  if (isBlink) {
    return 'Blink';
  }
}
