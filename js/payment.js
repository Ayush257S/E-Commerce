document.addEventListener("DOMContentLoaded", function () {  
    const paymentOptions = document.querySelectorAll('input[name="Payment"]');
    const cardDetails = document.querySelector(".card-details");
    const qrSection = document.querySelector(".QR");

    // Hide both card details and QR section initially
    cardDetails.style.display = "none";
    qrSection.style.display = "none";

    paymentOptions.forEach(option => {
        option.addEventListener("change", function () {
            if (this.value === "Credit Card" || this.value === "Debit Card") {
                cardDetails.style.display = "flex";  
                qrSection.style.display = "none";  
            } else if (this.value === "UPI") {
                cardDetails.style.display = "none";  
                qrSection.style.display = "flex";  
            }
        });
    });
});