

const products = [
    { id: 1, name: "mobile phone", price: 2563 },
    { id: 2, name: "samsung mobile", price: 25397 },
    { id: 3, name: "laptop  lenovo", price: 54863 },
    { id: 4, name: "xiaomi phone", price: 2563 },
    { id: 5, name: "mackbook air", price: 267563 },
    { id: 6, name: "dell laPtop", price: 55463 },
    { id: 7, name: "vivo Phone", price: 2563 },
    { id: 8, name: "oppo phone", price: 2563 },
    { id: 9, name: "poco Phone", price: 2563 },
];


function searchProduct(products, search) {
    let newProduct = [];
    for (let product of products) {
        // console.log(product.name.includes(search))
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            newProduct.push(product);
        }

    }
    return newProduct;

}

let result = searchProduct(products, "laptop");
console.log(result);
