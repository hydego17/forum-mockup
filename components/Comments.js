import { useState, useEffect } from "react"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Comments() {
  const [comments, setComments] = useState([])
  const [isVoted, setIsVoted] = useState(false)
  const [comment, setComment] = useState({})

  const newComments = [...comments]

  //UpVote function
  const upVote = (id) => {
    newComments.map((c) => {
      if (id === c.id) {
        c.point += 1
      }
    })
    setComments(newComments)
  }
  // DownVote Funtion
  const downVote = (id) => {
    newComments.map((c) => {
      if (id === c.id) {
        c.point -= 1
      }
    }, [])
    setComments(newComments)
  }

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
        <h2>Komentar</h2>
      </legend>

      {comments
        ? comments.map((comment) => {
            const { author, date, message, point, replies, id } = comment

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
                    <small>{date}</small>
                    <p>{message}</p>
                    <small>{point} point</small>
                    <button
                      disabled={isVoted}
                      className="btn-vote"
                      onClick={() => upVote(id)}
                    >
                      <FontAwesomeIcon icon={faAngleUp} />
                    </button>
                    <button
                      disabled={isVoted}
                      className="btn-vote"
                      onClick={() => downVote(id)}
                    >
                      <FontAwesomeIcon icon={faAngleDown} />
                    </button>
                  </div>
                </div>

                {replies
                  ? replies.map((reply) => (
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
                            <small>{reply.date}</small>
                            <p>{reply.message}</p>
                            <small>{reply.point} point</small>
                            <button className="btn-vote">
                              <FontAwesomeIcon icon={faAngleUp} />
                            </button>
                            <button className="btn-vote">
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
