import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

const ItemListContainer = ({ mensaje, fn }) => {
  return (
    <>
      <div>
        <div>{mensaje} </div>
        <Button fn={fn} text="Agregar al carrito" />
      </div>
    </>
  );
};

export default ItemListContainer;
