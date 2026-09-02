import { useState } from "react";
import hero from "./assets/hero.png";

export default function LogIn() {
  const [hasError, setHasError] = useState(false);
  const [errorObj, setErrorObj] = useState({
    code: "Error",
    description: "Something went wrong.",
  });

  const [loadingNextState, setLoadingNextState] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setLoadingNextState(false);

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoadingNextState(true);
    setHasError(false);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
      } else if (response.status === 401) {
        setHasError(true);

        setErrorObj({
          code: "Invalid Credentials",
          description: "Email or password is incorrect.",
        });
      } else if (response.status >= 400 && response.status < 500) {
        setHasError(true);

        setErrorObj({
          code: "Connection Error",
          description: "We couldn't process your request.",
        });
      } else if (response.status >= 500) {
        setHasError(true);

        setErrorObj({
          code: "Server Error",
          description: "Something went wrong on our end.",
        });
      }
    } catch {
      setHasError(true);

      setErrorObj({
        code: "Connection Error",
        description: "Unable to connect to the server.",
      });
    } finally {
      setLoadingNextState(false);
    }
  }
  return (
    <section className="container">
      <img className="logo" src={hero} alt="Logo" />

      <h1>Sign in to Your Account</h1>

      <p>Enter your email and password to log in.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>

        <input
          type="text"
          name="email"
          id="email"
          placeholder="email@address.com"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="off"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          onInvalid={(e) =>
            e.currentTarget.setCustomValidity("Enter a valid email.")
          }
          onInput={(e) => e.currentTarget.setCustomValidity("")}
        />

        <label htmlFor="password">Password</label>

        <input
          type="password"
          name="password"
          id="password"
          placeholder="********************"
          value={form.password}
          onChange={handleChange}
          required
          autoComplete="current-password"
        />

        <a href="/forgot-password" data-navigo>
          Forgot Password?
        </a>

        <button type="submit" disabled={loadingNextState}>
          {loadingNextState ? "Logging In..." : "Log In"}
        </button>
      </form>

      {hasError && (
        <div className="error">
          <strong>{errorObj.code}</strong>
          <p>{errorObj.description}</p>
        </div>
      )}

      <div className="center">
        Don't have an account?{" "}
        <a href="/sign-up" data-navigo>
          Sign Up
        </a>
      </div>
    </section>
  );
}
