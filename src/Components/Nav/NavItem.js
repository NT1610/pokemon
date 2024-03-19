import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ item }) => {
  const { label, icon, path } = item;

  return (
    <li className={`flex p-2 justify-end items-center cursor-pointer`}>
      <Link to={path}>
        <h3 className='mr-2'>{label}</h3>
        {icon}
      </Link>
    </li>
  );
};

export default NavItem;
