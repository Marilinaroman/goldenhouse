const products = [
    {
        id:1,
        name: 'Plate One',
        category: 'Plate',
        price:7.5,
        description: 'Ceramic plate ideal for day to day, or your special moments, do not forget to pass this tableware, ideal for your kitchen, dining table.',
        stock: 0,
        color: 'cream',
        img: 'images/plate/onecream.jpg'
    },{
        id:2,
        name: 'Plate Two',
        category: 'Plate',
        price:9,
        stock: 144,
        color: 'cream',
        description: 'Ideal dish for your table, give a special touch to your family meals, with guests, even to your cupboards or showcases in the living room.',
        img: 'images/plate/twocream.jpg'
    },{
        id:3,
        name: 'Plate Three',
        category: 'Plate',
        price:10,
        stock: 72,
        color: 'green',
        description: 'Ceramic dinner plate in the shape of a flower, ideal for special moments, or simply to make your day to day special. Give your kitchen and your table a different touch. Dimensions diameter 16.5 cm height 2.2 cm. Microwave, oven, dishwasher and refrigerator safe',
        img: 'images/plate/threegreen.jpg'
    }
]

const subProducts = [
    {
        idProduct: 1, 
        category: 'Plate',
        idSub:1,
        img: 'images/plate/onegreen.jpg',
        color: 'green',
        stock:12,
    },{
        idProduct: 1, 
        category: 'Plate',
        idSub:2,
        color: 'white',
        img: 'images/plate/onewhite.jpg',
        stock:24,
    },{
        idProduct:2,
        category: 'Plate',
        idSub:1,
        stock: 144,
        color: 'green',
        img: 'images/plate/twogreen.jpg'
    },{
        idProduct:3,
        idSub:1,
        category: 'Plate',
        stock: 72,
        color: 'white',
        img: 'images/plate/threewhite.jpg'
    },{
        idProduct:3,
        category: 'Plate',
        idSub:2,
        stock: 72,
        color: 'cream',
        img: 'images/plate/threecream.jpg'
    }
]
export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products, subProducts)
        }  , 2000)
    })
}