const bid = document.getElementById("bid"); 
const edu = document.getElementById("edu");
const fam = document.getElementById("fam"); 
const skill = document.getElementsByClassName("skill"); 
const age = document.getElementByName("age");
const rep = document.getElementsByClassName("rep");

const calculate = () => {
    let price = Number(bid.value) 
    price = getRadioValue(edu, price);

    const getRadioValue = (edu, price) => {  
        edu.forEach(item => {
            if (item.checked) {
                price = price * Number(edu.value)
            }
        })
        return price;
    }
    
    price = getRadioValue(fam, price);
    
    const getRadioValue = (fam, price) => {  
        fam.forEach(item => {
            if (item.checked) {
                price = price * Number(fam.value)
            }
        })
        return price;
    }
    
    price = getCheckboxValuesForLoop(skill, price);
    
    const getCheckboxValuesForLoop = (skill, price) => { 
        for (let i=0; i < skill.length; i++) {  
            if (skill[i].checked) {
                price = price + Number(skill[i].value)
            }
        }
        return price;
    }

    price = getRadioValue(age, price);
    
    const getRadioValue = (age, price) => {  
        age.forEach(item => {
            if (item.checked) {
                price = price * Number(age.value)
            }
        })
        return price;
    }

    price = getCheckboxValuesForLoop(rep, price);

    const getCheckboxValuesForLoop = (rep, price) => { 
        for (let i=0; i < rep.length; i++) {  
            if (skill[i].checked) {
                price = price + Number(rep[i].value)
            }
        }
        return price;
    }

    let person = {

            broom_name: name,
            
            broom_price: price,
            
            letter: letter
            
        } 

    button.addEventListener("click", calculate);
    document.getElementById("result").innerHTML = `The price for ${broom_name} is ${broom_price}. Your love letter is "${letter}"`;
}

