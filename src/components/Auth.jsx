import React from "react";

const Auth = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;
