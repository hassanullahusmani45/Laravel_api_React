import { Link } from 'react-router-dom'
import Layout from '../../Layout/Layout'
import abuteImage from '../../assets/images/1.png'
import profile from '../../assets/images/profile.jpg'
import hassanProfile from '../../assets/images/hassan.JPG'
import nasibjanProfile from '../../assets/images/nasibjan.jpg'
import mohmmadProfile from '../../assets/images/mohmmad.jpg'
import { AcademicCapIcon, ClipboardDocumentListIcon, EnvelopeIcon, GlobeEuropeAfricaIcon, PhoneIcon, UsersIcon } from '@heroicons/react/24/outline'
import LandingCounter from '../../components/LandingCounter'
import TeamMemmberCard from '../../components/TeamMemmberCard'

export default function Abute() {

  return (
    <Layout>
      <>
        <div className='grid grid-cols-2 gap-20'>
          <div className='cols-span-1'>
            <img src={abuteImage} alt='abute' className=' bg-cover w-full' />
          </div>
          <div className='cols-span-1 mt-32'>
            <div className='text-2xl font-medium leading-10'>Tekup The Best<br /> Place For Lernig Articles</div>
            <div className='mt-5 mb-16 pl-6 text-slate-200 leading-7'>
              Tekup is the best place for learning articles, offering insightful and high-quality content to help you stay ahead in technology and beyond. Whether you are a beginner or an expert, our articles are designed to inspire and educate, empowering you to expand your knowledge and skills.
            </div>
            <Link to='/contact-as' className='px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-full'>Contact Us</Link>
          </div>
        </div>

        <div className='mt-28 text-center font-semibold text-xl'>Our Experienced Team</div>
        <div className='w-1/4 mx-auto mt-4 border-t-2 border-dotted border-teal-300 ' ></div>

        <div className='grid grid-cols-4 gap-6 mt-16 pb-16'>




          <div className='cols-span-1 hover:scale-95'>
            <TeamMemmberCard
              profile={hassanProfile}
              email={"/"}
              whatsApp={"/"}
              websit={"/"}
              name='Hassanullah Usmani'
              positionTitle='LRTM full-stack developer'
              quickInfo='Hassanullah Usmani is a skilled LRTM full-stack developer with expertise in creating robust and dynamic web applications. He combines technical proficiency with innovative problem-solving to deliver high-quality solutions.'
            />
          </div>


          <div className='cols-span-1 hover:scale-95'>
            <TeamMemmberCard
              profile={nasibjanProfile}
              email={"/"}
              whatsApp={"/"}
              websit={"/"}
              name='Nasibullah Niazi'
              positionTitle='Backend developer'
              quickInfo='Nasibullah Niazi is a proficient backend developer with expertise in building and maintaining efficient server-side systems, focusing on database management, API development, and optimizing application performance.'
            />
          </div>


          <div className='cols-span-1 hover:scale-95'>
            <TeamMemmberCard
              profile={profile}
              email={"/"}
              whatsApp={"/"}
              websit={"/"}
              name='Ahmadullah Saber'
              positionTitle='Frontend developer'
              quickInfo='Ahmadullah Saber is a talented frontend developer specializing in creating user-friendly, visually appealing, and responsive web interfaces.'
            />
          </div>


          <div className='cols-span-1 hover:scale-95'>
            <TeamMemmberCard
              profile={mohmmadProfile}
              email={"/"}
              whatsApp={"/"}
              websit={"/"}
              name='Mohmmadajan Mohmmady'
              positionTitle='IT manager'
              quickInfo='Mohmmady is an accomplished IT Manager known for his expertise in overseeing and optimizing IT operations, ensuring seamless technology integration and innovation within organizations.'
            />
          </div>


        </div>




        <div className='mt-20 text-center font-semibold text-xl'>Surprise Information Abute Our Web Sit</div>
        <div className='w-1/3 mx-auto mt-4 border-t-2 border-dotted border-teal-300 ' ></div>

        <div className=' grid grid-cols-3 pb-12 mt-12 '>

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

      </>
    </Layout>
  )
}
