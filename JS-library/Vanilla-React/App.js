const element = React.createElement;

function App() {
  return element("div", null, "Hello Daddy!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element(App));
