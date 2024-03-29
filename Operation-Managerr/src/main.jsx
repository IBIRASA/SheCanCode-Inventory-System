import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Pages/Login.jsx'
import Reset from './Pages/Reset.jsx'
import Request from './Pages/Request.jsx'
import Reportt from './Pages/Reportt.jsx'
// import Dash1 from './components/Dash1.jsx';
// import Dash2 from './components/Dash2.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx'
import ItemsIn from './Pages/ItemsIn.jsx'
import Itemout from './Pages/Itemout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
       <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/reset" element={<Reset/>}/>  
          <Route path="/Home" element={<Dashboard/>}/>
          <Route path="/Request" element={<Request/>}/>
          <Route path="/Report" element={<Reportt/>}/>
          <Route path="/Itemin" element={<ItemsIn/>}/>
          <Route path="/Itemout" element={<Itemout/>}/>
       </Routes>
      </Router>
  </React.StrictMode>
)
