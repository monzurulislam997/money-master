//get all input value function
function getInputValue(inputId){
    const inputText =document.getElementById(inputId).value;
    // error handle
      
    const inputValue =parseFloat(inputText);
    if(inputValue<=0){
      return console.log(inputValue,"h")
    }else
    {
      return console.log(inputValue)
    }
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
   const afterCostBalance =incomeAmount-(foodCost+rentCost+clothesCost);
    
    showAmount('total-expenses').innerText=totalCost;
     showAmount('afterCost-balance').innerText=afterCostBalance;  
   

})


//save update
document.getElementById('save-btn').addEventListener('click',function(){

 //save update
 const incomeAmount = getInputValue('income-input');
 const savePercentage =  getInputValue("savePercentage-input");
 const savingAmount =incomeAmount*(savePercentage/100);
    document.getElementById("saving-amount").innerText=savingAmount;
   const afterCostBalanceText =showAmount("afterCost-balance").innerText;
  
    const afterCostBalance =parseFloat(afterCostBalanceText)
    
    const remainingAmount = afterCostBalance- savingAmount;
  
  document.getElementById("remaining-amount").innerText=remainingAmount;

  
 

})
