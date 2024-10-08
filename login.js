let submitlog = document.querySelector(".submitlog"),
usernameandpass1 = document.querySelector(".usernamelog1"),
usernameandpass2 = document.querySelector(".usernamelog2"),
plese = document.querySelector(".Plese");

submitlog.addEventListener("click", () => {
    let valueusername1 = usernameandpass1.value;
    let valueusername2 = usernameandpass2.value;
    if (valueusername1 == '' || valueusername2 == ''){
        plese.innerText = "Plese Enter User Name or Pass";
    }else {
        window.open('index2.html');
    }
});
