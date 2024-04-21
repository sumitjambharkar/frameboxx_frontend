import React from 'react'

const Contact = () => {
  return (
    <div>
       <div>
        <div>
            <h4  className="hedtitle">Get in Touch With Us</h4>
        </div>
      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div class="formbold-input-flex">
              <div>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  class="formbold-form-input"
                />
                <label for="firstname" class="formbold-form-label">
                  {" "}
                  Full Name{" "}
                </label>
              </div>
              <div>
                <select name="cars" id="cars" class="formbold-form-input">
                <option>Choose Courses</option>
                  <option >Degree in Animation & VFX</option>
                  <option >Animation Courses</option>
                  <option >Game Design/Game Art Courses</option>
                  <option >Web Design & Development Courses</option>
                  <option >Visual Effects (VFX) Courses</option>
                  <option >UI & UX Course,Motion Graphic Courses</option>
                  <option > Graphic Designing Courses</option>
                </select>
                <label for="lastname" class="formbold-form-label">
                  Choose Courses
                </label>
              </div>
            </div>

            <div class="formbold-input-flex">
              <div>
                <input
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

            <button class="button-81">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact