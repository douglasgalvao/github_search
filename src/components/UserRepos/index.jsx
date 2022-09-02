import { useState } from "react";
import { showRepos } from "../userRepo";
import "./index.scss";

export const UserRepos = (userRepos) => {
  const repos = userRepos.repos.map((repos) => ({
    name: repos.name,
    language: repos.language,
    visibility:repos.visibility,
    size:repos.size,
    url:repos.svn_url
  }));  
  return <>{repos.map(e=> showRepos(e))}</>;
};
