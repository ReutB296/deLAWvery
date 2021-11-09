
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
import {useContext} from 'react';
import {OrdersContext} from '../../context/ordersContext.js';
import OrdersList from '../ordersList/index.js';


export default function Form(){
    const { addOrder, currentOrder, setCurrentOrder} = useContext(OrdersContext);


    const theme = createTheme({
        palette: {
          primary:{
              main: "#a0a0a0",
          },
        }
      });

    const handleSubmit = e =>{
        e.preventDefault();
        addOrder();
        e.currentTarget.reset();
    }

        
    return(
        <div className="mainContainer">
            <OrdersList/>

            <div className="form_container">
        
                    <Typography variant="h2">הזמנה חדשה</Typography>
                    <form onSubmit={handleSubmit} >
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
                                            console.log("props", props.inputProps.value);
                                            return <TextField {...props} />;
                                        }}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                            <ThemeProvider theme={theme}>
                                <Button type="submit" color="primary" variant="contained">הוספה</Button>
                            </ThemeProvider>
                    </form>
        
            </div>
       
        </div>
    )
}