import React from "react";
import { FaGoogle } from "react-icons/fa6";

export default function LoginPage() {
  return (
    <div className="w-10/12 h-full flex justify-center items-center flex-col">
      <img src="./images/logo.png" alt="profile" className="w-96" />
      <h2 className="text-4xl text-red ">Bem-vinde!</h2>

      <form className="mt-4 space-y-4 w-full">
        <div className="space-y-2">
          <input
            placeholder="Email"
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="space-y-2">
          <input
            placeholder="Password"
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="space-y-2">
          <a href="#" className="text-red">
            Esqueceu-se da password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-red text-white rounded-lg p-2"
        >
          Login
        </button>
        <div className="space-y-2">
          <span className="text-gray-500">Não tem uma conta? </span>
          <a href="#" className="text-red">
            Registe-se
          </a>
        </div>
      </form>

      <div className="mt-4 space-y-2 w-full">
        <button className="border-2 bg-white text-black rounded-lg p-2 flex-row flex items-center justify-center space-x-2 w-full">
          <p>Login com Google</p> <FaGoogle className="text-red" />
        </button>
      </div>
    </div>
  );
}
