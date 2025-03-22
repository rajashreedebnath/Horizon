import React from "react";
import Hello from "./Components/HelloName";
import BoxDesign from "./Components/BoxDesign";

function App() {
  return (
    <div>
        <section>
          <Hello name={'Horizon'} />
        </section>

        <section>
          <BoxDesign />
        </section>
    </div>
  );
}

export default App;
