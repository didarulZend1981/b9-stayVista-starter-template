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

#####  server/index.js-------
      // get all rooms for host
      app.get('/my-listings/:email', async (req, res) => {
            const email = req.params.email

            let query = { 'host.email': email }
            const result = await roomsCollection.find(query).toArray()
            res.send(result)
      })

#####  pages/Dashboard/Guest/MyListing/MyListing.jsx-------
        import { Helmet } from 'react-helmet-async'
        import useAxiosSecure from '../../../../hooks/useAxiosSecure'
        import { useQuery } from '@tanstack/react-query';
        import useAuth from '../../../../hooks/useAuth';
        import RoomDataRow from '../../../../components/Dashboard/TableRows/RoomDataRow';
        import LoadingSpinner from '../../../../components/Shared/LoadingSpinner';
        const MyListing = () => {
          const { user } = useAuth()
          const axiosSecure = useAxiosSecure();
          const {data: rooms = [], isLoading, refetch,} = useQuery({
            queryKey: ['my-listings', user?.email],
            queryFn: async () => {
              const { data } = await axiosSecure.get(`/my-listings/${user?.email}`)

              return data
            },

          


          })
          
          if (isLoading) return <LoadingSpinner />
          return (
            <>
            <Helmet>
              <title>My Listings</title>
            </Helmet>

            <div className='container mx-auto px-4 sm:px-8'>
              <div className='py-8'>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                  <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                    <table className='min-w-full leading-normal'>
                      <thead>
                        <tr>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                          >
                            Title
                          </th>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                          >
                            Location
                          </th>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                          >
                            Price
                          </th>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                          >
                            From
                          </th>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                          >
                            To
                          </th>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                          >
                            Delete
                          </th>
                          <th
                            scope='col'
                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                          >
                            Update
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {rooms.map(room => (
                            <RoomDataRow
                              key={room._id}
                              room={room}
                            
                            />
                          ))}
                          
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
          );
        };

        export default MyListing;

###### components/Dashboard/TableRows/RoomDataRow.jsx

          import PropTypes from 'prop-types'
          import { format } from 'date-fns'
          import { useState } from 'react'
          import {
            Description,
            Dialog,
            DialogPanel,
            DialogTitle,
          } from '@headlessui/react'

          const RoomDataRow = ({ room }) => {
            // for delete modal
            let [isOpen, setIsOpen] = useState(false)
            const closeModal = () => {
              setIsOpen(false)
            }

            // for update modal
            return (
              <tr>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <div className='block relative'>
                        <img
                          alt='profile'
                          src={room?.image}
                          className='mx-auto object-cover rounded h-10 w-15 '
                        />
                      </div>
                    </div>
                    <div className='ml-3'>
                      <p className='text-gray-900 whitespace-no-wrap'>{room?.title}</p>
                    </div>
                  </div>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                  <p className='text-gray-900 whitespace-no-wrap'>{room?.location}</p>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                  <p className='text-gray-900 whitespace-no-wrap'>${room?.price}</p>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                  <p className='text-gray-900 whitespace-no-wrap'>
                    {format(new Date(room?.from), 'P')}
                  </p>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                  <p className='text-gray-900 whitespace-no-wrap'>
                    {format(new Date(room?.to), 'P')}
                  </p>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                  <button
                    onClick={() => setIsOpen(true)}
                    className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                  >
                    <span
                      aria-hidden='true'
                      className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Delete</span>
                  </button>
                  {/* Delete modal */}
                
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                  <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                      aria-hidden='true'
                      className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Update</span>
                  </span>
                  {/* Update Modal */}
                </td>
              </tr>
            )
          }

          RoomDataRow.propTypes = {
            room: PropTypes.object,
            refetch: PropTypes.func,
          }

          export default RoomDataRow



######## useRole

##### server->index.js


         // get a user info by email from db
          app.get('/user/:email', async (req, res) => {
            const email = req.params.email
            const result = await usersCollection.findOne({ email })
            res.send(result)
          })



