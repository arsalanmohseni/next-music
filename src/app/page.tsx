'use client';

import React, { useState } from "react";
import Image from 'next/image';

const page = () => {
    return (
        <div className="bg-sky-950 text-white rounded-2xl flex flex-col items-center justify-center text-center pb-10">
            <Image src='/../../public/banners/main.jpg' alt="banner" width={500} height={500} />
            <h1 className="text-4xl font-bold">As it was</h1>
            <h2 className="text-xl font-semibold">Harry styles</h2>
        </div>
    );
};

export default page;
