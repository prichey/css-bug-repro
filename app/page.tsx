"use client";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="red-bg">
        red background (globals.css, partially url-encoded svg)
      </div>
      <div className="green-bg">
        green background (styled-jsx, fully url-encoded svg)
      </div>
      <div className="blue-bg">
        blue background (styled-jsx, partially url-encoded svg)
      </div>
      <div className={styles['silver-bg']}>
        silver background (css module, partially url-encoded svg)
      </div>
      <div className="pink-bg">
        pink background (styled-jsx, valid background-color)
      </div>
      <style jsx>{`
        main {
          background: black;
          color: white;
          font-size: 36px;
        }
        .green-bg {
          // works
          background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221%22%20height%3D%221%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22green%22%2F%3E%3C%2Fsvg%3E");
        }
        .blue-bg {
          // parsing breaks!
          background-image: url("data:image/svg+xml,%3Csvg width='1' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='blue' /%3E%3C/svg%3E");
        }
        .pink-bg {
          // valid, but not parsed
          background-color: pink;
        }
      `}</style>
    </main>
  );
}
