import React from 'react';

import { visitors } from './templates';

import { Product } from './models';

interface Props {
  ticket: Product
}

function DataReceiver({ ticket }: Props): React.JSX.Element {

  // Function to render based on data type
  const renderBasedOnDataType = (product: Product): React.JSX.Element => {
    const dataType = product.type; // Assuming each data object has a 'type' property
    const visitor = visitors[dataType];
    if (visitor) {
      return visitor(product);
    }
    return <div>No template found for data type: {dataType}</div>;
  };

  return (
    <div>
      {/* Render based on the data type */}
      {ticket ? renderBasedOnDataType(ticket) : null}
    </div>
  );
}

export default DataReceiver;
