const values = {
    input: ''
};

function removeOutput()
{
    const customerOutput = document.querySelector(".customer__output");
    if(customerOutput)
    {
        customerOutput.remove();
    }
}

function showOutput()
{
    const customer = document.querySelector(".customer");
    const customerOutput = document.createElement("div");
    customerOutput.innerText = `Customer Id:  ${values.input}`;
    customerOutput.classList.add("customer__output");
    customer.appendChild(customerOutput);
}

function handleSubmit(e)
{
    e.preventDefault();
    const input = document.querySelector(".input");
    showOutput();

    input.value = '';
    input.focus();

    const submitBtn = document.querySelector(".btn--submit");
    submitBtn.setAttribute("disabled", true);
    submitBtn.classList.add("disabled");
}

window.onload = function(){
    const input = document.querySelector(".input");
    const inputWrapper = document.querySelector(".input__wrapper");
    const submitBtn = document.querySelector(".btn--submit");

    
    submitBtn.setAttribute("disabled", true);
    submitBtn.classList.add("disabled");

    input.focus(); 

    input.oninput = function(e){
        removeOutput();
        let value = e.target.value;
        value = value.toString().trim();
        
        if(value.length !== 8)
        {
            let error = document.querySelector(".error");
            if(!error)
            {
                error = document.createElement("div");
                error.classList.add("error");
                error.innerText = "Customer Id must be exactly 8 characters.";
                inputWrapper.after(error);
            }

            submitBtn.setAttribute("disabled", true);
            submitBtn.classList.add("disabled");
        }
        else 
        {
            values.input = value;
            const error = document.querySelector(".error");
            if(error)
            {
                error.remove();
            }
           
            submitBtn.removeAttribute("disabled");
            submitBtn.classList.remove("disabled");
        }
    }
}