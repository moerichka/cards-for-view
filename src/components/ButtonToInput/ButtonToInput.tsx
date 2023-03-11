import React, { useContext, useMemo, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";

import { UserContext } from "context/userContext";

import s from "./ButtonToInput.module.scss";

const regexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
    if (!email.match(regexp)) {
      enqueueSnackbar({
        variant: "trace",
        customTitle: "Error",
        customMessage: "Email is not valid",
        type: "error",
      });
      return;
    }
    // setUserEmail(email);
    // router.push("/cards");
    enqueueSnackbar({
      variant: "trace",
      customTitle: "Successfully",
      customMessage: "Email has been sended",
    });
  };

  const onBlur = () => {
    setIsOpen(false);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isOpen) {
      onGoClick();
      return;
    }
    onExploreClick();
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
      <button type="submit" className={s.button}>
        <span className={buttonTextClassNameClose}>Explore</span>
        <span className={buttonTextClassNameOpen}>Go</span>
      </button>
    </form>
  );
}

export default ButtonToInput;
