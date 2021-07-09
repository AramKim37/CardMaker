import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "aram",
      company: "aram",
      theme: "dark",
      title: "Software Engineer",
      email: "aramkim37@gmail.com",
      message: "go for it",
      fileName: "aram",
      fileURL: "",
    },
    {
      id: "2",
      name: "aram2",
      company: "aram2",
      theme: "light",
      title: "Software Engineer",
      email: "aramkim37@gmail.com",
      message: "go for it",
      fileName: "aram2",
      fileURL: "",
    },

    {
      id: "3",
      name: "aram3",
      company: "aram3",
      theme: "colorful",
      title: "Software Engineer",
      email: "aramkim37@gmail.com",
      message: "go for it",
      fileName: "aram3",
      fileURL: "",
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
