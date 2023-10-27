
document.addEventListener("DOMContentLoaded", function(event) {

    
    document.addEventListener('scroll', function(event) {
        
        const animatedBoxes = document.getElementsByClassName("cc-1-heading");
        const windowOffsetTop = window.innerHeight + window.scrollY;
        console.log("hi",document.scrollY)
        Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
            const animatedBoxOffsetTop = animatedBox.offsetTop;
            console.log(animatedBoxOffsetTop," ", windowOffsetTop)
            if (windowOffsetTop >= animatedBoxOffsetTop) {
                addClass(animatedBox, "cc-1-heading-animation");
                
            }
            if (windowOffsetTop <= animatedBoxOffsetTop) {
                removeClass(animatedBox, "cc-1-heading-animation");
                
            }

        });
    },true);
});
document.addEventListener('scroll', function(event) {
        
    const animatedBoxes = document.getElementsByClassName("Heading-2-1");
    const windowOffsetTop = window.innerHeight + window.scrollY;
    console.log(animatedBoxes,"animated");
    
    Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
        const animatedBoxOffsetTop = animatedBox.offsetTop;
        console.log(animatedBoxOffsetTop," ", windowOffsetTop)
        if (windowOffsetTop >= animatedBoxOffsetTop) {
            addClass(animatedBox, "Heading-2-1-animation");
            
        }
        if (windowOffsetTop <= animatedBoxOffsetTop) {
            removeClass(animatedBox, "Heading-2-1-animation");
            
        }

    });
},true);

document.addEventListener('scroll', function(event) {
        
    const animatedBoxes = document.getElementsByClassName("main-container-2-heading-1");
    const windowOffsetTop = window.innerHeight + window.scrollY;
    console.log(animatedBoxes,"animated");
    
    Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
        const animatedBoxOffsetTop = animatedBox.offsetTop;
        console.log(animatedBoxOffsetTop," ", windowOffsetTop)
        if (windowOffsetTop >= animatedBoxOffsetTop) {
            addClass(animatedBox, "main-container-2-heading-1-animation");
            
        }
        if (windowOffsetTop <= animatedBoxOffsetTop) {
            removeClass(animatedBox, "main-container-2-heading-1-animation");
            
        }

    });
},true);

document.addEventListener('scroll', function(event) {
        
    const animatedBoxes = document.getElementsByClassName("main-container-2-heading-2");
    const windowOffsetTop = window.innerHeight + window.scrollY;
    console.log(animatedBoxes,"animated");
    
    Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
        const animatedBoxOffsetTop = animatedBox.offsetTop;
        console.log(animatedBoxOffsetTop," ", windowOffsetTop)
        if (windowOffsetTop >= animatedBoxOffsetTop) {
            addClass(animatedBox, "main-container-2-heading-1-animation");
            
        }
        if (windowOffsetTop <= animatedBoxOffsetTop) {
            removeClass(animatedBox, "main-container-2-heading-1-animation");
            
        }

    });
},true);


document.addEventListener('scroll', function(event) {
        
    const animatedBoxes = document.getElementsByClassName("main-container-2-heading-2-1");
    const windowOffsetTop = window.innerHeight + window.scrollY;
    console.log(animatedBoxes,"animated");
    
    Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
        const animatedBoxOffsetTop = animatedBox.offsetTop;
        console.log(animatedBoxOffsetTop," ", windowOffsetTop)
        if (windowOffsetTop >= animatedBoxOffsetTop) {
            addClass(animatedBox, "main-container-2-heading-1-animation-2");
            
        }
        if (windowOffsetTop <= animatedBoxOffsetTop) {
            removeClass(animatedBox, "main-container-2-heading-1-animation-2");
            
        }

    });
},true);


function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}


function removeClass(element, className){
   console.log("remove",className)
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className)!=-1) {
        element.classList.remove(className);
    }
}