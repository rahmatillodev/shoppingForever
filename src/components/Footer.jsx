import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div>
      <div
        className="c
        flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm "
      >
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />
          <p className="w-full md:w-2/3 to-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            illum odio quasi tenetur eligendi maxime. Pariatur, cumque
            distinctio. Adipisci magnam animi error. Magnam optio cupiditate
            vero rem, iste nam. Rem.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 to-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Private policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 to-gray-600">
            <li>+1234567890</li>
            <li>contact@gamil.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
