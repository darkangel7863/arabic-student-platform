import '../css/btn.css';
function Button({ onClick, children, classes }) {
  return (
    <button className={`btn ${classes}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
