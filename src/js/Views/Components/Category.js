import Breadcrumb from "./Breadcrumb";
import CategoryProduct from './CategoryProduct';
import '../../../css/StyleComponents/Product.css';
import '../../../css/StyleComponents/Category.css';
import { Link } from "react-router-dom";
import '../../../css/StyleComponents/Pagination.css';
import { BsCaretLeftSquare, BsCaretRightSquare } from 'react-icons/bs';
import paginationProduct from '../../Data/paginationProduct.js';
import { useState, useEffect } from "react";
import { FaFilter } from 'react-icons/fa';

const Category = () => {

    const [DataProduct, setDataProduct] = useState([]);
    
    useEffect(() => {
        const url = `http://127.0.1:8080/products/list?page=1&&record=9`;
        paginationProduct(url)
            .then((results) => {
                let Temp = [];
                results.forEach(res => {
                    Temp.push({product: res});
                });
                setDataProduct(Temp);
                console.log(Temp);
            })
    }, []);
    
    const handleFilter = () => {
        const elementPage = document.querySelector('.pagination__page');
        const elementRecord = document.querySelector('.filter__page');
        const page = elementPage.value;
        const record = elementRecord.value;
        const url = `http://127.0.1:8080/products/list?page=${page}&&record=${record}`;
        paginationProduct(url)
            .then((results) => {
                const Temp = [];
                results.forEach(res => {
                    Temp.push({product: res});
                });
                setDataProduct(Temp);
            })
    }
      
    const Products = ({Data}) => {
        const handle_DP = (index) => {
            setDataProduct(Data[index]);
        };
        
        return Data.map((item, index) => {
            console.log(item.product.ImageProduct);
            return (
                <div className='itemProduct' key={index.toString()}>
                    <div className='itemProduct__image'>
                        <img src={`http://127.0.0.1:8080/product/images?img=${String(item.product.ImageProduct).split(',')[0]}`} className="image__product" alt="error"/>
                    </div>
                    <span className='itemProduct__NameCategories'>
                        {item.product.Category}
                    </span>
                    <Link to='/product-detail' onClick={() => handle_DP(index)} state={{data: item.product}} className='itemProduct__NameProduct'>
                        {item.product.NameProduct}
                    </Link>
                    <span className='MoneyProduct'>
                        {item.product.Cost}đ
                    </span>
                </div>
            );
        });
    };
    
    return (
        <div className="Category ScrollTop">
            <div className="Container--Category">
                <div className="Category__tile">
                    <h3 className="tile">Category Product</h3>
                </div>
                <div className="Category__SubHeader">
                    <Breadcrumb />
                    <div className="filter--container">
                        <button type="button" className="btnFilter" onClick={handleFilter}>
                          <FaFilter className="btnFilter__icon"/>
                        </button>
                        <div className="pagination">
                            <BsCaretLeftSquare className="pagination__style"/>
                            <input className="pagination__page" type="text" defaultValue={1}/>
                            <span className="numPage">of 2</span>
                            <BsCaretRightSquare className="pagination__style"/>
                        </div>
                        <div className="quanity__page">
                            <span className="title">Record:</span>
                            <input type="number" className='filter__page' defaultValue={9}/>
                        </div>
                    </div>  
                </div>
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
            </div> 
        </div>
    );
};

export default Category;