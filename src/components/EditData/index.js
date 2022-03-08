import React, { useState } from "react";
import { edititem } from "../../actions";
import { connect } from "react-redux";
import { CheckOutlined, LeftOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router";
import "./index.scss";

const Index = ({ edititem }) => {
  const [val, setval] = useState("");
  let { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  return (
    <div>
      <span className="edit_wrap">
        <LeftOutlined onClick={()=>navigate("/")} />
        <h1>Edit task</h1>
      </span>

      <div className="crate_todo">
        <input
          placeholder="Type in your updated task here"
          onChange={(e) => setval(e.target.value)}
        ></input>
        <button
          className="create_btn edit_btn"
          onClick={() => {
            edititem(id, val);
            navigate("/");
          }}
        >
          <CheckOutlined />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  edititem: (id, val) => dispatch(edititem(id, val)),
});

export default connect(null, mapDispatchToProps)(Index);
