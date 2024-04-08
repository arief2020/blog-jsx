import React from 'react';

function MyComponent() {
  function handleClick(event) {
    console.log('Button clicked!', event.target);
  }

  return (
    <button type="button" onClick={handleClick}>
      Click me!
    </button>
  );
}

export default MyComponent;
