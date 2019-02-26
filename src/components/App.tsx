import React from "react";

const title: string = "Minimal React Setup",
      subtitle: string = "Simple demonstration using Babel, Webpack, Typescript, SCSS, and many other technologies"

const App = () => <React.Fragment>
  <h1 className="title">{title}</h1>
  <h2 className="subtitle">{subtitle}</h2>
</React.Fragment>

export default App;
