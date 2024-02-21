// const button = document.querySelector('.bookBtn1');
// button.addEventListener('click', ()=>{
//      console.log('button clicked', button);
//    })
const detailSubmit = document.querySelector('.formData');

detailSubmit.addEventListener('submit', (event)=>{
    event.preventDefault();

    const detailFill = new FormData(event.target)
    const formDetails = {} 

    for (const [key, value] of detailFill.entries()) {
        formDetails[key] = value;
    }
    console.log(formDetails);
})

// const formSubmit = document.getElementById('loginForm');
// formSubmit.addEventListener('submit', (event)=>{
//     event.preventDefault();

//     const formFill = new FormData(event.target)
//     const formValues = {}

//     for(const [key, value] of formFill.entries()){
//         formValues[key] = value;
//     }
//     console.log(formValues);
// })
