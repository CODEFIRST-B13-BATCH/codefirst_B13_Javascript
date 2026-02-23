function fetchProduct() {
    return new Promise((resolve,reject)=>{
        fetch(`https://fakestoreapi.com/products/${10}`)
        .then((res)=>{
            if(res.ok){
                return res.json();
            } else {
                reject("Failed to fetch products!");
            }
        })
        .then(data => resolve(data))
        .catch(err=>console.log(err));
    })
}

fetchProduct().then((result)=>console.log(result))
.catch(error => console.log(error));
