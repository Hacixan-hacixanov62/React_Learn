"use strict"

// let a = 14;
// let b = 14;
// let output;
// if (a < b) { output = a + b; } 
// else if (a > b) { output = a - b; } 
// else { output = a * b; }


// console.log("Nəticə:", output);

// let a =13;
// let b =13;
// let output;

//(a<b) ? output=a+b : output=a-b;
// (a<b) ? output=a+b:(a>b) ? output=a-b: output=a*b;

// console.log(output);


// let newArray =["Muhasib","I","sweet"];
// let[noun,pronoun,adjective]=newArray;

// console.log(pronoun);
// console.log(pronoun);

// let personObject = {
//     Name:"Hajikhan",
//     surname:"Hajikhanov",
//     age:21,
//     gender:"male"
// }

// let {Name,surname,age,gender}=personObject;
// console.log(Name,surname,age,gender);

// let personObject = {
//     Name:"Hajikhan",
//     surname:"Hajikhanov",
//     age:21,
//     gender:"male"
// }

// let{Name:personName,age:personAge,surname:personSurname,gender:personGender}=personObject;
// console.log(personName,personAge,personGender,personSurname);

// function myName(Hajikhan,Hajikhanov){
//     alert(`Hajikhanaaaaaaaaaaaaaaaaaa`);
// }

// let display = `This displays my name ${myName()}`

// let myObject ={
//     Name:"Hajikhan",
//     number:21,
//     developer:[true,"Hajikahn",2]
// }

// console.log(myObject["Name"]);
// console.log(myObject.Name);


// let numbers={
//     one:"Hajikhan",
//     two:"Aslan",
//     3: "Peter"
// }

// console.log(numbers[3])
// console.log(numbers.two)

// let names = ["saar","fadra","dafar"];
// let mappedNames =names.map(m=>m + "f");

// console.log(mappedNames);

// let names = ["saar","fadra","dafar","ds"];
// let filteredNames=names.filter(m=>m.length >4);

// console.log(filteredNames);

// let evenNumbers =[2,4,6,8,10];
// let output=evenNumbers.reduce((sum,current)=>sum+current ,0);

// console.log(output);


// function plusFour(a){
//     return a+4;
// }

// console.log(plusFour());

// let plusFour =(a)=>{
//     return a+4;
// }

// let plusFour =(a)=>a+4;

// import cook from './kitchen.js'; 

// console.log(cook("Et", "Su", "Od"));

// const btn = document.querySelector('.btn');

// btn.addEventListener('click',()=>{
//     let name ="Hajikhan Hajikhanov";
//     console.log(name.toUpperCase());
// })


// setTimeout(() => {
//     console.log("Hajikahn");
//     setTimeout(()=>{
//     console.log("Hajikh");
//     },2000)
// }, 2000);

// const myPromise =new Promise((resolve, reject) => {    // newPromise proqramin donmasinin qarsisini alir.
//     let success=1;
//     if(success){
//         resolve('Successfully task')
//     }
//     else{
//         reject('Reject')
//     }

// })

// myPromise
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(error))
//     .finally(()=>console.log("Emeliyyat bitdi"))

// function addName(time,name){
//     return new Promise((resolve, reject) => {
//         if(name){
//             setTimeout(() => {
//                 console.log(name);
//                 resolve();
//             }, time);
//         }
//         else{
//           reject('No such name');
//         }
//     })
// }

// addName(2000,'Hajikhan')
//       .then(()=>addName(2000,'Zefer'))
//       .then(()=>addName(5000,'Uzeyir'))
//       .then(()=>addName(2000,'Haci'))
//       .catch((err)=>console.log(err))
//       .finally(()=>console.log("Emeliyyat bitdi"))


// let users = [
//   { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
//   { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
//   { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" }
// ];

