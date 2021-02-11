import React from "react";
import { useTheme } from "@material-ui/core/styles";

interface ErrorMessageProps {
  error?: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  const theme = useTheme();
  return (
    <div style={{ height: theme.spacing(3) }}>
      <p
        style={{
          color: error ? "#f44336" : "#ffffff",
          marginTop: 2,
          marginBottom: 4,
          fontSize: "0.7rem",
        }}>
        {error ? error : ""}
      </p>
    </div>
  );
};

export default ErrorMessage;
