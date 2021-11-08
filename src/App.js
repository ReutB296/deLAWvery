import Header from "./components/header";
import Order from "./components/Order";
import OrdersProvider from './context/ordersContext.js';



function App() {
  return (
    
   <OrdersProvider>
        <Header/>
        <Order/>
    </OrdersProvider>
   
  );
}

export default App;
