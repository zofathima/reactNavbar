const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  transition: "all 0.3s ease",
};

const Navbar = () => {
  // Our navigation data - array of objects
  const navLinks = [
    { name: "Home", path: "/", icon: "🏠", isActive: false, isVisible: true },
    {
      name: "About",
      path: "/about",
      icon: "👤",
      isActive: true,
      isVisible: true,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: "💼",
      isActive: false,
      isVisible: true,
    },
    {
      name: "Blog",
      path: "/blog",
      icon: "📝",
      isActive: false,
      isVisible: true,
    },
    {
      name: "Admin",
      path: "/admin",
      icon: "⚙️",
      isActive: false,
      isVisible: false,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: "✉️",
      isActive: false,
      isVisible: true,
    },
    {
      name: "Gallery",
      path: "/contact",
      icon: "✉️",
      isActive: false,
      isVisible: true,
    },
    {
      name: "Services",
      path: "/contact",
      icon: "✉️",
      isActive: false,
      isVisible: true,
    },
  ];

  // Filter to show only visible links (using .filter() from Day 2!)
  const visibleLinks = navLinks.filter((link, index) => index < 3);

  return (
    <nav
      style={{
        backgroundColor: "gray",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo/Brand */}
      <h1
        style={{
          color: "white",
          margin: 0,
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        ✨ My Website
      </h1>
      {/* Navigation Links - using .map() from Day 2! */}
      <div style={{ display: "flex", gap: "15px" }}>
        {visibleLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            style={{
              ...linkStyle,
              backgroundColor: link.isActive ? "red" : "transparent",
              fontWeight: link.isActive ? "bold" : "normal",
            }}
            onMouseEnter={(e) => {
              if (!link.isActive) {
                e.target.style.backgroundColor = "red";
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = link.isActive
                ? "#3498db"
                : "transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            <span style={{ fontSize: "18px" }}>{link.icon}</span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      <span style={{ fontSize: "50px" }}>🔍</span>
      <button
        style={{
          fontSize: "50px",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
