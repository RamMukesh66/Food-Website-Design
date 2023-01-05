const menu = document.getElementById('menubar')
const down = document.getElementById('downbar')

menu.addEventListener('click',()=>
{
    if(down.classList.contains('d-none'))
    {
        down.classList.remove('d-none');
    }
    else{
        down.classList.add('d-none');
    }
});
