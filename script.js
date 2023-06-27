
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

  function callback(entries) {
    if (entries[0].isIntersecting) {
      window.scrollTo({top: Number(6000 - window.innerHeight), left: 0, behavior: 'smooth'});
    }
  }
    const observer = new IntersectionObserver(callback);
    observer.observe(document.querySelector('.box-of-regu'));