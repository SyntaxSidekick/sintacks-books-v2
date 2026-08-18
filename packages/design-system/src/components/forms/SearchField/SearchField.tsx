import { forwardRef } from "react";
import { TextField, type TextFieldProps } from "../TextField/index.js";

export type SearchFieldProps = Omit<TextFieldProps, "type">;

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  function SearchField(props, ref) {
    return <TextField {...props} ref={ref} type="search" />;
  },
);
