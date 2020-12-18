//John went to market and drink something. But according to rules only +18 age can buy alcohol:

let ageJohn = 33;

if (ageJohn >= 18) {
	console.log(`John can buy beer since he is ${ageJohn} years old.`);
} else if (ageJohn < 18) {
	console.log(`John can buy juice since he is ${ageJohn} years old`);
}

//ternary operator

ageJohn >= 18
	? console.log(`John can buy beer since he is ${ageJohn} years old.`)
	: console.log(`John can buy juice since he is ${ageJohn} years old`);

//express John's state according to his age

switch (true) {
	case ageJohn < 13:
		console.log(`John is a boy since he is ${ageJohn} years old`);
		break;
	case ageJohn >= 13 && ageJohn < 20:
		console.log(`John is a teenager since he is ${ageJohn} years old`);
		break;
	case ageJohn >= 20 && ageJohn < 30:
		console.log(`John is a young man since he is ${ageJohn} years old`);
		break;
	case ageJohn >= 30:
		console.log(`John is a man since he is ${ageJohn} years old`);
		break;
	default:
		console.log("John's age is not valid");
}
