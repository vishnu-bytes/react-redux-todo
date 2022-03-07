import React, { useState } from "react";
import { edititem } from "../../actions";
import { connect } from "react-redux";
import { CheckOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router";

const Index = ({ edititem }) => {
  const [val, setval] = useState("");
  let { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  return (
    <div className="crate_todo">
      <input onChange={(e) => setval(e.target.value)}></input>
      <button
        className="create_btn"
        onClick={() => {
          edititem(id, val);
          navigate("/");
        }}
      >
        <CheckOutlined />
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  edititem: (id, val) => dispatch(edititem(id, val)),
});
const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
