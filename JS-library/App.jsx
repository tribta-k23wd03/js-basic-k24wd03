const element = React.createElement;

function App() {
  // XML syntax
  // return element("div", null, "Hello Daddy!");
  return <div className="color">Hello React ES6+</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element(App));
