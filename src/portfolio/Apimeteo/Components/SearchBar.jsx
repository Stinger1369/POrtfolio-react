import React from "react";

function SearchBar({
  location,
  setLocation,
  handleSearchClick,
  searchLocation,
}) {
  return (
    <div className="search p-2 flex">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Entrer le nom de la ville"
        className="py-2 px-4 rounded-lg border border-gray-800 text-red-500 text-lg w-full"
        type="text"
      />
      <button
        onClick={handleSearchClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Rechercher
      </button>
    </div>
  );
}

export default SearchBar;
