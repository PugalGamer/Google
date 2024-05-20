import { useContext } from "react";
import { AppContext } from "./New";
export default function Second() {
  const { name } = useContext(AppContext);
  const { store } = useContext(AppContext);
  console.log(store);
  return (
    <div>
      <p>name:{name}</p>
    </div>
  );
}
