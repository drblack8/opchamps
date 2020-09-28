import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from './store/configureStore';

const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
  window.store = store
}


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const res = await fetch("/api/session");
      if (res.ok) {
        res.formData = await res.json();
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  if (loading) return null;

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/">
          <h1>My Home Page</h1>
        </Route>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
