import "./App.css";

import { useEffect, useState } from "react";
import Navigo from "navigo";
import SignUp from "./LogIn";
import ResetPassword from "./ResetPassword";

function App() {
  const [page, setPage] = useState(window.location.pathname);

  useEffect(() => {
    const router = new Navigo("/");

    router.on({
      "/": () => setPage("/"),
      "/forgot-password": () => setPage("/forgot-password"),
      "/reset-password": () => setPage("/reset-password"),
      "/sign-up": () => setPage("/sign-up"),
      "*": () => setPage("/404"),
    });

    router.resolve();

    return () => {
      router.destroy();
    };
  }, []);

  if (page === "/log-in" || page === "/") {
    return <SignUp />;
  }

  if (page === "/sign-up") {
    return (
      <section className="container">
        <h1>Sign Up</h1>

        <a href="/" data-navigo>
          Back to Login
        </a>
      </section>
    );
  }

  if (page === "/forgot-password") {
    return (
      <section className="container">
        <h1>Forgot Password</h1>

        <a href="/" data-navigo>
          Back to Login
        </a>
      </section>
    );
  }

  if (page === "/reset-password") {
    return <ResetPassword />;
  }
}

export default App;
