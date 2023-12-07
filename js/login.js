function openLogin() {
    document.getElementById("login").style.visibility = "visible";
}

function closeLogin() {
    document.getElementById("login").style.visibility = "hidden";
}

function openLogup() {
    document.getElementById("logup").style.visibility = "visible";
}

function closeLogup() {
    document.getElementById("logup").style.visibility = "hidden";
}

// function changeLogup() {
//     document.getElementById("img").style.left = "0%";
//     document.getElementById("img").style.transition = "1s";
// }

// function changeLogin() {
//     document.getElementById("img").style.left = "50%";
// }

function changeLogup() {
    document.getElementById("loginbox").style.left = "50%";
    document.getElementById("loginbox").style.transition = "1s";
    document.getElementById("logupbox").style.transitionDelay = "5s";
    document.getElementById("logupbox").style.left = "0%";
    document.getElementById("logupbox").style.transition = "1s";  
}

function changeLogin() {
    document.getElementById("logupbox").style.left = "50%";
    document.getElementById("logupbox").style.transition = "1s";
    document.getElementById("loginbox").style.transitionDelay = "5s";
    document.getElementById("loginbox").style.left = "0%";
    document.getElementById("loginbox").style.transition = "1s";  
}