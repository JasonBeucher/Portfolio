//night theme
function night(){
    document.getElementById("navbar").style.backgroundColor="#333035";
    document.body.style.backgroundColor="#1A181B";
    document.getElementById("main").style.color="white";
}
//day theme
function day(){
    document.getElementById("navbar").style.backgroundColor="#1A181B";
    document.body.style.backgroundColor="white";
    document.getElementById("main").style.color="#1A181B";

}

toggleTheme = (bool) => {
    if (bool) {
        document.body.style.backgroundColor = "#141810";
        document.getElementById("logo").style.backgroundColor = "#201c1c";
        document.getElementById("navbar").style.backgroundColor = "#201c1c";
        document.getElementById("main").style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.getElementById("logo").style.backgroundColor = "#1A181B";
        document.getElementById("navbar").style.backgroundColor = "#1A181B";
        document.getElementById("main").style.color = "#1A181B";
    }

}