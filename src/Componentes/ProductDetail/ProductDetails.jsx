import { useLoaderData, useNavigate } from "react-router-dom";
import { AiFillLeftCircle } from "react-icons/ai";


const ProductDetails = () => {
    const details = useLoaderData()
    console.log(details);
    const { brand, description, images, price, rating, title } = details
    const navigate = useNavigate()
    const handelBackBtn = () =>{
        navigate(-1);
    }
    return (
        <div className="flex justify-between items-center gap-8">
            <div>
                <img src={images[0]} alt="" />
            </div>
            <div className="flex-1 text-center">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p><small>{brand}</small></p>
                <p className="text-2xl mt-5">{description}</p>
                <div className="text-2xl font-black mt-10 flex gap-10 justify-center">
                    <p className="">Price : {price}$</p>
                    <p className="">Rating : {rating}</p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center mt-20">
                    {
                        images.map((img, idx) => <img key={idx} className="w-52 h-52" src={img}></img>)
                    }
                </div>
                <div className="">
                    <button className="btn btn-primary mt-10 w-36">Buy Now</button>
                </div>
                <div className="text-right">
                    <button className="text-4xl" onClick={handelBackBtn}>
                        <AiFillLeftCircle></AiFillLeftCircle>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;