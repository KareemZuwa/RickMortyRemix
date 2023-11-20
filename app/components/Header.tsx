import { Link } from "@remix-run/react";
import React from "react";
import styles from "~/styles/styles.module.css";

const Header = () => {
  return (
    <Link to="/">
      <header className="h-60 p-8 bg-[url('/rickMorty.png')] bg-center bg-cover">
        <div className="sm:w-3/4 lg:w-2/4 xs:pr-20 sm:pr-16 md:pr-32">
          <h1
            className={`text-lg xs:text-xl sm:text-3xl lg:text-4xl text-white font-racing ${styles.textShadow}`}
          >
            Welcome to Rick And Morty's Fantastic Universe
          </h1>
        </div>
      </header>
    </Link>
  );
};

export default Header;
