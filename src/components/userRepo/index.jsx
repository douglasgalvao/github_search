import "./index.scss";
export const showRepos = (repo) => {
  if (!Object.keys(repo).length) {
    return null;
  }

  return (
    <>
      <div className="repoName">
        <p>
          <strong>Repository:</strong> {repo?.name}
        </p>
      </div>
      <div className="repoLanguage">
        <p>
          <strong>Language:</strong> {repo?.language}
        </p>
      </div>
      <div className="visibility">
        <p>
          <strong>Visibility:</strong> {repo?.visibility}
        </p>
      </div>
      <div className="size">
        <p>
          <strong>Size:</strong> {repo?.size}Kb
        </p>
      </div>
      <div className="url">
        <p>
          <strong>Url to visit:</strong> <a href={repo?.url}>{repo?.url}</a>
        </p>
      </div>
      <div className="division"></div>
    </>
  );
};
