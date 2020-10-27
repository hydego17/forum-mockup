import { useState, useEffect } from "react"
import { createServer } from "miragejs"
import fetch from "isomorphic-unfetch"

export default function Comments() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "https://my-json-server.typicode.com/hydego17/sampledata/comments"
      )
      const getComments = await response.json()
      setComments(getComments)
    }
    loadData()
  }, [])

  return (
    <fieldset>
      <legend>
        {" "}
        <h2>Komentar</h2>
      </legend>

      {comments
        ? comments.map((comment) => {
            const { author, date, message, point, replies, id } = comment

            let newDate = new Date(Date.parse(date)).toLocaleDateString(
              "en-GB",
              { timeZone: "UTC" }
            )

            return (
              <div className="comment-section" key={id}>
                <div className="_cmm">
                  <img
                    className="img1"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt="profile-photo"
                  />

                  <div>
                    <h4>{author}</h4>
                    <small>{newDate}</small>
                    <p>{message}</p>

                    <small>{point} point</small>
                  </div>
                </div>

                {replies
                  ? replies.map((reply) => (
                      <div className="reply-section" key={reply.id}>
                        <div className="_rpl">
                          <img
                            className="img2"
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            alt="profile-photo"
                          />

                          <div>
                            <h4>{reply.author}</h4>
                            <small>{reply.newDate}</small>
                            <p>{reply.message}</p>
                            <small>{reply.point} point</small>
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            )
          })
        : "Tidak ada commentar"}
    </fieldset>
  )
}
