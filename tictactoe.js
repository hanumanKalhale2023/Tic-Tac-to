gsap.to("#box",{
    x:900,
    duration:2,
    delay:1
})
let boxes = document.querySelectorAll(".box");

let reserBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [2, 5, 8],
    [6, 7, 8],
    
];


const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msg.innerHTML="";
    msgContainer.classList.add("hide");

}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if (turnO)           //Player O
        {
            box.innerText = "O"
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true
        }
        box.disabled = true
        checkWinner();
    })
}
);


     const disableBoxes =() =>{
        for (let box of boxes)
        {
            box.disabled = true;
        }
     };



     const enableBoxes =() =>{
        for (let box of boxes)
        {
            box.disabled = false;
            box.innerText ="";
        }
     };



const showWinner = (winner) => {
    msg.innerText =`Cngratulations , Winner is ${winner}`;
    msg.style.backgroundImage="url('firecrackers.jpeg')";

    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    var dra="Math Draw"
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val && pos1val=== pos3val) {
                // console.log("winner", pos1val);
                showWinner(pos1val);

            }

            }
           

        }
        console.log( winPatterns[0], winPatterns[1],winPatterns[2],);

        console.log(
             boxes[winPatterns[0]].innerText,
             boxes[winPatterns[1]].innerText,
             boxes[winPatterns[2]].innerText,
            );

    }



newGameBtn.addEventListener("click",resetGame);
reserBtn.addEventListener("click",resetGame);
