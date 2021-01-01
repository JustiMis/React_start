import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';


class List extends React.Component {
  static propTypes = {
      title: PropTypes.node.isRequired,
      imgSrc: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
      
  }  
  static defaultProps = {
      children:<p>I can do all the things!</p>
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero src={this.props.imgSrc} 
              title={this.props.title} />
        <div className={styles.description}>
            {this.props.children}
        </div>
        <div className={styles.columns}>
            <Column col1Title='HOME do it!' />
            <Column col2Title='WORK do it!' />
            <Column col3Title='AMBITION do it!' />
        </div>
      </section>
    )
  }
}

export default List;