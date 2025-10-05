import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    alert('Thank you for your message! Check the console to see the submitted data.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-orange-50 py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            I'd love to hear about your travel experiences or answer any questions 
            you might have. Feel free to reach out!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-600">👤</span>
                    <span>Your Name</span>
                  </div>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-600">✉️</span>
                    <span>Email Address</span>
                  </div>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-600">💬</span>
                    <span>Your Message</span>
                  </div>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200 resize-none"
                  placeholder="Share your thoughts, questions, or travel stories..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Let's Connect!
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Whether you're a fellow traveler, looking for travel advice, or just want to 
              share your own adventures, I'm always excited to connect with like-minded people. 
              Your message will be logged to the console for now - this is just a demo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;