import { Box, MenuItem, MenuList } from "@mui/material";

const links = ["About", "Service", "Work", "Blog", "Contact"];

function Drawer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "#f08e8b",
        }}
      >
        <MenuList>
          {links.map((item, index) => (
            <div key={index}>
              <MenuItem
                sx={{
                  color: "#fff",
                  fontFamily: "Montserrat, sans-serif",
                  ":hover": { color: "#f2d38a" },
                }}
              >
                {item}
              </MenuItem>
            </div>
          ))}
        </MenuList>
      </Box>
    </>
  );
}

export default Drawer;
