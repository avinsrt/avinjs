//let h1elem = document.getElementById('title')

//let liElems = document.getElementsByClassName('list-item')

//let listItems = document.getElementsByTagName('li')

//let FirstListItem = document.querySelector('.list-item')

//let ulItems = document.querySelectorAll('.list-item')

//console.log(ulItems)

////////////////////////////////////////////////

/*let h1elem = document.getElementById("title")

console.log(h1elem.getAttribute('id'))*/

//////////////////////////////////////////////////////

/*let h1elem = document.getElementById('title')

h1elem.setAttribute('class' , 'js-text')*/

///////////////////////////////////////////////

/*let liElems = document.getElementsByClassName('list-item')
console.log(liElems[0].setAttribute('id' , 'about'))*/

///////////////////////////////////////////////

/*let h1elem = document.getElementById('title')
 
h1elem.style.color = 'red'
h1elem.style.fontSize = '40px'

let liElems = document.getElementsByClassName('list-item')
 liElems[3].style.color = 'blue'
 liElems[3].style.fontWeight = 'bold'
 liElems[1].style.color = 'blue'*/

///////////////////////////////////////////////

 /*let h1elem = document.getElementById('title')

 let liElems = document.querySelectorAll('.list-item')

 let input = document.getElementById('input')

 let selectBox = document.getElementById('select')

//console.log(liElems[2].innerHTML)
//console.log(liElems[1].innerText)
//console.log(liElems[0].textContent)
liElems[0].innerHTML='درباره ما'

input.value = 'vue js'

selectBox.value = 'tehran'

console.log(input.value)*/

////////////////////////////////////////////

/*let userName = prompt("enter the name:")

let newDivElem = document.createElement('div')

newDivElem.innerHTML = userName

newDivElem.setAttribute('id' , 'username')

newDivElem.setAttribute('class' , 'title')

newDivElem.style.color = 'green'
console.log(newDivElem)*/

////////////////////////////////////////////

/*let ulItems = document.querySelector('ul')

let nweLiElem = document.createElement('li')
nweLiElem.innerHTML = 'product'

let otherLiElem = document.createElement('li')
otherLiElem.innerHTML = 'users'

ulItems.append(nweLiElem)
ulItems.append(otherLiElem)

console.log(nweLiElem)
console.log(otherLiElem)*/

////////////////////////////////////////////


/*let h1elem = document.getElementById('title')

function clickFun(){
    alert('click shod')
    h1elem.style.color = 'red'
}*/

////////////////////////////////////////

let bulbimg = document.getElementById('bulb')

let bulbflag = false

let btn = document.getElementById('btn')

function clickFun2(){
 if(bulbflag){
    bulbimg.setAttribute('src','bulboff.jpg')
    bulbflag=false
    btn.innerHTML = 'turn on'
 }else{
    bulbimg.setAttribute('src' , 'bulbon.jpg')
    bulbflag=true
    btn.innerHTML = 'turn off'
 }
}






