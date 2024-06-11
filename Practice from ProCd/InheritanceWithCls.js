class Category{
    constructor(c){
        this.category=c;
    }

}

class Product extends Category{
    constructor(n,c){
        super(c);
        this.name=n;
    }
}

const p=new Product("I Phone","Mobile");
console.log(p);