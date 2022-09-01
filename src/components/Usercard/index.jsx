import {
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlineGithub,
} from "react-icons/ai";
import {
  RiGitRepositoryCommitsLine,
  RiUserFollowLine,
  RiUserFollowFill,
} from "react-icons/ri";
import { MdOutlineBusiness } from "react-icons/md";
import "./index.scss";
import { validateData } from "../../utils/validateData";
import { formatDate } from "../../utils/formatDate";
// import './App.scss';
// import { formatDate } from './utils/formatDate';
import { BsPinMapFill, BsFillPenFill } from "react-icons/bs";

export const UserCard = ({ userData }) => {
  if (!Object.keys(userData).length) {
    return null;
  }

  return (
    <div className="user-data">
      <div className="box-1">
        <img src={userData?.avatar_url} width={120} alt="" className="img" />
      </div>
      <div className="grid">

        <p className="name">
          <AiOutlineUser /> {validateData(userData.name)}
        </p>
        <p className="tag">
          <AiOutlineGithub /> {validateData(userData.login)}
        </p>
        <p className="repo">
          <RiGitRepositoryCommitsLine />
          {validateData(userData.public_repos)}
        </p>
        <p className="company">
          <MdOutlineBusiness /> {validateData(userData.company)}
        </p>
        <p className="followers">
          <RiUserFollowFill />
          Followers: {validateData(userData.followers)}
        </p>
        <p className="follows">
          <RiUserFollowLine />
          Follows: {validateData(userData.following)}
        </p>
        <p className="location">
          <BsPinMapFill />
          {validateData(userData.location)}
        </p>
        <p className="date">
          <AiOutlineClockCircle />
          {formatDate(userData?.updated_at)}
        </p>
        <p className="bio">
          <BsFillPenFill />
          {validateData(userData.bio)}
        </p>
      </div>
    </div>
  );
};
