let addFrndBtn = document.querySelector(".btn .addFrnd");
let isStatus = document.querySelector(".status h5");
let frndList = document.querySelector(".frnd-list");
let crossIcon = document.querySelector(".frnd-list .list1 i");
let viewFrndList = document.querySelector(".box .view-frnd-list");
let frndBtn = document.querySelectorAll(".main .frnd-list button");

let flag = 0;

addFrndBtn.addEventListener("click", () => {
    if(flag == 0){
        isStatus.style.color = "green";
        isStatus.style.transition = '0.3s ease-in-out';
        isStatus.innerHTML = "Friends";
        flag = 1;
        addFrndBtn.innerHTML = "Remove";
        viewFrndList.style.display = 'initial';
    }
    else{
        isStatus.style.color = "red";
        isStatus.style.transition = '0.3s ease-in-out';
        isStatus.innerHTML = "Not Friends";
        flag = 0;
        addFrndBtn.innerHTML = "Add Friend";
        viewFrndList.style.display = 'none';
    }
    
});

crossIcon.addEventListener("click", () => {
    frndList.style.display = 'none';
});

viewFrndList.addEventListener("click", () => {
    frndList.style.display = 'initial';
});

frndBtn.forEach(button => {
    button.addEventListener("click", () => {
        if(button.textContent === 'Add Friend'){
            button.textContent = "Friends";
            button.style.color = 'green';
        }
        else{
            button.textContent = 'Add Friend';
            button.style.color = 'black';
        }
    });
});
