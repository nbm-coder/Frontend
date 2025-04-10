/* eslint-disable react/prop-types */
export default function Button({ children, variant = "primary", onClick, className = "" }) {
    const baseStyles = "px-4 py-2 rounded text-white font-semibold transition";
    const variants = {
      primary: "bg-blue-500 hover:bg-blue-600",
      outline: "border border-blue-500 text-blue-500 hover:bg-blue-100",
      destructive: "bg-red-500 hover:bg-red-600",
    };
  
    return (
      <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </button>
    );
  }
  