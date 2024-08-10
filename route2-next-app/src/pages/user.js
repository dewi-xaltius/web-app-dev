import axios from 'axios';

export async function getServerSideProps() {
  try {
    // Fetch user data from the jsonplaceholder API
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/2');
    const userData = response.data;

    return {
      props: {
        userData,
      },
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      props: {
        userData: null,
      },
    };
  }
}

export default function User({ userData }) {
  if (!userData) {
    return <div>Error loading user data.</div>;
  }

  return (
    <div>
      <h1>This is an example of Server Side Render</h1>
      <h2>User Dashboard</h2>
      <p>Welcome, {userData.name}</p>
      <p>Your email is {userData.email}</p>
      <p>Your username is {userData.username}</p>
      <p>Your address is {userData.address.street}, {userData.address.city}</p>
    </div>
  );
}
