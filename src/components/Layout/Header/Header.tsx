import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

export default function Header() {
  return (
    <header>
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
    </header>
  )
}