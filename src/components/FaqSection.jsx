import { useState } from "react";
import Faq from "./Faq";


const FaqSection = () =>{

    const [questions,setQuestions] = useState([
        {
            "id": 1,
            "title": "Welcome Home",
            "caption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sapiente ducimus quia voluptates porro at error odit quibusdam, earum a veritatis libero perspiciatis molestias illum cumque labore asperiores facere consequuntur.",
            "isOpen": false
        },
        {
            "id": 2,
            "title": "Morning Glory",
            "caption": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
            "isOpen": true
        },
        {
            "id": 3,
            "title": "Evening Star",
            "caption": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
            "isOpen": false
        },
        {
            "id": 4,
            "title": "Golden Hour",
            "caption": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
            "isOpen": true
        },
        {
            "id": 5,
            "title": "Silent Night",
            "caption": "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
            "isOpen": false
        }
    ]);

    return (
        <>
            {
                questions.map((question,idx)=>(
                    // <h1 key={idx}>{question.id}. {question.question}</h1>
                    <Faq key={idx} faq={question}/>
                ))
            }
        </>
    )
}

export default FaqSection;