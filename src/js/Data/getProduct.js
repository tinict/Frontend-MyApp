const getProduct = () => {
    return new Promise((resolve, reject) => {
        const url = 'http://127.0.0.1:8080/api/products';
        fetch(url)
            .then((res) => {
                resolve(res.json());
            })
            .catch((err) => {
                console.log('Disconnect DataBase');
            })
    })
};

export default getProduct;