import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TweenMax from 'gsap';
import { selectCard } from '../../actions';

import FullCard from '../../components/FullCard/FullCard';
import './SelectedCard.styl';


export class SelectedCard extends React.Component {
  constructor(props) {
    super(props);
    this.selectedCardContainer = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item) {
      TweenMax.to(this.selectedCardContainer.current, 1, { autoAlpha: 1 });
    }
  }

  close = () => {
    TweenMax.to(this.selectedCardContainer.current, 1, { autoAlpha: 0 });
    this.props.selectCard(false);
  }

  render() {
    return (
      <section className="SelectedCard" ref={this.selectedCardContainer} onClick={this.close}>
        {this.props.item ? (
          <div className="SelectedCard-Content">
            <div className="close" onClick={this.close}>&times;</div>
            <FullCard
              image={this.props.item.image}
              name={this.props.item.name}
            />
          </div>
        ) : null
        }
      </section>
    );
  }
}

SelectedCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  selectCard: PropTypes.func,
};

const mapStateToProps = ({ game }) => ({
  item: game.cards[game.selected],
});

export default connect(mapStateToProps, { selectCard })(SelectedCard);
