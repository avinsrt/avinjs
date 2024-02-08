//var age = prompt("how old are you?",100);
//alert("you are 18 old!");

/*var firstNumber = 10
var secondNumber = 2
var result = firstNumber ** secondNumber
alert(result)*/

/*var userage = prompt("how old are you?")
var motherage = prompt("how old is your mother?")
var useragetypenumber = +userage
var motheragetypenumber = +motherage
var result = useragetypenumber + motheragetypenumber
alert(result)*/

/*var site = "sabzlearn"
var course = "javascript"
alert("site:" + site + "\n" + "course:" + course)
alert("im avin" + "sirati")*/

/*var num1 = 12
var num2 = 3
var num3 = 4
var str1 = "3"*/

//alert(num2 * num3 == num1)
//alert(num2 == num1)
//alert(num2 > num3)
//alert(num2 == str1)
//alert(num2 === str1) 

//var num2 = 3
//var num3 = 4

/*if(num2 > num3){
    alert("yesss");
} else{
    alert("nooo");
}*/


/*var num = prompt("number:")
if(num % 2 == 0){
    alert("even");
} else{
    alert("odd");
}*/

/*var num1 = Number(prompt("number1:"))
var num2 = Number(prompt("number2:"))
var num3 = Number(prompt("number3:"))
var total = num1 + num2 + num3
var totaltype = +total
alert(total / 3)*/

/*var userage = prompt("age:")
 if(userage < 18){
    alert("شما مجاز به ورود نیستید")
 } else{
    alert("ورود به پنل")
 }*/


 /*var number1 =Number(prompt("number1:"))
 var number2 =Number ( prompt("number2:"))
 alert(number1 ** number2)*/   


 /*var userAge = Number(prompt("date of your birthday:"))
  if(isNaN(userAge) || userAge > 1402){
    alert("تاریخ وارد شده معتبر نمی باشد")
  } else{
    alert( 1402 - userAge)
  }    ======>>>  مهممممممممم    */ 


  /*var userMinute = Number(prompt("enter your time(minute):"))
  if(isNaN(userMinute)){
    alert("ساعت شما معتبر نمی باشد")
  } else{ 
    alert(userMinute / 60 + " hours")} */


/* var num1 = 2
 var num2 = 3
 var num3 = 4

 /*if(num1 * num2 == 10){
    alert("ضربشون برابر 10 است")
 } else if(num1 * num2 == 12){
    alert("ضربشون برابر 12 است")
 } else if(num1 * num2 == 6){
    alert("ضربشون برابر 6 است")
 }*/




 /*var userAge = prompt("your age:")
 var userGender = prompt("your gender:")

 if(userAge < 18 || userGender == "female"){
   alert("خطا رخ داده است")
 } else{
   alert("ورود به پنل")
 }*/



 /*var mybool = true
 alert("mybool = " + mybool)
 alert("!myboll = " + !mybool)
 alert("!!mybool = " + !!mybool)*/



/* num1 = 3
 num2 = 4
 num1 * num2 == 12 ? alert("yes") : alert("no")*/


 /*var userAverage = Number(prompt("enter your average: "))
 switch(userAverage){
   case 18:
   case 19:
   case 20:
      alert("A")
      break;
   case 15:
   case 16:
   case 17:
      alert("B")
      break;
   case 12:
   case 13:
   case 14:
      alert("C")
      break;
      default: alert("شما مشروط هستید!")
 }*/


/* function showMessage(from, text){
   alert(from + ":" + text)
 }
 showMessage("avin","Hello!")
 showMessage("avin", "whats up?")*/



 /* function userNumber (num){
   if(num % 2 == 0){
      alert(num + " is even")
   }else{
      alert(num + " is odd")
   }
 }
 userNumber(12)
 userNumber(121)*/



 /*function userNumber(num1,num2,num3){
  alert((num1+num2+num3)/3)
 }
 userNumber(2,3,4)
 userNumber(10,10,10)*/


 /*var userName = prompt("username:")
 if(userName.length < 3){
 alert("حداقل 3 کارکتر باشد!")
 }
 var password = prompt("password:")
 if(password.length < 8){
   alert("حداقل 8 کارکتر باشد!")
 }*/


 /*var userName = prompt("username:")
 if(userName.toLocaleLowerCase() == "ali"){
   alert("login")
 }else{
   alert("you cant login!")
 }*/


/* var firstRandomnumber = Math.random() * 100000
 var finalCaptchacode = Math.floor(firstRandomnumber)
 alert(finalCaptchacode)*/



 /*var userName = "avin srt"
 for(var i = 0 ; i < userName.length ; i++){
 alert(userName[i])
 }*/

