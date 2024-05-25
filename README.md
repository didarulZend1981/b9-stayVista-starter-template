# stayVista-starter-template

### Important Links:


- [StayVista Part 1](https://github.com/shakilahmedatik/b9-stayVista-part1)
- [StayVista Part 2](https://github.com/shakilahmedatik/b9-stayVista-part2)
- [StayVista Resources](https://github.com/shakilahmedatik/b9-stayVista-resources)
- [Project Requirement Doc](https://docs.google.com/document/d/1rzueKvZTinMb3XY7cuDNH0S0d_l8CflG1H95VUi2Dto/edit?usp=sharing)

### Packages and api docs used in this project:

- [@headlessui/react](https://www.npmjs.com/package/@headlessui/react)
- [IMGBB Api](https://api.imgbb.com/)
- [@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)
- [axios](https://www.npmjs.com/package/axios)
- [date-fns](https://www.npmjs.com/package/date-fns)
- [query-string](https://www.npmjs.com/package/query-string)
- [react-date-range](https://www.npmjs.com/package/react-date-range)
- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-spinners](https://www.npmjs.com/package/react-spinners)
- [@stripe/react-stripe-js](https://www.npmjs.com/package/@stripe/react-stripe-js)
- [@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js)
- [firebase](https://www.npmjs.com/package/firebase)
- [react-google-charts](https://www.npmjs.com/package/react-google-charts)











###### DASHBORD-
##### 1.components/Shared/Navbar/Navbar.jsx
      {user ? (
                      <>

                        <Link
                        to='/dashboard'
                        className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                        Dashboard
                        </Link>
                        
                      </>
                    ) : (
                      <>
                       
                      </>
                    )}
##### 2.routes/Routes.jsx

      import { createBrowserRouter } from 'react-router-dom'

      import DashboardLayout from '../layouts/DashboardLayout'
      export const router = createBrowserRouter([
       {
          path: '/dashboard',
          element: <DashboardLayout />,
          
        },



  
     ])
##### 3 layouts/DashboardLayout.jsx
        
        import { Outlet } from 'react-router-dom'
        import Sidebar from '../components/Dashboard/Sidebar/Sidebar'

        const DashboardLayout = () => {
          return (
            <div className='relative min-h-screen md:flex'>
              {/* Sidebar */}
              <Sidebar />

              {/* Outlet --> Dynamic content */}
              <div className='flex-1 md:ml-64'>
                <div className='p-5'>
                  <Outlet />
                </div>
              </div>
            </div>
          )
        }

        export default DashboardLayout


##### 4.components/Dashboard/Sidebar/Sidebar.jsx
        import { useState } from 'react'
        import { GrLogout } from 'react-icons/gr'
        import { FcSettings } from 'react-icons/fc'
        import { BsFingerprint, BsFillHouseAddFill } from 'react-icons/bs'
        import { GrUserAdmin } from 'react-icons/gr'
        import { MdHomeWork } from 'react-icons/md'
        import { AiOutlineBars } from 'react-icons/ai'
        import { BsGraphUp } from 'react-icons/bs'
        import { NavLink } from 'react-router-dom'
        import useAuth from '../../../hooks/useAuth'
        import { Link } from 'react-router-dom'

        const Sidebar = () => {
        const { logOut } = useAuth()
        const [isActive, setActive] = useState(false)

        // Sidebar Responsive Handler
        const handleToggle = () => {
        setActive(!isActive)
        }
        return (
        <>
        {/* Small Screen Navbar */}
        <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
        <div className='block cursor-pointer p-4 font-bold'>
        <Link to='/'>
        <img
        // className='hidden md:block'
        src='https://i.ibb.co/4ZXzmq5/logo.png'
        alt='logo'
        width='100'
        height='100'
        />
        </Link>
        </div>
        </div>

        <button
        onClick={handleToggle}
        className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
        <AiOutlineBars className='h-5 w-5' />
        </button>
        </div>

        {/* Sidebar */}
        <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
        isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
        <div>
        <div>
        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
        <Link to='/'>
        <img
        // className='hidden md:block'
        src='https://i.ibb.co/4ZXzmq5/logo.png'
        alt='logo'
        width='100'
        height='100'
        />
        </Link>
        </div>
        </div>

        {/* Nav Items */}
        <div className='flex flex-col justify-between flex-1 mt-6'>
        {/* Conditional toggle button here.. */}

        {/*  Menu Items */}
        <nav>
        {/* Statistics */}
        <NavLink
        to='/dashboard'
        end
        className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
        isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        }`
        }
        >
        <BsGraphUp className='w-5 h-5' />

        <span className='mx-4 font-medium'>Statistics</span>
        </NavLink>

        {/* Add Room */}
        <NavLink
        to='add-room'
        className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
        isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        }`
        }
        >
        <BsFillHouseAddFill className='w-5 h-5' />

        <span className='mx-4 font-medium'>Add Room</span>
        </NavLink>
        {/* My Listing */}
        <NavLink
        to='my-listings'
        className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
        isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        }`
        }
        >
        <MdHomeWork className='w-5 h-5' />

        <span className='mx-4 font-medium'>My Listings</span>
        </NavLink>
        </nav>
        </div>
        </div>

        <div>
        <hr />

        {/* Profile Menu */}
        <NavLink
        to='/dashboard/profile'
        className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
        isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        }`
        }
        >
        <FcSettings className='w-5 h-5' />

        <span className='mx-4 font-medium'>Profile</span>
        </NavLink>
        <button
        onClick={logOut}
        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
        >
        <GrLogout className='w-5 h-5' />

        <span className='mx-4 font-medium'>Logout</span>
        </button>
        </div>
        </div>
        </>
        )
        }

        export default Sidebar




###### 3 components(Statistics,add-room,my-listings)
#####  pages/Dashboard/Common/Statistics/Statistics.jsx
          const Statistics = () => {
              return (
                <div>
                      <h2>Statistics</h2>
                </div>
              );
            };

          export default Statistics;

#####  pages/Dashboard/Guest/AddRoom/AddRoom.jsx
        

        const AddRoom = () => {
          return (
            <div>
              <h2>ADD ROOM Pages</h2>
            </div>
          );
        };

        export default AddRoom;
#####  pages/Dashboard/Guest/MyListing/MyListing.jsx

      

          const MyListing = () => {
            return (
              <div>
                <h2>My listing</h2>
              </div>
            );
          };

          export default MyListing;



###### routes/Routes.jsx  (Statistics,add-room,my-listings)
      import { createBrowserRouter } from 'react-router-dom'
      import DashboardLayout from '../layouts/DashboardLayout'
      import Statistics from '../pages/Dashboard/Common/Statistics/Statistics'
      import AddRoom from '../pages/Dashboard/Guest/AddRoom/AddRoom'
      import MyListing from '../pages/Dashboard/Guest/MyListing/MyListing'

      export const router = createBrowserRouter([
       
        {
          path: '/dashboard',
          element: <DashboardLayout />,
          children:[
            {
              index:true,
              element:<Statistics></Statistics>
            },

            {
              path: 'add-room',
              element: <AddRoom></AddRoom>,
            },

            {
              path: 'my-listings',
              element: <MyListing></MyListing>,
            },
          ]
          
        },



        
      ])

############ AddRoom two step

########  1.../../../../components/Form/AddRoomForm.jsx

          import { categories } from '../Categories/CategoriesData'
          import { DateRange } from 'react-date-range'
          import { TbFidgetSpinner } from 'react-icons/tb'
          const AddRoomForm = ({
          dates,
          handleDates,
          handleSubmit,
          setImagePreview,
          imagePreview,
          imageText,
          handleImage,
          loading,
          }) => {
          return (
          <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
          <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
          <div className='space-y-1 text-sm'>
          <label htmlFor='location' className='block text-gray-600'>
          Location
          </label>
          <input
          className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
          name='location'
          id='location'
          type='text'
          placeholder='Location'
          required
          />
          </div>

          <div className='space-y-1 text-sm'>
          <label htmlFor='category' className='block text-gray-600'>
          Category
          </label>
          <select
          required
          className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
          name='category'
          >
          {categories.map(category => (
          <option value={category.label} key={category.label}>
          {category.label}
          </option>
          ))}
          </select>
          </div>

          <div className='space-y-1'>
          <label htmlFor='location' className='block text-gray-600'>
          Select Availability Range
          </label>
          {/* Calender */}
          <DateRange
          rangeColors={['#F43F5E']}
          editableDateInputs={true}
          onChange={item => handleDates(item)}
          moveRangeOnFirstSelection={false}
          ranges={[dates]}
          />
          </div>
          </div>
          <div className='space-y-6'>
          <div className='space-y-1 text-sm'>
          <label htmlFor='title' className='block text-gray-600'>
          Title
          </label>
          <input
          className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
          name='title'
          id='title'
          type='text'
          placeholder='Title'
          required
          />
          </div>

          <div className=' p-4 bg-white w-full  m-auto rounded-lg flex justify-between items-center'>
          <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
          <div className='flex flex-col w-max mx-auto text-center'>
          <label>
          <input
          className='text-sm cursor-pointer w-36 hidden'
          type='file'
          onChange={e => handleImage(e.target.files[0])}
          name='image'
          id='image'
          accept='image/*'
          hidden
          />
          <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
          {/* {imageText} */}
          {imageText.length > 20
          ? imageText.split('.')[0].slice(0, 15) +
          '....' +
          imageText.split('.')[1]
          : imageText}
          </div>
          </label>
          </div>
          </div>
          <div className='h-16 w-16 object-cover overflow-hidden flex items-center'>
          {imagePreview && <img src={imagePreview} />}
          </div>
          </div>
          <div className='flex justify-between gap-2'>
          <div className='space-y-1 text-sm'>
          <label htmlFor='price' className='block text-gray-600'>
          Price
          </label>
          <input
          className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
          name='price'
          id='price'
          type='number'
          placeholder='Price'
          required
          />
          </div>

          <div className='space-y-1 text-sm'>
          <label htmlFor='guest' className='block text-gray-600'>
          Total guest
          </label>
          <input
          className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
          name='total_guest'
          id='guest'
          type='number'
          placeholder='Total guest'
          required
          />
          </div>
          </div>

          <div className='flex justify-between gap-2'>
          <div className='space-y-1 text-sm'>
          <label htmlFor='bedrooms' className='block text-gray-600'>
          Bedrooms
          </label>
          <input
          className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
          name='bedrooms'
          id='bedrooms'
          type='number'
          placeholder='Bedrooms'
          required
          />
          </div>

          <div className='space-y-1 text-sm'>
          <label htmlFor='bathrooms' className='block text-gray-600'>
          Bathrooms
          </label>
          <input
          className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
          name='bathrooms'
          id='bathrooms'
          type='number'
          placeholder='Bathrooms'
          required
          />
          </div>
          </div>

          <div className='space-y-1 text-sm'>
          <label htmlFor='description' className='block text-gray-600'>
          Description
          </label>

          <textarea
          id='description'
          className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
          name='description'
          ></textarea>
          </div>
          </div>
          </div>

          <button
          disabled={loading}
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
          >
          {loading ? (
          <TbFidgetSpinner className='animate-spin m-auto' />
          ) : (
          ' Save & Continue'
          )}
          </button>
          </form>
          </div>
          )
          }

          export default AddRoomForm


########  2.pages/Dashboard/Guest/AddRoom/AddRoom.jsx
          
            import { useState } from 'react'
            import AddRoomForm from '../../../../components/Form/AddRoomForm'
            // import useAuth from '../../../hooks/useAuth'
            // import { imageUpload } from '../../../api/utils'
            import { Helmet } from 'react-helmet-async'
            import { useMutation } from '@tanstack/react-query'
            // import useAxiosSecure from '../../../hooks/useAxiosSecure'
            import toast from 'react-hot-toast'
            import { useNavigate } from 'react-router-dom'
            import useAuth from '../../../../hooks/useAuth'


            const AddRoom = () => {
              const navigate = useNavigate()
              // const axiosSecure = useAxiosSecure()
              const [loading, setLoading] = useState(false)
              const { user } = useAuth()
              const [imagePreview, setImagePreview] = useState()
              const [imageText, setImageText] = useState('Upload Image')
              const [dates, setDates] = useState({
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection',
              })

              //Date range handler
              const handleDates = item => {
                setDates(item.selection)
              }

              // const { mutateAsync } = useMutation({
              //   mutationFn: async roomData => {
              //     const { data } = await axiosSecure.post(`/room`, roomData)
              //     return data
              //   },
              //   onSuccess: () => {
              //     console.log('Data Saved Successfully')
              //     toast.success('Room Added Successfully!')
              //     navigate('/dashboard/my-listings')
              //     setLoading(false)
              //   },
              // })

              //   Form handler
              const handleSubmit = async e => {
                e.preventDefault()
                setLoading(true)
                const form = e.target
                const location = form.location.value
                const category = form.category.value
                const title = form.title.value
                const to = dates.endDate
                const from = dates.startDate
                const price = form.price.value
                const guests = form.total_guest.value
                const bathrooms = form.bathrooms.value
                const description = form.description.value
                const bedrooms = form.bedrooms.value
                const image = form.image.files[0]

                const host = {
                  name: user?.displayName,
                  image: user?.photoURL,
                  email: user?.email,
                }

                try {
                  const image_url = await imageUpload(image)
                  const roomData = {
                    location,
                    category,
                    title,
                    to,
                    from,
                    price,
                    guests,
                    bathrooms,
                    bedrooms,
                    host,
                    description,
                    image: image_url,
                  }
                  console.table(roomData)

                  //   Post request to server
                  await mutateAsync(roomData)
                } catch (err) {
                  console.log(err)
                  toast.error(err.message)
                  setLoading(false)
                }
              }

              //   handle image change
              const handleImage = image => {
                setImagePreview(URL.createObjectURL(image))
                setImageText(image.name)
              }


              return (


                <>
                  <Helmet>
                    <title>Add Room | Dashboard</title>
                  </Helmet>

                  {/* Form */}
                  <AddRoomForm
                    dates={dates}
                    handleDates={handleDates}
                    handleSubmit={handleSubmit}
                    setImagePreview={setImagePreview}
                    imagePreview={imagePreview}
                    handleImage={handleImage}
                    imageText={imageText}
                    loading={loading}
                  />
                </>
              );
            };

            export default AddRoom;
