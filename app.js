//get all input value function
function getInputValue(inputId){
    const inputText =document.getElementById(inputId).value;
     const inputValue =parseFloat(inputText);
     return inputValue
 }
//get all changeable innertext fucntion
    function primaryTextAmount (textId){
        return innerTextValue= document.getElementById(textId);
    }

    
    //caculate button event listener
document.getElementById('calculate-btn').addEventListener('click',function(){
   const incomeAmount = getInputValue('income-input');
   const foodCost =getInputValue('foodCost-input');
   const rentCost =getInputValue('rentCost-input');
   const clothesCost =getInputValue('clothesCost-input');
   const totalCost =foodCost+rentCost+clothesCost;
    
    const errorMessage=document.getElementById("error-message");
    const errorMessage2=document.getElementById("error-message2");
    const errorMessage3=document.getElementById("error-message3");

      //error handling
     if(incomeAmount<0  || foodCost<0  || rentCost<0  || clothesCost<0 ){
      errorMessage.style.display="block";
      errorMessage2.style.display="none";
      primaryTextAmount('total-expenses').innerText="00 ";
     primaryTextAmount('afterCost-balance').innerText="00";  
 
     } 
     else if(isNaN(incomeAmount) || isNaN(foodCost) || isNaN(rentCost) ||isNaN(clothesCost) ){
      errorMessage2.style.display="block";
      errorMessage.style.display="none";
      primaryTextAmount('total-expenses').innerText="00";
     primaryTextAmount('afterCost-balance').innerText="00"; 
      
    } 

      else if(totalCost>incomeAmount){
        errorMessage3.style.display="block";
        primaryTextAmount('total-expenses').innerText="00";
      primaryTextAmount('afterCost-balance').innerText="00"; 
      
      }

    else {
      errorMessage.style.display="none";
      errorMessage2.style.display="none"
      errorMessage3.style.display="none"
      primaryTextAmount('total-expenses').innerText="00";
      primaryTextAmount('afterCost-balance').innerText="00"; 
      const afterCostBalance =incomeAmount-(foodCost+rentCost+clothesCost);
    
      primaryTextAmount('total-expenses').innerText=totalCost;
      primaryTextAmount('afterCost-balance').innerText=afterCostBalance;  

    }

})


//save update add event
   document.getElementById('save-btn').addEventListener('click',function(){ 
   const incomeAmount = getInputValue('income-input');
   const savePercentage =  getInputValue("savePercentage-input");
   const savingAmount =incomeAmount*(savePercentage/100);
    //error handling 
  if(savePercentage<0 || isNaN(incomeAmount ) ){
    document.getElementById("save-error-message").style.display="block"
    document.getElementById("saving-amount").innerText='00';
    document.getElementById("remaining-amount").innerText="00";
  } 
  else if(savePercentage>100){
    document.getElementById("save-error-message").style.display="none"
    document.getElementById("save-error-message2").style.display="block"
  }
  
  else {
    document.getElementById("save-error-message").style.display="none"
    document.getElementById("save-error-message2").style.display="none"
    document.getElementById("saving-amount").innerText=savingAmount;
    
    const afterCostBalanceText =primaryTextAmount("afterCost-balance").innerText;
    const afterCostBalance =parseFloat(afterCostBalanceText)
    const remainingAmount = afterCostBalance- savingAmount;
    document.getElementById("remaining-amount").innerText=remainingAmount;
   }
  })
