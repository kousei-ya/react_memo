import React, { useState, useEffect } from "react";

export default function MemoForm({ memo, onSave, onDelete }) {
  const [content, setContent] = useState(memo.content);

  useEffect(() => {
    setContent(memo.content);
  }, [memo]);

  const handleSave = () => {
    onSave({ ...memo, content, title: content.split("\n")[0] });
  };

  return (
    <div className="memo-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="メモの内容"
      />
      <div className="form-actions">
        <button onClick={handleSave}>保存</button>
        <button onClick={onDelete}>削除</button>{" "}
      </div>
    </div>
  );
}
