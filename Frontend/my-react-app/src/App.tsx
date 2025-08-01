import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import "./App.css";
import { FetchUsersListView } from "./ui/FetchUsersListView/FetchUsersListView";
import { Search } from "./ui/Search/Search";

function App() {
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  return (
    <main>
      <Search />
      <FetchUsersListView searchTerm={searchTerm} />
    </main>
  );
}

export default App;