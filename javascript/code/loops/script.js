/* print numbers from 1 to 10 */
let n = 50;
while (n >= 20)
{
    console.log(n);
    n/=2;// n=n/2;
}
/* write a function which accepts a number
and prints all even numbers upto n*/
function evenUpto (n)
{
    let i = 0;
    while (i <= n)
    {
        console.log(i);
        i += 2;
    }
}
evenUpto(20)

/* write a function to prepare even numered word from given string 
Eg:"PRASAD" ==>RSD
*/
function evenNumbered (str)
{
    let i = 0,str1='';
    while (i < str.length)
    {
        if (i % 2 != 0)
        {
            str1 = str1 + str.charAt(i);
        } 
        i++;
    }
       return str1
}
let res = evenNumbered("PRASAD")
console.log(res)

i = 10;
while (i < 10)
{
    console.log(i);
    i++;
}
i = 10;
do
{
    console.log(i);
    i++;
} while (i < 10)
    
// print values from 1 to 10 using for loop
for (i = 1; i <= 10; i++)
{
    console.log(i)
}
// use for loop to print values from 10 to 1
for (i = 10; i >= 1; i--)
{
    console.log(i)
}
// use the for loop to print following array
let arr = [10,11,12]
for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i]) // 10 11 12
}
arr=[10,11,12]
// for..of
for (let x of arr)
{
    console.log(x) //10 11 12
}
// for..of
for (let p in arr)
{
    console.log(p)  //0 1 2
}

















