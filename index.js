        // normal function

        // const square = function (number){
        // return number * number
        // }


        // ES6 function
        // const square = number => number * number;

        // console.log(square(10));





        // normal array
        // const items = [
        //     {name:'bike',    price: 100},
        //     {name:'tv',    price: 500},
        //     {name:'phone',    price: 150},
        //     {name:'mouse',    price: 10},
        //     {name:'cap',    price: 200},
        //     {name:'t-shirt',    price: 300},
        //     {name:'pant',    price: 400},
        //     {name:'shoe',    price: 1000},
        //     {name:'bag',    price: 600}
        // ]
        // const filterItem = items.filter(function(item){
        //     return item.price < 200
        // })
        // const total = items.reduce((currentTotal, item) => {
        //     return item.price + currentTotal
        // }, 0)

        // ES6
        // const filterItem = items.filter( item => item.price < 1000 )
        // const filterName = items.map( item => item.name )
        // const foundItem = items.find( item => item.name ==='shoe' )

        // console.log(total);



        // Es6 object
        // const myObj = {
        //     name : "Mobarok",
        //     phone : "01837875027",
        //     email : "mubarokbd3@gmail.com",
        //     address : "Rampura"
        // };

        // var keys = Object.keys(myObj);
        // var values = Object.values(myObj);
        // var entries = Object.entries(myObj);

        // console.log(entries);


        // string
        // ES5
        // console.log("my first name is Mobarok" + " last name is Hossain ");
        // ES6
        // console.log(`my first name is Mobarok. last name is Hossain `);


        // ES6 modules Export and import
        export default class User {
            constructor(name, age) {
                this.name = name
                this.age = age
            }
        }

        export function printName(User) {
            console.log(`user name is ${user.age}`)
        }

        export function printName(User) {
            console.log(`user  ${user.age} years old`)
        }
