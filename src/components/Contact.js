import React from "react";

const Contact = () => {
    return(
        <div className="flex w-[100%] h-[80vh] justify-center items-center flex-col">
            <h1 className="text-xl font-bold mb-10">Contact us Page</h1>
            <form className="flex flex-col justify-center items-center">
                <input className=" mb-3 border-[1px] border-l-black p-2 rounded-lg w-96" type="text" placeholder="Name"></input>
                <input className=" mb-3 border-[1px] border-l-black p-2 rounded-lg w-96" type="text" placeholder="Message or Problem"></input>
                <button className="border-[1px] border-l-black py-2 rounded-lg w-28" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;