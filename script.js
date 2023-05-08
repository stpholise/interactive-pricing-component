const billing = document.getElementById("billing");
const views = document.querySelector(".views")
const price  =  document.querySelector(".price")
const slide  =  document.querySelector(".slider")
const discount = document.querySelector(".discount");
const pageviews =["10k", "50k", "100k", "500k", "1m"];
const perMonth =[8, 12, 16, 24, 36]


// BILLING
// ========
let yearlyPay = false ;

billing.addEventListener("change", ()=>{
    if(yearlyPay == false){
        yearlyPay = true;
        console.log(yearlyPay)
    } else {
        yearlyPay = false
        console.log(yearlyPay)

    }
    updateval()
})



// SLIDER
// ========
slide.addEventListener("input", (e)=>{
    updateval()         // USES The update value function to change the price and pageviews
    let slideColor = slide.value * 25  //to separate highest and lowest values 
    e.currentTarget.style.background = `
    linear-gradient(90deg, var(--Soft-Cyan-Full-Slider-Bar) 0 ${slideColor}%,
     var(--Light-Grayish-Blue-Empty-Slider-Bar) 0 100%)  `
})



function updateval(){
    if(yearlyPay){
        price.textContent = perMonth[slide.value] * 0.75  
        console.log(perMonth[slide.value] * 0.75  )
    }else {
        price.textContent = perMonth[slide.value] 
        
    }
    views.textContent = pageviews[slide.value]
}




// DISCOUNT
// ============

window.addEventListener("load", (e)=>{

    if (document.body.clientWidth < 500){
        discount.textContent =" -25%"
      
     }else{
         discount.textContent ="25% discount"
     }
     price.textContent = perMonth[slide.value]
})

