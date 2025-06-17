import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
    const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 min-h-screen py-16 px-6">
        {/* Hero */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About <span className="text-indigo-600">Wearzy</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Where comfort meets style. Discover how we blend minimalism, quality,
            and fashion to create clothes you’ll love.
          </p>
        </div>

        {/* Grid Content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <img
            src="./src/assets/about.jpg"
            alt="About Wearzy"
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />

          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Wearzy started with a simple idea — fashion should be effortless,
              affordable, and eco-conscious. We’re passionate about creating
              everyday essentials that feel as good as they look.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From local sourcing to minimalist design, every product is crafted
              with care. We believe in slow fashion — timeless pieces you’ll wear
              again and again.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you’re chilling at home, hitting the street, or working from
              your favorite café, Wearzy has your back.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto mt-24 text-center hover:cursor-default">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We prioritize eco-friendly materials, ethical labor, and
                long-lasting designs to reduce fashion waste.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Simplicity
              </h3>
              <p className="text-gray-600">
                Less is more. We create minimalist clothing that’s versatile,
                clean, and free from fast trends.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Comfort
              </h3>
              <p className="text-gray-600">
                We design with soft fabrics, relaxed fits, and real-life needs in
                mind. Style that feels like home.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto mt-20 text-center bg-indigo-100 p-10 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Join the Wearzy Movement
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated on new drops, exclusive deals, and behind-the-scenes
            stories.
          </p>
          <button onClick={()=>navigate("/collection")} className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
            Shop Now
          </button>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default About;
