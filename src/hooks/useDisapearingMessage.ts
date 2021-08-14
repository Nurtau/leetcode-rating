import { useState, useEffect } from "react";

let timerId: NodeJS.Timeout;

export const useDisappearingMessage = (): [string, (msg: string) => void] => {
  const [message, _setMessage] = useState<string>("");
	useEffect(() => {
		clearTimeout(timerId);
	}, []);
  const setMessage = (msg: string) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      _setMessage("");
    }, 7000);
		_setMessage(msg);
  };
  return [message, setMessage];
};