/* for(var i=0 ; i<100 ; i=i+2){
  alert(i)
 }*/



 /*var price = 0
 for(var i =0 ; i<5 ; i++ ){
 price = price + Number(prompt("price:"))
 }
 alert(price)*/

 /*var price = 0
 for(var i=0 ; i<5 ; i++){
 price = price + Number(prompt("num:")) / 5
 }
 alert(price)*/


/*var userfirstnumber =Number( prompt("enter the num:"))
var usersecondnumber = Number(prompt("enter the num:"))

if(userfirstnumber % 2 ===0){
  while(userfirstnumber<usersecondnumber){
    alert(userfirstnumber)
    userfirstnumber +=2
  }
}
else{
userfirstnumber++
while(userfirstnumber<usersecondnumber){
  alert(userfirstnumber)
  userfirstnumber +=2
}}*/



var userNumber = 0
var sum = 0
var counter = 0


/*while(userNumber != -1){
  sum += userNumber
 userNumber = Number(prompt("num: \n if you dont have a num enter -1!" ))
 if(userNumber != -1){
  counter++
 }
}
alert(sum/counter)*/


/*var fruits = ["apple","orange","plum"];
console.log(fruits[2])*/


/*let arr=[12,15,17,20,22]
arr.push(14)
arr.pop()
arr.shift()
arr.unshift(19)
console.log(arr)*/


/*var users =[
  {id:1,name:"avin",family:"sirati",age:19},
  {id:2,name:"parmin",family:"sirati",age:20},
  {id:3,name:"parisa",family:"hamed",age:45}
]

var userName = prompt("enter your name:")
var userFamily = prompt("enter your family:")
var userAge = prompt("enter your age:")


if(userName.length<3|| userName.length>10){
alert("نام شما حداقل 3 و حداکثر 10 کارکتر باشد")
} else if(userFamily.length<3 || userFamily.length>15){
  alert(" نام خانوادگی شما حداقل 3 و حداکثر 15 کارکتر باشد")
} else if(isNaN(userAge)||userAge.length>3){
  alert("لطفا سن خود را به درستی وارد کنید")
} else{
  var newuser={
    id:4,
    name:userName,
    family:userFamily,
    age:userAge
  }
  users.push(newuser)
  console.log(users)
}*/



/*var users =[
  {id:1,name:"Avin",family:"Sirati",age:19},
  {id:2,name:"Parmin",family:"Sirati",age:20},
  {id:3,name:"Parisa",family:"Sirati",age:45}
]

users.forEach(function(user){
  console.log(user)
})*/



/*var userName =prompt("enter your name:")

var users=["avin","parmin","parisa","mehran"]
 
var isLogin = users.includes(userName)

if(isLogin==true){
  console.log("به  پنل خود خوش آمدید")
}else{
  console.log("ابتدا باید ثبت نام انجام دهید")
}*/



/*var products=[{id:1,name:"apple",price:30},
{id:2,name:"banana",price:50},
{id:3,name:"strawberry",price:60},
{id:4,name:"cherry",price:60},
{id:5,name:"pineapple",price:70}
]

var userProducts=[{id:1,name:"apple",price:30},
{id:2,name:"banana",price:50},
{id:3,name:"cherry",price:60}
]

var user=prompt("what do you want?")

var requestproduct;

var isInShop = products.some(function(product){
if(product.name==user){
  requestproduct = product
  return true
}
})


if(isInShop==true){
  var newproduct={
    id:4, name:requestproduct.name , price: requestproduct.price
  }
userProducts.push(newproduct)
var sum=0
userProducts.forEach(function(product){
  sum=sum+product.price
})
console.log(userProducts)
alert(sum)
}else{
console.log("اتمام موجودی")
}*/



/*var users = [
  {id:1,name:"avin",age:19},
  {id:2,name:"parmin",age:20},
  {id:3,name:"rosha",age:13}
]
var isAll = users.every(function(user){
  return user.age>18
})

if(isAll==true){
  console.log("کنفرانس تشکیل شد")
}else{
  console.log("شما مجاز نیستید")
}*/



/*var scores =[20,19,15,10,18]
var scorespower =scores.map(function(score){
  return score ** 2
})

console.log(scorespower)*/



/*var userbasket =[
  {id:1,name:"phone",price:7000000},
  {id:2,name:"laptop",price:15000000},
  {id:3,name:"milk",price:15000},
  {id:4,name:"water",price:5000},
  {id:5,name:"apple",price:5000},
  {id:6,name:"orange",price:7000}
]


var filteredprice = userbasket.filter(function(product){
 return product.price <100000
})

var postCost = filteredprice.length *1000
var sum=0

userbasket.forEach(function(product){
 sum=sum+product.price
})

var totalprice = postCost + sum
console.log(totalprice)*/



