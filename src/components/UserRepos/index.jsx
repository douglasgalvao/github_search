import { useState } from "react";
import "./index.scss";
export const UserRepos = (userRepos) => {
    console.log(userRepos);
  const repos = userRepos.repos.map((repos) => ({
    name: repos.name,
    language: repos.language,
    visibility:repos.visibility,
    size:repos.size,
    url:repos.svn_url
  }));

  // <div><h1>{}</h1></div>
  const showRepos = (repo) => {
    // console.log(repo);
    return (
      <>
        <div className="repoName">
          <p>
            <strong>Repository:</strong> {repo.name}
          </p>
        </div>
        <div className="repoLanguage">
          <p>
            <strong>Language:</strong> {repo.language}
          </p>
        </div>
        <div className="visibility">
        <p>
            <strong>Visibility:</strong> {repo.visibility}
          </p>
        </div>
        <div className="size">
        <p>
            <strong>Size:</strong> {repo.size}
          </p>
        </div>
        <div className="url">
        <p>
            <strong>Url to visit:</strong> <a href={repo.url}>{repo.url}</a>
          </p>
        </div>
        <div className="division"></div>
      </>
    );
  };
  return <>{repos.map(e=> showRepos(e))}</>;
};
