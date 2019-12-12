import React from 'react'
const CreatePost = (props) => {
  return (
    <div>
      <form
        onSubmit={props.postSubmit}
        className="post-form"
      >
        <input
          type="text"
          name="title"
          value={props.title}
          placeholder="Title!"
          onChange={props.onContentChange}
        />
        <textarea
          name="content"
          placeholder="POST IT"
          onChange={props.onContentChange}
          value={props.content}
          rows="6"
        />
        <input
          type="submit"
          value="POST"
        />
      </form>
    </div>
  )
}
export default CreatePost;