/*var word=prompt("Enter a word:")

var characterArray= word.split('')
var reversecharacters = characterArray.reverse()
var reversword = reversecharacters.join('')

if(word===reversword){
  alert("yes")
}else{
  alert("no")
}*/



/*var todosArray =[
  {id:1 , title:'learn js' , isDoing: false},
  {id:2 , title:'design',isDoing:true},
  {id:3 , title:'learn english', isDoing:false}
]

var userMenu = prompt("choose one of them: \n 1.add todo \n 2.remove todo \n 3.do todo")

if(userMenu === '1'){
var newtodoname = prompt("enter the new todo name:")
var newtodoobject = {
  id: todosArray.length + 1,
  title: newtodoname,
  isDoing: false
}
todosArray.push(newtodoobject)
console.log("todos array:",todosArray)


}else if(userMenu === '2'){
var removetodoname = prompt("enter the removable todo:")
var removetodoindex = todosArray.findIndex(function(todo){
  return todo.title === removetodoname
})
todosArray.splice(removetodoindex,1)
console.log("todos array:",todosArray)


}else if(userMenu === '3'){
  var editabletodoname = prompt("enter the editable todo:")
  todosArray.forEach(function(todo){
   if( todo.title === editabletodoname)
    todo.isDoing = true
  })
  console.log("todos array:",todosArray)

}else{
  alert("گزینه وارد شده معتبر نیست")
}*/



/*var TaskArray ={
  avin:["js","html","css"],
  parmin:["react","vue","angular"],
  saghar:["seo","link building"],
  sina:["admin","content"]
}

var NewTaskName = prompt("Enter The New Task:")
var Employename =prompt("enter the employe name:")

var employetasks = TaskArray[Employename]
employetasks.push(NewTaskName)

console.log(TaskArray)*/


/*var allQuestions =[
  {id:1 , title:"2+2" , answer:"4"},
  {id:2 , title:"2*4" , answer:"8"},
  {id:3 , title:"7**2" , answer:"49"},
  {id:4 , title:"100/25" , answer:"4"},
  {id:5 , title:"12/3" , answer:"4"}
]

var score = 0
var mainAnswer

allQuestions.forEach(function(question){
  mainAnswer =prompt(question.title + '?')
  if(mainAnswer === question.answer){
    score++
  }
})

alert("your final score is:" + score)*/


/*var num1 = prompt("enter num1:")
var num2 =prompt("enter num2:")

var userOperator =prompt("enter the user operator: \n 1.+ \n 2.- \n 3.* \n 4. / \n 5.**")

if(userOperator === "1"){
sum(num1,num2)
}else if(userOperator === "2"){
minus(num1,num2)
}else if(userOperator === "3"){
time(num1,num2)
}else if(userOperator === "4"){
devide(num1,num2)
}else if(userOperator === "5"){
power(num1,num2)
}else{
  alert("عملیات وارد شده معتبر نمی باشد")
}

function sum(num1,num2){
  alert(num1+num2)
}
function minus(num1,num2){
  alert(num1-num2)
}
function time(num1,num2){
  alert(num1*num2)
}
function devide(num1,num2){
  alert(num1/num2)
}
function power(num1,num2){
  alert(num1**num2)
}*/



/*var users =[
  {id:1 , name:'ali' , age:21},
  {id:2 , name:'amir' , age:19},
  {id:3 , name:'amin' , age:22},
  {id:4 , name:'babak' , age:26}
]

var mainUserData = users.find(function(user){
  return user.name === 'amin'
})

console.log(mainUserData)*/


/*var users =[
  {id:1 , userName:'avinsirati83' , pass:'av13si83'},
  {id:2 , userName:'parminsrt' , pass:'parminavin'},
  {id:3 , username:'parisa57' , pass:'parisahs'},
]

var userName = prompt("enter your username:")

var mainUserData = users.find(function(user){
  return user.userName === userName
})

if(mainUserData === undefined){
  alert("username is not correct")
}else{
  alert("your password is:  " + mainUserData.pass)
}*/



/*var minute = +prompt("enter the minute:")
var second = +prompt("enter the second:")

var timer = setInterval(function(){

  if(second === -1){
    minute--
    second = 59
  }

  if(minute === 0 && second === 0){
    clearInterval(timer)
  }


console.log('time: ' + minute + ':' + second)
second--
} , 1000)*/


/*var hasProfile = false

setTimeout(function(){
if(!hasProfile){
  alert("لطفا عکس پروفایل خود را اپلود کنید")
}
} , 5000)*/


