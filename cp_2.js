console.log(`Andrew Marello - Coding Project 2: Product Dashboard`);

//Step 3

function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(function(product) {
                console.log(product.fields.name);
            });
        })
        .catch(function(error) {
            console.error("Error fetching products:", error);
        });
    }
    fetchProductsThen();

    async function fetchProductsAsync() {
        try {
            const response = await fetch("https://www.course-api.com/javascript-store-products");
            const products = await response.json();

            displayProducts(products);
        } catch (error) {
            handleError(error);
        }
    }
    
    function displayProducts(products) {
        console.log(products);
    }
    function handleError(error) {
        console.error("Something went wrong:", error);
    }
    fetchProductsAsync();

    function displayProducts(products) {
        const container = document.getElementById("product-container");
        container.innerHTML = "";

        products.slice(0,5).forEach(function(product) {
            const {name, price, image } = product.fields;

            const card = document.createElement("div");
            const title = document.createElement("h3");
            const img = document.createElement("img");
            const priceTag = document.createElement("p");

            title.textContent = name;
            img.src = image[0].url;
            priceTag.textContent = `$${(price/100).toFixed(2)}`;

            card.appendChild(title);
            card.appendChild(img);
            card.appendChild(priceTag);
            container.appendChild(card);
        });
    }

    function handleError(error) {
        console.error(`An error occured: ${error}`);
    }

    fetchProductsThen();
    fetchProductsAsync();
    