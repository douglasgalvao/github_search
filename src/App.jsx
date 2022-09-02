import { useState } from "react";
import "./styles/App.scss";
import { BsGithub } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import { UserCard } from "./components/Usercard";
import { UserRepos } from "./components/UserRepos";
import { getUserData } from "./service/getProfile";
import { getMoreProfile } from "./service/getMoreProfile";
function App() {
  const [userData, setUserData] = useState({});
  const [userName, setUserName] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const handleSubmit = async (username) => {
    const data = await getUserData(username);
    setUserData(data);
  };
  const seeMoreSubmit = async () => {
    const data = await getMoreProfile(userData.repos_url);
    setUserRepos(data);
  };

  return (
    <main className="container">
      <div className="subcontainer">
        <h1>Olá 👋, sejá bem vindo!</h1>
        <p>
          No campo abaixo insira o nome da conta no Github <BsGithub /> que
          deseja buscar informações.
        </p>

        <div className="search-container">
          <input
            type="text"
            name="username"
            id="githubuser"
            placeholder="Github username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            onClick={() => {
              handleSubmit(userName);
            }}
          >
            Search <GiMagnifyingGlass />
          </button>
        </div>
      </div>
      <div className="resultSearch">
        <UserCard userData={userData} />
      </div>
      <div className="btnSabermais">
        {Object.keys(userData).length > 0 ? (
          <button onClick={seeMoreSubmit}>Saber mais</button>
        ) : null}
      </div>
      {Object.keys(userRepos).length ? <UserRepos repos={userRepos}/> : null}
    </main>
  );
}

export default App;
