import { useState } from "react";
import hero from "./assets/hero-wave.png";

export default function SignUp() {
  const [hasError, setHasError] = useState(false);
  const [errorObj, setErrorObj] = useState({
    code: "Error",
    description: "Something went wrong.",
  });

  const [loadingNextState, setLoadingNextState] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
    console.log(form);

    try {
      if (form.password !== form.confirmPassword) {
        setHasError(true);

        setErrorObj({
          code: "Passwords Do Not Match",
          description:
            "Please make sure both passwords match before continuing.",
        });
        return;
      }

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
      <h1>Create an Account</h1>

      <form onSubmit={handleSubmit}>
        <div className="side-by-side-input">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First"
              value={form.firstName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last"
              value={form.lastName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
        </div>
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
            e.currentTarget.setCustomValidity("Enter a valid email address.")
          }
          onInput={(e) => e.currentTarget.setCustomValidity("")}
        />
        <label htmlFor="phone">Phone Number</label>
        <small>Format: 123-456-7890</small>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="123-456-7890"
          minLength={12}
          maxLength={12}
          value={form.phone}
          onChange={handleChange}
          required
          autoComplete="off"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onInvalid={(e) =>
            e.currentTarget.setCustomValidity("Enter a valid phone number.")
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
          autoCapitalize="on"
        />

        <label htmlFor="confirmPassword">Confirm Password</label>

        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="********************"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          autoComplete="current-password"
          autoCapitalize="on"
        />

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
        Already have an account?{" "}
        <a href="/sign-in" data-navigo>
          Sign In
        </a>
      </div>
    </section>
  );
}
