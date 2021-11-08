
import {FormControl,
        Typography,
        Button,
        TextField,
        InputLabel,
        createTheme,
        ThemeProvider,
        Input
          }  
from "@material-ui/core";
import { MuiPickersUtilsProvider ,DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import './style.css'
import {useContext, useRef, useEffect} from 'react';
import {OrdersContext} from '../../context/ordersContext.js';


export default function Order(){
    const { setFirstName, setLastName, setDate, addOrder, orders, LastName, Date, firstName } = useContext(OrdersContext);

    const firstNameRef = useRef("");
    const LastNameRef = useRef("");
    const DateRef = useRef("");
    
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
        setDate(DateRef.current.value);
        addOrder();
    }

    useEffect(() =>{
        console.log("Date",Date, "LastName", LastName, "firstName", firstName)
     }, [firstName])
        
    return(
    <div className="form_container">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Typography variant="h2">הזמנה חדשה</Typography>
            <form onSubmit={handleSubmit} >
                <div className="fields_container">
                    <div className="firstName_container">
                        <InputLabel disableAnimation="true" >שם פרטי</InputLabel>
                        <TextField id="outlined-basic" label="" variant="outlined"  inputRef={firstNameRef}/>
                    </div>
                    <div className="lastName_container">
                        <InputLabel disableAnimation="true" >שם משפחה</InputLabel>
                        <TextField id="outlined-basic" label="" variant="outlined" inputRef={LastNameRef}/>
                    </div>
                    <div className="date_container">
                        <InputLabel disableAnimation="true" >תאריך</InputLabel>
                        <DatePicker inputVariant="outlined" inputRef={DateRef}/>
                    </div>
                </div>
                    <ThemeProvider theme={theme}>
                        <Button type="submit" color="primary" variant="contained">הוספה</Button>
                    </ThemeProvider>
            </form>
        </MuiPickersUtilsProvider>
    </div>
    )
}