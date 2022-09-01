import { useState } from "react";
import "./styles/App.scss"
import { BsGithub } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import { UserCard } from "./components/Usercard";
import { getUserData } from "./service/getProfile";
function App() {
  const [userData, setUserData] = useState({});
  const [userName, setUserName] = useState(null);
  const handleSubmit = async (username) => {
    const data = await getUserData(username);
    console.log(data);
    setUserData(data);
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
    </main>
  );
}

export default App;
