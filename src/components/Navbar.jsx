import React, { useState } from "react";
import styles from "./NavbarWithStyling.module.css";
import About from "./about/About";

const NavbarWithStyling = ({ menu, name, age, address }) => {
  //   const [list, setList] = useState("");
  let list;

  if (menu) {
    console.log("test");
    list = (
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#about" className={styles.navLink}>
            {menu[0]}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#faq" className={styles.navLink}>
            {menu[1]}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#logout" className={styles.navLink}>
            {menu[2]}
          </a>
        </li>
      </ul>
    );
  } else {
    list = <h1>List Not Exist</h1>;
  }

  return (
    <>
      <div className={styles.navbar}>
        <h1 className={styles.title}>FSW 2 - {name}</h1>
        {list}
      </div>
      <About name={name} age={age} address={address} />
    </>
  );
};

export default NavbarWithStyling;
