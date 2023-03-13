import { useState } from "react";
import { Colorbox } from "./Colorbox";

// Add color game
export function Addcolor() {
  const [color, setColor] = useState("orange");
  const styles = {
    backgroundColor: color,
  };
  const [colorList, setColorlist] = useState(["crimson", "yellow", "skyblue"]);
  return (
    <div>
      <input
        style={styles}
        type="text"
        onChange={(event) => setColor(event.target.value)}
        value={color}
      />
      <button onClick={() => setColorlist(() => [...colorList, color])}>
        Add color
      </button>
      {colorList.map((clr) => (
        <Colorbox color={clr} />
      ))}
    </div>
  );
}
