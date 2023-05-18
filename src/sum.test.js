const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("プログラムコメントの練習", () => {
  //エラーになる為、実行させないようにコメントにする。
  /*
  expect(sum(1, 2)).toBe(4);
*/
});

test("constの練習", () => {
  const bookTitle = "本";
  const bookPrice = 3000;

  expect(bookTitle).toBe("本");
  expect(bookPrice).toBe(3000);
});

test("letの練習", () => {
  let bookTitle;
  expect(bookTitle).toBe(undefined);
  let bookPrice = 3000;

  bookTitle = "本";
  expect(bookTitle).toBe("本");
  expect(bookPrice).toBe(3000);

  bookPrice = 100;
  expect(bookPrice).toBe(100);
});

test("console.logの練習", () => {
  const total = 42 + 42;
  console.log(total); // => 84

  const value = "値";
  console.log(value);
});

test("文字列の練習", () => {
  const str1 = "もじ";
  const str2 = "もじ";

  expect(str1).toBe(str2);
  expect(str1 === str2).toBe(true);

  const str3 = `あああ
いいい
 う`;
  const str4 = "あああ\nいいい\n う";

  expect(str3 === str4).toBe(true);

  const str5 = "これは${str1}です";
  const str6 = `これは${str1}です`;

  expect(str5).toBe("これは${str1}です");
  expect(str6).toBe("これはもじです");
});

test("オブジェクトの練習", () => {
  const object = {
    address: "東京",
    telephone: "00-0000-0000",
    age: 20,
    hasLicense: true,
    nested: { valuea: 1 },
  };

  expect(object.address).toBe("東京");
  expect(object["telephone"]).toBe("00-0000-0000");
  expect(object.age).toBe(20);
  expect(object.hasLicense).toBe(true);
  expect(object.nested.valuea).toBe(1);
});

test("配列の練習", () => {
  const hairetu = ["aaa", 111, true, { age: 20, address: "東京" }];

  expect(hairetu[0]).toBe("aaa");
  expect(hairetu[1]).toBe(111);
  expect(hairetu[2]).toBe(true);
  expect(hairetu[3].address).toBe("東京");
  expect(hairetu[3].age).toBe(20);
});

test("べき乗の練習", () => {
  expect(3 ** 4).toBe(81);
  expect(Math.pow(3, 4)).toBe(81);
});

test("分割代入　配列の練習", () => {
  const array = [1, 2, 3];

  const [a, b, c] = array;

  expect(a).toBe(1);
  expect(b).toBe(2);
  expect(c).toBe(3);
});

test("分割代入 オブジェクトの練習", () => {
  const obj = {
    key: "value",
    key2: "aaa",
  };

  const { key, key2 } = obj;
  expect(key).toBe("value");
  expect(key2).toBe("aaa");
  expect({ key, key2 }).toStrictEqual(obj);
});

test("三項演算子の練習", () => {
  expect(typeof "文字列").toBe("string");
  expect(typeof undefined).toBe("undefined");
  expect(typeof true).toBe("boolean");

  expect(addPrefix("abc")).toBe("デフォルト:abc");
  expect(addPrefix("abc", "d")).toBe("dabc");

  expect(addPrefix(123)).toBe("デフォルト:123");
  expect(addPrefix("てきすと", "プレフィックス")).toBe(
    "プレフィックスてきすと"
  );
});

function addPrefix(text, prefix) {
  // `prefix`が指定されていない場合は"デフォルト:"を付ける
  const pre = typeof prefix === "string" ? prefix : "デフォルト:";
  return pre + text;
}

test("Number.parseInt,Number.parseFloatの練習", () => {
  expect(Number.parseInt("10", 10)).toBe(10);
  expect(Number.parseInt("10", 10)).not.toBe("10");
  expect(Number.parseInt("10")).toBe(10);
  expect(Number.parseFloat("3.14", 10)).toBe(3.14);
  expect(Number.parseFloat("3.14", 10)).not.toBe("3.14");
  expect(Number.parseFloat("3.14")).toBe(3.14);
  expect(Number.parseInt("3.99", 10)).toBe(3);
  expect(Number.parseInt("AAA", 10)).toBe(NaN);
  expect(Number.isNaN(Number.parseInt("AAA", 10))).toBe(true);
});

test("functionの練習", () => {
  function double(num) {
    return num * 2;
  }

  expect(double(10)).toBe(20);

  function echo(x) {
    return x;
  }

  expect(echo(10)).toBe(10);
  expect(echo("10A")).toBe("10A");
  expect(echo()).toBe(undefined);
});

test("デフォルト引数の練習", () => {
  function addPrefix2(text, prefix = "デフォルト:") {
    // `prefix`が指定されていない場合は"デフォルト:"を付ける

    //デフォルト関数なので↓は不要になる。
    //const pre = typeof prefix === "string" ? prefix : "デフォルト:";
    return prefix + text;
  }

  expect(addPrefix2("abc")).toBe("デフォルト:abc");
  expect(addPrefix2("abc", "d")).toBe("dabc");

  expect(addPrefix2(123)).toBe("デフォルト:123");
  expect(addPrefix2("てきすと", "プレフィックス")).toBe(
    "プレフィックスてきすと"
  );
});

test("Function と　Arrow Functionの練習", () => {
  const A = function (x) {
    return x * x;
  };
  const B = (y) => y * y;

  expect(A(2)).toBe(4);
  expect(B(3)).toBe(9);
});

