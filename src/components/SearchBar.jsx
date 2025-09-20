import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ value, onChange }) {
  const [input, setInput] = useState(value || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(input.trim()); // 🔑 only trigger on submit
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: "10px", marginTop: "10px" }}
    >
      <TextField
        fullWidth
        variant='outlined'
        label='Search'
        placeholder='Search for news...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton type='submit'>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
