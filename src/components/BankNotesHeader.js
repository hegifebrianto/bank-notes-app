import React from 'react'
import Input from './InputComponent'
import PropTypes from 'prop-types'
function Header({  setQuery }) {
  
  return (
    <div>
      <div className='row'>
      </div>
      <div className='row note-app-header'>
        <h1 className='col-2'> 📒Notes App</h1>

        <div className="col-10 align-self-end">

          <div className='float-right'>
            <Input
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
Header.propTypes = {
  setQuery: PropTypes.func.isRequired, 
}

export default Header