import * as React from "react";
import Brightness7 from "@material-ui/icons/Brightness7";
import Brightness4 from "@material-ui/icons/Brightness4";
import IconButton from "@material-ui/core/IconButton";
import { DarkModeState } from "types";

interface ThemeButtonProps {
  change: () => void;
  type: DarkModeState;
}

export default function ThemeButton({
  change,
  type,
}: ThemeButtonProps): React.ReactElement {
  return (
    <label htmlFor="toggle-theme">
      <IconButton
        color="default"
        aria-label="toggle light/dark theme"
        component="span"
        onClick={() => change()}>
        {type === "light" ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </label>
  );
}
