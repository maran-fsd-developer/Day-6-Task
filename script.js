//! 1.Class-Movie
//!The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
//!title, which is a String representing the title of the movie
//!studio, which is a String representing the studio that made the movie
//!rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
//! a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const obj = new Movie("jail", "Maaran production", "PG66");
console.log(obj.title, obj.studio, obj.rating);
//!b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie1 {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const obj6 = new Movie1("Casino Royal", "Eon Production");
console.log(obj6.title, obj6.studio, obj6.rating);
//! c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".
//!You may assume the input array is full of Movie instances. The returned array need not be full.
class Movie2 {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
function getPG(movies) {
  return movies.filter((movie) => movie.rating === "PG");
}
const obj1 = new Movie2("Casino Royale", "Eon Productions");
const obj2 = new Movie2("Thunivu", "Zee Studios", "PG-99");
const obj3 = new Movie2("Leo", "Seven Screen");
const obj4 = new Movie2("Valimai", "Zee Production", "PG-98");

const movies = [obj1, obj2, obj3, obj4];
const pgMovies = getPG(movies);

console.log(pgMovies);
//! d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”.
class Movie3 {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const obj7 = new Movie("Casino Royal", "Eon Production", "PG13");
console.log(obj7.title, obj7.studio, obj7.rating);

//! 2. Circle-Class/
//! Convert the UML diagram to Typescript class. - use number for double
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  get Radius() {
    return this.radius;
  }

  set Radius(n) {
    this.radius = n;
  }

  get Color() {
    return this.color;
  }

  set Color(c) {
    this.color = c;
  }

  get toString() {
    return `"Circle[radius=${this.radius},color=${this.color}]"`;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }
}

let obj8 = new Circle(1.0, "red");
console.log(obj8.Color);
console.log(obj8.Radius);
console.log(obj8.toString);
console.log(obj8.area);
console.log(obj8.circumference);
//! 3.Write a “person” class to hold all the details.
class Person {
  constructor(Name, age, maritalstatus, gender, email, degree) {
    this.Name = Name;
    this.age = age;
    this.maritalstatus = maritalstatus;
    this.gender = gender;
    this.email = email;
    this.degree = degree;
  }
}
const obj9 = new Person(
  "Manimaran",
  22,
  "single",
  "male",
  "ramesgmaran@gmail.com",
  "bsc"
);
console.log(
  obj9.Name,
  obj9.age,
  obj9.maritalstatus,
  obj9.gender,
  obj9.email,
  obj9.degree
);
//! 4.write a class to calculate the Uber price.
class Uberprice {
  constructor(pricePerKm, km) {
    this.pricePerKm = pricePerKm;
    this.km = km;
  }

  calculateTotalPrice() {
    return this.pricePerKm * this.km;
  }
}

const obj10 = new Uberprice(50, 10);
console.log(`The total Uber price is $${obj10.calculateTotalPrice()}`);
