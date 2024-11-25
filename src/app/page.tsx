import Image from "next/image";
import style from "./page.module.scss";
import Card from "@/components/common/card/Card";
import MemoCard from "@/components/common/card/MemoCard";
import Button from "@/components/common/button/Button";
import Navigation from "@/components/common/navigation/Navigation";
import LoginModal from "@/components/common/modal/LoginModal";
import Top100 from "@/components/top100/Top100";
import FilterSection from "@/components/main/FilterSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className={`${style.main_page}`}>
        <Top100 />
        <FilterSection />
      </div>
    </>
  );
}
