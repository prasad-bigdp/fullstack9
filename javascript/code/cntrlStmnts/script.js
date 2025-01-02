// print all the values of an array except 3rd value
//eg: [5,4,6,9,7]
let arr = [5, 4, 6, 9, 7]
arr.forEach((v) =>
{
    if (arr.indexOf(v) != 2)
    {
        console.log(v)
    }
})
// print only number greater than 5 in given array
arr.forEach((v) => {
	if (v >= 5) {
		console.log(v)
	}
})

//check whether someone is eligible to vote or not based on his age

let age = 25;
if (age >= 18)
{
    console.log("eligible to vote")
}
else
{
    console.log("not eligible to vote")
}

//check whether given number is even or odd
let num = 10;
if (num % 2 == 0)
{
    console.log("even")
}
else
{
    comsole.log("Odd")
}


// check whether password is having atleast 8 characters or not

// print welcome note based on user role
let userrole='admin'
if (userrole == 'admin')
{
    console.log("Welcome to admin");
}
else if (userrole == 'faculty')
{
    console.log(' welcome to faculty ')
}
else
{
    console.log('Hi,Student')
}
// print whether given number is positive or negitive or zero



// wap to print day of the week based on number of the week
let v = 2;
switch (v) {
	case 1:
		console.log("Monday")
		break
	case 2:
		console.log("Tuesday")
		break
	case 3:
		console.log("Wednesday")
		break
	case 4:
		console.log("Thursday")
		break
	case 5:
		console.log("Friday")
		break
	case 6:
		console.log("saturday")
		break
	case 7:
		console.log("Sunday")
        break
    default:console.log("choose between 1-7")
}













