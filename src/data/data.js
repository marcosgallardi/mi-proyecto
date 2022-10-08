export const data = [
    {
        id:"1",
        title:"Brooklyn Nets Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta1.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este"
    },
        
        

    {
        id:"2",
        
        title:"New Orleans Pelicans Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta2.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Oeste"
    },

    {
        id:"3",
        
        title:"Golden State Warrios Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta3.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Oeste"
    },

    {
        id:"4",
        title:"Boston Celtics Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta4.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este"
    },
        
   
    {
        id:"5",
        title:"Philadelphia 76ers Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta5.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este"
    },

    {
        id:"6",
        title:"Houston Rockets Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img:"/Assets/img/camiseta6.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Oeste"
    },

    {
        id:"7",
        title:"Devin Booker Suns Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta7.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Oeste"
    },

    {
        id:"8",
        title:"Milwuakee Bucks Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta8.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este"
    },

    {
        id:"9",
        title:"Chicago Bulls Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta9.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este"
    },

    {
        id:"10",
        title:"Dallas Mavericks Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta10.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Oeste"
    },

    {
        id:"11",
        title:"Miami Heat Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta11.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este"
    },

    {
        id:"12",
        title:"Toronto Raptors Icon Edition 2022/23 ",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta12.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este"
    },

    {
        id:"13",
        title:" Portland Trail Blazers Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta13.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Oeste"
    },

    {
        id:"14",
        title:"LA Clippers Icon Edition 2022/23 ",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta14.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Oeste"
    },

    {
        id:"15",
        title:"Los Angeles Lakers Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta15.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Oeste"
    },

    {
        id:"16",
        title:"Chicago Bulls Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta16.jfif",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este"
    },
    {
        id:"17",
        title:"Charlotte Hornets Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta17.jfif",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este"
    },
    {
        id:"18",
        title:"Atlanta Hawks Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img:"/Assets/img/camiseta18.jfif",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este"
    },
    

];

export const getClotes = () => {

return new Promise((resolve) => {

    setTimeout(() =>  resolve(data),1000)    
     
 });
};

export const getDetailClotes = (Itemid ) => {
    return new Promise((resolve) => {
    
        let buscarId = data.find((item)=>{
            return (item.id === Itemid)
        })

    setTimeout(() =>  resolve((buscarId)),1000)    
     
 });

};

export const getFilterClotes = (categoryId) => {
    return new Promise((resolve)=>{
        let filterId = data.filter((item) => item.conferencia === categoryId)
  setTimeout(() =>  resolve((filterId)),1000) 
        } )
    } ;
  
   