//get all input value function
function getInputValue(inputId){
    const inputText =document.getElementById(inputId).value;
 
      
    const inputValue =parseFloat(inputText);
   return inputValue
    
}
//get all changeable innertext fucntion
    function showAmount (textId){
        return innerTextValue= document.getElementById(textId);

    }

    

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
      console.log("shows 2")
      
      showAmount('total-expenses').innerText="00 ";
     showAmount('afterCost-balance').innerText="00";  
 
     } 
     else if(isNaN(incomeAmount) || isNaN(foodCost) || isNaN(rentCost) ||isNaN(clothesCost) ){
      errorMessage2.style.display="block";
      errorMessage.style.display="none";
      showAmount('total-expenses').innerText="00";
     showAmount('afterCost-balance').innerText="00"; 
      console.log("shows1")
    } 


      else if(totalCost>incomeAmount){
        errorMessage3.style.display="block";
        showAmount('total-expenses').innerText="00";
     showAmount('afterCost-balance').innerText="00"; 
     console.log('Shows 3')
      }

    else {
      errorMessage.style.display="none";
      errorMessage2.style.display="none"
      errorMessage3.style.display="none"
      showAmount('total-expenses').innerText="00";
      showAmount('afterCost-balance').innerText="00"; 
        const afterCostBalance =incomeAmount-(foodCost+rentCost+clothesCost);
    
    showAmount('total-expenses').innerText=totalCost;
     showAmount('afterCost-balance').innerText=afterCostBalance;  

    }

})



//error handling end

//save update
document.getElementById('save-btn').addEventListener('click',function(){

 //save update
 const incomeAmount = getInputValue('income-input');
 const savePercentage =  getInputValue("savePercentage-input");
  const savingAmount =incomeAmount*(savePercentage/100);

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
    
   const afterCostBalanceText =showAmount("afterCost-balance").innerText;
  
    const afterCostBalance =parseFloat(afterCostBalanceText)
    
    const remainingAmount = afterCostBalance- savingAmount;
      document.getElementById("remaining-amount").innerText=remainingAmount;
 

  

  }
  
 

})
