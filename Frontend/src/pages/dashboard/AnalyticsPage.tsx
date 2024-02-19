import "./styles.css";
import Office from "./analiticimg";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function AnalyticsPage() {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <div className="App">
      <div className="rooms">
        <div className="calendar-container">
          <Calendar />
        </div>
        <h2>Cauta Birou</h2>
        <p className="tip">
          Planul etaj sau apartament.
        </p>
        <div>
          <b>Birou</b>
        </div>
        <div
          onMouseEnter={() => setSelected("office-1")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "office-1" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#3b82f6"
            }}
          ></span>
          Birou n°1
        </div>
        <br />
        <div>
          <b>Sala de reuniune</b>
        </div>
        <div
          onMouseEnter={() => setSelected("meeting-1")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "meeting-1" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#a229b6"
            }}
          ></span>
          Sala de reuniune n°1
        </div>
        <div
          onMouseEnter={() => setSelected("meeting-2")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "meeting-2" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#a229b6"
            }}
          ></span>
          Sala de reuniune n°2
        </div>
        <br />
        <div>
          <b>Comun</b>
        </div>
        <div
          onMouseEnter={() => setSelected("kitchen-1")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "kitchen-1" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#f43f5e"
            }}
          ></span>
          Bucatarie
        </div>
        <div
          onMouseEnter={() => setSelected("wc-1")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "wc-1" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#34d399"
            }}
          ></span>
          WC
        </div>
      </div>
      <Office
        selected={selected}
        onHovered={(id: string) => {
          setSelected(id);
        }}
      />
    </div>
  );
}

