import { Link } from "react-router-dom";
import Magnet from "../store/Magnet";

const Navbar = () => {
  return (
    <div className="flex justify-center text-gray-300 italic  m-5">
      <Magnet
        padding={100}
        disabled={false}
        magnetStrength={5}
        className="p-2 m-2"
      >
        <Link to={`/`}>Home</Link>
      </Magnet>
      <Magnet
        padding={100}
        disabled={false}
        magnetStrength={5}
        className="p-2 m-2"
      >
        <Link to={`/work`}>Work</Link>
      </Magnet>
      <Magnet
        padding={100}
        disabled={false}
        magnetStrength={5}
        className="p-2 m-2"
      >
        <Link to={`/about`}>About</Link>
      </Magnet>
      <Magnet
        padding={100}
        disabled={false}
        magnetStrength={5}
        className="p-2 m-2"
      >
        <Link to={`/contact`}>Contact</Link>
      </Magnet>
    </div>
  );
};
export default Navbar;
