function calculate (payable, hasServiceCharge){
    payable = hasServiceCharge ? payable = payable * 1.1 : payable;
    // if payable == hasServiceCharge?
    // if equal payable = payable * 1.1
    // if not payable = payable 
    return payable * 1.07;
}

module.exports = calculate;
