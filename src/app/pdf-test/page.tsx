"use client";

import React, {useState} from "react";
import DocumentCreateModal from "@/components/documentCreate/DocumentCreateModal";

export default function CorporateTaxFormPage1() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button onClick={()=>setIsOpen(true)}>버튼</button>
            <DocumentCreateModal isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
        </>

    );
}
