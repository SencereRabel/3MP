import "./App.css";

import { useEffect, useState } from "react";
import Navigo from "navigo";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ResetPassword from "./ResetPassword";
import ForgotPassword from "./ForgotPassword";

function App() {
  const [page, setPage] = useState(window.location.pathname);

  useEffect(() => {
    const router = new Navigo("/");

    router.on({
      "/": () => setPage("/"),
      "/forgot-password": () => setPage("/forgot-password"),
      "/reset-password": () => setPage("/reset-password"),
      "/sign-up": () => setPage("/sign-up"),
      "/sign-in": () => setPage("/sign-in"),
      "*": () => setPage("/404"),
    });

    router.resolve();

    return () => {
      router.destroy();
    };
  }, []);

  if (page === "/" || page === "/sign-in") {
    return <SignIn />;
  }

  if (page === "/sign-up") {
    return <SignUp />;
  }

  if (page === "/forgot-password") {
    return <ForgotPassword/>;
  }

  if (page === "/reset-password") {
    return <ResetPassword />;
  }
}

export default App;
