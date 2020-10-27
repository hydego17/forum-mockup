import { useState, useEffect } from "react"
import data from "../data/data.json"
import { createServer } from "miragejs"

// Mock server from Mirage JS to populate JSON Data
createServer({
  routes() {
    this.get("/api/comments", () => ({
      comments: [data],
    }))
  },
})

export default function Comments() {
  let [comments, setComments] = useState([])

  useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((json) => {
        setComments(json.comments[0])
      })
  }, [])

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

            return (
              <div className="comment-section" key={id}>
                <img
                  width={50}
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="profile-photo"
                />
                <h4>{author}</h4>
                <small>{newDate}</small>
                <p>{message}</p>
                <small>{point} point</small>
                {replies
                  ? replies.map((reply) => (
                      <div className="reply-section" key={reply.id}>
                        <img
                          width={50}
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                          alt="profile-photo"
                        />
                        <h4>{reply.author}</h4>
                        <small>{reply.newDate}</small>
                        <p>{reply.message}</p>
                        <small>{reply.point} point</small>
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
