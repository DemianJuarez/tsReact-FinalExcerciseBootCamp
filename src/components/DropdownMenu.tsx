import './DropdownMenu.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";


interface Option {
    value: string;
    label: string;
}

interface DropdownMenuProps {
    options: Option[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Option | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item: Option) => {
        setSelectedItem(item);
        setIsOpen(false);

    };



    return (
        <div className="custom-dropdown">
            <div onClick={toggleDropdown} className="dropdown-toggle">
                <img className='menu-image' src="https://cdn-icons-png.flaticon.com/512/9293/9293128.png" alt="" />
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {options.map((option) => (
                        <li key={option.value} onClick={() => handleItemClick(option)}>
                            <a href={option.value}>{option.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export { DropdownMenu }