// let singleUser = users.map((user)=>{
//    return `
//     <div class="user-card">
//         <h1 class="name">${user.firstName} ${user.lastName}</h1>
//         <p class="age">Age: ${user.age}</p>
//         <p class="hobby">Hobby: ${user.hobby}</p>
//     </div>
//     `;
    
// });

// document.getElementById('user-list').innerHTML = singleUser.join('');


// let users = [
//   { firstName: "Susan", age: 14 },
//   { firstName: "Daniel", age: 16 },
//   { firstName: "Bruno", age: 56 },
//   { firstName: "Jacob", age: 15 },
//   { firstName: "Sam", age: 64 },
//   { firstName: "Dave", age: 56 },
//   { firstName: "Neils", age: 65 }
// ];

// const seniorPeople =users.filter((person)=>person.age >=50);

// seniorPeople.forEach(person => {
//     console.log(person.firstName);
// });

// const Jacob = users.find((person)=>person.firstName =="Jacob");
// console.log(Jacob);
const Susan = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
  hobbies: {
    hobby1: "singing",
    hobby2: "dancing"
  }
};

// function individualData({firstName, age, hobbies:{hobby1}}){
//   console.log(firstName, age, hobby1); 
// }
// individualData(Susan);

// const {firstName,age,hobbies:{hobby1}} =Susan;
// console.log(firstName,age,hobby1)

// let fruits= ["Mango", "Pineapple" , "Orange", "Lemon", "Apple"];

// const [firstFruit, secondFruit, ...rest] = fruits

// console.log(firstFruit, secondFruit, rest);

// let pets= ["cat", "dog" , "rabbits"];

// let carnivorous = ["lion", "wolf", "leopard", "tiger"];

// let animals =[...pets,...carnivorous];

// console.log(animals);

// let name = {firstName:"John", lastName:"Doe"};
// let hobbies = { hobby1: "singing", hobby2: "dancing" }
// let myInfo = {...name, ...hobbies};

// console.log(myInfo);

let animals = [
  {
    name:'Lion',
    category: 'carnivore'
  },
  {
    name:'dog',
    category:'pet'
  },
  {
    name:'cat',
    category:'pet'
  },
  {
    name:'wolf',
    category:'carnivore'
  }
]

// let category =animals.map((animal)=>animal.category);

// console.log(category);

// let category =[...new Set(animals.map((animal)=>animal.category))];
                     
// console.log(category); //new Set() əmri massivdəki təkrarlanan elementləri silmək və hər elementdən yalnız bir dənə saxlamaq üçün istifadə olunur.



let staffs = [
  { name: "Susan", age: 14, salary: 100 },
  { name: "Daniel", age: 16, salary: 120 },
  { name: "Bruno", age: 56, salary: 400 },
  { name: "Jacob", age: 15, salary: 110 },
  { name: "Sam", age: 64, salary: 500 },
  { name: "Dave", age: 56, salary: 380 },
  { name: "Neils", age: 65, salary: 540 }
];

// const totalSalary =staffs.reduce((total,staff)=>{
//     total+=staff.salary;
//     return total;
// },0);

// console.log(totalSalary);


// const salaryInfo =staffs.reduce((total,staff)=>{
//     let staffTithe =staff.salary * 0.1;
//     total.totalTithe +=staffTithe;
//     total['totalSalary']+=staff.salary;
//     return total; 
// },
//   {totalSalary:0,totalTithe:0}
// );

// console.log(salaryInfo);

// let users = [
// {
//     name: "Sam",
//     age: 64,
//     hobby: "cooking",
//     hobbies: {
//       hobb1: "cooking",
//       hobby2: "sleeping"
//     }
//   },
//   { name: "Bruno", age: 56 },
//   { name: "Dave", age: 56, hobby: "Football" },
//   {
//     name: "Jacob",
//     age: 65,
//     hobbies: {
//       hobb1: "driving",
//       hobby2: "sleeping"
//     }
//   }
// ];

