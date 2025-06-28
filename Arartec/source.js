

let a = document.querySelectorAll(".cl")
let c = document.querySelectorAll(".inactivo")



a.forEach(function(item, indi){
    let b = item.className
    
   c.forEach(function(ite,i){ 
        item.addEventListener("click",()=>{
            if(ite.className=="inactivo" && i == indi){
                ite.classList.remove("inactivo")
                ite.classList.add("activo")
                item.classList.add("girar")
            }
            else{
                if(ite.className=="activo"){
                    ite.classList.remove("activo")
                    ite.classList.add("inactivo")
                    item.classList.remove("girar")
                }
            }
        })

     })
 })

