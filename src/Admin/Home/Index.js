import React from 'react'
import './Index.css'
import { Link } from 'react-router-dom'
export default function Index() {
  return (
    <div className='container'>
      <div class="row">
        <div class="col-sm-8">
        </div>
        <div class="col-sm-4">
          <div class="row">
            <div class="col">
              <Link type="button" class="btn btn-primary btn-lg btn-block" to='/admin/doctorregister'>Add Doctor</Link>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button type="button" class="btn btn-success btn-lg btn-block">Fetch Doctor</button>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button type="button" class="btn btn-warning btn-lg btn-block">Update Doctor</button>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button type="button" class="btn btn-danger btn-lg btn-block">Delete Doctor</button>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button type="button" class="btn btn-secondary btn-lg btn-block">Fetch Patients</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
