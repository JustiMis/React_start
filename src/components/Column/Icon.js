import React from 'react';
import PropTypes from 'prop-types';

{/*static PropTypes = {
    name: PropTypes.node,
}*/}

const Icon = props => (<i className={`fas fa-${props.name}`}></i>); 


export default Icon;
