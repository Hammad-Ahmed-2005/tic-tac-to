let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container"); // Fixed typo
let msg = document.querySelector("#msg");
let turn=true;



const winPatterns= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box has been clicked");
        if (turn) {
            box.innerText="o";
            box.classList.add("o");
            turn = false;
        } else {
            box.innerText = "x";
            box.classList.add("x");
            turn = true;
        }

        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}


const checkWinner=()=>{
    for (let patter of winPatterns){
        let pos1val=boxes[patter[0]].innerText;
        let pos2val=boxes[patter[1]].innerText;
        let pos3val=boxes[patter[2]].innerText
       if (pos1val!=="" && pos2val!=="" && pos3val!==""){
        if (pos1val===pos2val && pos2val===pos3val){
            console.log("winner", pos1val);
        showWinner(pos1val);
        disableAllBoxes();
        return;
        }
       }
    }
}

const disableAllBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
}
const enable=()=>{
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const enableBoxes=()=>{
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableboxes=()=>{
    for (box of boxes){
        box.disabled=true;
        
    }
}
const resetGame=()=>{
    turn="ture";
    enableBoxes();
    msgContainer.classList.add("hide"); 
}
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);


