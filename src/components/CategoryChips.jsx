import { Chip, Stack } from "@mui/material";

const categories = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

export default function CategoryChips({ value, onChange }) {
  return (
    <Stack
      direction='row'
      spacing={1}
      sx={{
        my: 2,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {categories.map((cat) => (
        <Chip
          key={cat}
          label={cat.toUpperCase()}
          color={value === cat ? "primary" : "default"}
          onClick={() => onChange(value === cat ? "" : cat)}
        />
      ))}
    </Stack>
  );
}
