import React from "react";

export default function Store(props) {
  const { fakeStores } = props;
  return (
    <>
      <div>
        <img src={fakeStores.image} />
        <p>{fakeStores.restaurant}</p>
        <p>{fakeStores.explanation}</p>
        <p>{fakeStores.preptime}</p>
        <p>{fakeStores.cost}</p>
      </div>
    </>
  );
}
