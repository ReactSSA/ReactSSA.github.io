var config = {
    apiKey: "AIzaSyDthLRn1-FtkR9duSYmGO5vcxv27Mw6zfY",
    authDomain: "reactssa-d6ce0.firebaseapp.com",
    databaseURL: "https://reactssa-d6ce0.firebaseio.com",
    projectId: "reactssa-d6ce0",
    storageBucket: "reactssa-d6ce0.appspot.com",
    messagingSenderId: "146802970530"
};
firebase.initializeApp(config);

var emailsStore = firebase.database().ref("emails");

document.getElementById("meetup-notification-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var emailInputEl = document.getElementById("email");
    var button = document.getElementById("button");

    emailsStore.push({
        email: emailInputEl.value
    }).then(function () {
        emailInputEl.disabled = true;
        button.classList = 'active';
    }).catch(function () {
        emailInputEl.value = "Erro, nos avise lá no github!";
    });
});

document.querySelectorAll('a[href^="#"]').forEach(function(element) {
    element.addEventListener('click', function (event) {
        var target = document.getElementById(this.href.split('#')[1]);
        scrollWindowTo(target.offsetTop);
        event.preventDefault();
    })
}, this);

function scrollWindowTo(pos){
    var currentPos = Math.round(window.scrollY);
    var direction = currentPos < pos ? 1 : -1;
    var speed = 1;
    for (var index = currentPos; index !== pos; index += direction) {
        setTimeout(function(i) {
            window.scrollTo(0,i);
        }, speed, index);
        speed+=0.3;
    }
}

var headerElement = document.getElementsByClassName('general-header')[0];
updateClassHeader();
window.onscroll = function () {
    updateClassHeader();
}

function updateClassHeader(){
    headerElement.classList = "general-header " + (window.scrollY > 0 ? "scrolling" : "");
}