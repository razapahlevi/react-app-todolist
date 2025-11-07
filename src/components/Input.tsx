import React, { useState } from 'react';

interface InputProps {
  onAdd: (text: string) => void;
}

const Input = ({ onAdd }: InputProps) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    if (inputText.trim() === '') return;
    onAdd(inputText.trim());
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const isEmpty = inputText.trim() === '';

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Masukan tugas baru..."
        className="grow p-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all"
      />
      <button className={`px-4 py-2 rounded-xl text-white transition ${isEmpty ? 'bg-slate-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 active:scale-[0.98]'}`} onClick={handleSubmit} disabled={isEmpty}>
        Add
      </button>
    </div>
  );
};

export default Input;
