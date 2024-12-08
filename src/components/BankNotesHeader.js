import React from 'react'
import Input from './InputComponent'
function Header({ search, setQuery }) {
  return (
    <div>
      <div className='row'>
        <h1 className='text-align-center'>Bank Notes App</h1>
      </div>
      <div className='row'>
        <div className="col align-self-end">
          <div className='float-right'>
            <Input
              value={search}
              onChange={setQuery}
              type="search"
              id="search_note"
              name="search_note"
              placeholder="Find Notes..."
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header