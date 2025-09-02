import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useColorMode } from "../theme/ThemeProvider";

export default function ThemeToggle() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <Tooltip title='Toggle light/dark mode' className='themeToggle'>
      <IconButton color='inherit' onClick={toggleColorMode}>
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
}
