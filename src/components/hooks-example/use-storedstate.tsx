import { useStoredState } from "../../hooks/use-storedstate";
import { Button } from "../ui/button";

export const UseStoredStateEx = () => {
  const [items, setItems] = useStoredState("items", ["item1", "item2"]);

  const handleAddClick = () => {
    setItems((items) => [...items, `item${items.length + 1}`]);
  };

  const handleRemoveClick = () => {
    setItems((items) => items.slice(0, -1));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button onClick={handleAddClick}>Add</Button>
      <Button onClick={handleRemoveClick}>Remove</Button>
    </div>
  );
};
