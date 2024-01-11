document.addEventListener('DOMContentLoaded', function() {
    var myImage = document.getElementById('myImage');
    var changeImageBtn = document.getElementById('changeImageBtn');
    var myImage2 = document.getElementById('myImage2');

    changeImageBtn.addEventListener('click', function() {
        myImage.src = './beating.gif';
        myImage2.src = './output-onlinegiftools.gif';
        myImage.alt = 'find heart';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var myImage = document.getElementById('myImage');
    var randomMoveBtn = document.getElementById('changeImageBtn2');
    var count = 1;

    randomMoveBtn.addEventListener('click', function() {
        myImage.src = './banded_heart-removebg-preview.png';
        
        if(count == 3) {
                var fadeButton = document.getElementById('changeImageBtn2');
            
                fadeButton.style.opacity = 0;
            
                setTimeout(function() {
                    fadeButton.style.display = 'none';
                }, 1000);
        }
        // var windowWidth = window.innerWidth;
        // var windowHeight = window.innerHeight;

        // var randomX = Math.floor(Math.random() * (windowWidth - randomMoveBtn.offsetWidth));
        // var randomY = Math.floor(Math.random() * (windowHeight - randomMoveBtn.offsetHeight));

        var randomX = Math.floor(Math.random() * 120);
        var randomY = Math.floor(Math.random() * 120);


        randomMoveBtn.style.left = randomX + 'px';
        randomMoveBtn.style.top = randomY + 'px';
        count++;
    });
   
});

