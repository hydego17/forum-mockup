import { useState, useEffect } from "react"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Comments() {
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState([])

  const newComments = [...comments]

  //Handle Comments function
  const handleComment = (id, vote) => {
    newComments.map((c) => {
      if (id === c.id) {
        c.point = vote === "upVote" ? c.point + 1 : c.point - 1
        c.isVoted = true
      }
    })
    setComments(newComments)
  }

  // Handle Replies function
  const handleReply = (id, replId, vote) => {
    newComments.map((c) => {
      if (id === c.id) {
        c.replies.map((r) => {
          if (replId === r.id) {
            r.point = vote === "upVote" ? r.point + 1 : r.point - 1
            r.isVoted = true
          }
        })
      }
    })
    setComments(newComments)
  }

  // Fetch data from API
  useEffect(() => {
    setLoading(true)
    async function loadData() {
      // fetch external api
      const response = await fetch(
        "https://my-json-server.typicode.com/hydego17/sampledata/comments"
      )
      // get response
      const getComments = await response.json()

      // store response into state
      const initialComments = [...getComments]

      initialComments.map((comment) => {
        comment.isVoted = false

        const { replies } = comment

        if (replies.length > 0) {
          replies.map((r) => (r.isVoted = false))
        }
      })

      setComments(initialComments)
      setLoading(false)
    }
    // Call the function
    loadData()
  }, [])

  return (
    <fieldset>
      <legend>
        <h2>Komentar</h2>
      </legend>

      {loading ? (
        <p>
          <em>Sedang memuat komentar...</em>
        </p>
      ) : comments ? (
        comments.map((comment, index) => {
          // Destructurin field on each comment
          const { author, date, message, point, replies, id, isVoted } = comment

          // Convert the date format
          const setDate = (d) => {
            return new Date(d).toLocaleString()
          }

          return (
            <div className="comment_section" id={id} key={id}>
              <div className="_cmm">
                <img
                  className="img1"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="profile-photo"
                />

                <div>
                  <h4>{author}</h4>
                  <small>{setDate(date)}</small>
                  <p>{message}</p>
                  <small>{point} point</small>
                  <button
                    disabled={isVoted}
                    className="btn_upvote"
                    onClick={() => handleComment(id, "upVote")}
                  >
                    <FontAwesomeIcon icon={faAngleUp} />
                  </button>
                  <button
                    disabled={isVoted}
                    className="btn_downvote"
                    onClick={() => handleComment(id, "downVote")}
                  >
                    <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                </div>
              </div>

              {replies
                ? replies.map((reply) => (
                    <div className="reply-section" id={reply.id} key={reply.id}>
                      <div className="_rpl">
                        <img
                          className="img2"
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                          alt="profile-photo"
                        />

                        <div>
                          <h4>{reply.author}</h4>
                          <small>{setDate(reply.date)}</small>
                          <p>{reply.message}</p>
                          <small>{reply.point} point</small>
                          <button
                            disabled={reply.isVoted}
                            className="btn_upvote"
                            onClick={() => handleReply(id, reply.id, "upVote")}
                          >
                            <FontAwesomeIcon icon={faAngleUp} />
                          </button>
                          <button
                            disabled={reply.isVoted}
                            className="btn_downvote"
                            onClick={() =>
                              handleReply(id, reply.id, "downVote")
                            }
                          >
                            <FontAwesomeIcon icon={faAngleDown} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          )
        })
      ) : (
        "Tidak ada commentar"
      )}
    </fieldset>
  )
}
