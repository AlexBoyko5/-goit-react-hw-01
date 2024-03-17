import './App.css';
// import { Profile, FriendList, TransactionHistory } from './components';
import Profile from './components/profile';
import userData from './data/userData.json';
const App = () => {
	return (
		<>
			<Profile
				name={userData.username}
				tag={userData.tag}
				location={userData.location}
				image={userData.image}
				stats={userData.stats}
			/>
			{/* <FriendList />
			<TransactionHistory /> */}
		</>
	);
};

export default App;
