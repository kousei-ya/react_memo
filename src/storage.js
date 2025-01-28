const STRAGE_KEY = "memoApp";

export function loadMemos() {
  const data = localStorage.getItem(STRAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveMemos(memos) {
  localStorage.setItem(STRAGE_KEY, JSON.stringify(memos));
}
