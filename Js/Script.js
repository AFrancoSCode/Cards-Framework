let list = document.querySelectorAll('#c-Button');

list.forEach(function(e){
    e.addEventListener('click', function(){
        while(!e.classList.contains('c-Container')){
            e = e.parentElement;
        }
        e.classList.toggle('c-Container-v');
    });
});