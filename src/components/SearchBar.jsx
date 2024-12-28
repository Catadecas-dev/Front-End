import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className={styles["search-bar"]}>
    <input
      type="text"
      placeholder="Buscar libros..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={styles["search-bar__input"]}
    />
    <i className={`fas fa-search ${styles["search-bar__icon"]}`} />
  </div>
  
  );
};

export default SearchBar;
