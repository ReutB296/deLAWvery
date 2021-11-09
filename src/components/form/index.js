
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
import {useContext, useEffect, useRef} from 'react';
import {OrdersContext} from '../../context/ordersContext.js';
import OrdersList from '../ordersList/index.js';


export default function Form(){
    const { setFirstName, setLastName, setDate, addOrder, firstName, LastName, Date} = useContext(OrdersContext);

    const firstNameRef = useRef("");
    const LastNameRef = useRef("");

    
    const theme = createTheme({
        palette: {
          primary:{
              main: "#a0a0a0",
          },
        }
      });

    const handleSubmit = e =>{
        e.preventDefault();
        setFirstName(firstNameRef.current.value);
        setLastName(LastNameRef.current.value);
        e.currentTarget.reset();
       
    }


    useEffect(() =>{
        if (Date){
            addOrder();
        }
     },[firstName, LastName] )

        
    return(
        <div className="mainContainer">
            <OrdersList/>

            <div className="form_container">
        
                    <Typography variant="h2">הזמנה חדשה</Typography>
                    <form onSubmit={handleSubmit} >
                        <div className="fields_container">
                            <div className="firstName_container">
                                <InputLabel >שם פרטי</InputLabel>
                                <TextField id="outlined-basic" label="" variant="outlined"  inputRef={firstNameRef}/>
                            </div>
                            <div className="lastName_container">
                                <InputLabel >שם משפחה</InputLabel>
                                <TextField id="outlined-basic" label="" variant="outlined" inputRef={LastNameRef}/>
                            </div>
                            <div className="date_container">
                                <InputLabel >תאריך</InputLabel>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        inputFormat="dd/MM/yyyy"
                                        value={Date}
                                        onChange={(newValue) => {
                                        setDate(newValue);
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