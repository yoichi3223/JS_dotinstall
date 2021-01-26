"use strict";

{
  class Post {
    constructor(text, likeCount) {
      this.text = text;
      this.likeCount = likeCount;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }
    static showInfo() {
      console.log("Post class version 1.0");
    }
  }
  let posts = [
    new Post("JavaScript楽しい", 7),
    new Post("プログラミング楽しい", 8),
  ];
  Post.showInfo();
  posts[0].show();
  posts[1].show();
  // const posts = [
  //   {
  //     text: "JavaScriptの勉強中・・・",
  //     likeCount: 0,
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}いいね`);
  //     },
  //   },
  //   {
  //     text: "プログラミング楽しい",
  //     likeCount: 0,
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}いいね`);
  //     },
  //   },
  // ];
  // function show(post) {
  //   console.log(`${post.text} - ${post.likeCount}いいね`);
  // }
  posts[0].show();
  posts[1].show();
  // const name = 8;

  // try {
  //   console.log(name.toUpperCase());
  // } catch (e) {
  //   console.log(e);
  // }

  // console.log("Finish");
  // let i = 0;
  // function showTime() {
  //   console.log(new Date());
  //   // i++;
  //   // if (i > 2) {
  //   //   clearInterval(intervalid);
  //   const timeoutid = setTimeout(showTime, 1000);
  //   i++;
  //   if (i > 2) {
  //     clearTimeout(timeoutid);
  //   }
  // }
  // showTime();
  // const intervalid = setInterval(showTime, 1000);
  // alert("hello");
  // const answer = confirm("削除しますか？");
  // if (answer) {
  //   console.log("削除しました");
  // } else {
  //   console.log("キャンセルしました");
  // }
  // const d = new Date(2021, 10);
  // d.setHours(10, 20, 30);
  // d.setDate(31);
  // d.setDate(d.getDate() + 3);
  // console.log(d);
  // const d = new Date();
  // console.log(d);
  // console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`);
  // const scores = [10, 3, 9];
  // let sum = 0;
  // scores.forEach((score) => {
  //   sum += score;
  // });
  // const avg = sum / scores.length;
  // // console.log(sum);
  // console.log(Math.floor(avg));
  // console.log(Math.ceil(avg));
  // console.log(Math.round(avg));
  // console.log(avg.toFixed(3));
  // console.log(Math.floor(Math.random() * 6) + 1);
  // const d = [2019, 11, 14];
  // console.log(d.join("/"));
  // const t = "17:08:24";
  // const [hour, minite, second] = t.split(":");
  // console.log(hour);
  // console.log(minite);
  // console.log(second);
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
