import {Link} from 'react-router-dom';

export default function ProductCard({product}) {
    return <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
            <img
                className="card-img-top mx-auto"
                src="https://imgs.search.brave.com/1NtgJsBaUn8e4zSwFrIYr-JtmTyLmnwn-7CfARYerUU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGFwdG9wLWZyb20t/YWJvdmUuanBnP3dp/ZHRoPTEwMDAmZm9y/bWF0PXBqcGcmZXhp/Zj0wJmlwdGM9MA?" alt='image'
                />
                <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                <Link to={"/product/"+product._id} >{product.productName}</Link>
                </h5>
                <div className="ratings mt-auto">
                    <div className="rating-outer">
                    <div className="rating-inner" style={{width : `${product.rating/5 * 100}%`}} ></div>
                    </div>
                </div>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.discount}%</p>
                <p className="card-text">{product.availabiliy}</p>
                <Link to={"/product/"+product._id} id="view_btn" className="btn btn-block">View Details</Link>
            </div>
        </div>
        </div>
}