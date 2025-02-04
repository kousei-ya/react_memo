import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import MemoList from "./MemoList.js";
import MemoForm from "./MemoForm.js";
import { loadMemos, saveMemos } from "./storage.js";
import LoginButton from "./LoginButton.js";
import AuthContext from "./AuthContext.js";

export default function App() {
  const [memos, setMemos] = useState([]);
  const [editingMemo, setEditingMemo] = useState(null);

  useEffect(() => {
    const storedMemos = loadMemos();
    setMemos(storedMemos || []);
  }, []);

  const addMemo = () => {
    const newMemo = {
      uuid: window.crypto.randomUUID(),
      title: "新規メモ",
      content: "",
    };
    const updatedMemos = [...memos, newMemo];
    setMemos(updatedMemos);
    saveMemos(updatedMemos);
    setEditingMemo(newMemo);
  };

  const updateMemo = (uuid, updatedMemo) => {
    const updatedMemos = memos.map((memo) =>
      memo.uuid === uuid ? updatedMemo : memo,
    );
    setMemos(updatedMemos);
    saveMemos(updatedMemos);
  };

  const deleteMemo = (uuid) => {
    const updatedMemos = memos.filter((memo) => memo.uuid !== uuid);
    setMemos(updatedMemos);
    saveMemos(updatedMemos);
    setEditingMemo(null);
  };

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <div className="header">
        <div className="login-info-container">
          <h2 className="login-info">
            {isLoggedIn ? "ログイン中です" : "ログアウトしています"}
          </h2>
          <LoginButton />
        </div>
        <h1 className="title">メモアプリ</h1>
      </div>
      <div className="main-content">
        <MemoList
          memos={memos}
          onEdit={(editingMemo) => setEditingMemo(editingMemo)}
          onAdd={addMemo}
        />

        {editingMemo && (
          <MemoForm
            memo={editingMemo}
            onSave={(updatedMemo) => {
              updateMemo(editingMemo.uuid, updatedMemo);
              setEditingMemo(null);
            }}
            onDelete={() => deleteMemo(editingMemo.uuid)}
          />
        )}
      </div>
    </div>
  );
}
