import React from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

function TextField({ label, setField }) {

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input variant="outline" placeholder={label} onChange={(e) => setField(e.target.value)} />
    </FormControl>
  )
}

export default TextField;
