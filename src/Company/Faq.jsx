import PageTitle from "../Layout/PageTitle";

const Faq = () => {
  return (
    <div>
      <PageTitle title="FAQ | VoyageLodge" />
      <h2 className="text-center font-bold text-3xl my-5">
        Frequently Asked Questions (FAQ)
      </h2>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          How can I make a reservation?
        </div>
        <div className="collapse-content">
          <p>
            Once you have found the accommodation you like, click on it to view
            the details. You can then follow the prompts to make a reservation,
            including entering your personal and payment information.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I book a room without creating an account?
        </div>
        <div className="collapse-content">
          <p>
            No, to book a room, you must create an account and authenticate your
            identity. This helps us ensure the security of your reservation and
            provides you with a seamless booking experience. Creating an account
            allows you to access exclusive offers and manage your reservations
            more conveniently.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do I search for accommodations on your website?
        </div>
        <div className="collapse-content">
          <p>
            To search for accommodations, simply enter your destination,
            check-in, and check-out dates on the homepage. Click the Search
            button, and you will see a list of available options.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I cancel or modify a reservation?
        </div>
        <div className="collapse-content">
          <p>
            Most reservations can be canceled or modified, but specific policies
            may vary depending on the accommodation provider. Check the
            reservation details for cancellation and modification options.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Do you charge a service fee for booking through your website?
        </div>
        <div className="collapse-content">
          <p>
            We do not charge any service fees for booking through our website.
            You pay the accommodation provider listed price.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What should I do if I encounter issues during the booking process?
        </div>
        <div className="collapse-content">
          <p>
            If you encounter any issues while booking, please contact our
            customer support team, and they will assist you in resolving the
            problem.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can I leave a review for an accommodation I stayed at through your
          website?
        </div>
        <div className="collapse-content">
          <p>
            After your stay, you will have an option with instructions on how to
            leave a review for the accommodation you booked.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Do you offer discounts or promotions for frequent users?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we offer special promotions and discounts to our loyal
            customers. Join our newsletter or check our website for the latest
            deals.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can I reach customer support if I have questions or need
          assistance?
        </div>
        <div className="collapse-content">
          <p>
            You can contact our customer support team by visiting the Contact Us
            page on our website. We are available to assist you with any
            questions or issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
