import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import DescriptionIcon from "@mui/icons-material/Description";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Groups3Icon from "@mui/icons-material/Groups3";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InfoIcon from "@mui/icons-material/Info";

const _renderIcon = (type, size) => {
  switch (type) {
    case "check":
      return <CheckCircleOutlineIcon sx={{ fontSize: size }} />;
    case "edit_calendar":
      return <EditCalendarIcon sx={{ fontSize: size }} />;
    case "location_check":
      return <WhereToVoteIcon sx={{ fontSize: size }} />;
    case "document":
      return <DescriptionIcon sx={{ fontSize: size }} />;
    case "engineering":
      return <EngineeringIcon sx={{ fontSize: size }} />;
    case "group":
      return <Groups3Icon sx={{ fontSize: size }} />;
    case "party":
      return <CelebrationIcon sx={{ fontSize: size }} />;
    case "play_button":
      return <PlayCircleOutlineIcon sx={{ fontSize: size }} />;
    case "info":
      return <InfoIcon sx={{ fontSize: size }} />;
    default:
      return null;
  }
};

const Icon = ({ type, size }) => {
  return <>{_renderIcon(type, size)}</>;
};

export default Icon;
