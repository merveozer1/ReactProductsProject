import './App.css';
import InitialScreen from './components/pages/InitialScreen';
import { Routes, Route } from "react-router-dom"
import routes from "./routes"
import Checkbox from './components/Checkbox';

function App() {
  
  return (
    <div className="App">
<Routes>
                  {
                    routes.map((item, index) => <Route key={index} path={item.pathname} element={<item.element />} />)
                  }
                </Routes>
      <InitialScreen/>
    </div>
  );
}

export default App;
