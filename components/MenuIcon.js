import React from 'react';
import { ReactComponent as OpenIcon } from '../icons/hamburger-lg.svg';
import { ReactComponent as CloseIcon } from '../icons/close-fill.svg';

const MenuIcon = ({ isOpen, onClick }) => {
    return (
        <span className="menu-icon" onClick={onClick}>
      {isOpen ? (
          <CloseIcon width="30" height="30" />
      ) : (
          <OpenIcon width="30" height="30" />
      )}
    </span>
    );
};

export default MenuIcon;