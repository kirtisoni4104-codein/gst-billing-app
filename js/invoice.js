// Invoice Management


// Generate invoice number
function generateInvoiceNumber() {

    const number =
        Math.floor(100000 + Math.random() * 900000);

    return "INV-" + number;

}


// Get today's date
function getInvoiceDate() {

    const today = new Date();

    return today.toLocaleDateString("en-IN");

}


// Get saved customer
function getCustomer() {

    const savedCustomer =
        localStorage.getItem("customer");

    if (savedCustomer) {

        return JSON.parse(savedCustomer);

    }

    return null;

}


// Calculate GST split
function calculateGSTSplit(gstAmount, billingType) {

    if (billingType === "interstate") {

        return {

            cgst: 0,

            sgst: 0,

            igst: gstAmount

        };

    }


    return {

        cgst: gstAmount / 2,

        sgst: gstAmount / 2,

        igst: 0

    };

}


// Start a new bill
function startNewBill() {

    localStorage.removeItem("bill");

    localStorage.removeItem("invoiceDiscount");

    window.location.href = "index.html";

}