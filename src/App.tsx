import { Route, Routes } from "@solidjs/router";
import { Component } from "solid-js";
import "@styles/App.scss";
import Home from "@routes/Home";
import Create from "@routes/Create";
import Join from "@routes/Join";

const App: Component = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/join" component={Join} />
        </Routes>
      </div>
    </>
  );
};

export default App;
