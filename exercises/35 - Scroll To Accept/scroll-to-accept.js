const terms = document.querySelector('.terms-and-conditions');
const accept = document.querySelector('button.accept');
const finish = document.querySelector('.finished');

function showButton() {
        accept.removeAttribute('disabled');
}
function obCallback(payload) {
        if (payload[0].isIntersecting) {
                showButton();
        }
}
const ob = new IntersectionObserver(obCallback);
ob.observe(finish);
