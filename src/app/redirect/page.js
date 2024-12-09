// src/app/redirect/page.js

"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Redirect from "@/components/userlogin/Redirect";

function UserRedirect(){
    return(
        <>
            <Redirect />
        </>
    )
}
export default UserRedirect;