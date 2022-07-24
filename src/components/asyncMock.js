const products = [
    {
        id:1,
        name: 'Plate One',
        category: 'Plate',
        price:7.5,
        stock: 0,
        color: 'cream',
        description: 'Ceramic plate ideal for day to day, or your special moments, do not forget to pass this tableware, ideal for your kitchen, dining table.',
        img: 'images/plate/onecream.jpg'
    },
    {
        id:2,
        name: 'Plate One',
        category: 'Plate',
        price:7.5,
        stock: 24,
        color: 'green',
        description: 'Ceramic plate ideal for day to day, or your special moments, do not forget to pass this tableware, ideal for your kitchen, dining table.',
        img: 'images/plate/onegreen.jpg'
    },{
        id:3,
        name: 'Plate One',
        category: 'Plate',
        price:7.5,
        stock: 6,
        color: 'white',
        description: 'Ceramic plate ideal for day to day, or your special moments, do not forget to pass this tableware, ideal for your kitchen, dining table.',
        img: 'images/plate/onewhite.jpg'
    },{
        id:4,
        name: 'Plate Two',
        category: 'Plate',
        price:9,
        stock: 144,
        color: 'cream',
        description: 'Ideal dish for your table, give a special touch to your family meals, with guests, even to your cupboards or showcases in the living room.',
        img: 'images/plate/twocream.jpg'
    },{
        id:5,
        name: 'Plate Two',
        category: 'Plate',
        price:9,
        stock: 144,
        color: 'green',
        description: 'Ideal dish for your table, give a special touch to your family meals, with guests, even to your cupboards or showcases in the living room.',
        img: 'images/plate/twogreen.jpg'
    },{
        id:6,
        name: 'Plate Three',
        category: 'Plate',
        price:10,
        stock: 72,
        color: 'white',
        description: 'Ceramic dinner plate in the shape of a flower, ideal for special moments, or simply to make your day to day special. Give your kitchen and your table a different touch. Dimensions diameter 16.5 cm height 2.2 cm. Microwave, oven, dishwasher and refrigerator safe',
        img: 'images/plate/threewhite.jpg'
    },{
        id:7,
        name: 'Plate Three',
        category: 'Plate',
        price:10,
        stock: 72,
        color: 'green',
        description: 'Ceramic dinner plate in the shape of a flower, ideal for special moments, or simply to make your day to day special. Give your kitchen and your table a different touch. Dimensions diameter 16.5 cm height 2.2 cm. Microwave, oven, dishwasher and refrigerator safe',
        img: 'images/plate/threegreen.jpg'
    },{
        id:8,
        name: 'Plate Three',
        category: 'Plate',
        price:10,
        stock: 72,
        color: 'cream',
        description: 'Ceramic dinner plate in the shape of a flower, ideal for special moments, or simply to make your day to day special. Give your kitchen and your table a different touch. Dimensions diameter 16.5 cm height 2.2 cm. Microwave, oven, dishwasher and refrigerator safe',
        img: 'images/plate/threecream.jpg'
    }
]
export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }  , 2000)
    })
}