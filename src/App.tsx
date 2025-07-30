import { useSetAtom } from "jotai";
import { Confetti } from "./Confetti";
import { Settings } from "./Settings";
import { triggerAtom } from "./store";

export default function App() {
  const trigger = useSetAtom(triggerAtom);

  return (
    <div style={{ padding: 40 }}>
      <h1>Jotai + Confetti Settings</h1>
      <Settings />
      <button type="button" onClick={trigger}>
        Click Me!
      </button>

      <Confetti />
    </div>
  );
}
