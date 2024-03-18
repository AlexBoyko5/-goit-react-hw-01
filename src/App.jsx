import './App.css';
// import { Profile, FriendList, TransactionHistory } from './components';
import Profile from './components/profile';
import userData from './data/userData.json';
import FriendList from './components/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './data/transactions.json';

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
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</>
	);
};

export default App;
