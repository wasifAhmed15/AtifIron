import{db,ref,set,push,onValue}from"./config.js"

let FirstName = document.getElementById("FirstName")
let LastName = document.getElementById("LastName")
let Email = document.getElementById("Email")
let Address = document.getElementById("Address")
let Phone =document.getElementById("Phone")
let Quantity = document.getElementById("Quantity")
let guage = document.getElementById("guage")
let Massage = document.getElementById("Massage")
let errorMassage = document.getElementById("errorMassage")


 window.Buynow=function() {
   let id = push(ref(db,"sheetData/")).key
   console.log(id)



   

   let obj={
    FirstName : FirstName.value,
    LastName :  LastName.value,
    Email:   Email.value,
    Address:  Address.value,
    Phone:Phone.value,
    Quantity:Quantity.value,
    guage:guage.value,
    Massage:Massage.value,
    id:id


   }

   
   let reference = ref(db,`sheetData/${id}/`)
   set(reference,obj )

   
   .then(function(){
alert("Your Form Submite")
   }
   ).catch(function(){

   })

   FirstName.value=""
LastName.value=""
Email.value=""
Address.value=""
Phone.value=""
Quantity.value=""
guage.value=""
Massage.value=""
   
    
 
}

// window.getdata=function(){
//     let reference = ref(db,"sheetData/")
//     onValue(reference,function(dt){
//         console.log(dt.val())
//     })
// }
// getdata()


