import React, { useState } from "react";
import "./index.scss";

export function Header() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  function onChange(e) {
    setStatus(e.target.value);
  }

  function toggleOpen() {
    setOpen((state) => !state);
  }

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="headder__content">
          <h1 className="header__title">
            <span className="header__deck">Здравствуйте,</span>
            <span className="header__user">
              Человек №3596941
              {open && (
                <div className="header__input">
                  <input
                    onChange={onChange}
                    value={status}
                    className="header__popup"
                    placeholder="Прежде чем дейстовать, нужно понять"
                  />
                </div>
              )}
            </span>
          </h1>
        </div>

        <div className="header__status">
          <button onClick={toggleOpen} className="header__button">
            Сменить статус
          </button>
        </div>
      </div>
    </div>
  );
}
