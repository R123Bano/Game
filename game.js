let stone=document.querySelector("#stone");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let msg=document.querySelector("#msg-content");
let msgDiv=document.querySelector(".msg");
let x=document.querySelector("#user_score");
let userScore=0;
let y=document.querySelector("#comp_score");
let computerScore=0;
const addborder=(element) => {
    element.style.border = "4px solid black";
    //element.style.borderRadius = "10px";
}
const addborderC=(element) => {
    element.style.border = "4px solid rgb(99, 6, 60)";
    //element.style.borderRadius = "10px";
    setTimeout(() => {
        element.style.border = "none";
    }, 1500);
}
const removeborder=(element) => {
    element.style.border = "none";
    //element.style.borderRadius = "100px";
}
const clicked=(element)=>{
    console.log(`you choose ${element.id}`)
    playGame(element.id);
}
const computerChoice=()=>{
    let choices=["stone","paper","scissor"] ;
    let randomIndex=Math.floor(Math.random()*3);
    return choices[randomIndex];
}
const playGame=(userChoice)=>{
    let computer=computerChoice();
    if(computer==="stone"){
        addborderC(stone2);
        removeborder(paper2);
        removeborder(scissor2);
    }
    if(computer==="paper"){
        addborderC(paper2);
        removeborder(stone2);
        removeborder(scissor2);
    }
    if(computer==="scissor"){
        addborderC(scissor2);
        removeborder(stone2);
        removeborder(paper2);
    }
    console.log(`computer choose ${computer}`);
    if(userChoice===computer){
        msg.innerText="Oops! Game was drawn Play again! ";
        console.log("Oops! Game was drawn Play again!");
        msg.style.backgroundColor="rgb(153, 217, 234)";
        msg.style.color="black";
    }else if((userChoice==="stone" && computer==="scissor") || 
              (userChoice==="paper" && computer==="stone") || 
              (userChoice==="scissor" && computer==="paper")){
        userScore++;
        x.innerText=userScore;
        msg.innerText=`${userChoice} beats ${computer}. You win!`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
        console.log(`${userChoice} beats ${computer}. You win!`);
        console.log(`User Score: ${userScore}, Computer Score: ${computerScore}`);
    }else{
        computerScore++;
        y.innerText=computerScore;
        msg.innerText=`${computer} beats ${userChoice}. You lose!`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
        console.log(`${computer} beats ${userChoice}. You lose!`);
        console.log(`User Score: ${userScore}, Computer Score: ${computerScore}`);

    }
    
}
// stone.addEventListener("mouseover",()=>addborder(stone));
// stone.addEventListener("mouseoverout",()=>removeborder(paper));
// stone.addEventListener("mouseoverout",()=>removeborder(scissor));
// paper.addEventListener("mouseover",()=>addborder(paper));
// paper.addEventListener("mouseover",()=>removeborder(stone));
// paper.addEventListener("mouseover",()=>removeborder(scissor));
// scissor.addEventListener("mouseover",()=>addborder(scissor));
// scissor.addEventListener("mouseover",()=>removeborder(stone));
// scissor.addEventListener("mouseover",()=>removeborder(paper));
// stone.addEventListener("click",()=> clicked(stone));
// paper.addEventListener("click",()=> clicked(paper));
// scissor.addEventListener("click",()=> clicked(scissor));

stone.addEventListener("mouseover",()=>addborder(stone));
paper.addEventListener("mouseover",()=>addborder(paper));
scissor.addEventListener("mouseover",()=>addborder(scissor));
stone.addEventListener("mouseout",()=>removeborder(stone));
scissor.addEventListener("mouseout",()=>removeborder(scissor));
paper.addEventListener("mouseout",()=>removeborder(paper));
stone.addEventListener("click",()=> clicked(stone));
paper.addEventListener("click",()=> clicked(paper));
scissor.addEventListener("click",()=> clicked(scissor));
