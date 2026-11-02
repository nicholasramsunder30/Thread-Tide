// Thread & Tide - Product Search and Category Filter

const productSearch = document.getElementById("productSearch");
const categoryFilter = document.getElementById("categoryFilter");
const productCards = document.querySelectorAll(".product-card");
const noProductsMessage = document.getElementById("noProductsMessage");

function filterProducts() {
    const searchTerm = productSearch.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    let visibleProducts = 0;

    productCards.forEach(function (card) {
        const productInformation = card.textContent.toLowerCase();
        const productCategory = card.querySelector("h3").textContent.toLowerCase();

        const matchesSearch = productInformation.includes(searchTerm);
        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "";
            visibleProducts++;
        } else {
            card.style.display = "none";
        }
    });

    noProductsMessage.hidden = visibleProducts !== 0;
}

productSearch.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
// Thread & Tide - Product Image Lightbox

const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");

productCards.forEach(function (card) {
    const productImage = card.querySelector("img");
    const productName = card.querySelector("h3");

    productImage.addEventListener("click", function () {
        lightboxImage.src = productImage.src;
        lightboxImage.alt = productImage.alt;
        lightboxCaption.textContent = productName.textContent;

        imageLightbox.showModal();
    });
});

closeLightbox.addEventListener("click", function () {
    imageLightbox.close();
});

imageLightbox.addEventListener("click", function (event) {
    if (event.target === imageLightbox) {
        imageLightbox.close();
    }
});