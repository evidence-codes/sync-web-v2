/* eslint-disable @typescript-eslint/no-explicit-any */
const Button = ({ children, className, variant, style, ...props }: any) => (
  <button className={className} style={style} {...props}>
    {children}
  </button>
);

export default Button;