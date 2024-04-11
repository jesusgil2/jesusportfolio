var myicon = document.querySelector('#moon-icon');
myicon.onclick = function(){
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')){
        myicon.src = "../static/images/sun.png";
    }else{
        myicon.src = "../static/images/moon.png";
    }
}