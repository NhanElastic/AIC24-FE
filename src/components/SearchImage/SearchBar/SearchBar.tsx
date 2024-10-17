import { Input, InputProps } from "@/components/ui/input";
import { forwardRef } from "react";

// convert to forwardRef
const SearchBar = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input placeholder="Search..." {...props} ref={ref} type="search" />
));

SearchBar.displayName = "SearchBar";
export default SearchBar;
