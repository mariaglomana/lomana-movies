import React from "react";

interface ErrorMessageProps {
  error?: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <p
    style={{
      color: error ? "#f44336" : "#ffffff",
      marginTop: 2,
      marginBottom: 4,
      fontSize: "0.7rem",
    }}>
    {error ? error : "XX"}
  </p>
);

export default ErrorMessage;
