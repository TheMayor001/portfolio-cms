import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
// This Navbar component provides navigation links to the Home, About, Projects, and Contact pages.
// It uses React Router's Link component to handle navigation without reloading the page.
