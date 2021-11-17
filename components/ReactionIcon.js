import React, { useState } from "react";

export default function ReactionIcon({ reaction, setReactionCount }) {
  const [disabled, setDisabled] = useState(false);

  const handleReactionClick = (val) => {
    setReactionCount(val);
    setDisabled(val);
  };

  return (
    <div>
      <img
        // disabled={disabled}
        className={`reactionIcon ${disabled && "disabled"}`}
        src={reaction}
        onClick={() => handleReactionClick(!disabled)}
      />
    </div>
  );
}