test("if/else if の練習", () => {
  const Version = function (vs) {
    if (vs === "ES5") {
      return "ECMAScript 5";
    } else if (vs === "ES6") {
      return "ECMAScript 2015";
    } else if (vs === "ES7") {
      return "ECMAScript 2016";
    }
    return "unknown";
  };

  expect(Version("ES5")).toBe("ECMAScript 5");
  expect(Version("ES6")).toBe("ECMAScript 2015");
  expect(Version("ES7")).toBe("ECMAScript 2016");
  expect(Version(3)).toBe("unknown");
});

test("else の練習", () => {
  const YEAR = function (year) {
    if (year % 400 === 0) {
      // 400で割り切れる
      return true;
    } else if (year % 100 === 0) {
      // 100で割り切れる
      return false;
    } else if (year % 4 === 0) {
      // 4で割り切れる
      return true;
    } else {
      // それ以外
      return false;
    }
  };

  expect(YEAR(2020)).toBe(true);
  expect(YEAR(2023)).toBe(false);
  expect(YEAR(2000)).toBe(true);
  expect(YEAR(1900)).toBe(false);
});

test("switch  の練習", () => {
  const Version = function (vs) {
    switch (vs) {
      case "ES5":
        return "ECMAScript 5";
      case "ES6":
        return "ECMAScript 2015";
      case "ES7":
        return "ECMAScript 2016";
      default:
        return "unknown";
    }
  };
  expect(Version("ES5")).toBe("ECMAScript 5");
  expect(Version("ES6")).toBe("ECMAScript 2015");
  expect(Version("ES7")).toBe("ECMAScript 2016");
  expect(Version(3)).toBe("unknown");
});

test("switch2  の練習", () => {
  const Amari = function (num) {
    switch (num % 4) {
      case 0:
        return "ぐー";
      case 1:
        return "ちょき";
      case 2:
        return "ぱー";
      case 3:
        return "あいこ";
      default:
        return "unknown";
    }
  };
  expect(Amari(4)).toBe("ぐー");
  expect(Amari(5)).toBe("ちょき");
  expect(Amari(6)).toBe("ぱー");
  expect(Amari(7)).toBe("あいこ");
  expect(Amari("a")).toBe("unknown");
  expect(Amari(0)).toBe("ぐー");
  expect(Amari(14)).toBe("ぱー");
});

test("for の練習", () => {
  const Sum = function (goal) {
    let total = 0; // totalの初期値は0

    for (let i = 0; i < goal; i++) {
      total += i + 1; // 1から10の値をtotalに加算している
    }
    return total;
  };
  expect(Sum(4)).toBe(10);
  expect(Sum(10)).toBe(55);
});

test("for の練習2", () => {
  const Sum = function (numbers) {
    let total = 0; // totalの初期値は0

    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  };
  expect(Sum([1, 2, 3, 4, 5])).toBe(15);
  expect(Sum([])).toBe(0);
  expect(Sum([2])).toBe(2);
});

test("break の練習", () => {
  function isEvenIncluded(numbers) {
    // 偶数があるかどうか
    let isEvenIncluded = false;
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      // numが2で割り切れるなら偶数
      if (num % 2 === 0) {
        isEvenIncluded = true;
        break;
      }
    }
    return isEvenIncluded;
  }
  expect(isEvenIncluded([1])).toBe(false);
  expect(isEvenIncluded([])).toBe(false);
  expect(isEvenIncluded([11, 12])).toBe(true);
});

test("breakからreturnの書き換え の練習", () => {
  function isEvenIncluded(numbers) {
    // 偶数があるかどうか
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      // numが2で割り切れるなら偶数
      if (num % 2 === 0) {
        return true;
      }
    }
    return false;
  }
  expect(isEvenIncluded([1])).toBe(false);
  expect(isEvenIncluded([])).toBe(false);
  expect(isEvenIncluded([11, 12])).toBe(true);
});

test("someとfilter の練習", () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [1, 3, 5, 7];
  const array3 = [1028];

  // some
  expect(
    array1.some((num) => {
      return num % 2 === 0;
    })
  ).toBe(true);

  expect(
    array2.some((num) => {
      return num % 2 === 0;
    })
  ).toBe(false);

  expect(
    array3.some((num) => {
      return num % 2 === 0;
    })
  ).toBe(true);

  // filter 偶数のみ
  expect(
    array1.filter((num) => {
      return num % 2 === 0;
    })
  ).toStrictEqual([2, 4]);

  expect(
    array2.filter((num) => {
      return num % 2 === 0;
    })
  ).toStrictEqual([]);

  expect(
    array3.filter((num) => {
      return num % 2 === 0;
    })
  ).toStrictEqual([1028]);

  // filter 奇数のみ
  expect(
    array1.filter((num) => {
      return num % 2 !== 0;
    })
  ).toStrictEqual([1, 3, 5]);

  expect(
    array1.filter((num) => {
      return !(num % 2 === 0);
    })
  ).toStrictEqual([1, 3, 5]);

  expect(array1.filter((num) => num % 2 !== 0)).toStrictEqual([1, 3, 5]);

  // filter 3以上
  expect(array1.filter((num) => num >= 3)).toStrictEqual([3, 4, 5]);
});
