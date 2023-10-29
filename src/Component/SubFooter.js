import React from 'react'
import './SubFooter.scss'

const SubFooter = () => {
  return (
    <>
      <section id='SubFooter'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>
                    <p>© Copyright <strong>Arsha.</strong> All Rights Reserved</p>
                </div>
                <div className='col-sm-6 '>
                      <p className='DesignedBy'>Designed by <span>BootstrapMade</span></p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default SubFooter
