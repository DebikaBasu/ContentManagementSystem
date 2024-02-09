import React from "react";
import { useNavigate } from 'react-router-dom';
import { 
    Dialog,
    DialogHeader,
    DialogBody,
    IconButton,
    Typography,
    MenuItem,
} from "@material-tailwind/react";

export default function ChooseTemplate({open, setOpen}) {

    const handleOpen = () => setOpen((cur) => !cur);
    const navigate = useNavigate();

    return (
        <>
            {/* <Button onClick={handleOpen}>Connect Wallet</Button> */}
            <Dialog size="xs" open={open} handler={handleOpen}>
                <DialogHeader className="justify-between">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Choose a Template
                        </Typography>
                        <Typography color="gray" variant="paragraph">
                            Choose which template you want to use
                        </Typography>
                    </div>
                    <IconButton
                        color="blue-gray"
                        size="sm"
                        variant="text"
                        onClick={handleOpen}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </DialogHeader>
                <DialogBody className="overflow-y-scroll !px-5">
                    <div className="mb-6">
                        <Typography
                            variant="paragraph"
                            color="blue-gray"
                            className="py-3 font-semibold uppercase opacity-70"
                        >
                            Popular
                        </Typography>
                        <ul className="mt-3 -ml-2 flex flex-col gap-1">
                            <MenuItem onClick={() => navigate('/editor/blogtemplate')} className="mb-4 flex items-center justify-center gap-3 !py-4 shadow-md">
                                <img
                                    src="https://docs.material-tailwind.com/icons/metamask.svg"
                                    alt="metamast"
                                    className="h-6 w-"
                                />
                                <Typography
                                    className="uppercase"
                                    color="blue-gray"
                                    variant="h6"
                                >
                                    Blog Website Template
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/editor/businessportfolio')} className="mb-1 flex items-center justify-center gap-3 !py-4 shadow-md">
                                <img
                                    src="https://docs.material-tailwind.com/icons/coinbase.svg"
                                    alt="metamast"
                                    className="h-6 w-6 rounded-md"
                                />
                                <Typography
                                    className="uppercase"
                                    color="blue-gray"
                                    variant="h6"
                                >
                                Business Portfolio
                                </Typography>
                            </MenuItem>
                        </ul>
                    </div>
                    <div>
                        <Typography
                            variant="paragraph"
                            color="blue-gray"
                            className="py-4 font-semibold uppercase opacity-70"
                        >
                            Other
                        </Typography>
                        <ul className="mt-4 -ml-2.5 flex flex-col gap-1">
                            <MenuItem className="mb-4 flex items-center justify-center gap-3 !py-4 shadow-md">
                                <img
                                    src="https://docs.material-tailwind.com/icons/trust-wallet.svg"
                                    alt="metamast"
                                    className="h-7 w-7 rounded-md border border-blue-gray-50"
                                />
                                <Typography
                                    className="uppsecase"
                                    color="blue-gray"
                                    variant="h6"
                                >
                                    Browse Templates
                                </Typography>
                            </MenuItem>
                        </ul>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}