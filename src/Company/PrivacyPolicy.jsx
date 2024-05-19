const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      <p className="text-lg mb-6">
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit our website.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p className="text-lg mb-4">
          We collect information you provide directly to us. For example, we may
          collect your name, email address, and other information you provide
          when you contact us.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="text-lg mb-4">We may use your personal information to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="text-lg">
            Provide, maintain, and improve our services.
          </li>
          <li className="text-lg">
            Respond to your comments, questions, and requests.
          </li>
          <li className="text-lg">
            Communicate with you about products, services, and offers.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Sharing Your Information
        </h2>
        <p className="text-lg mb-4">
          We do not share your personal information with third parties.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
        <p className="text-lg mb-4">
          You have the right to access personal information we hold about you
          and to ask that your personal information be corrected, updated, or
          deleted.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-lg mb-4">
          For more information about our privacy practices, or if you have
          questions or concerns, please contact us via email at
          support@voyagelodge.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
