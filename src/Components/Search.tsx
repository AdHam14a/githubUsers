interface ISearch {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ searchTerm, setSearchTerm }:ISearch) {
  return (
    <>
      <div>
        <input
          placeholder="Search for any user"
          className="m-4 px-2 border-2 rounded-4xl"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
}
