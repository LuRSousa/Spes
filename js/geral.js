function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

window.addEventListener("scroll" , function(){
  let header = document.querySelector('header')
  header.classList.toggle('rolagem', window.scrollY > 0);
})

