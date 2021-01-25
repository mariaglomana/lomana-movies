import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  description: {
    padding: theme.spacing(3, 0),
  },
  title: {
    marginTop: theme.spacing(3),
  },
}));

interface TextParagraphProps {
  title?: string;
  description: string;
}

const TextParagraph: React.FC<TextParagraphProps> = ({
  title,
  description,
}) => {
  const classes = useStyles();
  return (
    <>
      {title && (
        <>
          <Typography variant="h6" gutterBottom className={classes.title}>
            {title}
          </Typography>
          <Divider />
        </>
      )}
      <Typography variant="body1" className={classes.description} gutterBottom>
        {description}
      </Typography>
    </>
  );
};

export default TextParagraph;
