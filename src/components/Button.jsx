/* eslint-disable react/prop-types */
const Button = ({ children, type, handler }) => {
  const style = type === "danger" ? "bg-red-500 text-white px-3 py-2 rounded-lg shadow" : "bg-blue-500 text-white px-3 py-2 rounded-lg shadow";
  return (
    <button className={style} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
