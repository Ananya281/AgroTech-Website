import React from "react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Contact Details */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
          <p className="text-gray-600 mb-4">
            <strong>Address:</strong> TIET-TAU Center Of Excellence For Food Security (T2CEFS), Thapar Institute of
            Engineering and Technology, Patiala, Punjab, 147004
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Email:</strong> <a href="mailto:directorfvplus@gmail.com" className="text-green-600 hover:underline">directorfvplus@gmail.com</a>
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Call Us:</strong> <a href="tel:9878249089" className="text-green-600 hover:underline">9878249089</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-green-600 hover:text-green-700">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-green-600 hover:text-green-700">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-green-600 hover:text-green-700">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-green-600 hover:text-green-700">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Location/Map */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27419.107615227248!2d76.3780715684349!3d30.336126349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028dcfcfd6c01%3A0x1debd224d0edee07!2sThapar%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1685512590023!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
