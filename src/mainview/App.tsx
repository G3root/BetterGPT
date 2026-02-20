import { useState } from "react";
import { Button } from "~/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button onClick={() => setCount((c) => c + 1)} variant="outline">
        Count: {count}
      </Button>
    </div>
  );
}

export default App;
