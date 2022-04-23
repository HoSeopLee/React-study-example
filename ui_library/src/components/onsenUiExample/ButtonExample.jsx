import React from 'react';
import { Button } from 'react-onsenui';
export default function ButtonExmaple() {
  const handleClick = () => {
    alert('pressed');
  };
  return (
    <>
      <Button onClick={handleClick} modifier="large--cta">
        Tap Me
      </Button>
      <br />
      <Button onClick={handleClick} disabled={true}>
        disabled
      </Button>
      <br />
      <Button onClick={handleClick} modifier="outline">
        outline
      </Button>
      <br />
      <Button onClick={handleClick} modifier="light">
        light
      </Button>
      <br />
      <Button onClick={handleClick} modifier="quiet">
        quiet
      </Button>
      <br />
      <Button onClick={handleClick} modifier="cta">
        cta
      </Button>
      <br />
      <Button onClick={handleClick} modifier="large--quiet">
        large--quiet
      </Button>
      <br />
      <Button onClick={handleClick} modifier="large--cta">
        large--cta
      </Button>
      <br />
      <Button onClick={handleClick} modifier="material">
        material
      </Button>
      <br />
      <Button onClick={handleClick} modifier="material--flat">
        material--flat
      </Button>
    </>
  );
}
