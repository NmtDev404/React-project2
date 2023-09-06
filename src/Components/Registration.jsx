import React, { useState } from "react";


const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full column">
      <input className="bg-slate-400 ml-1"
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input className="bg-slate-400 ml-1"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="bg-slate-400 ml-1"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-cyan-300 text-xs p-3 rounded-full
      " type="submit">Register</button>
    </form>
  );
};

export default Registration;
