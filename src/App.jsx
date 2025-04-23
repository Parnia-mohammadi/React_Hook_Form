import { useState } from "react";
import Form from "./components/Form";
import "./index.css";
import ReactHookForm from "./components/ReactHookForm";

function App() {
  const [formName, setFormName] = useState("");
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex gap-4 mb-2">
        <button onClick={() => setFormName("SimpleForm")}>Simple-form</button>
        <button onClick={() => setFormName("ReactHookForm")}>
          React-Hook-form
        </button>
      </div>
      {formName === "SimpleForm" ? (
        <Form />
      ) : formName != "" ? (
        <ReactHookForm />
      ) : null}
      {formName && <p className="mt-2">{`You choose ${formName}`}</p>}
    </div>
  );
}

export default App;
