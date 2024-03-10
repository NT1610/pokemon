import { BiHomeAlt, BiSearchAlt, BiInfoCircle } from 'react-icons/bi';
import NavItem from './NavItem';

const defaultIcomSize = '3.875rem';
const items = [
    { label: 'Home', icon: <BiHomeAlt size={defaultIcomSize} />, active: true },
    { label: 'Search', icon: <BiSearchAlt size={defaultIcomSize} /> },
    { label: 'About', icon: <BiInfoCircle size={defaultIcomSize} /> }

];
const Index = () => {
    return (
        <nav className="col-span-1 bg-blue-900 text-gray-300">
            <div className="mx-4 justify-between items-center py-4 border-b text-right">
                <h4>POKEMON.net</h4>
            </div>
            <ul className="mx-4 my-2 ">
                {items.map((item, index) => (
                    <NavItem key={index} item={item} />
                ))}

            </ul>
        </nav>

    )
}

export default Index;