//refactor of spinner1.js
const spinnerArr = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r|', '\r/', '\r-', '\r\\', '\r|', '\n']
const spinner = (arr) => {
  let timer = 0;
  for (let i = 0; i < arr.length; i++) {
    let spinnerSpaces = '';
    if (i === (arr.length - 1)) {
      spinnerSpaces = arr[i];
    } else {
      spinnerSpaces = `${arr[i]}   `;
    }
    setTimeout(() => {
      process.stdout.write(spinnerSpaces);
    }, timer);
    timer += 200;
  }
};