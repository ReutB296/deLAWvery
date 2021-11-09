import React, { useState } from 'react';

export const OrdersContext = React.createContext({
    orders: [],
    setOrders: () => {},
    addOrder: () => {},
    isEditing: false,
    setIsEditing: () => {},
    currentOrder: {},
    setCurrentOrder: () => {},
   
});


export default function OrdersProvider({children}){
    
    const [orders, setOrders] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentOrder, setCurrentOrder] = useState({

        id: 1,
        firstName: "",
        LastName: "",
        Date: ""
    });


    const addOrder = () => {
            setOrders((oldval) => [ ...oldval, {...currentOrder, id: orders.length+1}]);
    };


    return (
        <OrdersContext.Provider value={{
            orders,
            setOrders,
            addOrder,
            isEditing,
            setIsEditing,
            currentOrder,
            setCurrentOrder
        }}>
            {children}
        </OrdersContext.Provider>
    );
}
