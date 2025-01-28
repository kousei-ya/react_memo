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

  useEffect(() => {
    saveMemos(memos);
  }, [memos]);

  const addMemo = () => {
    const newMemo = { id: Date.now(), title: "新規メモ", content: "" };
    setMemos([...memos, newMemo]);
    setEditingMemo(newMemo);
  };

  const updateMemo = (id, updateMemo) => {
    setMemos(memos.map((memo) => (memo.id === id ? updateMemo : memo)));
  };

  const deleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
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
              updateMemo(editingMemo.id, updatedMemo);
              setEditingMemo(null);
            }}
            onDelete={() => deleteMemo(editingMemo.id)}
          />
        )}
      </div>
    </div>
  );
}
