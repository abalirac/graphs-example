import { Link } from "react-router-dom";

export default function SideNav() {
    return (
      //TOOD: make sidenav responsive and add active class
      <nav>
        <ul>
          <li>
            <Link to="/" className="flex align-items-center">
              <i className="pi pi-home mr-2"></i>
              Home
            </Link>
          </li>
          <li>
            <Link to="/simulation" className="flex align-items-center">
              <i className="pi pi-server mr-2"></i>
              Simulations
            </Link>
          </li>
        </ul>
      </nav>
    )
  }