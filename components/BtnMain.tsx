import Link from "next/link";

interface ButtonProps {
  to?: string;
  icon?: React.ComponentType<{ size?: number }>;
  text?: string;
  textColor?: string;
  iconBg?: string;
  iconColor?: string;
  btnBg?: string;
  btnBorder?: string;
  onClick?: () => void;
}

export const BtnMain: React.FC<ButtonProps> = ({
  to,
  icon: Icon,
  text = "Start free trial",
  textColor = "text-white",
  iconBg = "bg-gray-700",
  iconColor = "text-white",
  btnBg = "bg-black",
  btnBorder = "border border-[#444444]",
  onClick,
}) => {
  const classes = `
    w-fit inline-flex items-center justify-between 
    rounded-full cursor-pointer font-bold py-1 pl-1 pr-3 
    hover:opacity-90 transition 
    ${btnBg} ${btnBorder}
  `;

  const iconBubble = Icon && (
    <span
      className={`flex items-center justify-center p-2 rounded-full ${iconBg} ${iconColor}`}
    >
      <Icon size={18} />
    </span>
  );

  const content = (
    <>
      {iconBubble}
      <span className={`ml-2 text-xs md:text-sm ${textColor}`}>{text}</span>
    </>
  );

  return to ? (
    <Link href={to} className={classes}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};
