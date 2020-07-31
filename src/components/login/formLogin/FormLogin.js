import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./index.css";

const FormLogin = (props) => {
  const { login, openSigninPage } = props;

  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");

  const fillEmail = (event) => {
    updateEmail(event.target.value);
  };

  const fillPassword = (event) => {
    updatePassword(event.target.value);
  };

  return (
    <section className="login">
      <div className="login__tittle">Batalha Naval On-line</div>
      <div className="login__input">
        <div className="login__input_email">
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="email"
            id="email"
            value={email}
            onChange={fillEmail}
            fullWidth
            label="Email"
            autoFocus
          />
        </div>
        <div className="login__input_password">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={fillPassword}
            label="Senha"
          />
        </div>
        <div className="login__input___button">
          <Button
            fullWidth
            variant="contained"
            onClick={() => login(email, password)}
          >
            Entrar
          </Button>
        </div>
      </div>
      <div className="login__links">
        <div className="login__links___forgot">
          <Button>Esqueci a senha</Button>
        </div>
        <div className="login__links___forgot">
          <Button onClick={openSigninPage}>Cadastrar</Button>
        </div>
      </div>
    </section>
  );
};

export default FormLogin;