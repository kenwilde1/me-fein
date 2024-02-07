//Card.js file
import React from 'react';

function AboutCard({ card }: any) {
    // Card data
    return (
        <div
            className="flex flex-col bg-white justify-center py-3 px-6 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-bl-[35px] w-full card-item-div max-w-screen-md min-h-[50px]"
        >
            <img src={card.img.src} alt="box_img" className="w-[150px] mb-4" />
            <p className="text-[15px] font-medium leading-2 w-full">
                Click <a href={card.link} target='_blank'>here</a> to view the certification.
            </p>
        </div>
    );
}
export default AboutCard;