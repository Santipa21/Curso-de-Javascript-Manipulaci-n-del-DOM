// const container = document.querySelector(".container");
// const button = document.querySelector("button");

// container.addEventListener("mouseover",() =>{
//     container.style.backgroundColor = "purple";
// });
// container.addEventListener("mouseout",() =>{
//     container.style.backgroundColor = "red";
// });
// // button.addEventListener("click", ()=>{
// //     alert("Button clicked")
// // })
// const buttonClickCallback =  () => {
//     alert("Button Clicked")
// };
// button.addEventListener("click", buttonClickCallback);
// setTimeout(()=>{
//     button.removeEventListener("click",buttonClickCallback)
// },2000)

const button = document.querySelector("button");

const buttonClicked = (e) => {
    console.log(e.target)
    console.log(e.target.id)
    console.log(e.target.textContent)
};

button.addEventListener("click", buttonClicked);