// users.forEach((user) => {
//   console.log(user?.hobbies?.hobby2);
// });

// fetch("https://type.fit/api/quotes")
//   .then((response) => {
//     if(!response.ok){
//         throw Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const fetchData = async () => {
//   try {
//     const quotes = await fetch("https://type.fit/api/quotes");
//     const response = await quotes.json();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchData();

// const items = ['apple', 'banana', 'orange'];
// const listItems = items.map(item => `<li>${item}</li>`).join('');
// const list = `<ul>${listItems}</ul>`;


// const config = {
//     theme: 'light'
// };

// const { theme = 'dark' } = config;
// console.log(theme);


// const MyComponent = ({ isLoggedIn }) => {
//     return (
//         <div>
//         {isLoggedIn ? (
//         <p>Welcome, user!</p>
//         ) : (
//         <p>Please log in.</p>
//         )}
//         </div>
//     );
// };

// MyComponent();


// const numbers =[1,2,3,4,5];
// const sum =numbers.reduce((acc,curr)=>acc+curr,0);

// console.log(sum);

// const nestedArrays =[[1,2],[3,4]];
// const flattenedArray =nestedArrays.flatMap(array=>array);

// console.log(flattenedArray);

// const users = [
//     { name: 'Akande', age: 30 },
//     { name: 'Toheeb', age: 25 },
//     { name: 'Olalekan', age: 35 }
// ];

// const adultUsers=users.filter(user=>user.age>=26).map(user => `${user.name} (${user.age} yaş)`);
// console.log(adultUsers);

// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => {
//     console.log(data);
//     })
//     .catch(error => {
//     console.error(error);
//     });

// async function fetchData(){
//   try{
//     const response =await fetch('https://api.example.com/data');
//     const data =await response.json();
//     console.log(data);
//   }
//   catch(error){
//     console.log(error)
//   }
// }

// fetchData();


//  #1 Destructuring 
//  #2 Spread Operator
//  #3 Array Methods : filter() map() find() includes() 
//  #4 Ternary Operator : Condition
//  #5 Logical && Operator
//  #6 Optionol Chanining & Nullish Coalescing
//  #7 Modules : export, import
//  #8 Asynchronous Javascript

// Scoping
// Callbacks
// Passing Functions 
// Concept of Modules


// #1 Destructuring 
//#region  

const koodrinatlar =[12,13,14];
const[x,y] =koodrinatlar;
// console.log(x);
// console.log(y);

const mehsul = {
    id: 101,
    ad: "iPhone 15",
    qiymet: 2000,
    anbar: {
        miqdar: 5,
        yer: "Baku"
    }
};

//const {ad,qiymet,anbar: {miqdar}} =mehsul;
//console.log(mehsul.ad,mehsul.qiymet, mehsul.anbar.miqdar)

const masin = {marka: "BMW"};
const {marka, reng="Qara"} =masin;

//console.log(reng);

//Swapping

let a ="alma";
let b ="armud";

[a,b] =[b,a]

//console.log(a);
//console.log(b);

//Rest pattern

const herfler =["A","B","C","Ç","D","E"]
const [birinci,ikinci,...qalanlari]=herfler;

//console.log(birinci);
//console.log(qalanlari);

function hesablama(a,b){
  return[a+b,a*b];
}

const[cem,hasil]=hesablama(10,20);
//console.log(cem);
//console.log(hasil);

const soz ="El";
const [herf1,herf2]=soz;
//console.log(herf1);
//#endregion

// #2 Spread Operator
//#region 

const meyveler = ["Alma", "Banan"];
const terevezler = ["Yerkökü", "Xiyar"];

const hamisi =[...meyveler,...terevezler,"Dana"];

//console.log(hamisi);

function cemle(...ededler){
  return ededler.reduce((a,b)=>a+b,0)
}

//console.log(cemle(1,2,3,4));

let tekEdedler = [1, 3, 5];
let cutEdedler = [2, 4, 6];

