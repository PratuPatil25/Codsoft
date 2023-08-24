window.addEventListener('scroll',function(){
    var navbar=this.document.querySelector('.navbar');
    navbar.classList.toggle('sticky',this.window.scrollY>0);
});