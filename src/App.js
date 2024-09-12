import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";

export const App = () => {
  // const [steps, setSteps] = useState(data);
  const steps = data;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles["steps-content"]}>
            {steps.map((step, index) => (
              <div key={index}>
                {" "}
                {activeIndex === index ? <div>{step.content}</div> : <></>}
              </div>
            ))}
          </div>
          <ul className={styles["steps-list"]}>
            {steps.map((step, index) => (
              <div
                key={step.id}
                // className={
                //   styles["steps-item"] + activeIndex === index
                //     ? "" + styles.done + " " + styles.active
                //     : "" + styles.done
                // }

                className={`${styles["steps-item"]} ${
                  activeIndex === index
                    ? `${styles.done} ${styles.active}`
                    : styles.done
                }`}
              >
                <button
                  className={styles["steps-item-button"]}
                  onClick={() => setActiveIndex(index)}
                >
                  {index}
                </button>
                {step.title}
              </div>
            ))}
          </ul>
          <div className={styles["buttons-container"]}>
            <button
              disabled={activeIndex < 1}
              className={styles.button}
              onClick={() => setActiveIndex(activeIndex - 1)}
            >
              Назад
            </button>
            {activeIndex !== 6 ? (
              <button
                className={styles.button}
                onClick={() => setActiveIndex(activeIndex + 1)}
              >
                Далее
              </button>
            ) : (
              <button
                className={styles.button}
                onClick={() => setActiveIndex(0)}
              >
                Начать сначала
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
