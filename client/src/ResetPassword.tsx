import { useState } from "react";

export default function ResetPassword() {
  const [hasError, setHasError] = useState(false);
  const [errorObj, setErrorObj] = useState({
    code: "Error",
    description: "Something went wrong.",
  });

  const [loadingNextState, setLoadingNextState] = useState(false);

  const [form, setForm] = useState({
    email: "",
    temporaryPassword: "",
    newPassword: "",
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
          description: "Email or temporary password is incorrect.",
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
      <h1>Reset Password</h1>

      <p>Enter your email, temporary password, and your new password.</p>

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
        <div className="input-group">
          <label className="input-group-label">Change Password</label>
          <label htmlFor="temporaryPassword">Temporary Password</label>

          <input
            type="password"
            name="temporaryPassword"
            id="temporaryPassword"
            placeholder="********************"
            value={form.temporaryPassword}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
          <label htmlFor="newPassword">New Password</label>

          <input
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="********************"
            value={form.newPassword}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
          <label htmlFor="confirmPassword">Confirm New Password</label>

          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="********************"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
        </div>

        <button type="submit" disabled={loadingNextState}>
          {loadingNextState ? "Resetting Password..." : "Reset Password"}
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
