import React from 'react';
import { MenuItem } from '@material-ui/core';

interface IProps {
    value: any;
    name: any;
}

const MenuItems: React.FC<IProps> = ({ value, name }) => {
    console.log(value)
    return <MenuItem value={value}>{name}</MenuItem>
}

export default MenuItems;