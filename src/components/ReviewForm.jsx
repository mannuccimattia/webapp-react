import axios from "axios";
import { useState } from "react";

const ReviewForm = ({ book_id, reloadReviews }) => {

  // variables
  const initialData = { name: "", vote: "", text: "" };

  // state variables
  const [formData, setFormData] = useState(initialData);
  const [isFormValid, setIsFormValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState([]);

  // function for storing form data
  const setFieldValue = (e) => {
    const { value, name } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // function for form data validation, returns true if all fields are correct
  const validateForm = () => {
    const errors = [];

    // whenever a field is empty, push an error
    if (!formData.name) {
      errors.push({ field: "name", message: "Name can't be empty" });
    }
    if (!formData.text) {
      errors.push({ field: "text", message: "Text can't be empty" });
    }
    if (!formData.vote) {
      errors.push({ field: "vote", message: "Vote can't be empty" });
    }
    if (isNaN(formData.vote) || formData.vote < 0 || formData.vote > 5) {
      errors.push({ field: "vote", message: "Vote must be a number from 0 to 5" });
    }

    // if errors array is not empty, returns false
    if (errors.length > 0) {
      setErrorMessage(errors);
      return false;
    }

    // if no errors, returns true
    return true;
  };

  // function for submitting form data to db
  const handleSubmit = (e) => {
    e.preventDefault();

    // if validation fails, update state and exit
    if (!validateForm()) {
      setIsFormValid(false);
      return;
    }

    // if valid, do ajax call for storing the review
    axios.post(`http://127.0.0.1:3000/api/movies/${book_id}/review`, formData, {
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      setIsFormValid(true);
      setFormData(initialData);
      reloadReviews();
    })
  }


  return (
    <div className='col-12'>
      <div className="card bg-black text-success p-3">

        <div className="card-header bg-black">
          <h3>Leave a review</h3>
        </div>

        <div className="card-body">
          {!isFormValid && <div className="alert alert-danger border-danger bg-black mb-3">
            <strong>Form data not valid</strong>
          </div>}
          <form onSubmit={handleSubmit}>
            <div className="row gy-3">
              <div className="col-12">
                <label htmlFor="name" className='control-label opaque-mid mb-1'>Name</label>
                <input
                  type="text"
                  className='form-control'
                  placeholder='Name'
                  name='name'
                  id='name'
                  value={formData.name}
                  onChange={setFieldValue}
                />
                {errorMessage.map(err => {
                  if (err.field === "name") return (
                    <span key={`${err.field}-key`} className="text-danger opaque-mid mt-2">
                      {err.message}
                    </span>
                  )
                })}
              </div>

              <div className="col-12">
                <label htmlFor="vote" className='control-label opaque-mid mb-1'>Vote</label>
                <input
                  type="number"
                  className='form-control'
                  placeholder='Vote'
                  name='vote'
                  id='vote'
                  value={formData.vote}
                  onChange={setFieldValue}
                />
                {errorMessage.map(err => {
                  if (err.field === "vote") return (
                    <span key={`${err.field}-key`} className="text-danger opaque-mid mt-2">
                      {err.message}
                    </span>
                  )
                })}
              </div>

              <div className="col-12">
                <label htmlFor="text" className='control-label opaque-mid mb-1'>Text</label>
                <textarea
                  type="text"
                  className='form-control'
                  placeholder="Write something"
                  name='text'
                  id='text'
                  value={formData.text}
                  onChange={setFieldValue}
                ></textarea>
                {errorMessage.map(err => {
                  if (err.field === "text") return (
                    <span key={`${err.field}-key`} className="text-danger opaque-mid mt-2">
                      {err.message}
                    </span>
                  )
                })}
              </div>

              <div className="col-12 mt-4">
                <button
                  className='btn btn-outline-success'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReviewForm