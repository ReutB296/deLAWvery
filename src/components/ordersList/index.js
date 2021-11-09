import {useContext} from 'react';
import {OrdersContext} from '../../context/ordersContext.js';
import OrderItem from '../orderItem/index.js';
import {Typography} from "@material-ui/core";
import './style.css';



export default function OrdersList(){
    const { orders } = useContext(OrdersContext);

    return(
        <div className="ordersContainer">
            <Typography variant="h5" style={{ fontWeight: 600 }}>רשימת הזמנות</Typography>
            <Typography variant="h6"> מספר הזמנות: <span className="sumOrders">{orders.length}</span></Typography>
            {orders.length > 0 ?
            orders.map((order, index) => <OrderItem key={index} data={order} />)
            :
            ""
            }

        </div>
    )
    
}