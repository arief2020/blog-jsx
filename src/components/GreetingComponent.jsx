import React from 'react';

export default function GreetingComponent() {
  const isLoggedIn = false;
  let greeting;

  if (isLoggedIn) {
    greeting = <h1>Welcome back!</h1>;
  } else {
    greeting = <h1>Please log in to continue</h1>;
  }
  return <div>{greeting}</div>;
}
