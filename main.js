"use strict";

{
  const oterScores = [10, 20, 50];
  const scores = [80, 90, 40, 70, 100, ...oterScores];
  // const [a, b, ...oters] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(oters);
  // let x = 30;
  // let y = 70;

  // [x, y] = [y, x];
  // console.log(x);
  // console.log(y);

  // function sum(a, b, c) {
  //   console.log(a + b + c);
  // }
  // scores.splice(1, 1, 1000, 2000);
  // scores.push(60, 50);
  // scores.unshift(777);
  // scores.pop();
  // console.log(scores[1]);
  // scores[1] = 100;
  // console.log(scores[1]);
  // console.log(scores.length);
  // console.log(`scores:${scores[0]}`);
  // let i = 0;
  // while (i < scores.length) {
  //   console.log(scores[i]);
  //   i++;
  // }

  for (let i = 0; i < scores.length; i++) {
    console.log(`${i}:${scores[i]}`);
  }
}
