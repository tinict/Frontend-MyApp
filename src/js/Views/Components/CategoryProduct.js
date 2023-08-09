import '../../../css/StyleComponents/CategoryProduct.css';

const CategoryProduct = () => {
    return (
        <div className="CategoryProduct">
            <div className="category-header">
                <h3>Category Product</h3>
            </div>
            <div className="CategoryBlock"> 
                <ul>
                    <li className='item-CategoryProduct'>
                        <a className='CategoryProduct__Name' href='#'>Điện máy</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default CategoryProduct;