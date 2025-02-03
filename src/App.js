import "./App.css";
import React, { useState, useEffect } from "react";
import MemoList from "./MemoList.js";
import MemoForm from "./MemoForm.js";
import { loadMemos, saveMemos } from "./storage.js";

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

  const updateMemo = (uuid, updateMemo) => {
    const updatedMemos = memos.map((memo) =>
      memo.uuid === uuid ? updateMemo : memo
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

  return (
    <div className="App">
      <h1 className="title">メモアプリ</h1>
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
