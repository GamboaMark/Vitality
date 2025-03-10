function showSidebar() {
    document.querySelector('.sidebar').style.display = 'flex';
}

function hideSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
}

let cart = [];

function addToCart(item, price) {
    cart.push({ name: item, price: price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalElement = document.getElementById("total");
    let cartContainer = document.getElementById("cart-container");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - ₱${item.price.toFixed(2)} 
                        <button class="remove-btn" onclick="removeFromCart(${index})">×</button>`;
        cartList.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);

    // Show the cart only if there are items
    cartContainer.style.display = cart.length > 0 ? "block" : "none";
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Order placed successfully!");
    cart = [];
    updateCart();
}

// services start
document.addEventListener("DOMContentLoaded", function () {
    const serviceData = {
        "digital-printing": {
            title: "Digital Printing",
            img: "Picture/Digital-Printing.png",
            desc: `
                <h3>Digital Printing</h3>
                <h4>Paper Stock</h4>
                <ul>
                    <li><strong>Glossy:</strong> Provides a shiny, reflective finish, enhancing color vibrancy and contrast, making it perfect for high-resolution images and promotional materials.</li>
                    <li><strong>Matte:</strong> Offers a non-reflective, smooth surface, reducing glare and fingerprints, ideal for text-heavy documents and professional reports.</li>
                    <li><strong>Textured:</strong> Adds a unique, tactile feel to prints, giving a premium look suitable for invitations, artistic prints, and specialty projects.</li>
                </ul>
                
                <h4>Ink</h4>
                <p>
                    Another important element of printing is ink. We guarantee that our ink does not run, smear, or blotch. 
                    Unlike other digital printing presses, our ink does not stick to other printed pages, ensuring crisp, clean results.
                </p>

                <h4>Our Brands:</h4>
                <ul>
                    <li><strong>Hewlett Packard (HP):</strong> Known for its rich color reproduction and long-lasting prints, HP ink is designed for both text clarity and image sharpness.</li>
                    <li><strong>Epson:</strong> Features high-density pigments that resist fading, ensuring vibrant prints that stand the test of time.</li>
                    <li><strong>Canon:</strong> Specially formulated for deep blacks and accurate color matching, making it perfect for professional and artistic prints.</li>
                </ul>
            `
        },
        "binding": {
            title: "Binding",
            img: "Picture/Binding.jpeg",
            desc: `
                <h3>Binding</h3>
                <p>Our professional binding services ensure that your documents are securely fastened and elegantly presented.</p>
                
                <h4>Saddle Stitch</h4>
                <p>Saddle stitch binding is a cost-effective method where folded sheets are stapled together along the spine. This is ideal for booklets, catalogs, and brochures with a lower page count.</p>

                <h4>Heated Spine</h4>
                <p>Heated spine binding, also known as perfect binding, uses strong adhesives to create a clean, professional look. This method is commonly used for softcover books, reports, and manuals.</p>

                <h4>Wire</h4>
                <p>Wire binding provides flexibility and durability, making it an excellent choice for notebooks, calendars, and corporate presentations. It allows documents to lay flat when opened.</p>
            `
        },
        "laminating": {
            title: "Laminating",
            img: "Picture/Laminating.jpg",
            desc: `
                <h3>Laminating</h3>
                <p>Protect and enhance your important documents with our high-quality laminating services, designed to increase longevity, improve appearance, and provide superior protection against daily wear and tear. Whether you need to preserve certificates, business documents, ID cards, or signage, our lamination process ensures they remain pristine, professional, and damage-resistant for years to come.</p>

        
            `
        },
        "cutting": {
            title: "Cutting",
            img: "Picture/Cutting.jpg",
            desc: `
                <h3>Cutting</h3>
                <p>Our precision cutting services are designed to meet your specific needs with accuracy and efficiency. Whether you're working with business cards, brochures, posters, or custom-shaped prints, our advanced cutting technology ensures clean, sharp edges for a professional finish. Every cut is made with meticulous attention to detail, maintaining consistency and quality across all materials.</p>
            `
        }
    };

    const servicesGrid = document.getElementById("servicesGrid");
    const expandedView = document.getElementById("expandedView");
    const expandedTitle = document.getElementById("expandedTitle");
    const expandedImage = document.getElementById("expandedImage");
    const expandedText = document.getElementById("expandedText");
    const backBtn = document.getElementById("backBtn");

    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function () {
            const serviceKey = this.closest(".service-box").getAttribute("data-service");
            const serviceInfo = serviceData[serviceKey];

            // Set expanded content
            expandedTitle.textContent = serviceInfo.title;
            expandedImage.src = serviceInfo.img;
            expandedText.innerHTML = serviceInfo.desc; // Use innerHTML to render formatted content

            // Hide service boxes smoothly
            servicesGrid.style.opacity = "0";

            setTimeout(() => {
                servicesGrid.style.display = "none";

                // Show expanded view with animation
                expandedView.style.display = "block";
                setTimeout(() => {
                    expandedView.classList.add("active");
                }, 50);
            }, 500); // Matches the animation duration
        });
    });

    backBtn.addEventListener("click", function () {
        // Hide expanded view smoothly
        expandedView.classList.remove("active");

        setTimeout(() => {
            expandedView.style.display = "none";
            servicesGrid.style.display = "grid";

            // Fade service boxes back in
            setTimeout(() => {
                servicesGrid.style.opacity = "1";
            }, 50);
        }, 500); // Matches the animation duration
    });
});

// services end