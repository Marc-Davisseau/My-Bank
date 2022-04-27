import "./App.css";

import Header from "./components/Header"
import Accounts from "./components/Accounts"
import Data from "./data.json";



const App = () => {
  return ( <div className="container">
       <Header name={"Marc"}/>     
{ Data.map ((item,index) => { return (
 
      <Accounts key={index} name={item.name} balance={item.balance} operations={item.operations}/>
     )      
}
)}
</div>
  )}

export default App;
