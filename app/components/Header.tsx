import React from "react";
import styles from "~/styles/styles.module.css";

const Header = () => {
  return (
    <header className="h-[180px] p-8 bg-[url('/rickMorty.png')] bg-center bg-cover">
      <div className="w-2/4 pr-32">
        <h1 className={`text-4xl text-white font-racing ${styles.textShadow}`}>
          Welcome to Rick And Morty's Fantastic Universe
        </h1>
      </div>
    </header>
  );
};

export default Header;
