import Link from "next/link";
import style from "./header.module.scss";
import Person from "@public/Person.svg";
import Search from "@public/Search.svg";

export default function Header() {
  return (
    <>
      <div className={`${style.header}`}>
        <div className={`${style.nav_container}`}>
          <Link className={`${style.home_btn}`} href="/">
            {/* <img src="" alt="Emoji" /> */}
            <div>🍹</div>
            <div>모히또에서 몰디브 한 잔</div>
          </Link>
          <ul>
            <Link href="/find">
              <li className={`${style.search_btn}`}>
                <Search className={`${style.search_svg}`} />
                <div>칵테일 검색</div>
              </li>
            </Link>
            <Link href="/storage">
              <li className={`${style.storage_btn}`}>내 칵테일 창고</li>
            </Link>
          </ul>
        </div>

        <button className={`${style.login_btn}`}>
          <Person className={`${style.login_svg}`} />
          <div className={`${style.login_txt}`}>login</div>
        </button>
      </div>
    </>
  );
}