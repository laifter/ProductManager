class ProductManagger {
    constructor(){
        this.products = []
    }

    getProducts=()=>{
        return this.products
    }

    addProducts=(title,description,price,thumbnail,code,stock)=>{
        const valores = this.products.find(e => e.code===code)
        if(valores==this.products.code){
            const product = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            if(this.products.length === 0) {
                product.id = 1
            }else{
                product.id = this.products[this.products.length-1].id+1
            }
            this.products.push(product)
            
        }else{
            console.log("producto con codigo repetido")
        }
    }
        




    getProductById=(idProducto)=>{
        const producto = this.products.findIndex(e=>e.id===idProducto)
        
        if(producto === -1){
            console.log("producto no encontrado")
        }else{
            console.log("producto encontrado")
            console.log(this.products[producto])
        }

    }

}

product = new ProductManagger()
console.log(product.getProducts())
product.addProducts("producto prueba","este es un producto prueba",200,"sin imagen","abc123",25)
product.addProducts("producto prueba","este es un producto prueba",200,"sin imagen","abc1234",25)
console.log(product.getProducts())

product.getProductById(2)