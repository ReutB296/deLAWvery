
import {FormControl,
        Typography,
        Button,
        TextField,
        InputLabel,
        createTheme,
        ThemeProvider,
          }  
from "@material-ui/core";
import { MuiPickersUtilsProvider ,DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import './style.css'


export default function Order(){

    const theme = createTheme({
        palette: {
          primary:{
              main: "#a0a0a0",
          },
        }
      });

    return(
    <div className="form_container">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Typography variant="h2">הזמנה חדשה</Typography>
            <FormControl>
                <div className="fields_container">
                    <div className="firstName_container">
                        <InputLabel disableAnimation="true" >שם פרטי</InputLabel>
                        <TextField id="outlined-basic" label="" variant="outlined" />
                    </div>
                    <div className="lastName_container">
                        <InputLabel disableAnimation="true" >שם משפחה</InputLabel>
                        <TextField id="outlined-basic" label="" variant="outlined" />
                    </div>
                    <div className="date_container">
                        <InputLabel disableAnimation="true" >תאריך</InputLabel>
                        <DatePicker inputVariant="outlined"/>
                    </div>
                </div>
                    <ThemeProvider theme={theme}>
                        <Button color="primary" variant="contained">הוספה</Button>
                    </ThemeProvider>
            </FormControl>
        </MuiPickersUtilsProvider>
    </div>
    )
}