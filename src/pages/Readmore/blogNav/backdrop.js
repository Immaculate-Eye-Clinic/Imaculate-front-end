import React from 'react';
import { Backdrop } from './BlogNavStyle'

const backdrop = props => <Backdrop className="backdrop" onClick={props.click} />;

export default backdrop;
