import React from 'react'
import Input from './InputComponent'
function Header({ search, setQuery }) {
  return (
    <div>
      <div className='row'>
      </div>
      <div className='row note-app-header'>
        <h1 className='col-2'> 📒Notes App</h1>

        <div className="col-10 align-self-end">

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