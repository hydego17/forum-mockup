import { useState, useEffect } from "react"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Comments() {
  const [comments, setComments] = useState([])
  const [isVoted, setIsVoted] = useState([])

  const newComments = [...comments]
  const newVoted = [...isVoted]

  //UpVote Comments
  const upVote = (id, index) => {
    newComments.map((c) => {
      if (id === c.id) {
        c.point += 1
      }
    })
    setComments(newComments)
    newVoted[index] = !newVoted[index]
    setIsVoted(newVoted)
  }
  // UpVote Replies
  const upVoteReply = (id, replId) => {
    newComments.map((c) => {
      if (id === c.id) {
        c.replies.map((r) => {
          if (replId === r.id) {
            r.point += 1
          }
        })
      }
    })
    setComments(newComments)
  }

  // DownVote Comments
  const downVote = (id, index) => {
    newComments.map((c) => {
      if (id === c.id) {
        c.point -= 1
      }
    })
    setComments(newComments)
    newVoted[index] = !newVoted[index]
    setIsVoted(newVoted)
  }
  // DownVote Replies
  const downVoteReply = (id, replId) => {
    newComments.map((c) => {
      if (id === c.id) {
        c.replies.map((r) => {
          if (replId === r.id) {
            r.point -= 1
          }
        })
      }
    })
    setComments(newComments)
  }

  // Fetch data from API
  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "https://my-json-server.typicode.com/hydego17/sampledata/comments"
      )
      const getComments = await response.json()
      setComments(getComments)
      setIsVoted(new Array(getComments.length).fill(false))

      getComments.map((c) => {
        if (c.replies) {
          setIsVoted(new Array(getComments.length).fill(false))
        }
      })
    }
    loadData()
  }, [])

  return (
    <fieldset>
      <legend>
        <h2>Komentar</h2>
      </legend>

      {comments
        ? comments.map((comment, index) => {
            const { author, date, message, point, replies, id } = comment

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
                      disabled={isVoted[index]}
                      className="btn_upvote"
                      onClick={() => upVote(id, index)}
                    >
                      <FontAwesomeIcon icon={faAngleUp} />
                    </button>
                    <button
                      disabled={isVoted[index]}
                      className="btn_downvote"
                      onClick={() => downVote(id, index)}
                    >
                      <FontAwesomeIcon icon={faAngleDown} />
                    </button>
                  </div>
                </div>

                {replies
                  ? replies.map((reply, index) => (
                      <div
                        className="reply-section"
                        id={reply.id}
                        key={reply.id}
                      >
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
                              className="btn_upvote"
                              onClick={() => upVoteReply(id, reply.id)}
                            >
                              <FontAwesomeIcon icon={faAngleUp} />
                            </button>
                            <button
                              className="btn_downvote"
                              onClick={() => downVoteReply(id, reply.id)}
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
        : "Tidak ada commentar"}
    </fieldset>
  )
}
