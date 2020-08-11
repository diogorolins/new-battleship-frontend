import React from "react";

import { table } from "../../../services/TableGameServices";

import RivalGameCell from "../rivalGameCell/RivalGameCell";

import "./index.css";

const col = table.col;
const rol = table.rol;

const RivalTableBoard = () => {
  return (
    <section className="rivalTable">
      <table className="rivalTable__board">
        <tbody>
          {col.map((c) => (
            <tr key={c} className="rivalTable_board___tr">
              {rol.map((r) => (
                <RivalGameCell key={r + c} cell={r + c} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RivalTableBoard;