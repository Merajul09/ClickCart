import PropTypes from "prop-types";

const SectionTitle = ({ heading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <p className="text-2xl border-y-4 py-4">{heading}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  subHeading: PropTypes.string,
  heading: PropTypes.string,
};
export default SectionTitle;
