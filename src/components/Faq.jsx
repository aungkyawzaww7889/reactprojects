import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Faq = ({faq}) =>{

    const [addName,setAddName] = useState("active");

    const clickHandler = (e)=>{

        e.target.classList.toggle(addName);

        // console.log(e.target.nextElementSibling);
        const getcontent = e.target.nextElementSibling;
        console.log(getcontent);

        if(getcontent.style.height){
            getcontent.style.height = null; //beware can't set 0
        }else{
            getcontent.style.height = getcontent.scrollHeight+"px";
        }
    }

    console.log(clickHandler);


    return (
        <>
            {/* <div className="border border-2 p-3 bg-slate-500 cursor-pointer">
                <div className="flex justify-between items-center" onClick={clickHandler}>
                    <h1 className="text-2xl font-bold text-white">{faq.question}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>

                <p className="text-slate-300">{faq.othertext}</p>
            </div> */}

            <div className="accordion">

                <h1 className="acctitle" onClick={clickHandler}> {faq.title}</h1>
                <div className="acccontent">
                    <p className="py-4">{faq.caption}</p>
                </div>

            </div>
        </>
    )
}

export default Faq;