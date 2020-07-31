import React from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import AccountBoxTwoToneIcon from "@material-ui/icons/AccountBoxTwoTone";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { logout } from "../../../services/AuthService";

import "./index.css";

const ProfileArea = (props) => {
  const { socket, player } = props;
  const history = useHistory();

  const logoutUser = () => {
    logout();
    socket.disconnect();
    history.push("/login");
  };

  return (
    <section className="profile">
      <div className="profile__welcome">
        Bem vindo <strong>{player.name}</strong> ({player.email}). Vamos começar
        a jogar?
      </div>
      <div className="profile__profile">
        <div className="profile__profile___profile">
          <Button variant="contained">
            <AccountBoxTwoToneIcon htmlColor="brown" /> Perfil
          </Button>
        </div>
        <div className="profile__profile___out">
          <Button variant="contained" onClick={logoutUser}>
            <ExitToAppIcon htmlColor="brown" />
            Sair
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfileArea;