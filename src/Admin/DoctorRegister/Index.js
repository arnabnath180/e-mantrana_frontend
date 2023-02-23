import React from 'react'

export default function Index() {
  return (
    <div className='container'>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
            </div>
            <div class="form-group">
                <label for="fname">First Name</label>
                <input type="text" class="form-control" id="fname" aria-describedby="emailHelp" placeholder="Enter first name" required/>
            </div>
            <div class="form-group">
                <label for="lname">Last Name</label>
                <input type="text" class="form-control" id="lname" aria-describedby="emailHelp" placeholder="Enter last name"/>
            </div>
            <div class="form-group">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label class="form-check-label" for="inlineCheckbox1">General</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label class="form-check-label" for="inlineCheckbox2">Specialist</label>
                </div>
            </div>      
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
            
    </div>
  )
}

