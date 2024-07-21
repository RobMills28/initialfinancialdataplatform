import React from 'react';
import { Button } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import the new HomePage component
import CommoditiesPage from './pages/CommoditiesPage';

// Other components remain the same
const EquitiesPage = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 100px)', // Adjust for navbar height
  }}>
    <div style={{
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      backgroundColor: 'white',
      textAlign: 'center'
    }}>
      <h2 style={{
        color: '#2c3e50',
        fontSize: '24px',
        fontWeight: '600'
      }}>Equities Page</h2>
      <p style={{
        marginTop: '20px',
        fontSize: '16px',
        color: '#34495e'
      }}>This is where you can find information about equities.</p>
    </div>
  </div>
);

const CreditPage = () => <h2>Credit Page</h2>;
const RealEstatePage = () => <h2>Real Estate Page</h2>;

const NavBar = () => (
  <nav style={{
    backgroundColor: '#2c3e50',
    padding: '15px',
    marginBottom: '30px'
  }}>
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'center',
      margin: 0,
      padding: 0
    }}>
      <li style={{ margin: '0 15px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Home</Link></li>
      <li style={{ margin: '0 15px' }}><Link to="/equities" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Equities</Link></li>
      <li style={{ margin: '0 15px' }}><Link to="/credit" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Credit</Link></li>
      <li style={{ margin: '0 15px' }}><Link to="/realestate" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Real Estate</Link></li>
      <li style={{ margin: '0 15px' }}><Link to="/commodities" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Commodities</Link></li>
    </ul>
  </nav>
);

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#ecf0f1', minHeight: '100vh' }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/equities" element={<EquitiesPage />} />
          <Route path="/credit" element={<CreditPage />} />
          <Route path="/realestate" element={<RealEstatePage />} />
          <Route path="/commodities" element={<CommoditiesPage />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
