
// function massive(a) {

// 	for (var i=0; i<a.length; i++) {
// 		console.log(a[i]);
// 	}
// 	return a.length;

// }
// var massivelength=massive([1, 2, 3]);
// 	console.log(massivelength);

// show();
// function show() {
// 	console.log("show");
// }
// function plus() {
// 	var count=1;
// 	return function() {
// 		return ++count;
// 	}
// }

// var counter = plus();
// var counter1 = plus();
// console.log(counter());

//три функции и каждая принемает результат предедущей, функция возращает значение черерез return, а принимаем мы ее через вар или 26 строка







function first() {
	return 1;
}
function second() {
    return 1+first();
}
function third() {
	return 1+second();
}
var a=third();
console.log(a);
