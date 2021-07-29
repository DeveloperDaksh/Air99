import React, { useState } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogContentText,
    DialogActions,
    MenuItem,
    Select,
    Input,
    Button
  } from "@material-ui/core"
const UserDataForm = (props) => {
  const [selected, setVal] = useState("")
  const handle = val=>{
    setVal(val)
  }
    return (
        <>
        <DialogTitle id="form-dialog-title">Adult</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill all the details carefully
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="First-Name"
            label="First Name"
            type="text"
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="Middle-Name"
            label="Middle Name"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Last-Name"
            label="Last Name"
            type="text"
            fullWidth
            required
          />
          
          <br />
          <br />
          <br />
          <label for="select">Gender &nbsp;</label>
          <Select
          fullWidth
          id="select"
            name="name"
            value={selected}
            onChange={event => handle(event.target.value)}
            input={<Input id="name" />}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          <br />
          <br />
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="Last-Name"
            label="Date Of Birth"
            type="date"
            fullWidth
            required
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
        <hr/>
        </>
    )
}

export default UserDataForm
