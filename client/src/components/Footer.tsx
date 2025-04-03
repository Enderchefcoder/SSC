import { Link } from "wouter";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <svg
                className="h-10 w-auto text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-3 text-xl font-bold text-white">Social Studies Corner</span>
            </div>
            <p className="text-gray-300 text-base">
              Making complex topics accessible while maintaining academic rigor and educational standards.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="text-xl h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="text-xl h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="text-xl h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">YouTube</span>
                <Youtube className="text-xl h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Content
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/articles?tag=World+History">
                      <a className="text-base text-gray-300 hover:text-white">
                        World History
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles?tag=US+History">
                      <a className="text-base text-gray-300 hover:text-white">
                        US History
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles?tag=Geography">
                      <a className="text-base text-gray-300 hover:text-white">
                        Geography
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles?tag=Civics">
                      <a className="text-base text-gray-300 hover:text-white">
                        Civics & Government
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles?tag=Economics">
                      <a className="text-base text-gray-300 hover:text-white">
                        Economics
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Resources
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/resources?type=Worksheet">
                      <a className="text-base text-gray-300 hover:text-white">
                        Lesson Plans
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources?type=Worksheet">
                      <a className="text-base text-gray-300 hover:text-white">
                        Worksheets
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources?type=Virtual+Field+Trip">
                      <a className="text-base text-gray-300 hover:text-white">
                        Virtual Field Trips
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources?type=Interactive+Timeline">
                      <a className="text-base text-gray-300 hover:text-white">
                        Interactive Timelines
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources?type=Student+Contributions">
                      <a className="text-base text-gray-300 hover:text-white">
                        Student Contributions
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Age Levels
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/articles?level=Elementary">
                      <a className="text-base text-gray-300 hover:text-white">
                        Elementary School
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles?level=Middle+School">
                      <a className="text-base text-gray-300 hover:text-white">
                        Middle School
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles?level=High+School">
                      <a className="text-base text-gray-300 hover:text-white">
                        High School
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles?tag=Homeschool">
                      <a className="text-base text-gray-300 hover:text-white">
                        Homeschool
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  About
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/about">
                      <a className="text-base text-gray-300 hover:text-white">
                        Our Team
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#contact">
                      <a className="text-base text-gray-300 hover:text-white">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#privacy">
                      <a className="text-base text-gray-300 hover:text-white">
                        Privacy Policy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#terms">
                      <a className="text-base text-gray-300 hover:text-white">
                        Terms of Service
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 Social Studies Corner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
