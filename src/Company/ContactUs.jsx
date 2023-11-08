const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-semibold mb-4 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Our Address</h2>
          <p>123 Voyage Street</p>
          <p>Travel City</p>
          <p>Bangladesh</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Phone Numbers</h2>
          <p>Main: +123-456-7890</p>
          <p>Support: +880-654-3210</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Email Addresses</h2>
          <p>General: info@voyagelodge.com</p>
          <p>Support: support@voyagelodge.com</p>
        </div>
      </div>
      <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
