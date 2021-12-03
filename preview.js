function shorter(str, n) {
  let m = str.indexOf(" ", n);
  if (m > n) return str.substr(0, m);
  else if (m == -1) return str;
  else return str.substr(0, n);
}

let a = prompt("напишите слово");
let b = prompt("?");
alert(shorter(a, b));