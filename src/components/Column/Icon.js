import React from 'react';
import Column from './Column.js';
import {listData} from '../data/dataStore.js';
import PropTypes from 'prop-types';

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Column.propTypes ={
    name: propTypes.node,
}

export default Icon;
