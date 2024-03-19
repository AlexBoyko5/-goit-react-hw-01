import styles from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
	return (
		<div className={styles.friendCard}>
			<img
				className={styles.friendImg}
				src={avatar}
				alt="Avatar"
				width="48"
			/>
			<p className={styles.friendName}>{name}</p>
			<p className={isOnline ? styles.Online : styles.Offline}>
				{isOnline ? 'Online' : 'Offline'}
			</p>
		</div>
	);
};
export default FriendListItem;
