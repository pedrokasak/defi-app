import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";

import EtherLogo from "../../public/assets/eth.png";
import UniSwapLogo from "../../public/assets/uniswap.png";
import Image from "next/image";

const style = {
  headerLogo: "",
  nav: "",
  navItemsContainer: "",
};

export default function Header() {
  const [selectedNav, setSelectedNav] = useState("swap");
  return (
    <header>
      <div className={style.headerLogo}>
        <Image src={UniSwapLogo} alt="Logo da UniSwap" />
        <h1>Header do projeto</h1>
      </div>
      <nav className={style.nav}>
        <div className={style.navItemsContainer}>
          <div onClick={() => setSelectedNav("swap")}></div>
        </div>
      </nav>
    </header>
  );
}
