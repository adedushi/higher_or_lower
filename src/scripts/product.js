const productDisplay = document.querySelector('.product-display');

class Product{
    constructor(id, name, image, price, URL){
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.URL = URL;
    }

}

const products = [
    6514052,
    6514055,
    6553101,
    6491295,
    6537363,
    6450247,
    6482022,
    6501902,
    6537422,
    6537371,
    6558847,
    6507324,
    6531621,
    6471969,
    6191309,
    6421866,
    6513002,
    6513000,
    6410013,
    6512370,
    6530134,
    6420141,
    6420142,
    6529899,
    6325628,
    6419631,
    6447499,
    6323156,
    6427952,
    6492267,
    6467055,
    6397576,
    6397590,
    6546221,
    6546219,
    6443500,
    6360748,
    6468484,
    6447149,
    6511565,
    6488940,
    6555625,
    6447922,
    4943603,
    6447914,
    6418524,
    6447911,
    4299700,
    6519870,
    6411917,
    6356535,
    6454256,
    6472669,
    6471418,
    6427076,
    6488911,
    6426700,
    6213287,
    6514475,
    6511782,
    6567807,
    6441423,
    6550180,
    6461328,
    6454736,
    6544304,
    6454733,
    6377587,
    6564054,
    6427739,
    6344419,
    6505155,
    6187502,
    6361926,
    6535019,
    5255027,
    6411140,
    6464936,
    6762924,
    6519391,
    6530352,
    6550445,
    6540329,
    6514441,
    6385560,
    6551564,
    6473099,
    6551163,
    6485426,
    6545966,
    6550535,
    6522416,
    6323759,
    6546137,
    6548200,
    6364719,
    5852906,
    6494388,
    6213101,
    6473808
]

function generateURL() {
    let product_id = products[Math.floor(Math.random() * products.length)];
    const API_KEY = "";
    return `https://api.bestbuy.com/v1/products(sku=${product_id})?apiKey=${API_KEY}&sort=name.asc&show=name,image,salePrice,url,sku&format=json`
}

const fetchProduct = async (e) => {
    e.preventDefault();

    try {
        let res = await fetch(generateURL());
        

    if (res.ok){
        let resBody = await res.json();

        let id = resBody.products[0].sku
        let name = resBody.products[0].name
        let image = resBody.products[0].image
        let price = resBody.products[0].salePrice
        let URL = resBody.products[0].url

        let product = new Product(id, name, image, price, URL);

        let newProduct = document.createElement('img')
        newProduct.src = product.image

        if(productDisplay.children) {
            productDisplay.childNodes.forEach(child => child.remove());
        }

        productDisplay.append(newProduct);


    }

    } catch(err) {
        console.error(err);
    }

}

const gameCanvas = document.getElementById("game-canvas");
gameCanvas.addEventListener('click', fetchProduct);


export default Product;