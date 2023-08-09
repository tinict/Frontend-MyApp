'use strict';

const Order = {
    ModelOrder: (FulllName, Phone, Email, Address, ShippingMethod, PaymentMethod, ID, NameProduct, Quantity, CashMoney, StatePayment) => {
        return {
            'FulllName': FulllName,
            'Phone': Phone,
            'Email': Email,
            'Address': Address,
            'ShippingMethod': ShippingMethod,
            'PaymentMethod': PaymentMethod,
            'ID': ID,
            'NameProduct': NameProduct,
            'Quantity': Quantity,
            'CashMoney': CashMoney,
            'StatePayment': StatePayment,
        };
    },
};

export default Order;