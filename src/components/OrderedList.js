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

import OrderedListOption from './OrderedListOption';

function OrderedList(props) {
  const { options } = props;
  if (!options.length) {
    return <span className="empty">Nothing to see here. Move along.</span>;
  }

  return (
    <ol className="options">
      {options.map(option => <OrderedListOption key={option} value={option} />)}
    </ol>
  );
}

/**
  We let React know that we expect `options` to be an array
 */
OrderedList.propTypes = {
  options: PropTypes.array,
};

/**

  Learn something new!

  `defaultProps`

  defaultProps can be defined as a property on the component class itself, to set the default props for the class. 
  This is used for undefined props, but not for null props. For example:

  If props.options is not provided, it will be set by default to an empty array as []:

  https://reactjs.org/docs/react-component.html#defaultprops

 */
OrderedList.defaultProps = {
  options: [],
};

export default OrderedList;