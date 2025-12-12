"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Week10LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Week 10</h1>

      {!user && (
        <>
          <p>Login with GitHub below to access your shopping list.</p>
          <button onClick={handleLogin}>Log in with GitHub</button>
        </>
      )}

      {user && (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout}>Log out</button>

          <div style={{ marginTop: "1rem" }}>
            <Link href="/week-10/shopping-list">
              Go to Shopping List
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
