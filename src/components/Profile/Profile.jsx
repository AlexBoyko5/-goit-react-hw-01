import * as styles from './Profile.modul.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
	return (
		<div className={styles.profile}>
			<div className={styles.profileContent}>
				<img className={styles.profileImg} src={avatar} alt="User avatar" />
				<p className={styles.profileName}> {name}</p>
				<p className={styles.profileTag}>@{tag}</p>
				<p className={styles.profileLocation}>{location}</p>
			</div>
			<ul className={styles.profileMaineList}>
				<li className={styles.profileListItem}>
					<span>Followers</span>
					<span className={styles.profileSpan}>{stats.followers}</span>
				</li>
				<li className={styles.profileListItem}>
					<span>Views</span>
					<span className={styles.profileSpan}>{stats.views}</span>
				</li>
				<li className={styles.profileListItem}>
					<span>Likes</span>
					<span className={styles.profileSpan}>{stats.likes}</span>
				</li>
			</ul>
		</div>
	);
};
export default Profile;
