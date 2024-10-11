import React from "react";
import { CustomComponent } from "../CustomComponent/CustomComponent";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Logo />
        <h1 className={styles.title}>КиноРейтинг</h1>
        <img src="/user-icon.png" alt="User Icon" />
      </div>
      <Menu />
      {/* <CustomComponent /> */}
    </header>
  );
};
