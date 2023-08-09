import '../../../css/StyleComponents/Pagination.css';
import { BsCaretLeftSquare, BsCaretRightSquare } from 'react-icons/bs';
import paginationProduct from '../../Data/paginationProduct.js';
import { useState, useEffect } from "react";
import { FaFilter } from 'react-icons/fa';

const Pagination = () => {
  
  let [data, setData] = useState([]);
  
  const handleFilter = () => {
    const elementPage = document.querySelector('.pagination__page');
    const elementRecord = document.querySelector('.filter__page');
    const page = elementPage.value;
    const record = elementRecord.value;
    const url = `http://127.0.1:8080/products/list?page=${page}&&record=${record}`;
    paginationProduct(url)
        .then((results) => {
            let temp = [];
            results.forEach((value) => {
                temp.push(Object.values(value));
            });
            setData(temp);
        })
    }
    
    return (
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
            <span className="title">Page:</span>
            <input type="number" className='filter__page' defaultValue={10}/>
        </div>
      </div>  
    );
};

export default Pagination;