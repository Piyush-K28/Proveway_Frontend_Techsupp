document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('input[name="unit"]');
    const totalPriceElement = document.getElementById("total-price");

    function updateTotal() {
        const selected = document.querySelector('input[name="unit"]:checked');
        if (selected) {
            totalPriceElement.textContent = `$${selected.value}.00 USD`;
        }
    }

    radioButtons.forEach(radio => {
        radio.addEventListener("change", updateTotal);
    });

    updateTotal();
});
