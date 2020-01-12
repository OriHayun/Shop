export class item{
    constructor(id,name,price,imgUrl)
    {
        this.id=id;
        this.name=name;
        this.price= price;
        this.imgUrl=imgUrl;
    }


    show(){
        let tmpItem="";
        tmpItem+=`<p>ID: ${this.id}</p><p>Name: ${this.name}</p><p>Price: ${this.price}</p>
        <img src="${this.imgUrl}" />`;
        return tmpItem;
    }
}

const hat = new item(1,"Hurley hat",100,"./images/HurleyHat.png");
const shoes = new item(2,"Nike air force1",350,"./images/nikeShose.png");
const shirt = new item(3,"Nike shirt",130,"./images/NikeShirt.jpg");
const pants = new item(4,"Nike pants",150,"./images/NikePants.png");

 export const itemsList = [hat,shoes,shirt,pants];