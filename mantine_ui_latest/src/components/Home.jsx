function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1>Home Page</h1>

      {user && (
        <>
          <img src={user.picture} alt="profile" width="80" />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
}

export default Home;
