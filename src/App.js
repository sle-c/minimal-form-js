import React from "react";

import Form from "./form";
import TextInput from "./form/text_input";

import "./styles.css";

const requiredValidator = val => {
  if (!val) {
    return ["This field is required"];
  }

  return [];
};

const passwordMatchedValidator = (val, formData) => {
  if (val !== formData.password) {
    return ["Must match password"];
  }

  return [];
};

export default function App() {
  return (
    <div className="App">
      <h1>Sign up</h1>
      <div className="sign-up">
        <Form onSubmit={data => console.log(data)}>
          <TextInput
            name="first_name"
            validators={[requiredValidator]}
            placeholder="John"
            label="First Name"
          />
          <TextInput
            name="last_name"
            validators={[requiredValidator]}
            placeholder="Smith"
            label="Last Name"
          />
          <TextInput
            name="password"
            type="password"
            validators={[requiredValidator]}
            placeholder="****"
            label="Password"
          />
          <TextInput
            name="password_confirmation"
            type="password"
            validators={[requiredValidator, passwordMatchedValidator]}
            placeholder="****"
            label="Password Confirmation"
          />
          <TextInput
            name="acquisition"
            placeholder="Radio, Social Media..."
            label="How did you hear about us?"
          />

          <button className="submit-btn" type="submit">
            Register!
          </button>
          <button className="submit-btn danger" type="reset">
            Reset
          </button>
        </Form>
      </div>
    </div>
  );
}
