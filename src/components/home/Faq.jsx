import { Accordion } from "flowbite-react";
import SectionTitle from "../custom/SectionTitle";

const Faq = () => {
  return (
    <div>
      <SectionTitle subHeading={"Question"} heading={"Frequently asked"} />
      <div className="w-3/4 mx-auto">
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>How can I track my order?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                You can track your order by logging into your account, going to
                the `My Orders` section, and clicking on the tracking link
                provided.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What is your return and refund policy?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                We accept returns within 30 days of purchase for most items.
                Refunds are processed within 5-7 business days after we receive
                the returned item.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Do you offer free shipping?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes, we offer free shipping on orders over $50. For orders below
                this amount, a nominal shipping fee is applied at checkout.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Can I cancel or modify my order after placing it?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Orders can be canceled or modified within 2 hours of placement.
                Please contact our support team as soon as possible for
                assistance.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What payment methods do you accept?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                We accept credit/debit cards, PayPal, and other secure online
                payment methods. Cash on delivery is also available for select
                regions.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
