import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';

class Column extends React.Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      cards: PropTypes.array,
      name: PropTypes.node,
    }

    render() {
      const {title, name, cards} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{title}<span className={styles.icon}>{name}</span></h3>

          <div>{cards.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))} 
          </div>
          {/*}
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>*/}
        </section>
      );
    }
}

export default Column;