import PropTypes from "prop-types";

const Header = ({ children, level = 1, strong, underline, ...props }) => {
  const Tag = `h${level}`;

  const fontStyle = {
    fontWeight: strong ? "bold" : "normal",
    textDecoration: underline ? "underline" : undefined,
  };

  return <Tag style={{ ...props.style, ...fontStyle }}>{children}</Tag>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  strong: PropTypes.bool,
  underline: PropTypes.bool,
};

export default Header;
