import GoodsList from "./containers/GoodsList";
import './App.css';
import CartList from "./containers/CartList";
import img from './image/12.png';

function App() {
  return (
    
    <>
    <img src={img} alt="Logo" />   
       <GoodsList/>
      <CartList/> 
    </>
  );
}

export default App;
