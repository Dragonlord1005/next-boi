import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
{
  /*import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";*/
}
import Link from "next/link";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/*<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>*/}
          <Typography component="div" sx={{ mr: 1.5 }}>
            <Link href="/">Home</Link>
          </Typography>
          <br />
          <Typography component="div" sx={{ mr: 1.5 }}>
            <Link href="/about">About</Link>
          </Typography>
          <br />
          <Typography component="div" sx={{ mr: 1.5 }}>
            <Link href="/posts">Blog Posts</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
