import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  submitHanlder = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return;
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.setState({ title: "" });
    this.props.createPost(newPost);

    console.log(newPost);
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };

  render() {
    const { title } = this.state;

    return (
      <>
        <form onSubmit={this.submitHanlder}>
          <div className="form-group card mb-3">
            <div className="card-body">
              <h5>Add Post</h5>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Post Title"
                value={title}
                name="title"
                onChange={this.changeInputHandler}
              ></input>
              <button type="submit" className="btn btn-success mt-1 w-100">
                Add
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
const mapDispatchToProps = {
  createPost,
};
export default connect(null, mapDispatchToProps)(PostForm);
