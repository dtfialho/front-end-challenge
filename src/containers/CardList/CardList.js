import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCards, stopGame } from '../../actions';
import data from '../../assets/tarot.json';

import FullCard from '../../components/FullCard/FullCard';
import './CardList.styl';

export class CardList extends Component {
  componentWillMount() {
    this.props.stopGame();
    this.props.loadCards(data);
  }

  render() {
    return (
      <section className="CardList">
        {
          this.props.order.map(id => (
            <FullCard
              key={id}
              name={this.props.cards[id].name}
              image={this.props.cards[id].image}
            />
          ))
        }
      </section>
    );
  }
}

CardList.propTypes = {
  stopGame: PropTypes.func,
  loadCards: PropTypes.func,
  order: PropTypes.array,
  cards: PropTypes.object,
};

const mapStateToProps = ({ game }) => ({
  cards: game.cards,
  order: game.order,
});

export default connect(mapStateToProps, { loadCards, stopGame })(CardList);
