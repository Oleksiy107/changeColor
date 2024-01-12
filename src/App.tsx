import React, { useState, useEffect } from "react";

const randomRgbColor = () => {
  let r: number = Math.floor(Math.random() * 256);
  let g: number = Math.floor(Math.random() * 256);
  let b: number = Math.floor(Math.random() * 256);
  return {
    backgroundColor: `rgb(${r},${g},${b})`,
  };
};

const MyComponent: React.FC = () => {
  const [colorStyle, setColorStyle] = useState(randomRgbColor);
  const [changing, setChanging] = useState(true);

  const startChange = () => {
    const interval = setInterval(() => {
      setColorStyle(randomRgbColor);
    }, 3000);
  };
  useEffect(() => {
    if (changing) {
      const interval: void = startChange();

      return () => {
        clearInterval(interval);
      };
    }
  }, [changing]);
  return (
    <>
      <div className={"list"}>
        <p style={colorStyle}>
          <p>{`${colorStyle.backgroundColor}`}</p>
        </p>
        <p style={randomRgbColor()}>
          <i>{`(${colorStyle.backgroundColor})`}</i>
        </p>
        <p style={randomRgbColor()}>
          <i>{`(${colorStyle.backgroundColor})`}</i>
        </p>
        <p style={randomRgbColor()}>
          <i>{`(${colorStyle.backgroundColor})`}</i>
        </p>
        <p style={randomRgbColor()}>
          <i>{`(${colorStyle.backgroundColor})`}</i>
        </p>
      </div>
    </>
  );
};

export default MyComponent;
