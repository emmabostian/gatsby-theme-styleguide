import React, { useState } from "react";

const Wave = () => {
  const [waves, setWaves] = useState(0);

  return (
    <button
      onClick={() => setWaves(waves + 1)}
    >{`You've waved ${waves} times 👋`}</button>
  );
};

export default Wave;
