
import { Item } from "./Item";



export const ItemList = (props) => {



    return (
        <>
            <div className="row row-cols-2 row-cols-md-4 g-3">
                {props.card.map((data) => {
                    return <Item
                        key={data.id}
                        id={data.id}
                        img={data.img}
                        title={data.title}
                        description={data.description}
                        colour={data.colour}
                        price={data.price}
                        stock={data.stock} />
                }
                )};
            </div>
        </>
    )
}









