import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { LeftWidgetContent, WidgetWrapper } from "./styles";

const CardWidgets = () => {
  return (
    <Card>
      <CardContent>
        <WidgetWrapper>
          <LeftWidgetContent>
            <Typography component="span">Users</Typography>
            <Typography component="span">29292</Typography>
            <Typography component="span">See all user</Typography>
          </LeftWidgetContent>
          <Box>
            <Typography>Right</Typography>
          </Box>
        </WidgetWrapper>
      </CardContent>
    </Card>
  );
};

export default CardWidgets;
