import React , { type FC, useState } from "react";
import "./AddUser.css";
import usePost from "../../hooks/usePost";

const URL = "http://localhost:3000/admin/users";

const AddUSer : FC = () => {
  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [selected, setSelected] = useState<string>("Agent");
  
  const {sendData, error, success, loading} = usePost();
   
  console.log(error);
  

  function handleSubmit(e : React.SyntheticEvent){

    e.preventDefault();
    
    const data = {fullName : name, agentCode : code, role : selected}

    sendData(URL, "POST", JSON.stringify(data), {"Content-Type" : "application/json"});

  }

  
  return (
    <main>
      {success && <div>{success}</div>}  
      {error && <div>{`${error.message} ${error.code}`}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="Agent full name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>setName(e.target.value)}/>
        </div>
        <div>
          <input placeholder="Agent code" value={code} onChange={(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>setCode(e.target.value)}/>
        </div>
        <div>
          <select value={selected} onChange={(e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>)=>setSelected(e.target.value)}>
            <option value="Agent">Agent</option>
            <option value="Admin" >Admin</option>
          </select>
        </div>

        <div>
          <button>Add Agent</button>
        </div>
      </form>
    </main>
  );
};

export default AddUSer;
