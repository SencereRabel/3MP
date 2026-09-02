import "./App.css";

import { useEffect, useState } from "react";
import Navigo from "navigo";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function App() {
  const [page, setPage] = useState(window.location.pathname);

  useEffect(() => {
    const router = new Navigo("/");

    router.on({
      "/": () => setPage("/"),
      "/forgot-password": () => setPage("/forgot-password"),
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
    return (
      <section className="container">
        <h1>Forgot Password</h1>

        <a href="/" data-navigo>
          Back to Login
        </a>
      </section>
    );
  }
}

export default App;
