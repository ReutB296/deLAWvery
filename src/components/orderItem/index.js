import {Close, Edit} from '@material-ui/icons';
import {
    Typography,
    Card,
    CardContent,
    CardActions 
    
      }  
from "@material-ui/core";
import './style.css';
import {useContext} from 'react';
import {OrdersContext} from '../../context/ordersContext.js';


export default function OrderItem({
    id,
    firstName,
    LastName,
    Date
}){

    const { OrderId ,setOrderId, orders, setOrders} = useContext(OrdersContext);

    const handleDelete = (e, index) =>{
        e.preventDefault();
        const newOrders = [...orders];
        newOrders.splice(index,1);
        setOrders(newOrders);
        setOrderId(OrderId-1);
    }

  console.log("iddd", id)

    return(      
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="titleContainer">
                    <Typography sx={{ fontSize: 12 }} variant="h5" style={{ fontWeight: 600 }}>
                    הזמנה {id}
                    </Typography>
                    <CardActions>
                        <Edit/>
                        <button className="deleteOrder" id={id}  onClick ={handleDelete} >
                            <Close/>
                        </button>
                    </CardActions>
                </div>
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                פרטים 
                </Typography>
                <Typography component="span">
                {firstName},
                </Typography>
                <Typography component="span">
                {LastName}
                </Typography>
                <Typography component="div">
                {Date.toString().substring(4,15)}
                </Typography>
            </CardContent>
            
            </Card>

        
    )


}