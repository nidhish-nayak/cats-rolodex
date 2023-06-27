import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";

const App = () => {
	console.log("render");

	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((obj) => {
			return obj.name.toLowerCase().includes(searchField);
		});
		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		const tempState = event.target.value.toLowerCase();
		setSearchField(tempState);
	};

	return (
		<div className="App">
			<h1 className="app-title">Cats Rolodex</h1>
			<SearchBox
				searchProp={onSearchChange}
				placeHolder={"Search Cats"}
				className={"monster-search-box"}
			/>
			<CardList filteredProp={filteredMonsters} />
		</div>
	);
};

export default App;
