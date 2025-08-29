### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

### আমার উত্তর:

## 1 নং প্রশ্নের উত্তর:

**getElementById** এটি দ্বারা id অনুযায়ী একটি নির্দিষ্ট element খুজে ভের করে এবং সবসময় একটি element রিটার্ন করে কারন একই id একাধিক element এর জন্য ব্যাবহার করা উচিত না।

**getElementById** এটি দ্বারা id অনুযায়ী একটি নির্দিষ্ট element খুজে ভের করে এবং সবসময় একটি element রিটার্ন করে কারন একই id একাধিক element এর জন্য ব্যাবহার করা উচিত না।
**getElementsByClassName** class নাম অনুযায়ী element খুজে ভের করে এবং html collection কে array এর মত রিটার্ন করে।
**querySelector** css selector ব্যবহার করে element খুজে ভের করে। তবে এটা শুধু ফাইলে থাকা প্রথম element selector টাকে ধরবে এবং সেটাকেই রিটার্ন করবে।
**querySelectorAll** এটি সব ‍selector কে ধরতে পারে এবং রিটর্ন করতে পারে।

## 2 নং প্রশ্নের উত্তর:

--- প্রথমে document.createElement() ব্যবহার করে একটি element তৈরি করতে হবে,
--- তারপর text, id , class ইত্যাদি দিয়ে attribute যোগ করতে হবে।
--- পেরেন্ট element এর মধ্যে appendChild ব্যবহার করে element কে যুক্ত করতে হবে।
**উদাহরণ**
` let newDiv = document.createElement("div");
  newDiv.textContent = "Hello, World!";
  newDiv.id = "myDiv";
  newDiv.className = "container";
let parent = document.getElementById("parent container");
  parent.appendChild(newDiv);
`
## 3 নং প্রশ্নের উত্তর:
যখন কোনো child element-এ event ঘটে, তখন সেই event প্রথমে child element-এ ট্রিগার হয়, তারপর তার parent element, তারপর তার উপরের parent element, তারপর তার উপরের parent element এভাবে উপরের দিকে DOM tree ধরে Event Bubbling হয়।

## 4 নং প্রশ্নের উত্তর:
Event Delegation হলো এমন একটি technique যেখানে আমরা child element-এর পরিবর্তে parent element-এ event listener ব্যবহার করা হয়। অর্থাৎ, অনেক ছোট element individually listener বসানোর পরিবর্তে, parent element-এ একটি listener বসানো হয়। তারপর event bubbling এর সাহায্যে child element-এর event handle করা হয়।

## 5 নং প্রশ্নের উত্তর:
**preventDefault()** দ্বার ব্রাউজার এর ডিফল্ট বিহেইবিয়ার (behavior) বন্ধ করা। অর্থাৎ, কোন event ঘটলেও ব্রাউজারের নিজস্ব action না হওয়ার জন্য ব্যবহার করা।
**stopPropagation()** দ্বারা ইভেন্ট বাবলিং বা কেপচারিং বন্ধ করা। 