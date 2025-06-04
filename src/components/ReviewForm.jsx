import axios from "axios";
import { useState } from "react";

const ReviewForm = ({ book_id, reloadReviews }) => {

  const initialData = { name: "", vote: "", text: "" };

  const [formData, setFormData] = useState(initialData);

  const setFieldValue = (e) => {
    const { value, name } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://127.0.0.1:3000/api/movies/${book_id}/review`, formData, {
      headers: { "Content-Type": "application/json" }
    }).then(() => {
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
                  required
                />
              </div>

              <div className="col-12">
                <label htmlFor="vote" className='control-label opaque-mid mb-1'>Vote</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  className='form-control'
                  placeholder='Vote'
                  name='vote'
                  id='vote'
                  value={formData.vote}
                  onChange={setFieldValue}
                  required
                />
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
                  required
                ></textarea>
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
