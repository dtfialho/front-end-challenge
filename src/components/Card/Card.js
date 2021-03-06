import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TweenMax from 'gsap';

import './Card.styl';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.cardContentRef = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      TweenMax.to(this.cardContentRef.current, 1, { rotationY: !nextProps.selected ? -180 : 0 });
    }
  }

  render() {
    return (
      <article className="CardContainer" onClick={this.props.click}>
        <div className="CardContent" ref={this.cardContentRef}>
          <div className="CardImage">
            <img src={this.props.card} alt={this.props.name} />
          </div>
          <div className="BackImage">
            <img src={this.props.imageBack} alt={this.props.name} />
          </div>
        </div>
      </article>
    );
  }
}

Card.propTypes = {
  selected: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  click: PropTypes.func,
  card: PropTypes.string,
  name: PropTypes.string,
  imageBack: PropTypes.string,
};

export default Card;
