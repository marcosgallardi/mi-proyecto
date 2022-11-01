import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFilterClotes, getTypeFilter } from '../services/firebase';
import { getClotes } from '../services/firebase';
import { Contacto } from './Contacto';
import { Footer } from './Footer';
import { ItemList } from './ItemList';
import { Nosotros } from './Nosotros';


export const ItemListContainer = (props) => {



    const inicialState = [];

    const [card, setCard] = useState(inicialState)


    const { categoryId } = useParams()
    const { tipoId } = useParams()


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

    useEffect(() => {
        if (tipoId === undefined) {
            getClotes().then((data) => {
                setCard(data);
            });
        } else {
            getTypeFilter(tipoId).then((data) => {
                setCard(data)
            })
        }
    }, [tipoId])


    return (
        <>

            <div className="container-fluid bg-dark pb-5">
                <div className="container">
                    <ItemList card={card} />

                </div>
            </div>


            <Nosotros />
            <Contacto />
            <Footer/>

        </>
    )
};


















