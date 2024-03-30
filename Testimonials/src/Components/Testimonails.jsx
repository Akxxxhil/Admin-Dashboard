import React, { useState } from 'react'
import Cards from './Cards'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Testimonails = (props) => {
    let review = props.Reviews
    const [index, setIndex] = useState(0)


    function righthandler() {
        if (index + 1 >= review.length) {
            setIndex(0)
        }
        else {
            setIndex(index + 1)
        }


    }
    function lefthandler() {
        if (index - 1 < 0) {
            setIndex(review.length - 1)
        }
        else {
            setIndex(index - 1)
        }

    }
    function surprisehandler() {
        let randomIndex = Math.floor(Math.random() * review.length)
        setIndex(randomIndex)

    }

    return (
        <div >
            <Cards review={review[index]}></Cards>
            <div className='flex justify-center gap-4'>
                <p onClick={lefthandler} className='text-3xl flex justify-center my-3'><FaArrowLeft /></p>
                <p onClick={righthandler} className='text-3xl flex justify-center my-3'><FaArrowRight /></p>


            </div>

            <div className='flex justify-center'>
                <button onClick={surprisehandler} className=' border-4 p-4  border-red-600'>Suprise Me </button>
            </div>
        </div>
    )
}

export default Testimonails
