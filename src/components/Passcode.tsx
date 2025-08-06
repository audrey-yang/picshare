import { useState } from "react";
import TextField from "@mui/material/TextField";

const checkPasscode = (guess: string) => {
  if (guess == import.meta.env.VITE_SECRET_CODE) {
    return true;
  }
  return false;
};

const Passcode = ({ authorize }: { authorize: () => void }) => {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <h4>Enter the passcode to view</h4>
      <TextField
        error={!!error}
        helperText={error}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPasscode(event.target.value);
        }}
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.key == "Enter") {
            if (checkPasscode(passcode)) {
              localStorage.setItem("authorized", passcode);
              authorize();
            } else {
              setPasscode("");
              setError("Incorrect passcode");
            }
          }
        }}
      />
    </>
  );
};

export default Passcode;
