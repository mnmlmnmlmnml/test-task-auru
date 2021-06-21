import React, { useState, useReducer, useEffect } from "react";
import styles from "./index.module.scss";
import cities from "../../cities.json";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Input, InputBlock, Select, Checkbox, Button } from "../../ui";

function reducer(state, action) {
  return { ...state, [action.name]: action.payload };
}

export function Form() {
  const filteredCities = cities.filter((item) => item.population > 50000);
  const [errors, setErrors] = useState(null);
  const [lastChangeTime, setlastChangeTime] = useState(Date.now());
  const [data, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("data"))
  );
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function handleSubmit(e) {
    const { password, passwordConfirm, email } = data;
    e.preventDefault();
    setErrors(null);
    const errors = {};
    if (!password || password.length < 5) {
      errors.password = !password
        ? "Укажите пароль"
        : "Используйте не менее 5 символов";
    }
    if (password !== passwordConfirm) {
      errors.passwordConfirm = "Пароли не совпадают";
    }
    if (!passwordConfirm) {
      errors.passwordConfirm = !password
        ? "Укажите пароль"
        : "Введите пароль второй раз";
    }
    if (!email) {
      errors.email = "Укажите E-mail";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    console.log(data);
    console.log("forma otpravlena");
    setlastChangeTime(Date.now());
  }

  function handleChange(e) {
    dispatch({
      name: e.target.name, //password email passwordConfirm
      payload: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  }
  console.log(data);
  function formatDate(date) {
    return `${format(date, "dd MMMM yyyy", { locale: ru })} в ${format(
      date,
      "HH:mm:ss"
    )}`;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.block}>
      <div className={styles.wrapper}>
        <InputBlock label="Ваш город">
          <Select
            onChange={handleChange}
            options={filteredCities}
            value={data.city}
            name="city"
          />
        </InputBlock>
        <hr className={styles.line}></hr>
        <InputBlock
          label="Пароль"
          tip="Ваш новый пароль должен содержать не менее 5 символов."
        >
          <Input
            onChange={handleChange}
            value={data.password}
            errors={errors}
            name="password"
            type="password"
          />
        </InputBlock>
        <InputBlock
          label="Пароль еще раз"
          tip="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
              ошибки."
        >
          <Input
            onChange={handleChange}
            value={data.passwordConfirm}
            errors={errors}
            name="passwordConfirm"
            type="password"
          />
        </InputBlock>

        <hr className={styles.line}></hr>
        <InputBlock
          label="Электронная почта"
          tip="Можно изменить адрес, указанный при регистрации."
        >
          <Input
            errors={errors}
            onChange={handleChange}
            value={data.email}
            name="email"
            type="email"
          />
        </InputBlock>
        <InputBlock label="Я согласен">
          <Checkbox
            onChange={handleChange}
            value={data.subscription}
            name="subscription"
            label="принимать актуальную информацию на емейл."
          />
        </InputBlock>
        <InputBlock tip={`последние изменения ${formatDate(lastChangeTime)}`}>
          <Button label="Изменить" />
        </InputBlock>
      </div>
    </form>
  );
}
