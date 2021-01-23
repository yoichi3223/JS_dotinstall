"use strict";

{
  const d = [2019, 11, 14];
  console.log(d.join("/"));

  const t = "17:08:24";
  const [hour, minite, second] = t.split(":");
  console.log(hour);
  console.log(minite);
  console.log(second);
  // const str = "hello";
  // console.log(str.length);

  // console.log(str.substring(2, 4));
  // console.log(str[3]);

  // let x = [1, 2];
  // let y = [...x];
  // x[0] = 5;

  // console.log(x);
  // console.log(y);

  // const point = {
  //   x: 100,
  //   y: 180,
  // };

  // const keys = Object.keys(point);
  // // console.log(keys);

  // keys.forEach((key) => {
  //   console.log(`key:${key} Value:${point[key]}`);
  // });

  // const points = [
  //   { x: 30, y: 20 },
  //   { x: 30, y: 20 },
  //   { x: 30, y: 20 },
  // ];
  // console.log(points[1].y);

  // const oterProps = {
  //   r: 4,
  //   color: "red",
  // };

  // const point = { x: 100, y: 180, ...oterProps };
  // console.log(point);

  // const { x, y, ...others } = point;
  // console.log(x);
  // console.log(y);
  // console.log(others);
  // const numbers = [1, 4, 7, 8, 10];
  // // const evenNumbers = numbers.filter((number) => {
  // //   if (number % 2 === 0) {
  // //     return true;
  // //   } else {
  // //     return false;
  // //   }
  // // });
  // const evenNumbers = numbers.filter((number) => number % 2 === 0);
  // console.log(evenNumbers);
  // const prices = [180, 190, 200];
  // const price1 = prices.map(price => price + 20);
  // console.log(price1);
  // // const oterScores = [10, 20, 50];
  // const scores = [80, 90, 40, 70, 100];
  // scores.forEach((score, index) => {
  //   console.log(`Score${index}:${score},`);
  // });
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
  // for (let i = 0; i < scores.length; i++) {
  //   console.log(`${i}:${scores[i]}`);
  // }
}
