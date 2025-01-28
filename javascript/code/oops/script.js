// class creation
//create class student with rno,name,marks
class Teacher
{
    name; subject; salary;
    constructor(n,s,sa)
    {
        this.name = n;
        this.subject = s;
        this.salary = sa;
    }
    display ()
    {
        console.log(this.name+" : "+this.salary)
    }
}
let obj = new Teacher("Prasad", "physics", 52000);
obj.display()

let obj2 = new Teacher("hemnath", "maths", 81000);

class Principal extends Teacher
{
    isGood;
    constructor(n,s,sa,g)
    {
        super(n,s,sa)
        this.isGood = g;
    }
}
// create a class toppers extending student. give property rank
let x = new Principal("vani", "chemistry", 41000, true)
console.log(x.name)





let obj5 = {
    name: "shekhar",
    fun: function ()
    {
        console.log(this.name)
    }
}
obj5.fun()


