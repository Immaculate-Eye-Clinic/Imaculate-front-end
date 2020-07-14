import React from 'react';
import { render } from "react-dom";

import Tabs from './Tabs';
import {Div} from './styled'

function Taba() {
  return (
    <Div>
     <Tabs>
      <div label="Basic Information">
        See ya later, <em>Alligator</em>!
      </div>
      <div label="Transaction">
        After 'while, <em>Crocodile</em>!
      </div>
      <div label="Messages">
        Nothing to see here, this tab is <em>extinct</em>!
      </div>
    </Tabs>
    </Div>
  );
}

export default Taba