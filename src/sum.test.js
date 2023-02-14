const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('プログラムコメントの練習', () => {
//エラーになる為、実行させないようにコメントにする。
/*
  expect(sum(1, 2)).toBe(4);
*/
});

test('constの練習', () => {
const bookTitle = "本";
const bookPrice = 3000;

expect(bookTitle).toBe("本");
expect(bookPrice).toBe(3000);
});

test('letの練習', () => {
let bookTitle;
expect(bookTitle).toBe(undefined);
let bookPrice = 3000;

bookTitle="本";
expect(bookTitle).toBe("本");
expect(bookPrice).toBe(3000);

bookPrice=100;
expect(bookPrice).toBe(100);
});

test('console.logの練習', () => {
  const total=42+42;
  console.log(total); // => 84

  const value = "値";
  console.log(value); 
  
});

test('文字列の練習', () => {
 const str1="もじ";
 const str2='もじ';

 expect(str1).toBe(str2);
 expect(str1===str2).toBe(true);

 const str3=`あああ
いいい
 う`;
 const str4="あああ\nいいい\n う";

 expect(str3===str4).toBe(true);

 const str5="これは${str1}です";
 const str6=`これは${str1}です`;

 expect(str5).toBe("これは${str1}です");
 expect(str6).toBe("これはもじです");
});

  
 
