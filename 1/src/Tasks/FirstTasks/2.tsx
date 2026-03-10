import { useState } from "react";

interface Counter {
  firstCount: number;
  secondCount: number;
}

function SecondTask() {
  function multiply({ firstCount, secondCount }: Counter) {
    return firstCount + secondCount;
  }

  const [firstCountX, setFirstCountX] = useState<number>(0);
  const [secondCountX, setSecondCountX] = useState<number>(0);

  return (
    <>
      <hr />
      <label>Первое число 11:</label>
      <br />
      <input
        type="number"
        onChange={(e) => {
          setFirstCountX(Number(e.target.value));
        }}
        value={firstCountX}
      />
      <br />
      <label>Второе число:</label>
      <br />
      <input
        type="number"
        onChange={(e) => {
          setSecondCountX(Number(e.target.value));
        }}
        value={secondCountX}
      />
      <br />
      Сумма: {multiply({ firstCount: firstCountX, secondCount: secondCountX })}
    </>
  );
}

export default SecondTask;
