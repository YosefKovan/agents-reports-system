import React, { type FC, useState } from "react";
import "./AddUser.css";
import usePost from "../../hooks/usePost";
import { Link } from "react-router";
import "../../css/link.buttons.css";
import AlertComponent from "../../components/AlertComponent/AlertComponent";

const URL = "http://localhost:3000/admin/users";

const AddUSer: FC = () => {
  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [selected, setSelected] = useState<string>("Agent");

  const { sendData, error, success, loading } = usePost();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const data = { fullName: name, agentCode: code, role: selected };

    sendData(URL, "POST", JSON.stringify(data), {
      "Content-Type": "application/json",
    });
  }

  return (
    <main className="add-user-page">
        {success && <AlertComponent message={success} className="success" />}
        {error && <div>{`${error.message} ${error.code}`}</div>}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h1>Add A User</h1>
            <h2>Enter the agent's name, code and role.</h2>
          </div>

          <div className="form-group">
            <input
              placeholder="Agent full name"
              value={name}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
              ) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Agent code"
              value={code}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
              ) => setCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="Agent">Agent</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="form-btn">
            <button className="blue-btn">Add Agent</button>
            <Link className="btn-secondary" to="/admin/view-users">
              Back
            </Link>
          </div>
        </form>
    </main>
  );
};

export default AddUSer;
