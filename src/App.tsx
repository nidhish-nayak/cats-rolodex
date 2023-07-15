import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App = () => {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Monster[]>(
				"https://jsonplaceholder.typicode.com/users"
			);
			setMonsters(users);
		};
		fetchUsers();
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((obj) => {
			return obj.name.toLowerCase().includes(searchField);
		});
		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const tempState = event.target.value.toLowerCase();
		setSearchField(tempState);
	};

	return (
		<div className="App">
			<h1 className="app-title">Cats Rolodex</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				placeHolder={"Search Cats"}
				className={"monster-search-box"}
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
