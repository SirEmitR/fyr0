import { useRef, useEffect } from 'react';
import useToggle from '../hooks/useToggle';

function getPosition(position) {
  switch (position) {
    case 'top-left':
      return '-top-full -left-full';
    case 'top-right':
      return '-top-full -right-full';
    case 'bottom-left':
      return 'left-full top-full mt-2 -translate-x-full';      
    case 'bottom-right':
      return '-bottom-full -right-full';
    case 'left-top':
      return '-top-full -left-full';
    case 'left-bottom':
      return '-bottom-full -left-full';
    case 'right-top':
      return '-top-full -right-full';
    case 'right-bottom':
      return '-bottom-full -right-full';
    default:
      return '-top-full -left-full';
  }
}

const Dropdown = ({ position = 'bottom-left', opener, children }) => {
  const [open, toggle, _, setFalse] = useToggle(false);
  const ref = useRef(null);

  // Cierra el dropdown si haces click fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setFalse();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={toggle}
        className="focus:outline-none  hover:bg-palette-crystal-hover rounded-md p-2 text-sm font-medium text-palette-text-palette-shadow-medium"
      >
        {opener}
      </button>
      {open && (
        <div className={`absolute z-50 w-xs ${getPosition(position)} bg-white shadow-lg rounded-md text-sm`}>
          {children}
        </div>
      )}
    </div>
  );
};

const DropdownSection = ({ title = '', children, hasDivider = false }) => {
  return (
    <div className={`flex flex-col gap-2 ${hasDivider ? 'border-b border-palette-text-palette-shadow-medium/20' : ''}`}>
      {title && (
        <h3 className="text-base font-semibold text-palette-shadow-medium px-4 pt-4 pb-0">{title}</h3>
      )}
      <ul className='px-4 py-2'>
        {children}
      </ul>
    </div>
  );
};

const DropdownItem = ({ children }) => {
  return (
    <li className="px-4 py-2 hover:bg-palette-crystal-hover rounded-md cursor-pointer w-full">
      {children}
    </li>
  );
}

const DropdownButton = ({ children, onClick }) => {
  return (
    <button type='button' onClick={onClick} className="px-4 py-2 hover:bg-palette-crystal-hover rounded-md cursor-pointer w-full">
      {children}
    </button>
  );
}
Dropdown.Item = DropdownItem;

Dropdown.Section = DropdownSection;

Dropdown.Button = DropdownButton;

export default Dropdown;