##### client->hooks/useRole.js

      import useAuth from './useAuth'
      import useAxiosSecure from './useAxiosSecure'
      import { useQuery } from '@tanstack/react-query'


      const useRole = () => {
            const { user, loading } = useAuth()
            const axiosSecure = useAxiosSecure()

            const { data: role = '', isLoading } = useQuery({
              queryKey: ['role', user?.email],
              enabled: !loading && !!user?.email,
              queryFn: async () => {
                const { data } = await axiosSecure(`/user/${user?.email}`)
                return data.role
              },
            })

            //   Fetch user info using logged in user email

            return [role, isLoading]
      }

            export default useRole




####### components/Dashboard/Sidebar/Sidebar.jsx ---


        import useRole from '../../../hooks/useRole'

        const Sidebar = () => {

              const [role, isLoading] = useRole()
              console.log(role, isLoading);


              return (
                <>
                  
                </>
              )
        }

        export default Sidebar

###### Custom Menu Item



##### Menu/MenuItem.jsx


        import PropTypes from 'prop-types'
        import { NavLink } from 'react-router-dom'

        const MenuItem = ({ label, address, icon: Icon }) => {
          return (
            <NavLink
              to={address}
              end
              className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                  isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                }`
              }
            >
              <Icon className='w-5 h-5' />

              <span className='mx-4 font-medium'>{label}</span>
            </NavLink>
          )
        }
        MenuItem.propTypes = {
          label: PropTypes.string,
          address: PropTypes.string,
          icon: PropTypes.elementType,
        }

        export default MenuItem


###### Dashboard/Sidebar/Sidebar.jsx


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
      import useRole from '../../../hooks/useRole'
      import MenuItem from './Menu/MenuItem'

      const Sidebar = () => {
      const { logOut } = useAuth()
      const [isActive, setActive] = useState(false)
      const [role, isLoading] = useRole()
      console.log(role, isLoading);

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
                <MenuItem
                  label='Statistics'
                  address='/dashboard'
                  icon={BsGraphUp}
                />
                

                {/* Add Room */}

                <MenuItem
                  label='Add Room'
                  address='add-room'
                  icon={BsFillHouseAddFill}
                />
                
                {/* My Listing */}
                <MenuItem
                  label='My Listings'
                  address='my-listings'
                  icon={MdHomeWork}
                />
                
              </nav>
            </div>
          </div>

          <div>
            <hr />

            {/* Profile Menu */}

            <MenuItem
                  label='Profile'
                  address='profile'
                  icon={FcSettings}
                />
            
            
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



##### pages/Dashboard/Common/Profile/Profile.jsx


        import { Helmet } from 'react-helmet-async'


        import useAuth from '../../../../hooks/useAuth'
        import useRole from '../../../../hooks/useRole'
        import LoadingSpinner from '../../../../components/Shared/LoadingSpinner'

        const Profile = () => {
          const { user, loading } = useAuth() || {}
          const [role, isLoading] = useRole()

          console.log(user)
          if (isLoading || loading) return <LoadingSpinner />
          return (
            <div className='flex justify-center items-center h-screen'>
              <Helmet>
                <title>Profile</title>
              </Helmet>
              <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                <img
                  alt='profile'
                  src='https://wallpapercave.com/wp/wp10784415.jpg'
                  className='w-full mb-4 rounded-t-lg h-36'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                  <a href='#' className='relative block'>
                    <img
                      alt='profile'
                      src={user?.photoURL}
                      className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                    />
                  </a>

                  <p className='p-2 uppercase px-4 text-xs text-white bg-pink-500 rounded-full'>
                    {role}
                  </p>
                  <p className='mt-2 text-xl font-medium text-gray-800 '>
                    User Id: {user?.uid}
                  </p>
                  <div className='w-full p-2 mt-4 rounded-lg'>
                    <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                      <p className='flex flex-col'>
                        Name
                        <span className='font-bold text-black '>
                          {user?.displayName}
                        </span>
                      </p>
                      <p className='flex flex-col'>
                        Email
                        <span className='font-bold text-black '>{user?.email}</span>
                      </p>

                      <div>
                        <button className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                          Update Profile
                        </button>
                        <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                          Change Password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        export default Profile




             
####### Custom Menu (MenuItem,GuestMenu,HostMenu,AdminMenu)

#### Menu/MenuItem


      import PropTypes from 'prop-types'
      import { NavLink } from 'react-router-dom'

      const MenuItem = ({ label, address, icon: Icon }) => {
          return (
              <NavLink
                  to={address}
                  end
                  className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                  isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                  }
                  >
                  <Icon className='w-5 h-5' />

                  <span className='mx-4 font-medium'>{label}</span>
              </NavLink>
          )
      }
      MenuItem.propTypes = {
          label: PropTypes.string,
          address: PropTypes.string,
          icon: PropTypes.elementType,
      }

      export default MenuItem
#### Menu/HostMenu/HostMenu.jsx


      import { BsFillHouseAddFill } from 'react-icons/bs'
      import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
      import MenuItem from '../MenuItem'
      const HostMenu = () => {
        return (
          <>
            <MenuItem icon={BsFillHouseAddFill} label='Add Room' address='add-room' />
            <MenuItem icon={MdHomeWork} label='My Listings' address='my-listings' />
            <MenuItem
              icon={MdOutlineManageHistory}
              label='Manage Bookings'
              address='manage-bookings'
            />
          </>
        )
      }

export default HostMenu

#### Menu/AdminMenu.jsx/AdminMenu.jsx

        import { FaUserCog } from 'react-icons/fa'
        import MenuItem from '../MenuItem'

        const AdminMenu = () => {
          return (
            <>
              <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
            </>
          )
        }

        export default AdminMenu
#### Menu/GuestMenu/GuestMenu.jsx

        import { BsFingerprint } from 'react-icons/bs'
        import { GrUserAdmin } from 'react-icons/gr'
        import { useState } from 'react'
        import MenuItem from '../MenuItem.jsx'
        import useRole from '../../../../../hooks/useRole.js'
        import HostModal from '../../../../Modal/HostRequestModal.jsx'
        import useAxiosSecure from '../../../../../hooks/useAxiosSecure.jsx'
        import toast from 'react-hot-toast'
        import useAuth from '../../../../../hooks/useAuth.js'
        const GuestMenu = () => {
          const axiosSecure = useAxiosSecure()
          const { user } = useAuth()
          const [role] = useRole()
          // for modal
          const [isModalOpen, setIsModalOpen] = useState(false)
          const closeModal = () => {
            setIsModalOpen(false)
          }
          const modalHandler = async () => {
            console.log('I want to be a host')
            try {
              const currentUser = {
                email: user?.email,
                role: 'guest',
                status: 'Requested',
              }
              const { data } = await axiosSecure.put(`/user`, currentUser)
              console.log(data)
              if (data.modifiedCount > 0) {
                toast.success('Success! Please wait for admin confirmation')
              } else {
                toast.success('Please!, Wait for admin approval👊')
              }
            } catch (err) {
              console.log(err)
              toast.error(err.message)
            } finally {
              closeModal()
            }
          }
          return (
            <>
              <MenuItem
                icon={BsFingerprint}
                label='My Bookings'
                address='my-bookings'
              />

              {role === 'guest' && (
                <div
                  onClick={() => setIsModalOpen(true)}
                  className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
                >
                  <GrUserAdmin className='w-5 h-5' />

                  <span className='mx-4 font-medium'>Become A Host</span>
                </div>
              )}
              {/* Modal */}
              <HostModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                modalHandler={modalHandler}
              />
            </>
          )
        }

        export default GuestMenu


#### components/Dashboard/Sidebar/Sidebar.jsx



        import MenuItem from './Menu/MenuItem'
        import HostMenu from './Menu/HostMenu/HostMenu'
        import AdminMenu from './Menu/AdminMenu/AdminMenu'
        import GuestMenu from './Menu/GuestMenu/GuestMenu'

        const Sidebar = () => {
          const { logOut } = useAuth()

          return (
            <>
              

            
              <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
                  isActive && '-translate-x-full'
                }  md:translate-x-0  transition duration-200 ease-in-out`}
              >
                

                  {/* Nav Items */}
                  <div className='flex flex-col justify-between flex-1 mt-6'>
                    
                    <nav>
                      {/* Statistics */}
                      <MenuItem
                        label='Statistics'
                        address='/dashboard'
                        icon={BsGraphUp}
                      />
                      

                      {/* Add Room */}
                      {role === 'guest' && <GuestMenu/>}
                      {role === 'host' && <HostMenu/>}
                      {role === 'admin' && <AdminMenu/>}

                    
                      
                    </nav>
                  </div>
                </div>

                <div>
                  <hr />

                
                  <MenuItem
                        label='Profile'
                        address='profile'
                        icon={FcSettings}
                      />
                  
                  
                
                </div>
              </div>
            </>
          )
        }

        export default Sidebar



