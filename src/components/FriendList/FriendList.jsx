import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => {
	return (
		<ul>
			<li>
				{friends.map((friend) => {
					return (
						<FriendListItem
							avatar={friend.avatar}
							name={friend.name}
							isOnline={friend.isOnline}
							key={friend.id}
						/>
					);
				})}
				;
			</li>
		</ul>
	);
};
export default FriendList;
