let input_val = document.querySelector("#input_field")
let need_btn = document.querySelector("#addNeed")
let have_btn = document.querySelector("#addHave")
let needlist = document.querySelector("#need_list")
let havelist = document.querySelector("#have_list")
let check_btn = document.querySelectorAll(".checkbox_btn")


// need button function.
need_btn.addEventListener("click", function (event) {
    event.preventDefault();
   
    needlist.innerHTML += `<li class="checkbox_btn"> 
                            <input type="checkbox">
                            ${input_val.value}
                            <a class="cross" >&#10006;</a>
                            </li>`
    crossbuttoneventlistener();
})

// have button function.
have_btn.addEventListener("click", function (event) {
    event.preventDefault();
    havelist.innerHTML += `<li class="checkbox_btn">
                            <input type="checkbox" checked>
                            ${input_val.value}
                            <a class="cross" >&#10006;</a>
                            </li>`
    console.log(havelist)
    crossbuttoneventlistener();
})

// cross button functionality.
function crossbuttoneventlistener() {
    let cross_btn = document.querySelectorAll(".cross")
    cross_btn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            let curr_val = e.target
            console.log(curr_val)

            // way to remove the parent element by accessing its child element.
            // here the curr_val is the child of the li tag which we are going to remove .

            // there are two ways -:
            // curr_val.parentNode.parentNode.removeChild(curr_val.parentNode)
            // or  
            curr_val.parentElement.remove();


        })
    })
}
crossbuttoneventlistener();



