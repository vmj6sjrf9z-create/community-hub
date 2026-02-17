import { useState } from "react";

export default function PasswordToggle({ id, placeholder, value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div className="password-wrapper">
      <input
        type={show ? "text" : "password"}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      <i
        className={`fas ${show ? "fa-eye-slash" : "fa-eye"}`}
        onClick={() => setShow(!show)}
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  );
}
