import React, {ChangeEvent, FC, FormEvent} from "react";
import {Button, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {INPUT} from "../../utils/constants";
import {useDispatch, useSelector} from "../../services/hooks";
import {loginThunk} from "../../services/actions/login";
import {Link} from "react-router-dom";
import styles from "./login.module.css"
import { Redirect, useLocation } from "react-router-dom"
import {PATH} from "../../utils/constants";
import {TLocationState, TLoginForm} from "../../types";

export const LoginPage: FC = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, loginFailed } = useSelector((state) => state.access);
  const { state } = useLocation<TLocationState>();

  const [ formValue, setFormValue ] = React.useState<TLoginForm>({
    email: '',
    password: '',
  });

  function onFormChange(evt: ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();
    dispatch(loginThunk(formValue));
  }

  if (isAuthenticated) {
    return (
      <Redirect
        to={ state?.from || PATH.HOME}
      />
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
      <form className={styles.form} onSubmit={onSubmit} data-test={'login-form'}>
        <div className="mb-6">
          <Input
            type={INPUT.TYPE.EMAIL}
            placeholder={INPUT.PLACEHOLDER.EMAIL}
            name={INPUT.NAME.EMAIL}
            onChange={onFormChange}
            value={formValue.email}
            error={loginFailed}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            value={formValue.password}
            name={INPUT.NAME.PASSWORD}
            onChange={onFormChange}
          />
        </div>
        <Button type="primary" size="large">Войти</Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">Вы — новый пользователь?
        <Link to={PATH.REGISTER} className={styles.link}> Зарегистрироваться</Link>
      </p>

      <p className="text text_type_main-default text_color_inactive mt-4">Забыли пароль?
        <Link to={PATH.FORGOT_PASSWORD} className={styles.link}> Восстановить пароль</Link>
      </p>
    </div>
  );
};