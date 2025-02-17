import { useState } from "react";
import { X } from "lucide-react";

interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [text, setText] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(text);
  };

  const handleClear = () => {
    setText(""); // Setează textul în stare la un string gol
    onSearch(""); // Reapelează onSearch pentru a reseta căutarea
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-4/12 flex gap-4 m-10 items-center justify-center bg-white p-4 rounded-lg shadow-lg"
    >
      <input
        onChange={(e) => setText(e.target.value)} // Actualizează starea cu valoarea din input
        type="text"
        value={text} // Leagă valoarea input-ului de starea `text`
        placeholder="Search Image"
        className="w-full appearance-none bg-transparent border-none text-gray-700 focus:outline-none"
      />
      {text && (
        <X
          onClick={handleClear}
          className="cursor-pointer text-gray-500 hover:text-gray-800"
        />
      )}
      <button
        type="submit"
        className="bg-sky-300 w-20 h-full p-2 rounded-lg hover:bg-sky-500 text-white"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
