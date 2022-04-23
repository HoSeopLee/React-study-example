import React, { useState } from 'react';
import { ActionSheet, ActionSheetButton, Button } from 'react-onsenui';

export default function ActionSheetExample() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button onClick={handleClick}>Actions Sheet Open</Button>
      <ActionSheet animation="default" title="ActionSheet" isOpen={open}>
        <ActionSheetButton>Label 1</ActionSheetButton>
        <ActionSheetButton>Label 2</ActionSheetButton>
        <ActionSheetButton>Label 3</ActionSheetButton>
        <ActionSheetButton modifier="destructive">Label 4</ActionSheetButton>
        <ActionSheetButton>Save</ActionSheetButton>
      </ActionSheet>
    </div>
  );
}
