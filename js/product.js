const productId = getParams(window.location.href).id;

const productDB = [
    {
        "id": "1605166846",
        "name": "Special Gift, Best Gift, Underwood No. 5 Typewriter",
        "desc": "Classic Black, Working Underwood Typewriter, QWERTY keyboard,QWERTY typewriter",
        "imageSrc": ["./images/5187592826/1.avif", "./images/5187592826/2.webp"],
        "price": "$1,690.86",
        "originalPrice": "$2,818.09"
    },
    {
        "id": "754216711",
        "name": "Underwood Typewriter",
        "desc": "Antique Elegance, Perfectly Functional, an Exquisite Gift- Vintage Typewriter Working",
        "imageSrc": ["./images/5219717231/1.avif", "./images/5219717231/2.avif"],
        "price": "$1,670.57",
        "originalPrice": "$2,784.28"
    },
    {
        "id": "1668046649",
        "name": "Typewriter Underwood",
        "desc": null,
        "imageSrc": ["./images/5587606169/1.avif", "./images/5587606169/2.avif"],
        "price": "$2,304.50",
        "originalPrice": null
    },
    {
        "id": "1541056939",
        "name": "Ultra Portable - Underwood 3 Bank Working Typewriter",
        "desc": "Rare Model and Junior typewriter, Vintage typewriter, Collectible Typewriter",
        "imageSrc": ["./images/5187592826/1.avif", "./images/5187592826/2.webp"],
        "price": "$1,389.51",
        "originalPrice": "$1,736.88"
    },
    {
        "id": "938757911",
        "name": "Underwood Typewriter 1925",
        "desc": "| Vintage Elegance | Antique Charm | Home Decor | Vintage Gifts | Office Gift- Vintage Typewriter Working",
        "imageSrc": ["./images/5219717231/1.avif", "./images/5219717231/2.avif"],
        "price": "$1,440.61",
        "originalPrice": "$2,401.01"
    },
    {
        "id": "1578792405",
        "name": "Underwood No5 Typewriter",
        "desc": "Black Underwood, Working Underwood Special Tpewriter",
        "imageSrc": ["./images/5219717231/1.avif", "./images/5219717231/2.avif"],
        "price": "$1,690.86",
        "originalPrice": "$2,818.09"
    },
    {
        "id": "1691768669",
        "name": "Underwood No5 Typewriter",
        "desc": "Black Underwood, Working Underwood Special Tpewriter",
        "imageSrc": ["./images/5187592826/1.avif", "./images/5187592826/2.webp"],
        "price": "$1,859.94",
        "originalPrice": "$3,099.90"
    },
]



if (productId) {
    let data = productDB.filter(db => db.id === productId);
    if (data.length > 0) {
        render(data);
    } else {
        data = [productDB[0]];
        render(data)
    }
}

function render(data) {
    console.log(data)
    const product = data[0];
    document.title = product.name.substring(0, 25) + '...';
    productTitle.innerHTML = product.name;
    productImage.src = product.imageSrc[0];
    price.innerHTML = product.price;
    if (!product.originalPrice) {
        originalPrice.styles.display = "none";
    }
    originalPrice.innerHTML = product.originalPrice;
    productDesc.innerHTML = product.desc;
    setTimeout(() => {
        productImage.style.transform = "scale(1.5)";
    }, 250);
    setInterval(() => {
        console.log("test");
        const last = productImage.src.split('/');

        if (parseInt(last[last.length - 1]) === 1) {
            productImage.src = product.imageSrc[1];
            productImage.style.transform = "scale(1)";
        } else {
            productImage.src = product.imageSrc[0];
            productImage.style.transform = "scale(1.5)";
        }

    }, 5000);


}


function getParams(url) {
    const params = {};
    const urlSearchParams = new URLSearchParams(url.split('?')[1]);

    for (const param of urlSearchParams) {
        params[param[0]] = param[1];
    }

    return params;
}
