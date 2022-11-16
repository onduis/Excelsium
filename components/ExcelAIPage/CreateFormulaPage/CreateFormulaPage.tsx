import React from "react";
import styles from "./CreateFormulaPage.module.css";
import { CreatePage } from "./CreatePage";
import { UnderstandPage } from "./UnderstandPage";

const enum Screens {
  CREATE_FORMULA,
  UNDERSTAND_FORMULA,
}

export function CreateFormulaPage() {
  const [currentScreen, setCurrentScreen] = React.useState(
    Screens.CREATE_FORMULA
  );

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Inténtalo. Es <span>muy fácil</span>
      </h1>

      <div className={styles.selectionButtons}>
        <div
          onClick={() => setCurrentScreen(Screens.CREATE_FORMULA)}
          className={
            currentScreen === Screens.CREATE_FORMULA
              ? styles.buttonSelect + " " + styles.buttonSelected
              : styles.buttonSelect + " " + styles.buttonNotSelected
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#32936F"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>

          <h1>Create a Formula</h1>
        </div>

        <h2>o</h2>

        <div
          onClick={() => setCurrentScreen(Screens.UNDERSTAND_FORMULA)}
          className={
            currentScreen === Screens.UNDERSTAND_FORMULA
              ? styles.buttonSelect + " " + styles.buttonSelected
              : styles.buttonSelect + " " + styles.buttonNotSelected
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#32936F"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>

          <h1>Explain a Formula</h1>
        </div>
      </div>

      {currentScreen === Screens.CREATE_FORMULA ? <CreatePage /> : <></>}
      {currentScreen === Screens.UNDERSTAND_FORMULA ? (
        <UnderstandPage />
      ) : (
        <></>
      )}
    </div>
  );
}
