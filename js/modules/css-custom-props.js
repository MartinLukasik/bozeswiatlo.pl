import debounce from 'lodash.debounce';

function setCssProp() {
  if (!window.screenY) {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    );
  }
}

document.documentElement.style.setProperty(
  '--vh',
  `${window.innerHeight * 0.01}px`
);

window.addEventListener(
  'resize',
  debounce(setCssProp, 500, { leading: false, trailing: true })
);
