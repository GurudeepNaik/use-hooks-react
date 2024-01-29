import React from "react";
import {
  CardFooter,
  CardHeader,
  Card,
  CardContent,
} from "./components/ui/card";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="bg-background text-foreground w-full h-full">
      <Card>
        <CardHeader>Hello</CardHeader>
        <CardContent>Hello 2</CardContent>
        <CardFooter>Hello</CardFooter>
        <Button>Hello</Button>
      </Card>
    </div>
  );
}

export default App;
