import React from "react";
import moment from "moment";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

const FeaturedPostCard = ({ post })=> {
    <div className="relative h-72">
        <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage.url})` }} />
        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    </div>
}

export default FeaturedPostCard;