// GST Billing Calculator


// Calculate product amount
function calculateAmount(price, quantity) {

    return price * quantity;

}


// Calculate discount
function calculateDiscount(amount, discount, discountType) {

    if (discountType === "percentage") {

        return amount * discount / 100;

    }

    return discount;

}


// Calculate taxable amount
function calculateTaxableAmount(amount, discount) {

    return amount - discount;

}


// Calculate GST amount
function calculateGST(taxableAmount, gstRate) {

    return taxableAmount * gstRate / 100;

}


// Calculate final product total
function calculateProductTotal(taxableAmount, gstAmount) {

    return taxableAmount + gstAmount;

}


// Calculate complete product bill
function calculateProductBill(
    price,
    quantity,
    discount,
    discountType,
    gstRate
) {

    const amount =
        calculateAmount(price, quantity);


    const productDiscount =
        calculateDiscount(
            amount,
            discount,
            discountType
        );


    const taxableAmount =
        calculateTaxableAmount(
            amount,
            productDiscount
        );


    const gstAmount =
        calculateGST(
            taxableAmount,
            gstRate
        );


    const productTotal =
        calculateProductTotal(
            taxableAmount,
            gstAmount
        );


    return {

        amount: amount,

        discount: productDiscount,

        taxableAmount: taxableAmount,

        gstAmount: gstAmount,

        total: productTotal

    };

}