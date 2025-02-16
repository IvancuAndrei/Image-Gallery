import { useState } from "react";

interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [text, setText] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-4/12 flex gap-4 m-10 justify-center bg-white p-4 rounded-lg shadow-lg"
    >
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Search Image"
        className="w-full appearance-none bg-transparent border-none text-gray-700 focus:outline-none"
      />
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
