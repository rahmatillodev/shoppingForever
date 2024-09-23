import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewsLetterBox from "../components/NewsLetterBox"
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US"/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" alt="image" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 to-gray-600">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corrupti tenetur doloremque nesciunt, quod ut laboriosam eaque repellendus pariatur, ex alias incidunt quis error, sint dolores officiis harum quam voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, fuga! Illo similique odit non nostrum. Deserunt ea maxime quisquam tempora.</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi expedita ea vitae et nisi eius laboriosam magni nulla!</p>
        </div>

      </div>

      <div className="text-4xl py-4">
        <Title text1="WHY" text2="CHOOSE US"/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 left-full flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate numquam a laboriosam quos dolorem est enim impedit inventore eaque eum?</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 left-full flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate numquam a laboriosam quos dolorem est enim impedit inventore eaque eum?</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 left-full flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate numquam a laboriosam quos dolorem est enim impedit inventore eaque eum?</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About