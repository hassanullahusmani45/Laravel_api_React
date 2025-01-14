import { AcademicCapIcon, ChevronLeftIcon, ChevronRightIcon, CircleStackIcon, ClipboardDocumentListIcon, EnvelopeIcon, GlobeEuropeAfricaIcon, InboxStackIcon, MagnifyingGlassIcon, PhoneIcon, ShieldCheckIcon, Square3Stack3DIcon, TrophyIcon, TvIcon, UsersIcon } from '@heroicons/react/24/outline';
import Layout from '../../Layout/Layout';
import LandingCounter from '../../components/LandingCounter';
import profile from '../../assets/images/profile.jpg'
import hassanProfile from '../../assets/images/hassan.JPG'
import nasibjanProfile from '../../assets/images/nasibjan.jpg'
import mohmmadProfile from '../../assets/images/mohmmad.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import { Link } from 'react-router-dom';
import { BoltIcon, SparklesIcon } from '@heroicons/react/24/solid';
import Post from '../../components/Post';
import post1 from "../../assets/images/post1.webp"
import post2 from "../../assets/images/post2.jpg"
import post3 from "../../assets/images/post3.jpg"
import { useRef } from 'react';

export default function Index() {

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <Layout>
      <div>

        {/*start heading part  */}
        <div className='flex flex-col justify-center items-center h-[80vh] pt-32'>

          <div className='text-3xl font-bold font-serif'>Tekup The Best Place For Lernig Articles</div>

          <div className="relative bg-slate-800 rounded-full overflow-hidden mb-20 mt-14 w-4/6">
            <input type="text" placeholder="Search posts here..."
              className="block border-none outline-none bg-slate-800 w-full py-5 ps-8 pe-10 text-base  placeholder:text-slate-300 placeholder:text-sm"
              required autoComplete='off' />
            <button type="submit"
              className="absolute end-3 bottom-2 bg-teal-700 hover:bg-teal-900 font-medium rounded-full text-sm p-3">
              <MagnifyingGlassIcon className='size-6' />
            </button>
          </div>


          <div className='grid grid-cols-3 w-1/2'>
            <div className=' col-span-1 flex flex-col justify-center items-center'>
              <UsersIcon className='size-14 mb-3' />
              <LandingCounter count={12} />
              <div className=' text-base'>Team Mammbers</div>
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center'>
              <ClipboardDocumentListIcon className='size-14 mb-3' />
              <LandingCounter count={103} />
              <div className=' text-base'>Total Posts</div>
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center'>
              <AcademicCapIcon className='size-14 mb-3' />
              <LandingCounter count={1_403} />
              <div className=' text-base'>Users</div>
            </div>
          </div>

        </div>
        {/* end heading part  */}

        <main className='w-[95%] mx-auto'>

          {/* start SwiperJs part  */}
          <div className='mt-28 text-start font-semibold text-xl text-teal-500'><SparklesIcon className='inline size-8 me-2 text-green-500' /> Our Experienced Team</div>
          <div className='w-1/4 mt-2 border-t-2 border-dotted border-teal-300 '></div>

          <div className='py-8'>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={40}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='transition-all'>
                  <div className='flex justify-center items-center bg-slate-800/90 pt-6 px-4 rounded-2xl shadow-3xl'>
                    <div className='text-center'>

                      <Link to={"/posts"} className='inline-block'>
                        <img src={hassanProfile} alt='abute' className='w-40 h-40 rounded-full border p-1.5 mx-auto' />
                      </Link>
                      <div className='flex justify-center items-center gap-4 mt-4'>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <EnvelopeIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <PhoneIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <GlobeEuropeAfricaIcon className="size-6" />
                        </Link>
                      </div>

                      <div className='bg-slate-700 text-base px-4 py-2 mt-4 rounded-full space-y-4 hover:rounded-xl transition-all'>
                        <Link to={"/posts"} className='text-white font-medium text-base'>Hassanullah Usmani</Link>
                        <div className='text-slate-200 text-sm'>LRTM full-stack developer</div>
                      </div>

                      <div className='text-slate-200 justify-center text-sm leading-6 h-40 mt-6 line-clamp-6'>
                        Hassanullah Usmani is a skilled LRTM full-stack developer with expertise in creating robust and dynamic web applications. He combines technical proficiency with innovative problem-solving to deliver high-quality solutions.
                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='transition-all'>
                  <div className='flex justify-center items-center bg-slate-800/90 pt-6 px-4 rounded-2xl shadow-3xl'>
                    <div className='text-center'>

                      <Link to={"/posts"} className='inline-block'>
                        <img src={nasibjanProfile} alt='abute' className='w-40 h-40 rounded-full border p-1.5 mx-auto' />
                      </Link>
                      <div className='flex justify-center items-center gap-4 mt-4'>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <EnvelopeIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <PhoneIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <GlobeEuropeAfricaIcon className="size-6" />
                        </Link>
                      </div>

                      <div className='bg-slate-700 text-base px-4 py-2 mt-4 rounded-full space-y-4 hover:rounded-xl transition-all'>
                        <Link to={"/posts"} className='text-white font-medium text-base'>Nasibullah Niazi</Link>
                        <div className='text-slate-200 text-sm'>Backend developer</div>
                      </div>

                      <div className='text-slate-200 justify-center text-sm leading-6 h-40 mt-6 line-clamp-6'>
                        Nasibullah Niazi is a proficient backend developer with expertise in building and maintaining efficient server-side systems, focusing on database management, API development, and optimizing application performance.
                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='transition-all'>
                  <div className='flex justify-center items-center bg-slate-800/90 pt-6 px-4 rounded-2xl shadow-3xl'>
                    <div className='text-center'>

                      <Link to={"/posts"} className='inline-block'>
                        <img src={profile} alt='abute' className='w-40 h-40 rounded-full border p-1.5 mx-auto' />
                      </Link>
                      <div className='flex justify-center items-center gap-4 mt-4'>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <EnvelopeIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <PhoneIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <GlobeEuropeAfricaIcon className="size-6" />
                        </Link>
                      </div>

                      <div className='bg-slate-700 text-base px-4 py-2 mt-4 rounded-full space-y-4 hover:rounded-xl transition-all'>
                        <Link to={"/posts"} className='text-white font-medium text-base'>Ahmadullah Saber</Link>
                        <div className='text-slate-200 text-sm'>Frontend developer</div>
                      </div>

                      <div className='text-slate-200 justify-center text-sm leading-6 h-40 mt-6 line-clamp-6'>
                        Ahmadullah Saber is a talented frontend developer specializing in creating user-friendly, visually appealing, and responsive web interfaces.
                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='transition-all'>
                  <div className='flex justify-center items-center bg-slate-800/90 pt-6 px-4 rounded-2xl shadow-3xl'>
                    <div className='text-center'>

                      <Link to={"/posts"} className='inline-block'>
                        <img src={mohmmadProfile} alt='abute' className='w-40 h-40 rounded-full border p-1.5 mx-auto' />
                      </Link>
                      <div className='flex justify-center items-center gap-4 mt-4'>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <EnvelopeIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <PhoneIcon className="size-5" />
                        </Link>
                        <Link to={"/"} className="hover:translate-y-[-5px] hover:text-green-500 transition-transform duration-500">
                          <GlobeEuropeAfricaIcon className="size-6" />
                        </Link>
                      </div>

                      <div className='bg-slate-700 text-base px-4 py-2 mt-4 rounded-full space-y-4 hover:rounded-xl transition-all'>
                        <Link to={"/posts"} className='text-white font-medium text-base'>Mohmmadajan Mohmmady</Link>
                        <div className='text-slate-200 text-sm'>IT manager</div>
                      </div>
                      <div className='text-slate-200 justify-center text-sm leading-6 h-40 mt-6'>Mohmmady is an accomplished IT Manager known for his expertise in overseeing and optimizing IT operations, ensuring seamless technology integration and innovation within organizations.</div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
          {/* end SwiperJs part  */}




          
          {/* start all posts */}
          <div className='mt-28 text-start font-semibold text-xl text-fuchsia-500'><InboxStackIcon className='inline size-8 me-2 text-violet-500' />All posts</div>
          <div className='w-1/4 mt-2 border-t-2 border-dotted border-fuchsia-300 '></div>

          <div className='grid grid-cols-4 gap-4 my-10'>

            <div className='col-span-1'>
              <Post
                src={post1}
                author="Nasibullah Nizai"
                date="1403-9-21"
                link="/"
                title='What is TailwindCSS framwork?'
                desc='TailwindCSS is a utility-first CSS framework that provides pre-defined classes for fast and customizable styling directly in your HTML. It simplifies responsive design and speeds up development without writing custom CSS.'
              />
            </div>

            <div className='col-span-1'>
              <Post
                src={post2}
                author="Hassanullah Najimi"
                date="1403-9-23"
                link="/"
                title='The best programming languages in 2025.'
                desc='Python and JavaScript continue to lead in 2025 due to their versatility, ease of use, and applications in AI, web development, and data science.'
              />
            </div>

            <div className='col-span-1'>
              <Post
                src={post3}
                author="Ahmadullah Sabir"
                date="1403-10-3"
                link="/"
                title='Why is Python the favorite programming language of hackers?'
                desc='Python is a favorite among hackers due to its simplicity, versatility, and extensive library support. It enables quick development of scripts and tools for tasks like web scraping, network scanning, and password cracking. Libraries like Scapy, Socket, and PyCrypto make it ideal for penetration testing and cybersecurity.'
              />
            </div>

            <div className='col-span-1'>
              <Post
                src={post2}
                author="Hassanullah Najimi"
                date="1403-9-23"
                link="/"
                title='The best programming languages in 2025.'
                desc='Python and JavaScript continue to lead in 2025 due to their versatility, ease of use, and applications in AI, web development, and data science.'
              />
            </div>


            <div className='col-span-1'>
              <Post
                src={post3}
                author="Hassanullah Usmani"
                date="1403-10-3"
                link="/"
                title='Why is Python the favorite programming language of hackers?'
                desc='Python is a favorite among hackers due to its simplicity, versatility, and extensive library support. It enables quick development of scripts and tools for tasks like web scraping, network scanning, and password cracking. Libraries like Scapy, Socket, and PyCrypto make it ideal for penetration testing and cybersecurity.'
              />
            </div>

            <div className='col-span-1'>
              <Post
                src={post1}
                author="Mohmmadajan Mohmmady"
                date="1403-9-21"
                link="/"
                title='What is TailwindCSS framwork?'
                desc='TailwindCSS is a utility-first CSS framework that provides pre-defined classes for fast and customizable styling directly in your HTML. It simplifies responsive design and speeds up development without writing custom CSS.'
              />
            </div>

            <div className='col-span-1'>
              <Post
                src={post2}
                author="Hassanullah Najimi"
                date="1403-9-23"
                link="/"
                title='The best programming languages in 2025.'
                desc='Python and JavaScript continue to lead in 2025 due to their versatility, ease of use, and applications in AI, web development, and data science.'
              />
            </div>

            <div className='col-span-1'>
              <Post
                src={post3}
                author="Ahmadullah Sabir"
                date="1403-10-3"
                link="/"
                title='Why is Python the favorite programming language of hackers?'
                desc='Python is a favorite among hackers due to its simplicity, versatility, and extensive library support. It enables quick development of scripts and tools for tasks like web scraping, network scanning, and password cracking. Libraries like Scapy, Socket, and PyCrypto make it ideal for penetration testing and cybersecurity.'
              />
            </div>

            <div className='col-span-1'>
              <Post
                src={post2}
                author="Hassanullah Najimi"
                date="1403-9-23"
                link="/"
                title='The best programming languages in 2025.'
                desc='Python and JavaScript continue to lead in 2025 due to their versatility, ease of use, and applications in AI, web development, and data science.'
              />
            </div>

            <div className='col-span-1'>
              <Post
                src={post3}
                author="Ahmadullah Sabir"
                date="1403-10-3"
                link="/"
                title='Why is Python the favorite programming language of hackers?'
                desc='Python is a favorite among hackers due to its simplicity, versatility, and extensive library support. It enables quick development of scripts and tools for tasks like web scraping, network scanning, and password cracking. Libraries like Scapy, Socket, and PyCrypto make it ideal for penetration testing and cybersecurity.'
              />
            </div>

            <div className='col-span-1'>
              <Post
                src={post2}
                author="Hassanullah Najimi"
                date="1403-9-23"
                link="/"
                title='The best programming languages in 2025.'
                desc='Python and JavaScript continue to lead in 2025 due to their versatility, ease of use, and applications in AI, web development, and data science.'
              />
            </div>

            <div className='col-span-1'>
              <Post
                src={post3}
                author="Ahmadullah Sabir"
                date="1403-10-3"
                link="/"
                title='Why is Python the favorite programming language of hackers?'
                desc='Python is a favorite among hackers due to its simplicity, versatility, and extensive library support. It enables quick development of scripts and tools for tasks like web scraping, network scanning, and password cracking. Libraries like Scapy, Socket, and PyCrypto make it ideal for penetration testing and cybersecurity.'
              />
            </div>

          </div>
          {/* end all posts */}




          
        </main>

      </div>
    </Layout>
  )
}

