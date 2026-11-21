export default function SearchBar({ searchId, setSearchId, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="number"
        placeholder="ID du produit (1 à 20)"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={onSearch}>Rechercher</button>
    </div>
  );
}
