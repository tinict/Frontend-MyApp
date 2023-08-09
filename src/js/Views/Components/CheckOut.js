import '../../../css/StyleComponents/CheckOut.css';
import Order from '../../Models/Order.js';

const CheckOut = () => {
    
    const orderProduct = () => {
        const savedFormData = localStorage.getItem('formData');
        const savedCartProduct = localStorage.getItem('CartProduct');
        console.log(savedCartProduct );
        let getValue = (data) => {
            return Object.values(data).map((value) => {
                return `${value}`;
            });
        };
        if (savedFormData) {
            const formData = JSON.parse(savedFormData);
            return formData;
        }
    }
    
    const handlePayment = () => {
        const savedFormData = localStorage.getItem('formData');
        const savedCartProduct = localStorage.getItem('CartProduct');
        console.log(savedCartProduct );
        let getValue = (data) => {
            return Object.values(data).map((value) => {
                return `${value}`;
            });
        };
        if (savedFormData) {
            const formData = JSON.parse(savedFormData);
            const Temp = [...getValue(formData)];
            const CartProductData = JSON.parse(savedCartProduct);
            console.log(CartProductData)
            CartProductData.forEach((value) => {
                console.log(value);
                let TempInfo = [];
                let InfoProduct = [value['id'], value['NameProduct'], value['Counter'], value['Total']];
                TempInfo = [...Temp];
                InfoProduct.forEach((info) => {
                    TempInfo.push(info);
                })
                TempInfo.push(1);
                console.log(TempInfo);
                console.log(Order.ModelOrder(...TempInfo))
                postJSON(Order.ModelOrder(...TempInfo));
            })
        }
    }
    
    const CartProduct = () => {
        const savedCartProduct = localStorage.getItem('CartProduct');
        if (savedCartProduct) {
            const cartProduct = JSON.parse(savedCartProduct);
            return cartProduct;
        }
    }
    
    const postJSON = (Data) => {
        fetch("http://127.0.0.1:8080/create/order", {
            method: "POST",
            body: JSON.stringify(Data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    };
    
    return (
        <div className="CheckOut ScrollTop">
            <div className="CheckOut-container">
                <div className="CheckOut-header">
                    <h3>Check Out</h3>
                </div>
                <div className='CheckOut__Contact'>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>FullName:</h3>
                        <h3 className='CheckOut__info'>{orderProduct().fullName}</h3>
                    </div>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>Phone:</h3>
                        <h3 className='CheckOut__info'>{orderProduct().phoneNumber}</h3>
                    </div>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>Email:</h3>
                        <h3 className='CheckOut__info'>{orderProduct().email}</h3>
                    </div>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>Address:</h3>
                        <h3 className='CheckOut__info'>{orderProduct().address}</h3>
                    </div>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>Shipping Method:</h3>
                        <h3 className='CheckOut__info'>{orderProduct().paymentMethod}</h3>
                    </div>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>Payment Method:</h3>
                        <h3 className='CheckOut__info'>{orderProduct().paymentMethod}</h3>
                    </div>
                    <div className='CheackOut--form'>
                        <div className='CheckOut__Product'>
                        </div>
                    </div>
                    <div className='CheackOut--form'>
                        <h3 className='CheckOut__label'>Total:</h3>
                        <h3 className='CheckOut__info'>{CartProduct()[0].Total}</h3>
                    </div>
                </div>
                <button type='button' className='btnPayment' onClick={handlePayment}>
                    Payment
                </button>
            </div>
        </div>
    );
};

export default CheckOut;