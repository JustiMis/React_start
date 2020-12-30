import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        col1Title: PropTypes.string.isRequired,
        col2Title: PropTypes.string.isRequired,
        col3Title: PropTypes.string.isRequired,
    }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.col1Title}</h3>
        <h3 className={styles.title}>{this.props.col2Title}</h3>
        <h3 className={styles.title}>{this.props.col3Title}</h3>
      </section>
      
    )
  }
}

export default Column;