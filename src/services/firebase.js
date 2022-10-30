// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQnBIuWHgPZ938rc3RPQrO_UaGdfkRv_g",
  authDomain: "miproyectoreact-7cce6.firebaseapp.com",
  projectId: "miproyectoreact-7cce6",
  storageBucket: "miproyectoreact-7cce6.appspot.com",
  messagingSenderId: "734017833478",
  appId: "1:734017833478:web:c94bb3903b23b4c7221187"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);



 export const getClotes = async () => {
  const collectionRef = collection(db,"camisetas")
  let resultados = await getDocs(collectionRef)
  let dataRopa = resultados.docs.map(doc => {
  return{id: doc.id, ...doc.data()};
  })
  return dataRopa
};

export const getDetailClotes = async (Itemid) => {
 const item = doc(db,"camisetas",Itemid)
 let resultadoUno = await getDoc(item);
 return {id: resultadoUno.id , ...resultadoUno.data()}
};

export const getFilterClotes = async (categoryId) => {
  const categoriasRef = collection(db,"camisetas")

  const busqueda = query(categoriasRef, where ("conferencia", "==",categoryId))
  let resultadoDos = await getDocs(busqueda);

   let dataBusqueda = resultadoDos.docs.map((doc) => {
  return{id: doc.id, ...doc.data(),};
  })

  return dataBusqueda;
};

export const getTypeFilter = async (tipoId) => {
   const categorias = collection(db,"camisetas")

  const filtroConferencia = query(categorias, where ("type", "==",tipoId))
  let resultadoTres = await getDocs(filtroConferencia);
   let dataBusquedaDos = resultadoTres.docs.map((doc) => {
  return{id: doc.id, ...doc.data(),};
  })
  return dataBusquedaDos;
};

export const CreateOrder = async (datosTotales) => {
  const collectionRef = collection(db,"ordenesDeCompra")
  let  respuesta = await addDoc(collectionRef,datosTotales)
  return respuesta.id;
};

const cargaMasiva = async () => {
  const data = [
    {
        id:"1",
        title:"Brooklyn Nets Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img: "/Assets/img/camiseta1.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este",
        type:"remeras"
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
        conferencia:"Oeste",
         type:"remeras"
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
        conferencia:"Oeste",
         type:"remeras"
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
        conferencia:"Este",
         type:"remeras"
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
        conferencia:"Este",
         type:"remeras"
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
        conferencia:"Oeste",
         type:"remeras"
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
        conferencia:"Oeste",
         type:"remeras"
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
        conferencia:"Este",
         type:"remeras"
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
        conferencia:"Este",
         type:"remeras"
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
        conferencia:"Oeste",
         type:"remeras"
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
        conferencia:"Este",
         type:"remeras"
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
        conferencia:"Este",
         type:"remeras"
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
        conferencia:"Oeste",
         type:"remeras"
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
        conferencia:"Oeste",
         type:"remeras"
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
        conferencia:"Oeste",
         type:"remeras"
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
        conferencia:"Este",
         type:"remeras"
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
        conferencia:"Este",
         type:"remeras"
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
        conferencia:"Este",
         type:"remeras"
    },
    {
        id:"19",
        title:"Atlanta Hawks Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img:"/Assets/img/camiseta19.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este",
         type:"remeras"
    },
    {
        id:"20",
        title:"Atlanta Hawks Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img:"/Assets/img/camiseta-20.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este",
         type:"remeras"
    },
    {
        id:"21",
        title:"Atlanta Hawks Icon Edition 2022/23",
        description: "Camiseta Nike Dri-FIT NBA Swingman",
        img:"/Assets/img/camiseta-21.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 25000 ,
        conferencia:"Este",
         type:"remeras"
    },
    {
        id:"22",
        title:"Brooklyn Nets Icon Edition",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-01.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
         type:"pantalones"
    },
    {
        id:"23",
        title:"Hawks Icon Edition 2020",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-02.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    { 
        id:"24",
    title:"Chicago Bulls Icon Edition",
    description: "Pantalón corto de la NBA",
    img:"/Assets/img/pantalon-03.jpg",
    expired:false,
    stock:10,
    colour: "Unico",
    price: 18600 ,
    conferencia:"Este" ,
    type:"pantalones"
    },
    {
        id:"25",
        title:"Boston Celtics Edition 2022/23",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-04.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
        
    },
    {
        id:"26",
        title:"Dallas Mavericks Icon Edition",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-05.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"27",
        title:"Denver Nuggets Icon Edition",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-06.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"28",
        title:"Golden State Warriors Icon Edition",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-07.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"29",
        title:"Indiana Pacers Icon Edition",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-08.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"30",
        title:"Los Angeles Clippers Icon Edition",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-09.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"31",
        title:"Los Angeles Lakers Icon Edition",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-10.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"32",
        title:"Memphis Grizzlies Icon Edition",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-11.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"33",
        title:"Miami Heat Icon Edition",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-12.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"34",
        title:"Milwaukee Bucks Courtside",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-13.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"35",
        title:"Minnesota Timberwolves Icon Edition Swingman",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-14.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"36",
        title:"New York Knicks Icon Edition",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-15.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"37",
        title:"Philadelphia 76ers Icon Edition Swingman",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-16.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"38",
        title:"San Antonio Spurs Icon Edition",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-17.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
    {
        id:"39",
        title:"Toronto Raptors Icon Edition 2020",
        description: "Pantalón corto de la NBA",
        img:"/Assets/img/pantalon-18.jpg",
        expired:false,
        stock:10,
        colour: "Unico",
        price: 18600 ,
        conferencia:"Este",
        type:"pantalones"
    },
];
  let itemCharger = collection(db,"camisetas")
      for (const item of data) {
        delete(item.id)
        let newCharger = await addDoc(itemCharger,item)
        
   }
};