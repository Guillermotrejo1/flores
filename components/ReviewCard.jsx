import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = ({ imageSrc, name, occupation, review }) => {
return (
<li className="swiper-slide">
<div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6">
<p className="paragraph">{review}</p>
<div className="flex items-center">
<Image
src={imageSrc}
alt="Review Image"
width={48}
height={48}
style={{
objectFit: "cover",
overflow: "hidden",
borderRadius: "50%",
display: "block",
}}
className=""
/>
<div className="ml-2">
<p className="font-oswald uppercase">{name}</p>
<p className="paragraph">{occupation}</p>
</div>
<FontAwesomeIcon
icon={faQuoteRight}
className="text-4xl text-secondaryColor ml-auto"
/>
</div>
</div>
</li>
);
};

export default ReviewCard;