import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="#">Über uns</Link>
        </li>
        <li>
          <Link href="#">Angebot</Link>
        </li>{" "}
        <li>
          <Link href="#">
            Infos <i class="fal fa-angle-down"></i>
          </Link>
          <ul className="submenu">
            <li>
              <Link href="">Menu</Link>
            </li>
          </ul>
        </li>{" "}
        <li>
          <Link href="#">
            Universitäten <i class="fal fa-angle-down"></i>
          </Link>
          <ul className="submenu">
            <li>
              <Link href="">Menu</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;
