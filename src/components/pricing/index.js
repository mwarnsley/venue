import React, { Component } from 'react';
import AppButton from '../ui/AppButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices: [
      {
        _id: '1jef09sjf9jsa09dfka0sdf',
        price: 100,
        position: 'Balcony',
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        linkto: 'http://sales/balcony'
      },
      {
        _id: '23fa0dsk9ka0f9kas9fsd',
        price: 150,
        position: 'Medium',
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        linkto: 'http://sales/medium'
      },
      {
        _id: 'o3m4wef0asejf09aek09fke',
        price: 250,
        position: 'Star',
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        linkto: 'http://sales/star'
      }
    ],
    delay: [500, 0, 500]
  };
  showPricingBoxes = () => {
    return this.state.prices.map((box, i) => (
      <Zoom key={box._id} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{box.price}</span>
              <span>{box.position}</span>
            </div>
            <div className="pricing_description">{box.desc}</div>
            <div className="pricing_buttons">
              {' '}
              <AppButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={box.linkto}
              />{' '}
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showPricingBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
