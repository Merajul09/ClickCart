import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Click Cart
          </h1>
          <p className="text-lg text-gray-600">
            Your one-stop shop for an unparalleled online shopping experience.
          </p>
        </section>

        {/* Who We Are */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to <span className="font-bold">Click Cart</span>, your
            trusted online marketplace. We are committed to providing a seamless
            and enjoyable shopping experience, offering a wide range of
            high-quality products at competitive prices.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Shop with Us?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Extensive range of products across various categories.</li>
            <li>Secure and reliable payment methods.</li>
            <li>Fast and efficient delivery service.</li>
            <li>Exceptional customer support available 24/7.</li>
            <li>Easy returns and refunds policy.</li>
          </ul>
        </section>

        {/* Mission Statement */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-bold">Click Cart</span>, our mission is to
            empower online shoppers by delivering a hassle-free shopping
            experience. We strive to build lasting relationships with our
            customers by prioritizing quality, affordability, and exceptional
            service.
          </p>
        </section>

        {/* Our Story */}
        <section className="my-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-bold">Click Cart</span> was founded with a
            mission to redefine the way people shop online. Starting as a small
            venture, we have grown into a trusted platform serving thousands of
            happy customers. Our journey is fueled by a passion for innovation
            and a commitment to customer satisfaction.
          </p>
        </section>

        {/* Customer Testimonials */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Customer Testimonials
          </h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-blue-600 pl-4 text-gray-600">
              &quot;Click Cart made my shopping experience so much easier! The
              fast delivery and excellent customer service are unparalleled.
              Highly recommended!&quot;
              <br />
              <span className="font-bold">- Sarah J.</span>
            </blockquote>
            <blockquote className="border-l-4 border-blue-600 pl-4 text-gray-600">
              &quot;I found everything I needed at affordable prices. The
              product quality is amazing. I&apos;m a loyal customer now!`&quot;`
              <br />
              <span className="font-bold">- John D.</span>
            </blockquote>
          </div>
        </section>

        {/* Sustainability Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Commitment to Sustainability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-bold">Click Cart</span>, we believe in
            building a better future. We are committed to eco-friendly
            practices, including using sustainable packaging, reducing waste,
            and supporting ethical sourcing. By shopping with us, you contribute
            to a more sustainable world.
          </p>
        </section>
        {/* should be added more section */}
        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="bg-blue-600 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-700 transition"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
