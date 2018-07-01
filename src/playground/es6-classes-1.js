class Person {
	constructor(name = 'Unknown Person'){
		this.name = name;
	}
   getGretting(){
//		return "  Hello Mr. " + this.name;
	   
	   return `Hi. I am ${this.name}`;
	}
}




const me = new Person("Andrew");
console.log(me.getGretting());

class AboutMe {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	
	getAge(){
		return `${2018 - this.age}`;
	}
}

const introduce = new AboutMe('Shafiq', 1986)
console.log("Hi, my name is " + introduce.name + " and I am at " + introduce.getAge());