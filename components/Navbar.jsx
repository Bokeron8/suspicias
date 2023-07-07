import { FaShoppingCart, FaSearch } from 'react-icons/fa'
import Link from 'next/link'

export default function Navbar() {

  return (
    <div className="navbar-container">
        <div>
            <Link href='/'>
              <p>ZAMBRANO</p>
            </Link>
        </div>
        <div className='navbar-right'>
          {/*
          <form className='search-button' onSubmit={submitForm}>
            <label>
              <input type="text" name='query'/>
            </label>
            <button type='submit'>
              <FaSearch/>
            </button>
  
          </form>
          */}
          <FaShoppingCart/>
        </div>
    </div>
  )
}

const submitForm = (e) => {
  // We don't want the page to refresh
  e.preventDefault();
  console.log(e.target.query.value)
}
