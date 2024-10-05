import React from 'react'

export default function Complain() {
  return (
    <div>
        <div class="mb-3">
                <label for="title" class="form-label">Complaint Title <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="title" name="title" placeholder="Enter the title" required></input>
        </div>
    </div>
  )
}
