import PropTypes from 'prop-types'
import {useNavigate, useSearchParams } from 'react-router-dom'
import queryString from 'query-string'

const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams()
  const category = params.get('category')
  const navigate = useNavigate()
  const handleClick = () => {
   
    // 1. Create Query String
    let currentQuery = { category: label }
    
    const url = queryString.stringifyUrl({
      url: '/',
      query: currentQuery,
    })
    // console.log(url);
     navigate(url);
    // // url output---> /?category=label

    // // 2. Set query string in url
    // Navigate(url)
    // console.log(url);
  }
  return (
    <div
    onClick={handleClick}
      className={`
          flex 
          flex-col 
          items-center 
          justify-center 
          gap-2
          p-3
          border-b-2
          hover:text-neutral-800
          transition
          cursor-pointer
          ${
            category === label && 'border-b-neutral-800 text-neutral-800'
          }
      `}

    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  )
}

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
}

export default CategoryBox
