import React from "react"
import comments from "./comments.json"

export default function Comments() {
  return (
    <section className="komentar">
      <h2>Komentar</h2>
      {comments
        ? comments.map((comment) => {
            const { author, date, message, point, replies, id } = comment

            let newDate = new Date(Date.parse(date)).toLocaleDateString(
              "en-GB",
              { timeZone: "UTC" }
            )
            console.log(newDate)
            return (
              <div className="comment-section" key={id}>
                <h4>{author}</h4>
                <small>{newDate}</small>
                <p>{message}</p>
                <small>{point} point</small>
                {replies
                  ? replies.map((reply) => (
                      <div className="reply-section" key={reply.id}>
                        <h4>{reply.author}</h4>
                        <small>{reply.newDate}</small>
                        <p>{reply.message}</p>
                      </div>
                    ))
                  : ""}
              </div>
            )
          })
        : "Tidak ada commentar"}
    </section>
  )
}
