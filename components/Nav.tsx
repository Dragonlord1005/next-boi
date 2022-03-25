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
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
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
            <Link href="/" prefetch={false}>
              <a
                onMouseEnter={() => {
                  router.prefetch("/about");
                  console.log("prefetching /about!");
                }}
              >
                Home
              </a>
            </Link>
          </Typography>
          <br />
          <Typography component="div" sx={{ mr: 1.5 }}>
            <Link href="/about" prefetch={false}>
              <a
                onMouseEnter={() => {
                  router.prefetch("/");
                  console.log("prefetching /!");
                }}
              >
                About
              </a>
            </Link>
          </Typography>
          <br />
          <Typography component="div" sx={{ mr: 1.5 }}>
            <Link href="/posts" prefetch={false}>
              <a
                onMouseEnter={() => {
                  router.prefetch("/posts");
                  console.log("prefetching /posts!");
                }}
              >
                Blog Posts
              </a>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
