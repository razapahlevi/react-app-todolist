interface TodoItem {
  id: number;
  text: string;
}

interface TodoListProps {
  items: TodoItem[];
  onDelete: (id: number) => void;
}

const TodoList = ({ items, onDelete }: TodoListProps) => {
  return (
    <div className="p-6 w-full max-w-md bg-white shadow-xl rounded-2xl border border-slate-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-xl text-slate-800">Daftar Tugas</h2>
        <span className="text-sm text-slate-500">{items.length}item</span>
      </div>

      {items.length > 0 ? (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 hover:shadow-sm hover:border-slate-300 transition">
              <span className="text-slate-700">{item.text}</span>

              <button onClick={() => onDelete(item.id)} className="opacity-80 group-hover:opacity-100 text-red-600 hover:text-white hover:bg-red-500 border border-red-200 hover:border-e-red-500 px-3 py-1 rounded-lg text-sm transition">
                Hapus
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-500">✨ Tidak ada tugas. Saatnya nambah satu!</div>
      )}
    </div>
  );
};

export default TodoList;
