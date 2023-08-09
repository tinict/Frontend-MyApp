import Breadcrumb from "./Breadcrumb";
import '../../../css/StyleComponents/ProductDetail.css';
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import CountData from "../../Core/CountData.js";
import Slider from "../../Core/lib/slider.js";

const ProductDetail = () => {
    const location = useLocation();
    const data = location.state.data; 
    if (!data) {
        console.log('No data available!');
    }
    useEffect(()=> {
        new Slider('#sliderLibrary', {
            width: 650,
            height: 400,
            slidesPerView: 1, // from 1 to 5
            spaceBetween: 20, // from 5 pixel
            draggable: true,
            autoplay: {
                enable: true,
                disableOnInteraction: false, //FIX
                delay: 3, // from 1 second
                progress: {
                    element: '.progress',
                    display: true,
                },
            },
            zoomable: {
                // Zoomable in-case slidesPerView=1 && autoplay.enable=false && draggable=false
                element: '.mirror',
                display: true,
            },
            wrapperSlide: '.wrapperSlide',
            pagination: {
                element: '.wrapperPagination',
                visible: {
                    display: true,
                    img: true,
                },
                clickable: true,
            },
            navigation: {
                left: '.prev',
                right: '.next',
            },
        });
    }, []);
    
    // var Cart = [];
    // var key = JSON.parse(window.localStorage.getItem('Cart'));
    
    const [Counter, setCounter] = useState(CountData('CartProduct'));
    
    const handleAddItemCart = (db) => {
        let key = JSON.parse(window.localStorage.getItem('CartProduct'));
        if (key === null)
            var New_DB = [];
        else
            var New_DB = [...key];
        New_DB.push(db);
        window.localStorage.clear();
        window.localStorage.setItem('CartProduct', JSON.stringify(New_DB));
        const total = () => {
            let key = JSON.parse(window.localStorage.getItem('CartProduct'));
            console.log(key);
            let total = 0;
            if (key === null)
                return 0;
            else {
                return key.length;
            }
        }
        setCounter(total());
    }; 
    
    return (
        <div className="container">
            <Header Counter_P={Counter} />
            <div className="PoductDetail ScrollTop">
                <div className="Container-ProductDetail">
                    <Breadcrumb />
                    <div className="BlockDetail">
                        <div className="col-left-detail">
                            <div id="sliderLibrary">
                                <div className="wrapperSlide">
                                    <div className="slide">
                                        <img src={`http://127.0.0.1:8080/product/images?img=class.jpg`} />
                                    </div>
                                    <div className="slide">
                                        <img src={`http://127.0.0.1:8080/product/images?img=class.jpg`} />
                                    </div>
                                    <div className="slide">
                                        <img src={`http://127.0.0.1:8080/product/images?img=class.jpg`} />
                                    </div>
                                </div>
                                <div className="wrapperPagination"></div>
                                <div className="progress"></div>
        
                                <button className="prev">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                <button className="next">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                                
                                <div className="mirror"></div>
                            </div>
                        </div>
                        <div className="col-right-detail">
                            <div className="col-title-product">
                                <h3>{data.TitleProduct}</h3>
                            </div>
                            <div className="col-money">
                                <h3>{data.Cost}đ</h3>
                            </div>
                            <div className="col-state">
                                <h3>Còn hàng</h3>
                                <button type="button" className="btnCategory" onClick={() => handleAddItemCart({...data, 'Counter': 1, 'Total': data.Cost})}>Add Category</button>
                            </div>
                            <div className="col-nameCategory">
                                <ul> 
                                    <li>
                                        <span>Danh mục:</span>
                                        <a href='#'>{data.Category}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-nameCategory">
                                <div className="content-product">
                                    <h3>Mô tả sản phẩm:</h3>
                                    <p className="pragraph-product">{data.Description}</p>
                                </div>
                            </div>
                            <div className="ShareSocial"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
