
const button_regu = document.querySelector(".button-regu");
const regu = document.querySelector(".box-of-regu");
const exit = document.querySelector(".exit-button")

button_regu.addEventListener("click", () => {
    if(regu.style.display === "none"){
        regu.style.display = "none";
    }else{
        regu.style.display = "block";
        regu.style.visibility = "visible";
        document.body.style.overflow = "hidden";
    }
  });
exit.addEventListener("click", () => {
     console.log("click")
     if(regu.style.display === "block"){
        regu.style.removeProperty("display");
        regu.style.removeProperty("visibility");
        document.body.style.removeProperty("overflow");
     }
  });

  