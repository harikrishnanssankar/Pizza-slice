import { AnimatePresence, motion } from "framer-motion"
import React from 'react'
import { useHistory } from "react-router-dom"



const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },

}

const modal = {
    hidden: {
        y: '-100vh',
        opacity:0
    },
    visible: {
        y: '200px',
        opacity: 1,
        transition:{delay:0.5}
    }
}


const Modal = ({ showModal, setShowModal }) => {
    const history = useHistory()
    const handleModal = () => {
        history.push('/')
    }
    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                {
                    showModal && (
                        <motion.div variants={backdrop} exit='hidden' initial='hidden' animate='visible' className='backdrop' >
                            <motion.div variants={modal} className='modal' >
                                <p>Want to make another pizza?</p>
                                <button onClick={handleModal} >Start Again</button>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default Modal
