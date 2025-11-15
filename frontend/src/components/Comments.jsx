import { useState, useEffect } from "react";
import "../component_styles/Comments.css";
// import swoop1 from "../components/swoop1.png";

function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  useEffect(function () {
    loadComments();
  }, []);

  async function loadComments() {
    try {
      const uri = "http://127.0.0.1:8000/comments";
      const res = await fetch(uri);
      const data = await res.json();
      setComments(data);
      setError("");
    } catch (err) {
      setError("Error: " + err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!comment.trim()) return;

    const newComment = {
      name: "Player",
      time: Date.now(),
      text: comment,
    };

    try {
      const res = await fetch("http://127.0.0.1:8000/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });

      if (!res.ok) {
        throw new Error("Failed to save comment");
      }

      setComment("");
      loadComments();
    } catch (err) {
      console.log(err);
      setError("Error: " + err.message);
    }
  }

  function formatTime(ts) {
    const d = new Date(ts);

    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();

    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours || 12;
    hours = String(hours).padStart(2, "0");

    return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
  }
  return (
    <div className="outer-container">
      <div className="middle-container">
        <div className="points-container">
          <p className="point-value"> Comments </p>
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
                <img src={c.avatar} alt="avatar" className="comment-avatar" />

                <div className="comment-content">
                  <div className="comment-header">
                    <p className="comment-name">{c.name}</p>
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
