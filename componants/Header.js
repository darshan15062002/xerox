import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <header>
        <div className="h-11">
          <Image src="/logo.png" layout="fill"></Image>
        </div>
      </header>
    </div>
  );
}

export default Header;
