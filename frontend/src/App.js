import "bootstrap/dist/css/bootstrap.min.css";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store,persistor } from "./stores";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
