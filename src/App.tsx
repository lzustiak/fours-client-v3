import { Route, Routes } from "@solidjs/router";
import { Component } from "solid-js";
import "@styles/App.scss";
import Home from "@routes/Home";

const App: Component = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </div>
    </>
  );
};

export default App;
