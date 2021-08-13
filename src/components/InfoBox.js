import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBoxes">
      <CardContent>
          <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
          <h2 className="infoBox__clases">{cases}</h2>
          <Typography className="infoBox__total" color="textSecondary">{total} Total</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;