import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify';

export default function ProductDetail({cartItems, setCartItems}) {
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const {id} = useParams();

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/product/'+id)
        .then(res => res.json())
        .then( res => setProduct(res.product))
    },[])


    function increaseQty() {
        if (product.stock == qty) {
            return;
        }
        setQty((state) => state + 1);
    }

    function decreaseQty() {
        if (qty > 1) {
            setQty((state) => state - 1);
        }
    }


    return  product && <div className="container container-fluid">
                <div className="row f-flex justify-content-around">
                  
                    <div className="col-12 col-lg-5 mt-5">
                        <h3 className='bg-dark text-light'>{product.productName}</h3>
                        <p id="product_id">Product #{product._id}</p>

                        <hr />

                        <div className="rating-outer">
                            <div className="rating-inner" style={{width : `${product.rating/5 * 100}%`}}></div>
                        </div>
                

                        <hr />

                        <p id="product_price" className='bg-info'>price: ${product.price}</p>
                        <p className='bg-warning'>discount: {product.discount}%</p>
                        <p className='bg-danger'>Status:{product.availabiliy}</p>

                        <hr />

                      
                                
                    </div>

                </div>
            </div>
}