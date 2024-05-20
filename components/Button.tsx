import { ButtonProps } from "@types";

const Button: React.FC<ButtonProps> = ({ styles }) => {
  return (
    <a href="https://calendly.com/baroka/connecting-meeting" target="_blank "
      type="button"
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:translate-x-2  transition-all ease-linear cursor-pointer`}
    >
      Join Us
    </a>
  );
};

export default Button;