const numbers =[...tekEdedler,...cutEdedler];
//console.log(numbers);

const user = { username: "ali_99", email: "ali@gmail.com", online: false };
const updateUser ={...user,online: true};
//console.log(updateUser);

const product = { ad: "Laptop", qiymet: 1500, marka: "Dell", zemanet: "2 il" };
const {qiymet,...detallar}=product;

//console.log(qiymet);
//console.log(detallar);

//#endregion

// #3 Array Methods : filter() map() find() includes() 
//#region 

const reqemler =[1,2,3,4];
const kvadratlar =reqemler.map(x=>x*x);

//console.log(kvadratlar);

const yaslar = [12, 18, 25, 30, 15];
const boyukler =yaslar.filter(yas=>yas >18);
//console.log(boyukler);

const mehsullar = [
    {id: 1, ad: "Telefon"},
    {id: 2, ad: "Laptop"}
];

const tapmaq =mehsullar.find(m=>m.id==2);
//console.log(tapmaq);
const diller = ["JS", "Python", "C#"];
//console.log(diller.includes("C#"));

const qiymetler = [10, 20, 30];
const toplam =qiymetler.reduce((acc,qiymet)=>acc+qiymet,0)
//console.log(toplam);


const telebeler = [
    { id: 1, ad: "Eli", bal: 85 },
    { id: 2, ad: "Leyla", bal: 45 },
    { id: 3, ad: "Murad", bal: 92 },
    { id: 4, ad: "Gunel", bal: 60 }
];

const names =telebeler.map(m=>m.ad);
//console.log(names);

const degre=telebeler.filter(m=>m.bal>=50);
//console.log(degre);

const tap=telebeler.find(m=>m.id ==4);
//console.log(tap.ad);

const hasLargeDegre =telebeler.some(m=>m.bal == 30);
//console.log(hasLargeDegre);

const allSmall =telebeler.every(m=>m.bal <100);
//console.log(allSmall);

const productions = [{ad: "Çörək", bitib: true}, {ad: "Süd", bitib: false}];
const hansisaBitib =productions.some(m=>m.bitib==false);
//console.log(hansisaBitib);

const ballar = [55, 60, 80];
const hamisiKecib = ballar.every(b => b > 50);
//console.log(hamisiKecib);

const prices = [100, 20, 50, 10];
const sirala =[...prices].sort((a,b)=>a-b);
//console.log(sirala);

const list = ["a", "b", "c", "d", "e"];
const slice=list.slice(1,4);
//console.log(slice);

const sifarisler = [
    { id: 1, mehsul: "Mouse", qiymet: 40, catdirilib: true },
    { id: 2, mehsul: "Monitor", qiymet: 300, catdirilib: false },
    { id: 3, mehsul: "Klaviatura", qiymet: 80, catdirilib: true },
    { id: 4, mehsul: "USB Hub", qiymet: 20, catdirilib: true }
];

const undeliverable =sifarisler.some(m=>m.catdirilib ==false);
//console.log(undeliverable);

const coastPrices =sifarisler.every(m=>m.qiymet>10);
//console.log(coastPrices);

const filter =[...sifarisler].sort((a,b)=>b.qiymet-a.qiymet);
//console.log(filter);

const cutList =[...sifarisler].slice(0,2);
//console.log(cutList);

//#endregion

// #4 Ternary Operator : Condition

//#region 
const isOnline = false;

const statusMesaj = isOnline ? "Istifadeci aktivdir":"Istifadeci oflayndir";
//console.log(statusMesaj);

const mehsulQiymeti = 150;
const answer = mehsulQiymeti >100 ? "Bahali":"Ucuz";
//console.log(answer);

const itemsCount = 0;

const response =  itemsCount > 0 ? `Səbətinizdə ${itemsCount} məhsul var` : "Səbət boşdur"
//console.log(response);
















