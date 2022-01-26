import React, {useEffect} from 'react';

function NameItem({ name, activeName, setActiveName }) {

    useEffect(() => {
        if (activeName === name) {
            console.log(`${activeName} wil graag een biertje bestellen.`)
        }

    }, [activeName]);

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