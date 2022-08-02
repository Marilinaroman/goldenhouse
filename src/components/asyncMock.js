const products = [
    {
        id:'1',
        name: 'Plate One',
        category: 'Kitchen',
        subCategory: 'Primary',
        price:7.5,
        stock: 0,
        color: 'cream',
        description: 'Ceramic plate ideal for day to day, or your special moments, do not forget to pass this tableware, ideal for your kitchen, dining table.',
        img: '../images/plate/onecream.jpg'
    },
    {
        id:'2',
        name: 'Plate One',
        category: 'Kitchen',
        subCategory: 'Secundary',
        price:7.5,
        stock: 24,
        color: 'green',
        description: 'Ceramic plate ideal for day to day, or your special moments, do not forget to pass this tableware, ideal for your kitchen, dining table.',
        img: '../images/plate/onegreen.jpg'
    },{
        id:'3',
        name: 'Plate One',
        category: 'Kitchen',
        subCategory: 'Secundary',
        price:7.5,
        stock: 6,
        color: 'white',
        description: 'Ceramic plate ideal for day to day, or your special moments, do not forget to pass this tableware, ideal for your kitchen, dining table.',
        img: '../images/plate/onewhite.jpg'
    },{
        id:'4',
        name: 'Plate Two',
        subCategory: 'Primary',
        category: 'Kitchen',
        price:9,
        stock: 144,
        color: 'cream',
        description: 'Ideal dish for your table, give a special touch to your family meals, with guests, even to your cupboards or showcases in the living room.',
        img: '../images/plate/twocream.jpg'
    },{
        id:'5',
        name: 'Plate Two',
        category: 'Kitchen',
        subCategory: 'Secundary',
        price:9,
        stock: 144,
        color: 'green',
        description: 'Ideal dish for your table, give a special touch to your family meals, with guests, even to your cupboards or showcases in the living room.',
        img: '../images/plate/twogreen.jpg'
    },{
        id:'6',
        name: 'Plate Three',
        subCategory: 'Primary',
        category: 'Kitchen',
        price:10,
        stock: 72,
        color: 'white',
        description: 'Ceramic dinner plate in the shape of a flower, ideal for special moments, or simply to make your day to day special. Give your kitchen and your table a different touch. Dimensions diameter 16.5 cm height 2.2 cm. Microwave, oven, dishwasher and refrigerator safe',
        img: '../images/plate/threewhite.jpg'
    },{
        id:'7',
        name: 'Plate Three',
        category: 'Kitchen',
        subCategory: 'Secundary',
        price:10,
        stock: 72,
        color: 'green',
        description: 'Ceramic dinner plate in the shape of a flower, ideal for special moments, or simply to make your day to day special. Give your kitchen and your table a different touch. Dimensions diameter 16.5 cm height 2.2 cm. Microwave, oven, dishwasher and refrigerator safe',
        img: '../images/plate/threegreen.jpg'
    },{
        id:'8',
        name: 'Plate Three',
        category: 'Kitchen',
        subCategory: 'Secundary',
        price:10,
        stock: 72,
        color: 'cream',
        description: 'Ceramic dinner plate in the shape of a flower, ideal for special moments, or simply to make your day to day special. Give your kitchen and your table a different touch. Dimensions diameter 16.5 cm height 2.2 cm. Microwave, oven, dishwasher and refrigerator safe',
        img: '../images/plate/threecream.jpg'
    },{
        id:'9',
        name:'Brush',
        category: 'Bath',
        subCategory: 'Primary',
        price:6,
        stock: 20,
        color: 'cream',
        description: 'Birch and horse hair glass brush. Nice dish brush that looks pretty in the sink. The round shape makes it ideal for washing glassware.',
        img: '../images/bath/brush.jpg'
    },{
        id:'10',
        name:'Dispenser Glass',
        category: 'Bath',
        subCategory: 'Primary',
        price:2.5,
        stock: 10,
        color: 'transparent',
        description: 'Nice decorated glass hand soap dispenser, With this soap dispenser you will be able to give a special touch to your bathroom',
        img: '../images/bath/dispenserglas.jpg'
    },
]
export const getProductsPrimary = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.filter(cat => cat.subCategory === 'Primary'))
        }  , 2000)
    })
}

export const getProductsById =(id)=>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(u => u.id === id))
        },2000)
    })
}   
    
export const getProductByCategory = (category)=>{
        return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.filter(cat => cat.category === category && cat.subCategory === 'Primary'))
        },2000)
    })
}