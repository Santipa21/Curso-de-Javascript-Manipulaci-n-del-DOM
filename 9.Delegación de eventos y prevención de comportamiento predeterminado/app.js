// const listItems = document.querySelectorAll("li");

// listItems.forEach((item) => {
//     item.addEventListener("click", (e)=>{
//         e.target.classList.toggle("highlight");
//     });
// });

const list =  document.querySelector("ul");

list.addEventListener('click', (e) => {
    e.target.closest('li').classList.toggle('highlight');
})