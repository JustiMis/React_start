import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore.js';


class Card extends React.Component {
    static defaultProps = {
    icon: settings.defaultCardIcon, //czy card ma ikone?
    }
  
    static propTypes = {
      title: PropTypes.string.isRequired,
    }
    
    render() {
      const {title} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{title}</h3>
        </section>
      );
    }
}

export default Card;