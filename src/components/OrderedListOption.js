import React from 'react';
/**

  Learn something new!

  Typechecking With PropTypes

  Runtime type checking for React props and similar objects.

  You can use prop-types to document the intended types of properties passed to components.
  React will check props passed to your components against those definitions, 
  and warn in development if they don’t match.


  https://www.npmjs.com/package/prop-types

 */
import PropTypes from 'prop-types';

function OrderedListOption(props) {
  const { value } = props;
  return <li className="value">{value}</li>;
}

/**
  We let React know that we expect `value` to be a string
 */
OrderedListOption.propTypes = {
  value: PropTypes.string,
};

export default OrderedListOption;