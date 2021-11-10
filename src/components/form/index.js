import {
    Typography,
    Button,
    TextField,
    InputLabel,
    createTheme,
    ThemeProvider,
      }  
from "@material-ui/core";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import './style.css'
import {useContext, useState} from 'react';
import {OrdersContext} from '../../context/ordersContext.js';
import OrdersList from '../ordersList/index.js';


export default function Form(){
const { addOrder, currentOrder, setCurrentOrder, isEditing, setIsEditing, orders} = useContext(OrdersContext);


const theme = createTheme({
    palette: {
      primary:{
          main: "#a0a0a0",
      },
    }
  });

const handleAddSubmit = ()=>{
    addOrder();
}


const handleEditSubmit = ()=>{
    orders[currentOrder.id-1].isEditing = false; //bring back the edit icon
    orders[currentOrder.id-1].firstName = currentOrder.firstName;   //add the changes
    orders[currentOrder.id-1].LastName = currentOrder.LastName;      
    orders[currentOrder.id-1].Date = currentOrder.Date;               
    setCurrentOrder({    //clean the form
        id: orders.length,
        firstName: "",
        LastName: "",
        Date: "",
        isEditing: false,
    });        
    setIsEditing(false);         // update the flag
}



return(
    <div className="mainContainer">
        <OrdersList/>

        <div className="form_container">
    
                <Typography variant="h2">הזמנה חדשה</Typography>
                <form >
                    <div className="fields_container">
                        <div className="firstName_container">
                            <InputLabel >שם פרטי</InputLabel>
                            <TextField id="outlined-basic"  variant="outlined"  onChange={(e)=>setCurrentOrder(oldval => ({ ...oldval, firstName: e.target.value}))} value={currentOrder.firstName }/>
                        </div>
                        <div className="lastName_container">
                            <InputLabel >שם משפחה</InputLabel>
                            <TextField id="outlined-basic" variant="outlined" onChange={(e)=>setCurrentOrder(oldval => ({ ...oldval, LastName: e.target.value}))} value={currentOrder.LastName }/>
                        </div>
                        <div className="date_container">
                            <InputLabel >תאריך</InputLabel>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    inputFormat="dd/MM/yyyy"
                                    value={currentOrder.Date}
                                    onChange={(newValue) => {
                                    setCurrentOrder(oldval => ({ ...oldval, Date: newValue}));
                                    }}
                                    renderInput={props => {
                                        return <TextField {...props} />;
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                       
                </form>

                <ThemeProvider theme={theme}>
                        {isEditing ?
                          <Button type="submit" color="primary" variant="contained" onClick={handleEditSubmit}> עדכון</Button>
                          :
                          <Button type="submit" color="primary" variant="contained" onClick={handleAddSubmit}> הוספה </Button>
                        }
                </ThemeProvider>
    
        </div>
   
    </div>
)
}