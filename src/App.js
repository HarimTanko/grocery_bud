import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  //set state for the form/input and also set state
  // for the list that we will display
  // set state for if were editing or not (isEditing)

  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  //set state for editId to be able to know which
  //item we are editing
  const [editId, setEditId] = useState(null);

  //set state for the alert
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  return <section className="section-center">grocery bud setup</section>;
}

export default App;
