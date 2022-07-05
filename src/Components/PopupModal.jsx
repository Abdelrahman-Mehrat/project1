import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
export const PopupModal = ({ title }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        style={{
          background: "#fff3d0",
          color: "#7a5e2e",
          fontWeight: "bold",
        }}
        onClick={() => setOpen(true)}
      >
        {title}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">title</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            dialog-description
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          {/* <Button onClick={() => setOpen(false)} autoFocus>
            Submit
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};
