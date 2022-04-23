import React from 'react';
import { ProgressBar, ProgressCircular } from 'react-onsenui';

export default function ProgressExample() {
  return (
    <div>
      <ProgressCircular indeterminate />
      <ProgressCircular indeterminate value={'50'} secondaryValue={'30'} />
      <ProgressCircular
        indeterminate
        modifier="meterial"
        value="50"
        secondaryValue="30"
      />
      <ProgressBar indeterminate></ProgressBar>;
    </div>
  );
}
