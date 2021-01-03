import {connect} from 'react-redux';
import Column from './Column.js';

const mapStateToProps = (state, props) => ({
  cards: getCardForColumn(state, props.id),
});

export const getCardForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export default connect(mapStateToProps)(Column);