import { GoArrowRight } from "react-icons/go";

const Button = ({ arrow = true, className, children }) => {
  return (
    <button
      className={`not-first:uppercase relative tracking-widest px-4 mt-5 py-3 text-sm bg-gray-300 group z-0 cursor-pointer hover:text-white duration-300 ${className}`}
    >
      <span
        className={`absolute inset-0 scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform bottom-0 left-0 duration-400 ease-in-out bg-primary -z-10`}
      />

      <span className="flex items-center gap-2">
        {children} {arrow && <GoArrowRight className="duration-150 text-xl" />}
      </span>
    </button>
  );
};

export default Button;
