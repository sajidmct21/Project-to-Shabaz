const images = ['assets/menu-icon.svg','assets/cross.svg'];
let togle = true;



let icon = document.querySelector(".icon");
        let ul = document.querySelector("ul");
        icon.addEventListener("click", ()=>{
            ul.classList.toggle("showData");
            // console.log(ul);

            if(ul.className == "showData"){
                document.getElementById("bar").src= images[1];
                
            }
            else{
                document.getElementById("bar").src = images[0];
            }
        })

