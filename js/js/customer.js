// Customer information

function saveCustomer() {

    const customer = {

        gstNumber:
            document.getElementById("gstNumber").value,

        customerName:
            document.getElementById("customerName").value,

        mobile:
            document.getElementById("mobile").value,

        customerId:
            document.getElementById("customerId").value,

        address:
            document.getElementById("address").value

    };


    localStorage.setItem(
        "customer",
        JSON.stringify(customer)
    );

}