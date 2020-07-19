let i = 0;
let images = [];

let time = 2500;

//Image list
images[0] = 'https://images.unsplash.com/photo-1503791228404-a79884146f98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1014&q=80';
images[1] = 'https://images.unsplash.com/photo-1503791113423-a8eab3a486ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80';
images[2] = 'https://images.unsplash.com/photo-1502068713670-5acaa8128a4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80';


function changeImg() {
    document.slide.src = images[i];
    if(i < images.length - 1 ) {
       i++;
    } else {
        i = 0;
    }
    

    setTimeout('changeImg()', time);
}

window.onload = changeImg;