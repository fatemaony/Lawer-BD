import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";

export function LawyerErrorPage() {
  return (
      <div className="h-screen mx-auto grid place-items-center text-center px-8">
        <div>
        <CircleX className="w-20 h-20 mx-auto"/>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mt-10 !text-3xl !leading-snug md:!text-4xl"
          >
            Error 404 <br /> Lawyer Not Found!
          </Typography>
          <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
            Please select a valid lawyer from the list or go back to the home page.
          </Typography>
          <Link to={"/"}>
            <Button className="bg-black hover:bg-gray-300 text-white hover:text-black transition-[.5s]">
              Go Back to Home
            </Button>
          </Link>
        </div>
      </div>
  );
}

export default LawyerErrorPage;