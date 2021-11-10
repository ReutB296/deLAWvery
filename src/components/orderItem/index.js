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


export default function OrderItem({data}){

    const {  orders, setOrders, setIsEditing, setCurrentOrder } = useContext(OrdersContext);
    

    const handleDelete = (e, index) =>{
        e.preventDefault();
        const newOrders = [...orders];
        newOrders.splice(index,1);
        newOrders.forEach(order => order.id--)
        setOrders(newOrders);
    }
    
    const handleEdit= (e) =>{
        e.preventDefault();
        setIsEditing(true);
        data.isEditing = true;
        setCurrentOrder(data);
        setIsEditing(true);
    }


    return(      
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="titleContainer">
                    <Typography sx={{ fontSize: 12 }} variant="h5" style={{ fontWeight: 600 }}>
                    הזמנה {data.id}
                    </Typography>
                    <CardActions>
                        { data.isEditing ? "" :
                         <button className="editOrder" onClick ={handleEdit} >
                             <Edit/>
                        </button>
                        }
                        <button className="deleteOrder" onClick ={handleDelete} >
                            <Close/>
                        </button>
                    </CardActions>
                </div>
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                פרטים 
                </Typography>
                <Typography component="span">
                {data.firstName},
                </Typography>
                <Typography component="span">
                {data.LastName}
                </Typography>
                <Typography component="div">
                {data.Date?.toString().substring(4,15)}
                </Typography>
            </CardContent>
            
        </Card>

        
    )


}