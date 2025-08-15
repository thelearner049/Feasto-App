import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="filters">
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </div>
      <div className="logo">
        <h1><span>f</span>easto</h1>
      </div>
      <div className="searchbox">
        <input type="text" placeholder="Search Food...." />
      </div>
    </nav>
  );
}
