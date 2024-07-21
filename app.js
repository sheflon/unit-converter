// target the menu btn

const menu_btn = document.querySelector(".menu-btn")

// add a click event listner to it
menu_btn.addEventListener("click", show_nav)

function show_nav(){
    // target the nav
    document.querySelector("nav").classList.toggle("slide")

    // change the bg to the menu buton
    menu_btn.classList.toggle("change-bg")
}


// logic to slide theme ball

document.querySelector(".theme-btn").addEventListener("click", slide_theme_ball)

function slide_theme_ball(){
    document.querySelector(".theme-ball").classList.toggle("theme-slide")
    document.querySelector("body").classList.toggle("dark-theme-body")
    document.querySelector("header").classList.toggle("dark-theme-header")
    document.querySelector("form").classList.toggle("dark-theme-form")
  
}

// conversion start here
// targer the form
const convert_form = document.querySelector("form")

// add submit event listener to the form
convert_form.addEventListener("submit", converter)

function converter(event){
    event.preventDefault() //preventing the form from reloading the page

    let from_unit = document.querySelector(".from-unit").value
    let to_unit = document.querySelector(".to-unit").value

    let user_input = Number(document.querySelector(".user-input").value)
    let result_display = document.querySelector(".result")

    let result = 0

    if(from_unit === "cm" && to_unit === "cm"){

        result = user_input * 1
        result_display.value = result
    }

    else if(from_unit === "cm" && to_unit === "m"){
        result = user_input / 100
        result_display.value = result
    }

    else if(from_unit === "m" && to_unit === "m"){
        result = user_input / 100
        result_display.value = result
    }

    else if(from_unit === "m" && to_unit === "cm"){
        result = user_input * 100
        result_display.value = result
    
    }


    else{
        result_display.value = "Invalid Input!"
    }




    }
    



document.querySelector(".year").innerHTML = new Date().getFullYear()