###### Manege user

#### routes/Routes.jsx

      import { createBrowserRouter } from 'react-router-dom'

      import DashboardLayout from '../layouts/DashboardLayout'

      import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'

      export const router = createBrowserRouter([
        
        
        {
          path: '/dashboard',
          element: <DashboardLayout />,
          children:[
            
            {
              path: 'manage-users',
              element: <ManageUsers />,
            },
            

          ]
          
        },



        
      ])

##### Dashboard>sidebar>sidebar.jsx এর ভিতরের ফাইলে {role === 'admin' && <AdminMenu/>} 

      AdminMenu.jsx ফাইলের =>address='manage-users'(route)
  


######## /pages/Dashboard/Admin/ManageUsers

        import { Helmet } from 'react-helmet-async'

        import { useQuery } from '@tanstack/react-query'

        import LoadingSpinner from '../../../components/Shared/LoadingSpinner'

        import UserDataRow from '../../../components/Dashboard/TableRows/UserDataRow'
        import useAxiosSecure from '../../../hooks/useAxiosSecure'
        const ManageUsers = () => {
          const axiosSecure = useAxiosSecure()
          //   Fetch users Data
          const {
            data: users = [],
            isLoading,
            refetch,
          } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
              const { data } = await axiosSecure(`/users`)
              return data
            },
          })

          console.log("check manager user",users)
          if (isLoading) return <LoadingSpinner />
          return (
            <>
              <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                  <title>Manage Users</title>
                </Helmet>
                <div className='py-8'>
                  <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                      <table className='min-w-full leading-normal'>
                        <thead>
                          <tr>
                            <th
                              scope='col'
                              className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                            >
                              Email
                            </th>
                            <th
                              scope='col'
                              className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                            >
                              Role
                            </th>
                            <th
                              scope='col'
                              className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                            >
                              Status
                            </th>

                            <th
                              scope='col'
                              className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map(user => (
                            <UserDataRow
                              key={user?._id}
                              user={user}
                              refetch={refetch}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }

        export default ManageUsers


######## components/Dashboard/TableRows/UserDataRow

          import PropTypes from 'prop-types'
          import { useState } from 'react'

          import { useMutation } from '@tanstack/react-query'

          import toast from 'react-hot-toast'
          import useAuth from '../../../hooks/useAuth'
          import useAxiosSecure from '../../../hooks/useAxiosSecure'
          import UpdateUserModal from '../../Modal/UpdateUserModal'

          const UserDataRow = ({ user, refetch }) => {
          const { user: loggedInUser } = useAuth()

          const [isOpen, setIsOpen] = useState(false)
          const axiosSecure = useAxiosSecure()
          const { mutateAsync } = useMutation({
          mutationFn: async role => {
          const { data } = await axiosSecure.patch(
          `/users/update/${user?.email}`,
          role
          )
          return data
          },
          onSuccess: data => {
          refetch()
          console.log(data)
          toast.success('User role updated successfully!')
          setIsOpen(false)
          },
          })

          //   modal handler
          const modalHandler = async selected => {
          console.log('user role update',selected)
          if (loggedInUser.email === user.email) {
          toast.error('Action Not Allowed')
          return setIsOpen(false)
          }

          const userRole = {
          role: selected,
          status: 'Verified',
          }

          try {
          await mutateAsync(userRole)
          } catch (err) {
          console.log(err)
          toast.error(err.message)
          }
          }
          return (
          <tr>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
          </td>
          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          {user?.status ? (
          <p
            className={`${
              user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
          ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
          )}
          </td>

          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <button
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
          >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update Role</span>
          </button>
          {/* Update User Modal */}
          <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalHandler={modalHandler}
          user={user}
          />
          </td>
          </tr>
          )
          }

          UserDataRow.propTypes = {
          user: PropTypes.object,
          refetch: PropTypes.func,
          }

          export default UserDataRow


######## Modal/UpdateUserModal


            import PropTypes from 'prop-types'
            import { Fragment, useState } from 'react'
            import {
              Dialog,
              Listbox,
              Transition,
              TransitionChild,
              DialogTitle,
              DialogPanel,
              ListboxButton,
              ListboxOption,
              ListboxOptions,
            } from '@headlessui/react'
            import { BsCheckLg } from 'react-icons/bs'
            import { AiOutlineDown } from 'react-icons/ai'
            const roles = ['guest', 'host', 'admin']

            const UpdateUserModal = ({ setIsOpen, isOpen, modalHandler, user }) => {
              const [selected, setSelected] = useState(user.role)
              return (
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as='div'
                    className='relative z-10'
                    onClose={() => setIsOpen(false)}
                  >
                    <TransitionChild
                      as={Fragment}
                      enter='ease-out duration-300'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='ease-in duration-200'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </TransitionChild>

                    <div className='fixed inset-0 overflow-y-auto'>
                      <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                          as={Fragment}
                          enter='ease-out duration-300'
                          enterFrom='opacity-0 scale-95'
                          enterTo='opacity-100 scale-100'
                          leave='ease-in duration-200'
                          leaveFrom='opacity-100 scale-100'
                          leaveTo='opacity-0 scale-95'
                        >
                          <DialogPanel className='w-full h-56 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                            <DialogTitle
                              as='h3'
                              className='text-lg font-medium text-center leading-6 text-gray-900'
                            >
                              Update User Role
                            </DialogTitle>
                            <div className='mt-4 w-full'>
                              <Listbox value={selected} onChange={setSelected}>
                                <div className='relative mt-1'>
                                  <ListboxButton className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                                    <span className='block truncate'>{selected}</span>
                                    <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                                      <AiOutlineDown
                                        className='h-5 w-5 text-gray-400'
                                        aria-hidden='true'
                                      />
                                    </span>
                                  </ListboxButton>
                                  <Transition
                                    as={Fragment}
                                    leave='transition ease-in duration-100'
                                    leaveFrom='opacity-100'
                                    leaveTo='opacity-0'
                                  >
                                    <ListboxOptions className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                                      {roles.map((role, roleIdx) => (
                                        <ListboxOption
                                          key={roleIdx}
                                          className='relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 data-[focus]:bg-amber-100  data-[focus]:text-amber-900'
                                          value={role}
                                        >
                                          {({ selected }) => (
                                            <>
                                              <span
                                                className={`block truncate ${
                                                  selected ? 'font-medium' : 'font-normal'
                                                }`}
                                              >
                                                {role}
                                              </span>
                                              {selected ? (
                                                <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                                                  <BsCheckLg
                                                    className='h-5 w-5'
                                                    aria-hidden='true'
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </ListboxOption>
                                      ))}
                                    </ListboxOptions>
                                  </Transition>
                                </div>
                              </Listbox>
                            </div>
                            <hr className='mt-16 ' />

                            <div className='flex mt-2 justify-center gap-5'>
                              <button
                                type='button'
                                className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                                onClick={() => modalHandler(selected)}
                              >
                                Update
                              </button>
                              <button
                                type='button'
                                className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                onClick={() => setIsOpen(false)}
                              >
                                Cancel
                              </button>
                            </div>
                          </DialogPanel>
                        </TransitionChild>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              )
            }

            UpdateUserModal.propTypes = {
              user: PropTypes.object,
              modalHandler: PropTypes.func,
              setIsOpen: PropTypes.func,
              isOpen: PropTypes.bool,
            }

            export default UpdateUserModal



######## server index.js

               //update a user role
                app.patch('/users/update/:email', async (req, res) => {
                  const email = req.params.email
                  const user = req.body
                  const query = { email }
                  const updateDoc = {
                    $set: { ...user, timestamp: Date.now() },
                  }
                  const result = await usersCollection.updateOne(query, updateDoc)
                  res.send(result)
                })
      
      















       

