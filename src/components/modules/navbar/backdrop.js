import React from 'react';
import { Backdrop } from './Styled'

const backdrop = props => <Backdrop className="backdrop" onClick={props.click} />;

export default backdrop;
