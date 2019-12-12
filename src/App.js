import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
//custom components
import CreatePost from './components/CreatePost'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      content: "",
      author: "Steve",
      voteCount: 0,
      posts: [{
        title: "this is a post!",
        content: "Post content",
        author: "Somebody",
        voteCount: 0,
      }],
    }
  }

  onContentChange = (e) => {
    const name = e.target.name;
    const content = e.target.value;
    this.setState({
      [name]: content
    })
  }

  postSubmit = (e) => {
    e.preventDefault();
    const posts = this.state.posts
    const newPost = {
      author: this.state.author,
      content: this.state.content,
      title: this.state.title,
      voteCount: 0
    }
    posts.push(newPost)
    this.setState({
      posts,
      content: "",
      title: "",
      voteCount: 0
    })
  }

  vote = (e, sentPost, operator) => {
    e.preventDefault();
    const posts = this.state.posts.filter(checkPost => sentPost.title !== checkPost.title);
    switch (operator) {
      case "plus":
        sentPost.voteCount++
        break;
      case "minus":
        sentPost.voteCount--
        break;
      default:
        console.error('Vote functionality broken. Contact admin.')
    }
    posts.push(sentPost)
    posts.sort((a, b) => b.voteCount - a.voteCount)
    this.setState({
      posts
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Reddit</h1>
        <CreatePost
          title={this.state.title}
          content={this.state.content}
          postSubmit={this.postSubmit}
          onContentChange={this.onContentChange}
        />
        {this.state.posts.map((post, key) =>
          <div key={key} className={post.voteCount > 0 ? "post-wrapper" : "post-wrapper post-wrapper-negative"}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <p>{post.voteCount}</p>
            <i className="fa fa-angle-up" onClick={(e) => this.vote(e, post, "plus")}></i>
            <i className="fa fa-angle-down" onClick={(e) => this.vote(e, post, "minus")}></i>
          </div>
        )}
      </div>
    );
  }
}
export default App;
