import { useState } from "react";

export default function ForgotPassword() {
  const [hasError, setHasError] = useState(false);
  const [errorObj, setErrorObj] = useState({
    code: "Error",
    description: "Something went wrong.",
  });

  const [loadingNextState, setLoadingNextState] = useState(false);

  const [form, setForm] = useState({
    email: "",
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
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
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
      <h1>Forgot Password</h1>
      <p>Please enter the email you used to register for your account.</p>

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
            e.currentTarget.setCustomValidity("Enter a valid email address.")
          }
          onInput={(e) => e.currentTarget.setCustomValidity("")}
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

      <a href="/" data-navigo>
        Back to Login
      </a>
    </section>
  );
}
