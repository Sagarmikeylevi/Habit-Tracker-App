import React from "react";
import {Provider} from 'react-redux';
import HabitTracker from "./components/HabitTracker";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <HabitTracker />
    </Provider>
  );
}

export default App;
