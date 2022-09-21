import "./ActiveToggle.css";
import { useState } from "react";

function ActiveToggle() {
  const [activeButton, setActiveButton] = useState(true);

  return (
    <main>
      <div className={`box` + (activeButton ? " box--active" : "")} />
      <button
        onClick={() => setActiveButton((activeButton) => !activeButton)}
        type="button"
      >
        {activeButton ? "Disable" : "Activate"}
      </button>
    </main>
  );
}

export default ActiveToggle;
