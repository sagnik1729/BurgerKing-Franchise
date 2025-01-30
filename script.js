document.getElementById("orderButton").addEventListener("click", () => {
    const selectedItems = Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
    );

    if (selectedItems.length === 0) {
        alert("Please select at least one food item.");
        return;
    }

    const loading = document.getElementById("loading");
    const orderDisplay = document.getElementById("orderDisplay");
    const foodImagesDiv = document.getElementById("foodImages");
    const orderID = document.getElementById("orderID");
    const dingSound = document.getElementById("dingSound");

    // Show loading message & hide previous order
    loading.classList.remove("hidden");
    orderDisplay.classList.add("hidden");
    orderDisplay.classList.remove("show"); // Reset animation
    foodImagesDiv.innerHTML = ""; // Clear previous images

    // Simulate food preparation
    const randomSeconds = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
        loading.classList.add("hidden");
        orderDisplay.classList.remove("hidden");

        // Add animation effect
        setTimeout(() => orderDisplay.classList.add("show"), 100);

        // Play ding sound
        dingSound.play();

        // Show selected food images
        selectedItems.forEach(item => {
            const img = document.createElement("img");
            img.src = item.dataset.image;
            img.alt = item.value;
            foodImagesDiv.appendChild(img);
        });

        // Generate and display order ID
        const uniqueOrderID = `Order #${Math.floor(1000 + Math.random() * 9000)}`;
        orderID.textContent = uniqueOrderID;

    }, randomSeconds * 1000);
});
