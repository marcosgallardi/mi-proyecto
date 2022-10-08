import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailClotes } from '../data/data';
import { ItemDetail } from './ItemDetail';



export const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState([]);

    const { Itemid } = useParams();

    useEffect(() => {
        getDetailClotes(Itemid).then((data) => {
            setProduct(data);
        })
    }, [Itemid]);

    return (
        <>
            <div className="container-fluid position-absolute">
                <div className="container">

                    <ItemDetail
                        title={product.title}
                        description={product.description}
                        img={product.img}
                        expired={product.expired}
                        stock={product.stock}
                        colour={product.colour}
                        price={product.price}

                    />


                </div>
            </div>

        </>
    )
};








