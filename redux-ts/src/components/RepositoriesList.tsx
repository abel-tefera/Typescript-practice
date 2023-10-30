import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  const { searchRepositories } = useActions();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {!loading && !error && (
        <ul>
          {data.map((name: string) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoriesList;
