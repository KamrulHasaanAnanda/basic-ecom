import { Provider } from "react-redux";
import "./App.scss";
// import store from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";
import Router from "./router/Router";
function App() {
  return (
    <>
      <Provider store={store()}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
