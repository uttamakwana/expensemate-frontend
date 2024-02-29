import {
  FrontendMentorIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../../../constants/icons";
import "./links.css";

const Links = () => {
  return (
    <>
      <div className="links | flex-center"></div>
      <div className="links-container">
        <div className="link-box | bg-white-900">
          <GithubIcon className="" />
        </div>
        <div className="link-box | bg-white-900">
          <LinkedinIcon className="" />
        </div>
        <div className="link-box | bg-white-900">
          <InstagramIcon className="" />
        </div>
        <div className="link-box | bg-white-900">
          <FrontendMentorIcon className="" />
        </div>
      </div>
    </>
  );
};

export default Links;
