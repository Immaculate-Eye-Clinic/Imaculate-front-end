import React from 'react';
import { render } from "react-dom";

import Tabs from './Tabs';
import {Div} from './styled'
import Content from './Content'

function Taba() {
  return (
    <Div>
     <Tabs>
      <div label="Basic Information">
        <Content>
          <div>
            <div className='acc'>
              <p>Account Information</p>
            </div>
            <div className='con'>
              <div className='flex'>
                <p>Email</p>
                <p>Justiceg@gmail.com</p>
              </div>
              <div className='flex'>
                <p>Tel</p>
                <p>+234 800 300 4000</p>
              </div>
              <div className='flex'>
                <p>Status of</p>
                <p className='p'>Mass Doctors</p>
              </div>
              <div className='flex'>
                <p>Customer</p>
                <p>Good Debtor</p>
              </div>
            </div>
          </div>
        </Content>
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