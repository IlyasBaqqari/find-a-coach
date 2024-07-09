import NavBar from "~/components/NavBar";
import type { Viewport } from 'next'

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width'
}

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div id="heroArea" className="flex flex-col-reverse items-center md:m-10 md:flex-row md:align-start">
          <div className='m-5 md:w-1/3 md:pe-5'>
              <h1 className='text-2xl md:text-4xl'>Develop your career</h1>
              <p className='text-sm md:text-lg my-3'>
                  At Almeida, we understand the importance of career growth and development. Our career coaching
                  program is designed to help you unlock your full potential and achieve your professional goals.
                  Whether you&apos;re just starting out or looking to take the next step in your career, our experienced
                  coaches are here to guide and support you every step of the way.
              </p>
              <h2 className='text-xl md:text-2xl'>Career Coaching at AND</h2>
              <p className='text-sm md:text-lg my-3'>
                  Career coaching is a collaborative process that focuses on helping individuals identify their
                  strengths, values, and aspirations, and develop strategies to achieve their desired career goals. Our
                  coaches work with you to explore potential career paths, overcome obstacles, and develop the skills
                  and mindset necessary for success
              </p>
              <p className='text-sm md:text-lg my-3'>
                  Our career coaching process is tailored to your unique needs and goals. It typically involves an
                  initial assessment, goal-setting, action planning, and ongoing support and accountability. Your coach
                  will work with you to identify your strengths, values, and aspirations, and develop a personalised
                  plan to help you achieve your desired outcomes.
              </p>
          </div>
          <div className='md:w-2/3'>
            <img src='/images/hero.jpg' alt='Career Coaching' />
          </div>
      </div>
    </>
  );
}
