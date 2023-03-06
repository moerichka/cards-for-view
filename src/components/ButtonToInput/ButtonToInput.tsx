import React, { useContext, useMemo, useState } from "react";
import { useRouter } from "next/router";

import { UserContext } from "context/userContext";

import s from "./ButtonToInput.module.scss";

function ButtonToInput() {
  const router = useRouter();
  const { setUserEmail } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const fieldClassName = useMemo(
    () => `${s.field} ${isOpen ? s.active : ""}`,
    [isOpen],
  );
  const buttonTextClassNameClose = useMemo(
    () => `${s.buttonText} ${isOpen ? "" : s.active}`,
    [isOpen],
  );
  const buttonTextClassNameOpen = useMemo(
    () => `${s.buttonText} ${isOpen ? s.active : ""}`,
    [isOpen],
  );

  const onExploreClick = () => {
    setIsOpen(true);
  };

  const onGoClick = () => {
    setUserEmail(email);
    router.push("/cards");
  };

  const onBlur = () => {
    setIsOpen(false);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form className={fieldClassName} onSubmit={onSubmit}>
      <input
        type="text"
        className={s.input}
        value={email}
        onChange={onEmailChange}
        placeholder="Enter email to explore"
      />
      <button
        type="button"
        className={s.button}
        onClick={isOpen ? onGoClick : onExploreClick}
      >
        <span className={buttonTextClassNameClose}>Explore</span>
        <span className={buttonTextClassNameOpen}>Go</span>
      </button>
    </form>
  );
}

export default ButtonToInput;
