import React from "react";
import { connect } from "react-redux";
import { addItems } from "../actions";

const Home = ({ dispatch }) => {
  let input, item;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    item = {
      text: input.value,
    };
    dispatch(addItems(item));
    input.value = "";
  };

  return (
    <div className={"wrapper"}>
      <form onSubmit={handleSubmit}>
        <div className="crate_todo">
          <input
            placeholder="Add your todo in here..."
            type="text"
            name="name"
            ref={(node) => (input = node)}
          />
          <button className="create_btn">+</button>
        </div>
      </form>
    </div>
  );
};

export default connect()(Home);
