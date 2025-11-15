import { useState } from "react";
import '../component_styles/Comments.css'
import swoop1 from "../components/swoop1.png";

function Comments() {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

   function handleSubmit(e) {
    e.preventDefault(); 

    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      name: "Player", 
      text: comment,
      time:  Date.now(),
      likes: 0,
      replies: [],
    };

    setComments([newComment, ...comments]);
    setComment("");
  }

function formatTime(ts) {
  const d = new Date(ts);

  const month = d.getMonth() + 1;
  const day = d.getDate();
  const year = d.getFullYear();

  let hours = d.getHours();
  const minutes = d.getMinutes().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours || 12;

  return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
}
    return (
        <div className = "outer-container">
        <div className = "middle-container">

            <div className='points-container'>
                <p className='point-value'> Comments </p>
            </div>

            <div className="comments-container">
                <form onSubmit={handleSubmit} className="comment-form">
                  <div className="comment-input-box">
                    <textarea
                      className="comment-input"
                      placeholder="Write your comment here..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <div className="comment-toolbar">
                      <div className="toolbar-spacer"></div>
                      <button className="comment-button" type="submit">
                        Submit
                      </button>
                    </div>

                    </div>
                </form>


              <div className="comment-list">
                {comments.map((c) => (
                  <div className="comment-item">
  <img src={swoop1} alt="avatar" className="comment-avatar"/>

  <div className="comment-content">
      <div className="comment-header">
        <p className="comment-name">
          {c.name}
        </p>
        <span className="comment-time">{formatTime(c.time)}</span>
      </div>

      <p className="comment-text">{c.text}</p>
  </div>
</div>
                 
                ))}
              </div>

            </div>

      </div>
    </div>
  );
}

export default Comments;