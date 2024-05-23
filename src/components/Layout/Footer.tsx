import Link from "next/link";

const Footer = () => {
  return (
    <section className=" pt-20 pb-10 bg-gray-900">
      <div className="container">
        <h1 className="text-5xl font-bold text-center text-white">Logo</h1>
        <div className="mt-10 flex justify-center gap-3 text-gray-300">
          <Link className="hover:text-white" href="/">
            About Us
          </Link>
          <Link className="hover:text-white" href="/">
            Terms of Use
          </Link>
          <Link className="hover:text-white" href="/">
            Privacy Policy
          </Link>
          <Link className="hover:text-white" href="/">
            FAQ
          </Link>
          <Link className="hover:text-white" href="/">
            Community Guidelines
          </Link>
          <Link className="hover:text-white" href="/">
            Support
          </Link>
        </div>
        <p className="text-gray-300 mt-6 text-center">
          Email: lostandfound@gmail.com
        </p>
        <p className="text-gray-300 text-center mt-10">
          © 2024 Lost & Found System. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
