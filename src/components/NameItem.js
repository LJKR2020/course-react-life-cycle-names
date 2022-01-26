import React from 'react';

function NameItem({ name, activeName, setActiveName }) {
  return (
    <li>
      <h3>{name}</h3>
      <button type="button" onClick={() => setActiveName(activeName=name)}>
        Geef een rondje!
      </button>
    </li>
  );
}

export default NameItem;