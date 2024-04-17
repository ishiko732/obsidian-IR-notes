function w() {
  for (var i = 1; i <= 5; i++) {
    (function (i: number) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}

function es6() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

w();
es6();