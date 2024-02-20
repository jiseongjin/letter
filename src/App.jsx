import GlobalStyle from "components/GlobalStyle";
import { Provider } from "react-redux";
import Router from "shared/Router";
import store from "shared/redux/config/configStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Router />
      </Provider>
    </>
  );
}

export default App;
