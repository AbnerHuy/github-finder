import { useEffect, useContext } from "react";
import GitHubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";

function User() {
  const [getUser, user] = useContext(GitHubContext);

  const params = useParams();
  useEffect(() => {
    getUser(params.login);
    // getUserRepos(params.login);
  }, []);

  return <div>{user.login}</div>;
}

export default User;
