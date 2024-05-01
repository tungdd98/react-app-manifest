import { useCallback, useEffect, useState } from 'react';

function App() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	const getUsers = useCallback(async () => {
		const response = await fetch(
			'https://5eaf78cd0605ed0016d2c9a1.mockapi.io/api/tv/users'
		);
		const result = await response.json();
		setLoading(false);
		setUsers(result);
		document.title = 'Home Page';
	}, []);

	useEffect(() => {
		getUsers();
	}, [getUsers]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			{users.map((item) => (
				<div key={item.id}>{item.name}</div>
			))}
		</div>
	);
}

export default App;
