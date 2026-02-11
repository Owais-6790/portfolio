const Button = ({ text, color = "", ref }) => {
  return (
    <a
      href="owaisrehman6790@gmail.com"
      className={`btn transition-all duration-500 uppercase color-white border-2 border-transparent py-12 px-12 lg:py-3 text-center min-w-[205px] rounded-full max-lg:py-2 ${color} hover:text-black`}
    >
      {text}
    </a>
  );
};

export default Button;
