import React from 'react';

export const ButtonsNavbar = (props) => {

    return (
        <div>

            <a className='nav-link link-light fs-5' href={props.ancla}>
                {props.link}
            </a>
        </div >
    )
};



