import React from 'react';

export default function TodoComponent() {
  const todoItems = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Deploy to production' },
  ];
  return (
    <div>
		<h1>Todo Component</h1>
      <ul>
        {todoItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
