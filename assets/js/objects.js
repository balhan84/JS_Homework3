//task#1

// const customer = {
//   name: "Ivan",
//   surname: "Ivanov",
//   userEmail: "ivan@gmail.com",
//   userPassword: "qwerty",
//   userPhone: "+38012-369-25-81",
//   userAdress: {
//     userCity: "Odesa",
//     userStreet: " Deribas street",
//     userNumberHouse: 25,
//     userNumberFlat: 3,
//   },
// };
// console.log("customer", customer);
// console.log("userAdress:>>", customer.userAdress);
// customer.userPhone = "+38012-147-25-83";
// console.log("customer", customer);
// customer.isMale = true;
// // delete customer.userAdress;
// // console.log("customer", customer);

// const customerCopy1 = Object.assign({}, customer);
// console.log("customerCopy1:>>", customerCopy1);

// const customerCopy2 = { ...customer };
// console.log("customerCopy2:>>", customerCopy2);

// document.write(`<h2>${customer.name} ${customer.surname}</h2>
// <p>${customer.userEmail}</p>
// <p>${customer.userPassword}</p>
// <p>${customer.userPhone}</p>
// <p>${customer.userAdress.userCity}, ${customer.userAdress.userStreet},
// ${customer.userAdress.userNumberHouse},
//  ${customer.userAdress.userNumberFlat} </p>`);

//task#2

// const cat = {
//   name: "Murka",
//   color: "black",
//   isMale: false,
//   isFurnitureDemage: true,
// };
// for (let key in cat) {
//   console.log("cat[key]:>>", cat[key]);
// }

//task#3
// function createPropBooks(author, name, year, publisher, price) {
//   //   const this = {};
//   this.bookAuthor = author;
//   this.bookName = name;
//   this.bookYear = year;
//   this.bookPublisher = publisher;
//   this.bookPrice = price;
//   // this.getBookAge = function () {
//   //   return new Date().getFullYear() - this.bookYear;
//   // };
//   // this.changePrice = function (newPrice) {
//   //   this.bookPrice = newPrice;
//   // };
//   return this;
// }
// createPropBooks.prototype.getBookAge = function () {
//   return new Date().getFullYear() - this.bookYear;
// };
// createPropBooks.prototype.changePrice = function (newPrice) {
//   this.bookPrice = newPrice;
// };

// const book1 = new createPropBooks(
//   "Ernest Hemingway",
//   "The Old Man and the Sea",
//   2017,
//   "Old Lion Publishing House",
//   "400.0 hrn"
// );
// console.log("book1:>>", book1);
// console.log(book1.getBookAge());
// book1.changePrice("500.0 hrn");
// console.log("book1:>>", book1);
