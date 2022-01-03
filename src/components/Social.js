import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const socialData = [
  {
    id: 1,
    title: "Facebook",
    icon: <FontAwesomeIcon icon={faFacebook} />,
  },
  {
    id: 2,
    title: "Twitter",
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    id: 3,
    title: "Instagram",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
];

export default socialData;
