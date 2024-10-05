import React from 'react'

function Cards() {
  return (
    <div>
      <div className="card w-25">
        <div className="col mt-1">
          <h5 className="card-title">Sales</h5>
        </div>
        <h1 className="mt-0 mb-2">2.382</h1>
          <div className="mb-0">
            <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
            <span className="text-muted">Since last week</span>
          </div>
        </div>
    </div>
  )
}
export default Cards;