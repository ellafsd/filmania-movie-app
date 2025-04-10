import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 md:px-10 border-b shadow">

      <Link to="/" className="flex items-center mb-3">
        <img width={90} src="/movie-logo.png" alt="logo" />
        <h2 className="text-2xl font-bold p-5 max-sm:hidden">Filmania</h2>
      </Link>

      <Link
        to="/create"
        className="font-semibold border-4 border-gray-500 rounded-full py-1 px-4 hover:bg-red-600 hover:text-white transition"
      >
        Create a Movie
      </Link>
      
    </header>
  );
};

export default Header;
