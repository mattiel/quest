import React, { useState } from 'react';

const SpaceSelect = (props) => {
  const [focused, setFocused] = useState(false)

  return (
    <div className="cursor-pointer p-3 roundex-xl">
      { props.selectedOption }
    </div>
  );
};

export default SpaceSelect;