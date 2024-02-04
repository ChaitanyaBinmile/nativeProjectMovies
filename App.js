import { Provider, useSelector } from "react-redux";
import { store } from "./app/store";
import RouteHandler from "./router/RouteHandler";

export default function App() {
  return (
    <Provider store={store}>
      <RouteHandler/>
    </Provider>
  );
}
