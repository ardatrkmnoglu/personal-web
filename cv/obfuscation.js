const obfuscationTable = {
  zero: 0, oh: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9,
  '[dot]': '.', '[at]': '@', ' ': ''
};

function deobfusticate() {
  const elems = document.getElementsByClassName('obfusticated');

  for (const elem of elems) {
    let text = elem.innerText;

    for (const [k, v] of Object.entries(obfuscationTable))
      text = text.replaceAll(k, v);

    let href = text.replaceAll(',', '');

    if (elem.classList.contains('tel'))
      href = 'tel:' + href;

    if (elem.classList.contains('email'))
      href = 'mailto:' + href;

    text = text.replaceAll(',', ' ');

    elem.innerText = text;
    elem.href = href;
  }
}

addEventListener("keydown", function (event) {
    if (event.shiftKey) {
        deobfusticate();
    }
    if (event.ctrlKey && (event.key === 'p' || event.key === 'P')) {
        deobfusticate();
    }
})
