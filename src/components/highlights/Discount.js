import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };
  componentDidUpdate = () => {
    setTimeout(() => {
      this.percentage();
    }, 30);
  };
  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState(({ discountStart }) => ({
        discountStart: discountStart + 1
      }));
    }
  };
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={this.percentage}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>Off</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th June</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div>BUTTON GOES HERE</div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
