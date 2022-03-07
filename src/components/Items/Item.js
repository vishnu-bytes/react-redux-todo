import React from "react";
import PropTypes from "prop-types";
import { dltItem, edititem } from "../../actions";
import { connect } from "react-redux";
import { useState } from "react";
import { Popover, Button, Modal, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import "./items.scss";
import { Link } from "react-router-dom";

const Item = ({ onClick, completed, text, id, dltItem }) => {
  const [visible, setvisible] = useState(false);

  const handleOk = () => {
    setvisible(false);
    dltItem(id);
  };

  return (
    <Tooltip placement="topLeft" title="Click on the text to strike off">
      <div className="todo_comp">
        <li
          onClick={onClick}
          style={{
            textDecoration: completed ? "line-through" : "none",
          }}
        >
          {text}
        </li>
        <span>
          <Popover
            placement="right"
            content={
              <span className="todo_btn_wrap">
                <button onClick={() => setvisible(true)}>
                  <DeleteOutlined />
                  <span style={{ paddingLeft: "8px" }}> Delete</span>
                </button>
                <Link to={`/edit/${id}`}>
                  <button>
                    <EditOutlined />
                    <span style={{ paddingLeft: "8px" }}> Edit</span>
                  </button>
                </Link>
              </span>
            }
            trigger="click"
          >
            <Button>
              <MoreOutlined />
            </Button>
          </Popover>
        </span>
        {/* <input onChange={(val) => setval(val.target.value)}></input> */}
        <Modal
          title="Delete"
          visible={visible}
          onOk={handleOk}
          onCancel={() => setvisible(false)}
          okText="Delete"
          cancelText="Cancel"
        >
          Are you sure you want to delete this?
        </Modal>
      </div>
    </Tooltip>
  );
};

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  dltItem: (id) => dispatch(dltItem(id)),
  edititem: (id, val) => dispatch(edititem(id, val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
