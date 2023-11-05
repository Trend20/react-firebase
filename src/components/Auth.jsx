import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [movies, setMovies] = useState([]);

  // get movies
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getDocs(collection(db, "movies"));
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        setMovies(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  // login functionality
  const Login = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
    setEmail("");
    setPassword("");
  };

  // google auth
  const LoginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  // logout
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={Login}>
        <input
          type="email"
          placeholder="Email...."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password...."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={LoginWithGoogle}>Sign In With Google</button>
      <button onClick={logout}>Logout</button>
      <div className="movies">
        {movies.map((movie) => (
          <>
            <h3>Tittle: {movie.title}</h3>
            <p>Title: {movie.yearReleased}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Auth;
