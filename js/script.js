// Scrivi un programma che stampi i numeri da 1 a 100
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var fizz = "Fizz";

var buzz = "Buzz";

var fizzBuzz = "FizzBuzz";

var i;

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.table(["iterazione: " + fizzBuzz]);
	} else if (i % 5 === 0) {
		console.table(["iterazione: " + buzz]);
	} else if (i % 3 === 0) {
		console.table(["iterazione: " + fizz]);
	} else {
		console.table(["iterazione: " + i]);
	}
}
