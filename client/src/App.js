import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Pages from "./pages/Pages";
import { setUser } from './store/auth';



function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      const res = await fetch("/api/session");
      if (res.ok) {
        res.formData = await res.json();
        dispatch(setUser(res.formData.user))
      }
      setLoading(false);
    };
    loadUser();
  }, [dispatch]);

  if (loading) return null;

  return (
    <BrowserRouter>
        <Pages />
    </BrowserRouter>
  );
}

export default App;
