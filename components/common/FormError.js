import PropTypes from "prop-types";

export default function ValidationError({ children }) {
    return <div className="text-red-500 py-1">{children}</div>;
}

ValidationError.proptTypes = {
    children: PropTypes.node.isRequired,
};