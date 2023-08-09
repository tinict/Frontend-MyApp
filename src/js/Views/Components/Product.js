import CategoryProduct from './CategoryProduct';
import { Link } from "react-router-dom";
import '../../../css/StyleComponents/Product.css';
import { useEffect, useState } from 'react';
import paginationProduct from '../../Data/paginationProduct.js';

const Product = () => {
    const DataP = [];
     
    const [DataProduct, setDataProduct] = useState(DataP)
    
    useEffect(() => {
        const url = `http://127.0.1:8080/products/list?page=1&&record=9`;
        paginationProduct(url)
            .then((results) => {
                const Temp = [];
                results.forEach(res => {
                    Temp.push(res);
                });
                setDataProduct(Temp);
            })
    }, []);
    
    console.log(DataProduct);
    
    const Products = ({Data}) => {
        const handle_DP = (index) => {
            setDataProduct(DataP[index]);
        };
        return Data.map((item, index) => {
            return (
                <div className='itemProduct' key={index.toString()}>
                    <div className='itemProduct__image'>
                        <img src={item.ImageProduct} />
                    </div>
                    <span className='itemProduct__NameCategories'>
                        {item.Category}
                    </span>
                    <Link to='/product-detail' onClick={() => handle_DP(index)} state={{data: item}} className='itemProduct__NameProduct'>
                        {item.NameProduct}
                    </Link>
                    <span className='MoneyProduct'>
                        {item.Cost}đ 
                    </span>
                </div>
            );
        });
    };
    
    return (
        <div className="Container-Product">
            <div className="col-LeftProduct">
                <CategoryProduct />
            </div>
            <div className="col-RightProduct">
                <div className='BlockProduct'>
                    <Products Data={DataProduct} />
                </div>
            </div>
        </div>
    )
}; 

export default Product;