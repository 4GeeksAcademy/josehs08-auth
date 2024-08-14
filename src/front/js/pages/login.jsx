import React from'react';

export const Login = () => {
    return (
        <div className="container">
            <form>
                <div className='mb-3'>
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input type="<PASSWORD>" className="form-control" id="password"/>
                </div>
                <button  type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}
