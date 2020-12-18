//John went to market and drink something. But according to rules only +18 age can buy alcohol:

let ageJohn = prompt("Enter John's age: ");

if (ageJohn >= 18) {
	alert(`John can buy beer since he is ${ageJohn} years old.`);
} else if (ageJohn < 18) {
	alert(`John can buy juice since he is ${ageJohn} years old`);
}

//ternary operator

ageJohn >= 18
	? alert(`John can buy beer since he is ${ageJohn} years old.`)
	: alert(`John can buy juice since he is ${ageJohn} years old`);

//express John's state according to his age

switch (true) {
	case ageJohn < 13:
		alert(`John is a boy since he is ${ageJohn} years old`);
		break;
	case ageJohn >= 13 && ageJohn < 20:
		alert(`John is a teenager since he is ${ageJohn} years old`);
		break;
	case ageJohn >= 20 && ageJohn < 30:
		alert(`John is a young man since he is ${ageJohn} years old`);
		break;
	case ageJohn >= 30:
		alert(`John is a man since he is ${ageJohn} years old`);
		break;
	default:
		alert("John's age is not valid");
}
