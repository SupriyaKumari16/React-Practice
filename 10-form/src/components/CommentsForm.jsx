import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.remarks) {
    errors.remarks = "Required";
  }

  if (!values.rating) {
    errors.rating = "Required";
  }

  return errors;
};

export default function CommentsForm({ addNewComment }) {

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      addNewComment(values);
    },
  });

  return (
    <div>
      <h4>Give a comment!</h4>

      <form onSubmit={formik.handleSubmit}>

        <label htmlFor="username">Username</label>

        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />

        {formik.errors.username ? (
            <p style={{color: "red"}}>{formik.errors.username}</p>
        ): null} 
        <br></br><br></br>

        <label htmlFor="remarks">Remarks</label>

        <textarea
          name="remarks"
          id="remarks"
          placeholder="remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
        />

        <br /><br />

        <label htmlFor="rating">Rating</label>

        <input
          type="number"
          name="rating"
          id="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
        />

        <br /><br />

        <button type="submit">Add Comment</button>

      </form>
    </div>
  );
}
