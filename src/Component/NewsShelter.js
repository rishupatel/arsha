import React from 'react'
import './newsShelter.scss'

const NewsShelter = () => {
  return (
    <>
      <section id='NewsShelter'>
        <div className='container text-center' data-aos="fade-up">
            <div className='row d-flex justify-content-center'>
                <div className='col-sm-6'>
                    <h4>Join Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>

                      <form action method="post">
                        <input type="email" class="input form-control" id="email" name="email" />
                        <input type="submit" className='SubmitBtn' value="subscribe"/>
                    </form>
                  
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default NewsShelter
