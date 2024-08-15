const form = document.getElementById("myForm");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const name =  form.elements["name"].value;
    console.log(name);
});