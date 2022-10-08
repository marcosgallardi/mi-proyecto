import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getClotes, getFilterClotes } from '../data/data';

import { ItemList } from './ItemList';

export const ItemListContainer = (props) => {

    const inicialState = [];

    const [card, setCard] = useState(inicialState)


    const { categoryId } = useParams()



    useEffect(() => {
        if (categoryId === undefined) {
            getClotes().then((data) => {
                setCard(data);
            });
        } else {
            getFilterClotes(categoryId).then((data) => {
                setCard(data);
            })
        }
    }, [categoryId]
    );




    return (
        <>

            <div className="container-fluid">
                <div className="container">
                    <ItemList card={card} />

                </div>


            </div>




        </>
    )
};















