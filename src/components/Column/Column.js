import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {
    static propTypes = {
        col1Title: PropTypes.node.isRequired,
        col2Title: PropTypes.node.isRequired,
        col3Title: PropTypes.node.isRequired,
    }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.col1Title}{this.props.col2Title}{this.props.col3Title}</h3>
      </section>
      
    )
  }
}

export default Column;