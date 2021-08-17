function getInputeValue(inputeId) {
    debugger;
        const inputeField = document.getElementById(inputeId);
    const inputeAmountText = inputeField.value;
    // console.log(inputeAmountText);
    const depositAmount = parseFloat(inputeAmountText); 
    inputeField.value='';
    return depositAmount;
       
}
//  const depositAmount=getInputeValue('deposit-input');
// const withdrawAmount=getInputeValue('withdraw-input')
function updateTotalfield(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
     const TotalText = totalElement.innerText;
     
    
     const previousTotal = parseFloat(TotalText);
 
     totalElement.innerText = previousTotal + amount; 
}
function getCurrentBalace(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal
}
function updateBalace(amount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    previousBalanceTotal=getCurrentBalace();
    if(isAdd==true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}




document.getElementById('deposit-button').addEventListener('click', function () {
     
    // const depositInput = document.getElementById('deposit-input');
    // const inputeAmountText = depositInput.value;
    // // console.log(inputeAmountText);
    // const depositAmount = parseFloat(inputeAmountText);
    const depositAmount=getInputeValue('deposit-input');
    if(depositAmount>0){
        updateTotalfield('deposit-total',depositAmount);
        updateBalace(depositAmount,true)
    }
    

    // get and update deposit total 
// const depositTotal = document.getElementById('deposit-total');
//      const depositTotalText = depositTotal.innerText;
     
//     //  console.log(depositTotalText)
//      const previousDepositTotal = parseFloat(depositTotalText);
 
//      depositTotal.innerText = previousDepositTotal + depositAmount; 
// updateTotalfield('deposit-total',depositAmount);

    //  update balance
    //  const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    // updateBalace(depositAmount,true)



})
//     // handle withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {
        // console.log('ahdfjaks')
    // const withdrawInput = document.getElementById('withdraw-input');
    //     const withdrawAmountText = withdrawInput.value;
    //     // console.log(withdrawAmountText)
    //     const withdrawAmount = parseFloat(withdrawAmountText); 
    const withdrawAmount=getInputeValue('withdraw-input')
    const currentBalace =getCurrentBalace();
    
    if(withdrawAmount>0 && withdrawAmount<currentBalace){
        updateTotalfield('withdraw-total',withdrawAmount)
    updateBalace(withdrawAmount,false);
    }

// get and update withdraw total
    
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
// withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    // updateTotalfield('withdraw-total',withdrawAmount)
     
     // update balance after withdraw
    
        // const balanceTotal = document.getElementById('balance-total');
        // const balanceTotalText = balanceTotal.innerText;
        // const previousBalanceTotal = parseFloat(balanceTotalText);
    
        // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
        // updateBalace(withdrawAmount,false);

})

