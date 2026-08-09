//Nobe tire - Creation of an array
const arr = [1,2,3,4,5,6]
    //Construction creation
const arr2 = new Array(1,2,3,4,5,6)
console.log(arr)
console.log(arr2)
arr.push(58)
console.log("pushed 58:"+"["+arr+"]")
arr.pop()
console.log("poped:"+"["+arr+"]")
arr.unshift(2)
console.log("unshifted 1:"+"["+arr+"]")
arr.shift()
console.log("shifted 1:"+"["+arr+"]")

//The Holy Trinity (Mid Tier)
//map function in array
const newarr = arr.map(
    (num)=>{return num * 10}
)
console.log("mapped arr"+newarr)
const booleanArr = arr.filter(
    (num)=>{return num%2 === 0}
)
console.log("booleanArr:"+booleanArr)
const total = arr.reduce((val1_starts_With_zero,val2_starts_with_first_element)=>{return})

//Finding Stuff
function greater(num){
    return num>1;
}
console.log("Find Elements greater than 1",arr.find(greater))
console.log("Find index for number greater than 1",arr.findIndex(greater))
console.log("Does 7 is there in arr",arr.includes(7))
console.log("index of 6 "+arr.indexOf(6))

//slicing & Dicing
let sliced_arr = arr.slice(1,3)
console.log("sliced array",sliced_arr)
let spliced_arr = arr.splice(3,3)
console.log("spliced arr ",spliced_arr)
let unsorted_arr = [4,3,5,1]
console.log("Unsorted array:",unsorted_arr)
console.log("sorted array",unsorted_arr.sort()) 

//God Mode
// Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};
console.log("Before Destructuring:",person)
let {firstName, lastName} = person;
console.log("After Destructuring - firstName:",firstName)
console.log("After Destructuring - lastName:",lastName)
console.log("Both Names:",{firstName,lastName})

//Spread Operator
const first = [8,6,5,4,6,6]
const second = [1,2,4,5,6,7]
console.log("first and second",first,second)
const combined = [...first,...second]
console.log("Combined:",combined)

//flat
const Fa = [1,[3,4]]
console.log("Before flat:",Fa)
console.log("After Flat:",Fa.flat())