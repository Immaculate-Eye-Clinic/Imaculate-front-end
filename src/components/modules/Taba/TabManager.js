import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Tabss} from './styled'

export class TabManager extends Component {
    state = {}
  
    render() {
      const { activeTab, handleTab, tabs } = this.props;
      return (
        <Tabss>
          {tabs.map(({ label, value }) => (
            <div
              className={`tab ${value === activeTab ? 'selected-tab' : ''}`}
              onClick={() => { handleTab(value); }}
            >
              {label}
            </div>
          ))}
        </Tabss>
      );
    }
  }
  
  TabManager.propTypes = {
    activeTab: PropTypes.number.isRequired,
    handleTab: PropTypes.func.isRequired,
    tabs: PropTypes.arrayOf(Object).isRequired,
  };