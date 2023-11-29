import { ComponentProps } from "react";
import clsx from "clsx";

interface LogoProps extends ComponentProps<"svg"> {
    color?: string;
}

const Logo = ({ className, color = "black", ...props }: LogoProps) => {
    return (
        <svg
            className={clsx("", className)}
            {...props}
            width="80"
            height="40"
            viewBox="0 0 107 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="logo" clipPath="url(#clip0_274_24002)">
                <path
                    id="Vector"
                    d="M1.35158 16.8149L0.150175 16.3704L4.95579 11.6297L4.80561 37.7778L6.00702 39.926L0 40L1.27649 37.7038L1.35158 16.8149ZM3.00351 0.148193C4.12982 0.148193 5.03088 1.03708 5.03088 2.14819C5.03088 3.2593 4.12982 4.22227 3.00351 4.22227C2.47789 4.22227 1.95228 4.00005 1.65193 3.62968L1.50175 3.48153C1.2014 3.18523 0.97614 2.66671 0.97614 2.14819C0.97614 1.03708 1.87719 0.148193 3.00351 0.148193Z"
                    fill={color}
                />
                <path
                    id="Vector_2"
                    d="M19.1473 39.9999C12.3894 39.5555 9.08556 34.4444 9.08556 28.3703V28.2962L9.16065 26.4444V22.4444C9.16065 19.5555 9.23574 16.7407 9.23574 16.6666H6.60767V15.8518H8.33468L12.8399 11.3333V15.8518H19.8982V16.6666H12.8399V31.7036C12.8399 35.8518 14.8673 39.1851 19.1473 39.3333V39.9999Z"
                    fill={color}
                />
                <path
                    id="Vector_3"
                    d="M31.3117 38.5925C34.3152 38.5925 37.7692 37.1851 40.5475 34.2962L54.7391 21.7036C56.9917 19.7036 60.4457 16.7407 60.4457 16.5925C62.6984 14.4444 65.1012 13.3333 67.6542 13.3333C69.3812 13.3333 71.2584 13.8518 73.1356 14.8148L73.9615 15.3333L70.958 18.2962L70.2071 17.7036C69.3061 16.8888 67.2787 15.8518 64.951 15.8518C63.4492 15.8518 62.0226 16.2962 60.5959 17.4814L57.217 20.5185L72.1594 39.9999L67.8043 39.9259L54.5889 22.8148L52.6366 24.5925V37.6296L53.6878 39.7777H47.831L49.0324 37.6296V27.7036L44.1517 32.074V37.7037L45.278 39.9999L39.6464 39.9259L40.5475 37.7777V35.3333C37.6191 38.5185 33.8647 39.9999 30.4857 39.9999C25.6801 39.9999 21.4752 37.2592 20.5742 32.2962C20.424 30.5185 20.7994 29.037 21.6254 27.8518C22.6015 26.5925 23.6527 25.7777 25.0794 25.037C30.6359 22.074 39.7966 21.9259 40.6226 18.5185V18.074C40.6226 13.7036 37.0935 12.2222 32.6633 12.2222C28.2331 12.2222 24.8542 15.1851 24.6289 19.6296V20.6666L20.7243 19.6296C22.3012 14.8888 26.7313 11.5555 32.2127 11.5555C38.8205 11.5555 44.2268 15.037 44.2268 21.3333V22.2222C44.2268 23.3333 44.1517 25.1111 44.1517 27.1111V29.9999L40.5475 33.1851L40.6226 19.5555C37.4689 24.2222 24.1784 20.8888 24.4787 32.074C24.5538 36.4444 27.4822 38.5925 31.3117 38.5925ZM49.1075 5.40735L47.831 5.03698L52.7117 0.222168L52.6366 22.5185L49.1075 25.7036V5.40735Z"
                    fill={color}
                />
                <path
                    id="Vector_4"
                    d="M100.392 40H94.0848L95.4364 37.7037V19.6296C95.4364 15.3333 91.8322 12.2222 87.5522 12.2222C83.0469 12.2222 79.7431 15.037 79.5178 19.5556V21.4815L79.3676 37.7037L80.4188 39.8518H74.562L75.8385 37.7037V5.18518L74.562 4.74074L79.4427 0L79.3676 14.0741C81.4701 12.3704 84.0982 11.4815 87.0266 11.4815C93.6343 11.4815 99.0406 16.5926 99.0406 22.963V37.7037L100.392 40Z"
                    fill={color}
                />
                <path
                    id="Vector_5"
                    d="M102.345 16.8149L101.143 16.3704L105.949 11.6297L105.799 37.7778L107 39.926L100.993 40L102.269 37.7038L102.345 16.8149ZM103.996 0.148193C105.123 0.148193 106.024 1.03708 106.024 2.14819C106.024 3.2593 105.123 4.22227 103.996 4.22227C103.471 4.22227 102.945 4.00005 102.645 3.62968L102.495 3.48153C102.194 3.18523 101.969 2.66671 101.969 2.14819C101.969 1.03708 102.87 0.148193 103.996 0.148193Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_274_24002">
                    <rect width="107" height="40" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Logo;
