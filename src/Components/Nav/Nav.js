import React from 'react';
import { BiHomeAlt, BiSearchAlt, BiInfoCircle } from 'react-icons/bi';
import NavItem from './NavItem';

const defaultIconSize = '1.875rem';
const items = [
    { label: 'Home', icon: <BiHomeAlt size={defaultIconSize} />, path: '/' },
    { label: 'Search', icon: <BiSearchAlt size={defaultIconSize} />, path: '/search' },
    { label: 'About', icon: <BiInfoCircle size={defaultIconSize} />, path: '/about' }
];

const Nav = () => {
    return (
        <nav className="col-span-1 bg-blue-900 text-gray-300 min-h-screen flex flex-col">
            <div className="mx-4 justify-between items-center py-4 border-b text-right">
                <h4>POKEMON.net</h4>
            </div>
            <ul className="mx-4 my-2 ">
                {items.map((item, index) => (
                    <NavItem key={index} item={item} />
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
