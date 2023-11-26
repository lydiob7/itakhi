import generalMetadata from "@/config/metadata";
import routes from "@/config/routes";
import React from "react";
import Button from "./components/common/Button";

export const metadata = generalMetadata("Page not found - Itakhi Digital");

const NotFoundPage = () => {
    return (
        <div className="fixed top-0 left-0 z-[99] bg-forest-green text-light-ivory h-screen w-screen flex flex-col justify-center">
            <div className="container w-full">
                <div className="flex items-center gap-4 mb-4">
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Modo_de_aislamiento" clipPath="url(#clip0_440_61905)">
                            <path
                                id="Vector"
                                d="M11.4477 2.67292C11.1382 2.94479 10.9318 3.09497 10.7481 3.29176C9.06009 5.09389 7.50423 7.11353 6.02983 9.26133C5.48406 10.0562 4.9401 10.8589 4.43234 11.703C3.85942 12.6559 3.32722 13.6605 2.77873 14.6444C2.58957 14.9836 2.42575 15.3591 2.21033 15.6594C1.92704 16.0543 1.36045 16.0931 1.08077 15.798C0.726881 15.4251 0.583876 14.4968 0.812865 13.9518C0.898849 13.7485 1.00927 13.5375 1.14594 13.4119C1.84196 12.775 2.36148 11.8661 2.92083 11.0311C4.20878 9.10857 5.58634 7.31938 6.89873 5.43827C7.51781 4.55014 8.19392 3.75783 8.83291 2.91502C9.69547 1.77832 10.7137 0.882435 11.769 0.11342C11.8795 0.0331526 12.0306 0.0305633 12.16 0.0473936C12.3601 0.0732863 12.5565 0.154849 12.7556 0.200161C13.4064 0.346455 13.6625 0.734846 13.6299 1.63203C13.5856 2.85676 13.3702 4.03747 12.9819 5.12496C12.3347 6.93746 11.646 8.72017 10.9698 10.5132C10.4548 11.8791 9.92808 13.2359 9.41942 14.6082C9.31533 14.8904 9.27098 15.218 9.20853 15.4821C9.39317 15.7876 9.57328 15.7047 9.72172 15.6271C10.4847 15.2283 11.2423 14.8089 12.0017 14.392C12.4442 14.1499 12.8832 13.8935 13.3267 13.6566C13.8462 13.3783 14.3621 13.1931 14.879 13.7045C14.9776 13.8029 15.1423 13.755 15.2727 13.799C15.985 14.0398 16.1931 14.3933 16.2855 15.4795C16.2972 15.618 16.328 15.7539 16.3533 15.9145C17.2431 16.233 18.1798 15.9857 19.122 16.444C19.0714 16.6809 19.0614 16.9256 18.9745 17.0809C18.8523 17.2997 18.6894 17.4978 18.5147 17.6273C17.8757 18.1011 17.1897 18.3691 16.4719 18.4468C15.5795 18.5426 14.8645 18.1684 14.5088 16.8764C14.4472 16.6524 14.3649 16.4401 14.3006 16.2446C13.9883 16.0323 13.7557 16.3042 13.5132 16.4362C12.6904 16.8855 11.8795 17.3852 11.0495 17.8059C10.3082 18.1814 9.53798 18.2914 8.74693 18.1788C7.94592 18.0649 7.41735 17.5276 7.20284 16.4013C7.16754 16.2161 7.13496 16.0297 7.09513 15.8083C7.86446 13.8858 8.64194 11.9607 9.40493 10.0252C9.60406 9.51896 9.75792 8.97651 9.93532 8.45218C10.3924 7.10188 10.8603 5.75934 11.3038 4.39997C11.5229 3.72934 11.502 3.7151 11.4468 2.67292H11.4477Z"
                                fill="#B4E55E"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_440_61905">
                                <rect
                                    width="18.4214"
                                    height="18.4214"
                                    fill="white"
                                    transform="translate(0.702637 0.0390625)"
                                />
                            </clipPath>
                        </defs>
                    </svg>

                    <h2 className="uppercase text-lime-green text-sm font-semibold font-overpass-mono">Error 404</h2>
                </div>
                <div className="font-display-md font-medium max-w-[620px] md:max-w-[990px]">
                    Sorry, but the page you are looking for might have been removed or is temporarily unavailable.
                </div>
                <a className="text-forest-green mt-8 block" href={routes.home}>
                    <Button>Back to Homepage</Button>
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;
