import Header from "./components/header";
import Form from "./components/form";
import OrdersProvider from './context/ordersContext.js';



function App() {
  return (
    
   <OrdersProvider>
        <Header/>
        <Form/>
    </OrdersProvider>
   
  );
}

export default App;
