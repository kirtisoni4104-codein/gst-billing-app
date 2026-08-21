// Current Bill Management


// Get current bill
function getBill() {

    const savedBill =
        localStorage.getItem("bill");

    if (savedBill) {

        return JSON.parse(savedBill);

    }

    return [];

}


// Save current bill
function saveBill(bill) {

    localStorage.setItem(
        "bill",
        JSON.stringify(bill)
    );

}


// Add product to bill
function addProductToBill(product) {

    const bill = getBill();

    bill.push(product);

    saveBill(bill);

}


// Remove product from bill
function removeProductFromBill(index) {

    const bill = getBill();

    bill.splice(index, 1);

    saveBill(bill);

}


// Clear complete bill
function clearBill() {

    localStorage.removeItem("bill");

}


// Calculate bill summary
function calculateBillSummary(invoiceDiscount = 0) {

    const bill = getBill();


    let subtotal = 0;

    let productDiscount = 0;

    let taxableAmount = 0;

    let totalGST = 0;


    bill.forEach(function(item) {

        subtotal += item.amount;

        productDiscount += item.discount;

        taxableAmount += item.taxableAmount;

        totalGST += item.gstAmount;

    });


    // Apply invoice discount
    taxableAmount =
        taxableAmount - invoiceDiscount;


    // Prevent negative taxable amount
    if (taxableAmount < 0) {

        taxableAmount = 0;

    }


    // Recalculate GST after invoice discount
    let adjustedGST = 0;


    if (taxableAmount > 0 && totalGST > 0) {

        // This will later be improved
        // for multiple GST rates.

        const originalTaxable =
            taxableAmount + invoiceDiscount;

        adjustedGST =
            totalGST *
            (taxableAmount / originalTaxable);

    }


    const grandTotal =
        taxableAmount + adjustedGST;


    return {

        subtotal: subtotal,

        productDiscount: productDiscount,

        invoiceDiscount: invoiceDiscount,

        taxableAmount: taxableAmount,

        totalGST: adjustedGST,

        grandTotal: grandTotal

    };

}