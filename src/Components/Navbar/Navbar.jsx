import "./Navbar.css";

export default function Navbar({ searchFood, selectFood }) {
  const filterOptions = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  return (
    <nav className="navbar">
      <div className="filters">
        {filterOptions.map((value) => (
          <button key={value.name} onClick={() => selectFood(value.type)}>
            {value.name}
          </button>
        ))}
      </div>
      <div className="logo">
        <h1>
          <span>f</span>easto
        </h1>
      </div>
      <div className="searchbox">
        <input
          type="text"
          placeholder="Search Food...."
          onChange={searchFood}
        />
      </div>
    </nav>
  );
}
