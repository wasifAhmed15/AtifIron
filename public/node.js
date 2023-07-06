
// import { db,ref, set} from "./config.js"

 import { db,ref,set,push,onValue} from "./config.js"






window.darkmood =function() {
    document.body.classList.toggle("darkmood")
}

let Name = document.getElementById("Name")
let Email = document.getElementById("Email")
let Massage = document.getElementById("Massage")
let number = document.getElementById("number")

window.Contact = function () {
    
    
    let id = push(ref(db,"Contact/")).key
    var obj={
        Name : Name.value,
        Email : Email.value,
        Massage : Massage.value,
        number:number.value,
        id:id
        

        
    }
    
    let reference = ref(db,`Contact/${id}/`)
    set(reference,obj)
    
   
    Name.value=""
    Email.value=""
    Massage.value=""

}


function fofo() {
    let reference = ref(db,"Contact/")
    onValue(reference,function(dt){
    
     console.log(dt.val())
    });
   
    
}


fofo()
Name.value=""
Email.value=""
Massage.value=""