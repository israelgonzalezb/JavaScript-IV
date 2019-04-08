// CODE here for your Lambda Classes

class Person {
  constructor(object){
    this.name = object.name;
    this.age = object.age;
    this.location = object.location;
    this.gender = object.gender;
  }
  speak (){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

const fred = new Person({
  name: "Fred",
  age: 41,
  location: "Bedrock",
  gender: "male"
  
});

const barney = new Person({
  name: "Barney",
  age: 42,
  location: "Bedrock",
  gender: "male"
  
});

fred.speak();
barney.speak();

class Instructor extends Person {
  constructor(object){
    super(object);
    this.specialty = object.specialty;
    this.favLanguage = object.favLanguage;
    this.catchPhrase = object.catchPhrase;
  }
  demo(subject){
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student,subject){
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  randomGrade(student){
    let addOrSubtract = Math.round(Math.random()*100,0)>50?student.grade = student.grade + Math.round(Math.random()*10,2):student.grade = student.grade - Math.round(Math.random()*10,2);
    student.graduate(this);  
    
  }
}

const harvey = new Instructor({
  name: "Harvey",
  age: 34,
  location: "Portland",
  gender: "male",
  specialty: "React",
  favLanguage: "Python",
  catchPhrase: "Harvey to the rescuuuuue!!!"
})

const betty = new Instructor({
  name: "Betty",
  age: 29,
  location: "San Diego",
  gender: "female",
  specialty: "OOP",
  favLanguage: "C#",
  catchPhrase: "BEEP BOOP BEEP IT'S BEEP-BEEP-BETTY"
})

harvey.demo("constructors");
harvey.speak();


class Student extends Person {
  constructor(object){
    super(object);
    this.previousBackground = object.previousBackground;
    this.className = object.className;
    this.favSubjects = object.favSubjects;
    this.grade = object.grade;
  }
  listsSubjects(){
    console.log(...this.favSubjects);
  }
  PRAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduate(grader){
    if (this.grade > 70){
      console.log(`Hooray! ${this.name} just graduated Lambda School with an acceptable grade of ${this.grade}!`);
    }else{
      console.log(`${this.name}'s grade is a paltry ${this.grade}. Try harder!!`);
      grader.randomGrade(this);
    }

  }
}

const kyle = new Student({
  name: "Kyle",
  age: 26,
  location: "Tijuana",
  gender: "male",
  previousBackground: "Nurse",
  className: "DS111",
  favSubjects: ["OOP","DOM","MDN"],
  grade: 65
})

const janet = new Student({
  name: "Janet",
  age: 24,
  location: "Brooklyn",
  gender: "female",
  previousBackground: "Professional Skateboarder",
  className: "WEB44",
  favSubjects: ["HTML","JS","React"],
  grade: 68
})

kyle.listsSubjects();
janet.sprintChallenge("React");
kyle.PRAssignment("Python");
betty.grade(janet,"HTML");

class ProjectManager extends Instructor {
  constructor(object){
    super(object);
    this.gradClassName = object.gradClassName;
    this.favInstructor = object.favInstructor;
  }
  standUp(channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student,subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const bart = new ProjectManager({
  name: "Bart",
  age: 18,
  location: "Silicon Valley",
  gender: "male",
  specialty: "Back-End",
  favLanguage: "PHP",
  catchPhrase: "Aye carumba!",
  gradClassName: "WEB1",
  favInstructor: "Betty"
})

const lisa = new ProjectManager({
  name: "Lisa",
  age: 17,
  location: "Silicon Valley",
  gender: "female",
  specialty: "Data Science",
  favLanguage: "Python",
  catchPhrase: "BART!!!",
  gradClassName: "DS1",
  favInstructor: "Betty"
})

bart.standUp("#WEB432");
lisa.debugsCode(kyle,"Data Viz");


kyle.graduate(betty);
janet.graduate(lisa);