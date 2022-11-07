let list1 = Array.from(document.getElementsByClassName('list1')) ;
let lists =Array.from(document.getElementsByClassName('lists'));
let mylist =Array.from(document.getElementsByClassName('mylist'));
var price = Array.from(document.getElementsByClassName("price")) ;
let counter = Array.from(document.getElementsByClassName('counter'));
let totalfin = document.getElementById('totalfin');







function changeColor(col)
{
if(col.target.style.color !== 'red' ){
    col.target.style.color = 'red'
}else {

    col.target.style.color = 'black'
}

}

let total = Array.from(document.getElementsByClassName('total'));
function calculateSum(){
    let somme = 0 ;
    for(let i = 0 ; i < mylist.length ; i++){
        total[i].value = Number(price[i].innerText) * Number(counter[i].innerText)
        somme += Number(price[i].innerText) * Number(counter[i].innerText);
        console.log("s="+somme) ;
        totalfin.value = somme ;
    }

   


 
}

let plus = Array.from(document.getElementsByClassName('add')) ;
for (let i= 0 ; i < mylist.length ; i++) 
{
    plus[i].addEventListener ('click', function() {
        counter[i].innerText++
        calculateSum()
    })

      




    let minus = Array.from(document.getElementsByClassName('minus'));
    minus[i].addEventListener('click' , function(){
        if(counter[i].innerHTML>0){
            counter[i].innerText-- ;


            calculateSum()

        }
    })


 let buttonremove = remove[i]
 buttonremove.addEventListener('click' , function(remove){
     let buttonClick = event.target
     buttonClick.parentElement.remove()
     price[i].innerHTML=0 ;

     calculateSum()
 })


 let heart= Array.from(document.getElementsByClassName('heart'));
heart[i].addEventListener("click" , changeColor)




function myFunction(){
    confirm("Are you sure to buy?");
  }
}
