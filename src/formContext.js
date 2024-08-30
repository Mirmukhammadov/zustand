import React from "react";

export const FormValue = React.useContext();

function formContext({ children }) {
  const [formData, setFormData] = React.useState({});
  return (
    <FormValue.Provider value={{ formData, setFormData }}>
      {children}
    </FormValue.Provider>
  );
}

export default formContext;
