import "./style.scss";
import gitHubIcon from "./gitHub-black.svg";

type BtnGitHubProps = {
  link: string;
  label?: string;
};

export const BtnGitHub: React.FC<BtnGitHubProps> = ({ link, label }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline"
    >
      <img src={gitHubIcon} alt="GitHub" />
      {label || "GitHub"}
    </a>
  );
};
