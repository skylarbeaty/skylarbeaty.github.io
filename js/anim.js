// Grabs the hidden objects and tells them when to come in
var anim = function() {
    var elems;
    var windowHeight;
    function init() {
        elems = document.querySelectorAll(('.hidden'));
        elemsTop = document.querySelectorAll(('.hiddenTop'));
        elemsImg = document.querySelectorAll(('.hiddenImgL'));
        elemsImgR = document.querySelectorAll(('.hiddenImgR'));
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
    }
    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }
    function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
            var positionFromTop = elems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight * 0.9 <= 0) {
                elems[i].className = elems[i].className.replace(
                    'hidden',
                    'fade-up-element'
                );
            }
        }
        for (var i = 0; i < elemsTop.length; i++) {
            var positionFromTop = elemsTop[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight * 0.9 <= 0) {
                elemsTop[i].className = elemsTop[i].className.replace(
                    'hiddenTop',
                    'fade-up-elementTop'
                );
            }
        }
        for (var i = 0; i < elemsImg.length; i++) {
            var positionFromTop = elemsImg[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight * 0.9 <= 0) {
                elemsImg[i].className = elemsImg[i].className.replace(
                    'hiddenImgL',
                    'fade-up-elementImgL'
                );
            }
        }
        for (var i = 0; i < elemsImgR.length; i++) {
            var positionFromTop = elemsImgR[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight * 0.9 <= 0) {
                elemsImgR[i].className = elemsImgR[i].className.replace(
                    'hiddenImgR',
                    'fade-up-elementImgR'
                );
            }
        }
    }
    return {
      init: init
    };
};
anim().init();