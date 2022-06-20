import './App.css';
import Login from './pages/login';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Panel from './pages/panel';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/panel' element={<Panel/>}/>
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
