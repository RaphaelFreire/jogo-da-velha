import React from "react";
import Profile from "../../img/profile.jpg";
import Github from "../../img/github.svg";
import Linkedin from "../../img/linkedin.svg";
import Facebook from "../../img/facebook.svg";
import Twitter from "../../img/twitter.svg";
import Instagram from "../../img/instagram.svg";

import IconSocial from "../../components/IconSocial";
import AvatarProfile from "../../objects/AvatarProfile";
import "./styles.css";

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Profile} alt="Avatar Raphael" />
    </dd>
    <dt className="title">Marco Bruno</dt>
    <dd className="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vero iste
      itaque cumque animi praesentium non dolores, hic at velit.
    </dd>
    <dd className="socials">
      <IconSocial
        action="https://github.com/"
        src={Github}
        alt="Logo da GitHub"
      />
      <IconSocial
        action="https://linkedin.com"
        src={Linkedin}
        alt="Logo da Linkedin"
      />
      <IconSocial
        action="https://facebook.com/"
        src={Facebook}
        alt="Logo do Facebook"
      />
      <IconSocial
        action="https://twitter.com/"
        src={Twitter}
        alt="Logo do Twitter"
      />
      <IconSocial
        action="https://instagram.com/"
        src={Instagram}
        alt="Logo do Instagram"
      />
    </dd>
  </dl>
);

export default ProfileUser;
