let pat = /aei/;
console.log(pat);
console.log(typeof pat);

let value = 'teste aei';

console.log(pat.test(value));

console.log(value.replace(pat, 'opa'));

console.log(value.match(pat));

let test = 'AOPAAAAAAAAA';
test= test.toLowerCase();
console.log(test);
