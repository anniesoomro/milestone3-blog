import AuthorCard from "@/components/AuthorCard";
import React from "react";
import Mega from "@/components/Mega";
import Feature from "@/components/Feature";


export default function Home() {
    return (
        <div>
            
            <Feature />
            <Mega />
            <AuthorCard />
            
        </div>
    );
}