import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3>{nombre} </h3>
            <p>$ {precio} </p>
            <p className="id">ID: {id}</p>
            <p>Stock: {stock}</p>
            <Link className='miBtn' to={`/item/${id}`} > Ver Detalles </Link>
        </div>
    )
}

export default Item