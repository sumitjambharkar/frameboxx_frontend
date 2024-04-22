import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    course: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const send = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://frameboxx-backend.onrender.com/submit-form",
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          course: data.course,
        }
      );
      Swal.fire({
        title: "Good job!",
        text: "Added!",
        icon: "success",
      });
      setData({
        name: "",
        email: "",
        phone: "",
        message: "",
        course: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div>
        <div>
          <h4 className="hedtitle">Get in Touch With Us</h4>
        </div>
        <div class="formbold-main-wrapper">
          <form onSubmit={send} class="formbold-form-wrapper">
            <div>
              <div class="formbold-input-flex">
                <div>
                  <input
                    required
                    value={data.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="firstname"
                    class="formbold-form-input"
                  />
                  <label for="firstname" class="formbold-form-label">
                    {" "}
                    Full Name{" "}
                  </label>
                </div>
                <div>
                  <select
                    required
                    value={data.course}
                    onChange={handleChange}
                    name="course"
                    id="course"
                    className="formbold-form-input"
                  >
                    <option value="Choose Courses">Choose Courses</option>
                    <option value="Degree in Animation & VFX">
                      Degree in Animation & VFX
                    </option>
                    <option value="Animation Courses">Animation Courses</option>
                    <option value="Game Design/Game Art Courses">
                      Game Design/Game Art Courses
                    </option>
                    <option value="Web Design & Development Courses">
                      Web Design & Development Courses
                    </option>
                    <option value="Visual Effects (VFX) Courses">
                      Visual Effects (VFX) Courses
                    </option>
                    <option value="UI & UX Course,Motion Graphic Courses">
                      UI & UX Course,Motion Graphic Courses
                    </option>
                    <option value="Graphic Designing Courses">
                      Graphic Designing Courses
                    </option>
                  </select>
                  <label for="lastname" class="formbold-form-label">
                    Choose Courses
                  </label>
                </div>
              </div>

              <div class="formbold-input-flex">
                <div>
                  <input
                    required
                    value={data.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    class="formbold-form-input"
                  />
                  <label for="email" class="formbold-form-label">
                    {" "}
                    Mail{" "}
                  </label>
                </div>
                <div>
                  <input
                    required
                    value={data.phone}
                    onChange={handleChange}
                    type="text"
                    name="phone"
                    id="phone"
                    class="formbold-form-input"
                  />
                  <label for="phone" class="formbold-form-label">
                    {" "}
                    Phone{" "}
                  </label>
                </div>
              </div>

              <div class="formbold-textarea">
                <textarea
                  required
                  value={data.message}
                  onChange={handleChange}
                  rows="6"
                  name="message"
                  id="message"
                  class="formbold-form-input"
                ></textarea>
                <label for="message" class="formbold-form-label">
                  {" "}
                  Message{" "}
                </label>
              </div>

              <button type="submit" class="button-81">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
