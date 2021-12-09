import { NavLink } from 'react-router-dom';
import userIcon from '../styles/img/user-icon.svg';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <header className="flex align-items-center space-between">
      <nav className="panel-bg flex align-items-center">
        <h1 className="Text-Style-5">Bookstore CMS</h1>
        <ul className="nav-menu-list flex">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="Text-Style-7"
                activeClassName="active-link"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="profile-image-cover">
        <img src={userIcon} alt="" className="profile-image" />
      </div>
    </header>
  );
};

export default NavBar;
