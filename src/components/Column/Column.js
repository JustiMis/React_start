import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore.js';
import Icon from './Icon.js';




class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
    static propTypes = {
      title: PropTypes.string.isRequired,
      cards: PropTypes.array,
      name: PropTypes.node,
    }

    addCard(title){
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
              title,
              icon: 'name',
              cards: [],
            },
          ],
        }
      ));
    }

    render() {
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{this.props.title}<span className={Icon}></span></h3>

          <div className={styles.icon}>{this.state.cards.map(({key, ...cardsProps}) => (
            <Card key={key} {...cardsProps} />
          ))} 
          </div>

          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
        </section>
        );
    }
}

export default Column;