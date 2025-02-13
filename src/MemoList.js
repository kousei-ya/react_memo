import React from "react";
import useAuth from "./useAuth.js";

export default function MemoList({ memos, onEdit, onAdd }) {
  const { isLoggedIn } = useAuth();
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
