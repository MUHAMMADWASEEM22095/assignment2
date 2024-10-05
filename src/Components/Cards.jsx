import React from 'react'

function Cards() {
  return (
    <div>
      <div class="card">
        <div class="col mt-0">
          <h5 class="card-title">Sales</h5>
        </div>
        <h1 class="mt-1 mb-3">2.382</h1>
          <div class="mb-0">
            <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
            <span class="text-muted">Since last week</span>
          </div>
        </div>
    </div>
  )
}
export default Cards;