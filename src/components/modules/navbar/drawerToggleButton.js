import React from 'react';
import { Button } from './Styled'
import './menu.css';

const drawerToggleButton = props => (
    <Button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </Button>
);

export default drawerToggleButton;
