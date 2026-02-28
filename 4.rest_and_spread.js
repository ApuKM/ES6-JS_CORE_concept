// Rest operator ***
function myFunc(a, b, c, ...otherParamters) {
  console.log(a, b, c, otherParamters);
}

// myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Spread operator ***
// Array
let arr = [10, 5, 20, 30, 150];
// console.log(...arr);
let arr2 = [...arr]; //copy independently

console.log(Math.max(...arr));
console.log(Math.min(...arr));






// Object
const obj = {
  name: "Utsho",
  roll: 20,
};
const obj2 = { ...obj }; // copy independently
// const obj2 = obj;

obj.name = "Ahashan Habib";

obj.roll = 25;

// console.log(obj2);

***// যখন আপনি একটি ভেরিয়েবলে অবজেক্ট বা অ্যারে রাখেন, জাভাস্ক্রিপ্ট মেমরিতে একটি জায়গা তৈরি করে এবং সেই জায়গার "বাড়ির ঠিকানা" (Address) আপনার ভেরিয়েবলকে দিয়ে দেয়।
let user1 = { name: "Abir" };
let user2 = user1; // এখানে ভ্যালু কপি হচ্ছে না, শুধু 'ঠিকানা' কপি হচ্ছে

user2.name = "Karim";

console.log(user1.name); // আউটপুট: "Karim"
// কেন এমন হয়? (Stack vs Heap)
// জাভাস্ক্রিপ্ট মেমরিকে দুই ভাগে ভাগ করে কাজ করে:

// Stack: এখানে ছোট এবং ফিক্সড সাইজের ডাটা থাকে (যেমন: numbers, strings)।

// Heap: এখানে বড় এবং ডাইনামিক সাইজের ডাটা থাকে (যেমন: Objects, Arrays)।

// যখন আপনি একটি অ্যারে তৈরি করেন, সেটি Heap-এ জমা হয়। আর সেই হিপের অ্যাড্রেস বা রেফারেন্সটি Stack-এ থাকা ভেরিয়েবলের মধ্যে জমা থাকে।

***// যেহেতু এরা রেফারেন্স স্টোর করে, তাই আপনি যদি দুটি হুবহু দেখতে অবজেক্ট তুলনা করেন, তবে রেজাল্ট false আসবে।
let a = [1, 2, 3];
let b = [1, 2, 3];

console.log(a === b); // আউটপুট: false

***//যদি আপনি চান একটি অবজেক্ট কপি করবেন কিন্তু সেটি অরিজিনালটাকে পরিবর্তন করবে না, তবে আপনাকে Shallow Copy বা Deep Copy করতে হবে।
let original = { city: "Dhaka" };
let copy = { ...original }; // নতুন রেফারেন্স তৈরি হলো

copy.city = "Rajshahi";
console.log(original.city); // আউটপুট: "Dhaka" (অরিজিনাল ঠিক আছে)
