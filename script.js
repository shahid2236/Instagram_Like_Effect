var fStatus = document.querySelector("h5");

var addFriend = document.querySelector("#add");

var check = 0;

addFriend.addEventListener("click", function(){
    if(check==0){
    fStatus.innerHTML = "Friends"
    fStatus.style.color ="green"
    addFriend.innerHTML = "Remove Friend"
    check = 1;

    }else{
        fStatus.innerHTML = "Stranger"
    fStatus.style.color ="red"
    addFriend.innerHTML = "Add Friend"
    check = 0;
    }
   
})

// var removeFrined = document.querySelector("#remove");
// removeFrined.addEventListener("click", function(){
//     fStatus.innerHTML = "Stranger";
//     fStatus.style.color = "red";
// })


