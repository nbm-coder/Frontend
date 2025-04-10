// eslint-disable-next-line react/prop-types
export default function Input({ value, onChange, placeholder, className = "", ...props }) {
    return (
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border p-2 rounded w-full ${className}`}
        {...props}
      />
    );
  }
  