import React from 'react';
import { connect } from 'react-redux';
import { initialState, reducer } from '../reducers/reducer'

const Header = props => {
  console.log(props, 'header props')
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};


const mapStateToProps = state => {
  console.log(state, 'header state')
  // Tells connect which pieces of state to pass to component
  // Returns an object, whose properties are what is passed
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
  }

}

export default connect(mapStateToProps, {})(Header);
