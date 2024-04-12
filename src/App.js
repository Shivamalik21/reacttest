
import './App.css';
import Home from './pages/Home';
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
     <Provider store={store}>
       <Home/>
   </Provider>
    </div>
    
  );
}

export default App;
