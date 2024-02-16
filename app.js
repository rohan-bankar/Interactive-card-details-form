
const button = document.querySelector(".btn");

button.addEventListener('click',()=>{
    const name = document.querySelector(".userName").value;
    document.querySelector(".user").innerHTML = `${name}`;

    const month = parseInt(document.querySelector(".month").value);
    const year = parseInt(document.querySelector(".year").value);
    if((month === '' || isNaN(month)) && (year === '' || isNaN(year))){
    document.querySelector(".date-blank-error").style.display = 'block';    
    }else{
        document.querySelector(".date-blank-error").style.display = 'none'; 
        document.querySelector(".expMonth").innerHTML = `${month}`;
        document.querySelector(".expYear").innerHTML = `${year}`;
    }
    
    const cvc = parseInt(document.querySelector(".cvc-number").value);
    if(isNaN(cvc) || cvc === ''){
        document.querySelector(".cvc-error").style.display = 'block';
    }else{
        document.querySelector(".cvc-error").style.display = 'none';
        document.querySelector(".userCvc").innerHTML = `${cvc}`;
    }

    let userInput = document.querySelector(".userCardNumber").value;
    let number = userInput.replace(/\s/g, '');
    if(userInput.length !== 16 && isNaN(parseInt(number))){
        document.querySelector(".card-number-error").style.display = 'block'
    }else{
        number = number.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
        document.querySelector(".card-number-error").style.display = 'none';
        document.querySelector(".card-number").innerHTML = `${number}`
    }

    if(((month !== '' && !isNaN(month) && year !== '' && !isNaN(year) && cvc !==''&& !isNaN(cvc)) && (userInput.length === 16 && !isNaN(parseInt(number))))){
        document.querySelector(".userInfoCard").style.display = 'none';
        document.querySelector(".complete-state").style.display = 'block';
    }else{
        document.querySelector(".userInfoCard").style.display = 'block';
        document.querySelector(".complete-state").style.display = 'none';
    }

});