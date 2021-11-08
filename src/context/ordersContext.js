import React, { useEffect, useState } from 'react';

export const OrdersContext = React.createContext({
    firstName: "",
    setFirstName: () => {},
    LastName: "",
    setLastName: () => {},
    orders: [],
    setOrders: () => {},
    OrderId: "",
    setOrderId: () => {},
    Date: "",
    setDate: () => {},
    addOrder: () => {},
   
});


export default function OrdersProvider({children}){
    const [firstName, setFirstName] = useState("");  
    const [LastName, setLastName] = useState(""); 
    const [Date, setDate] = useState(""); 
    const [OrderId, setOrderId] = useState(0);
    const [orders, setOrders] = useState([
        {
            id: OrderId,
            firstName: "",
            LastName: "",
            Date: ""
        },

    ]);

    const addOrder = () => {
     
            // if (!todoItem) return;
            setOrderId(OrderId+1);
            orders.push({id: OrderId, firstName, LastName, Date});
            setOrders(orders);
           
    };



    return (
        <OrdersContext.Provider value={{
            firstName,
            setFirstName,
            LastName,
            setLastName,
            Date,
            setDate,
            OrderId,
            setOrderId,
            orders,
            setOrders,
            addOrder
        }}>
            {children}
        </OrdersContext.Provider>
    );
}
