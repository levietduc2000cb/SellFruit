import styles from "./Comments.module.css";
import classNames from "classnames/bind";
import Comment from "~/components/Comment";
import axiosInstance from "~/axios/axiosConfig";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Comments({ idItem }) {
  let cx = classNames.bind(styles);

  const { userInfo } = useSelector((state) => state.auth);

  const [comment, setComment] = useState("");

  const [comments, setComments] = useState(null);

  const { lastName, firstName, imageAvatar } = userInfo;

  async function getComments() {
    try {
      const res = await axiosInstance.get(`/comments?idProduct=${idItem}`);
      if (res.data) {
        setComments([...res.data.commentsUser]);
      }
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }

  const handleComment = async () => {
    if (comment === "") {
      return;
    } else {
      const dataComment = {
        idItem: idItem,
        nameUser: lastName + " " + firstName,
        avatarUser: imageAvatar,
        commentUser: comment,
      };
      const res = await axiosInstance.post(
        "comments/createcomment",
        dataComment
      );
      //Thêm bình luận vào trước và xóa bình luận cuối cùng
      if (res.data) {
        getComments();
      }
    }
  };

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idItem]);

  return (
    <div className={cx("comments")}>
      <div className={cx("my_comment")}>
        <textarea
          rows="5"
          cols="5"
          placeholder="Vui lòng nhập đánh giá của bạn về sản phẩm..."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
        <button className={cx("comment_btn")} onClick={handleComment}>
          Gửi đánh giá
        </button>
      </div>
      <div className={cx("list_comments")}>
        <h3>ĐÁNH GIÁ TỪ NHỮNG KHÁCH HÀNG KHÁC</h3>
        <div>
          {comments && comments.length > 0
            ? comments.map((comment, index) => {
                return (
                  <Comment
                    key={comment._id}
                    name={comment.nameUser}
                    textComment={comment.commentUser}
                    linkImage={comment.avatarUser}
                  ></Comment>
                );
              })
            : null}
          {comments && comments.length === 0 ? (
            <div>Không có đánh giá nào từ khách hàng</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Comments;
