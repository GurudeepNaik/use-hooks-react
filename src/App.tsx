import { UseStoredStateEx } from "./components/hooks-example/use-storedstate";
import { Card } from "./components/ui/card";

function App() {
  return (
    <div className="bg-background text-foreground w-full h-full">
      <Card>
        <UseStoredStateEx />
      </Card>
    </div>
  );
}

export default App;
