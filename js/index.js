window.addEventListener("scroll", function() {
    if (window.scrollY === 0) {
        document.getElementById("nav").style.cssText = "background-color: transparent; height: 15vh;";
    } else {
        document.getElementById("nav").style.cssText = "background-color: hsl(243, 23%, 18%); height: 13vh;";
    }
    if (window.scrollY != 0) {
        document.querySelector(".to-top").classList.remove("hide");
        document.querySelector(".to-top").style.cssText = "animation: fadein 0.5s linear;";
    } else {
        document.querySelector(".to-top").style.cssText = "animation: fadeout 0.5s linear;";
        this.setTimeout(function() {
            document.querySelector(".to-top").classList.add("hide");
        }, 450);
    }
});
document.querySelector(".to-top").addEverntListener("click", function(){
    window.scrollTo({
        top:0 ,
        behavior: "smooth"
    })
})