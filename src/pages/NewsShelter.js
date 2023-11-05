
import React from 'react';
import { useState } from 'react';
import './newsShelter.scss';

const NewsShelter = () => {
  const [payload, setPayload] = useState({ email: "" })

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPayload({ ...payload, [name]: value })
  }
  
  const submit = (e) => {
    e.preventDefault();
    console.log("send this payload",payload);
  }
  return (
    <>
      <section id='NewsShelter'>
        <div className='container text-center' data-aos="fade-up">
          <div className='row d-flex justify-content-center'>
            <div className='col-sm-6'>
              <h4>Join Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>

              <form action method="post">
                <input type="email" onChange={inputHandler} class="input form-control" id="email" name="email" />
                <input type="submit" className='SubmitBtn' value="subscribe" onClick={submit} />
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsShelter
