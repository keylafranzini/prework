function campoText(){
    let divText = document.createElement('div');
    document.getElementById('form-right').appendChild(divText);

    let labelText = document.createElement('label');
    let inputValue = document.getElementById('text').value;

    labelText.innerText = inputValue;
    document.getElementById('form-right').appendChild(labelText);

    let inputText = document.createElement('input');
    inputText.type = "text";
    inputText.name = inputValue;
    document.getElementById('form-right').appendChild(inputText);

    
}

function campoNumber(){

    let divNumber = document.createElement('div');
    document.getElementById('form-right').appendChild(divNumber);

    let labelNumber = document.createElement('label');
    let inputValue = document.getElementById('number').value;
    labelNumber.innerText = inputValue;
    document.getElementById('form-right').appendChild(labelNumber);

    let inputNumber = document.createElement('input');
    inputNumber.type = "number";
    inputNumber.name = inputValue;
    document.getElementById('form-right').appendChild(inputNumber);
}

function campoMail(){
    let divMail = document.createElement('div');
    document.getElementById('form-right').appendChild(divMail);

    let labelMail = document.createElement('label');
    let inputValue = document.getElementById('mail').value;
    labelMail.innerText = inputValue;
    document.getElementById('form-right').appendChild(labelMail);

    let inputMail = document.createElement('input');
    inputMail.type = "mail";
    inputMail.name = inputValue;
    document.getElementById('form-right').appendChild(inputMail);
}

function campoList(){
    if (document.querySelector('.si').checked) {
        let inputValue = []; 
        inputValue = document.getElementById('list').value;
        inputValue = inputValue.split(',');
        
        for(let i of inputValue) {
            let inputRadio = document.createElement('input');
            inputRadio.type="radio";
            inputRadio.name="radio";
            let divRadio = document.createElement('div');
            divRadio.className = "div-radio-button";
            let labelRadio = document.createElement('label');
            labelRadio.innerText = i;
            document.querySelector('.form-right').appendChild(divRadio);   
            document.querySelector('.div-radio-button').appendChild(labelRadio);
            document.querySelector('.div-radio-button').appendChild(inputRadio);
        };
    } else if (document.querySelector('.no').checked) {
        let inputValue = []; 
        inputValue = document.getElementById('list').value;
        inputValue = inputValue.split(',');
        
        for(let i of inputValue) {
            let inputCheckbox = document.createElement('input');
            inputCheckbox.type="checkbox";
            inputCheckbox.name="checkbox";
            
            let divRadio = document.createElement('div');
            divRadio.className = "div-radio-button";
            let labelRadio = document.createElement('label');
            labelRadio.innerText = i;
            document.querySelector('.form-right').appendChild(divRadio);   
            document.querySelector('.div-radio-button').appendChild(labelRadio);
            document.querySelector('.div-radio-button').appendChild(inputCheckbox);
        };
    }
    else {
        alert("Indique si se pueden selecionar varias opciones o no");
    }
}

function button () {
    let divbutton = document.createElement('div');
    //Se crea input
    let inputbutton = document.createElement('input');
    inputbutton.type="button";
    //Se coge valor que se introduce en el input de la izquierda
    let inputValue = document.getElementById('boton').value;
    //Se mete el texto de la izquierda en el label
    inputbutton.value = inputValue;
    //Se crea en la derecha el label y el input
    document.getElementById('form-right').appendChild(divbutton);
    document.getElementById('form-right').appendChild(inputbutton);
}
