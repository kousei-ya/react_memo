import React, { useContext } from "react";
import AuthContext from "./AuthContext.js";

export default function MemoList({ memos, onEdit, onAdd }) {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="memo-list">
      {memos.map((memo) => (
        <div key={memo.id}>
          <a
            href="#"
            className="memo-item"
            onClick={(e) => {
              e.preventDefault();
              onEdit(memo);
            }}
          >
            {memo.title || "（無題）"}
          </a>
        </div>
      ))}
      {isLoggedIn && (
        <div>
          <button className="memo-item add-memo" onClick={onAdd}>
            ＋
          </button>
        </div>
      )}
    </div>
  );
}
