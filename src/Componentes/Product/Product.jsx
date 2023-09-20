import { Link } from "react-router-dom";


const Product = ({ product }) => {
    const { title, description, id, images, price } = product
    return (
        <div className="card card-compact  bg-gray-200 shadow-xl">
            <figure><img className="h-44" src={images[0]} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <Link to={`/product/${id}`}> <button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;