import style from "./Login.module.scss";
import Person from "@public/Person.svg";
import Link from "next/link";

import { signIn, useSession } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();
  console.log("💥", session);
  const id = session?.user.id;

  if (session) {
    return (
      <Link href={`mypage/${id}`} className={`${style.login_btn}`}>
        my page
      </Link>
    );
  }
  return (
    <>
      <button className={`${style.login_btn}`} onClick={() => signIn("kakao")}>
        <Person className={`${style.login_svg}`} />
        <div className={`${style.login_txt}`}>login</div>
      </button>
    </>
  );
}
