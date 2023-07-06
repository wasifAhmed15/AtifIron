import { db, push, ref,set } from "./config.js"
let FirstName = document.getElementById("FirstName")
let LastName = document.getElementById("LastName")
let Email = document.getElementById("Email")
let Address= document.getElementById("Address")
let Phone = document.getElementById("Phone")
let Quantity = document.getElementById("Quantity")
let sutar = document.getElementById("sutar") 
let Design= document.getElementById("Design")



window.Buynow=function(){
   
  let id = push(ref(db,"ironrod/")).key
  console.log(id)

    var obj = {
        FirstName : FirstName.value,

        LastName : LastName.value,
        Email: Email.value,
        Address:Address.value,
        Phone:Phone.value,
        Quantity:Quantity.value,
        sutar:sutar.value,
        Design:Design.value,
        


        id:id


    }

    let reference = ref(db,`ironrod/${id}/`)
    set(reference,obj).then(function(){
        alert("submit")
    })
    FirstName.value=""
    LastName.value=""
    Address.value=""
    sutar.value=""
    Design.value=""
    
}







