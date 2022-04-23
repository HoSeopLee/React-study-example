import React from 'react';
import ButtonExample from './ButtonExample';
import { Page } from 'react-onsenui';
import ActionSheetExample from './ActionSheetExample';
import CheckBoxExample from './CheckBoxExample';
import FabExample from './FabExample';
import ListExample from './ListExample';
import ProgressExample from './ProgressExample';
export default function OnsenUiExample() {
  return (
    <Page>
      <ProgressExample />
      <ListExample />
      <FabExample />
      <CheckBoxExample />
      <ButtonExample />
      <ActionSheetExample />
    </Page>
  );
}
