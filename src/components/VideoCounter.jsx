import React, { useState } from 'react'
import CountUp from 'react-countup'
import '../assets/vendor/magnific-popup/magnific-popup.min.css'
import { IMAGES } from '../constants/theme';

import { motion } from 'framer-motion';


// import img


const VideoCounter = ({setOpen}) => {
    return (
        <>
            <div className="dz-content-inner">
                <div className="row">
                    <motion.div className="col-xl-10 col-lg-12 counter-info aos-item" 
                        initial={{ opacity: 0, x: "-20%" }}
                        whileInView={{ opacity: 1, x: "0%" }}
                        transition={{ duration: 1 }}
                    >
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 m-b30 aos-item" >
                                <motion.div className="counter-bx"
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: "0%" }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                >
                                    <h2 className="counter text-primary">
                                        <CountUp end={784} duration={5} />
                                    </h2>
                                    <h3 className="m-b0">Project <br />Completed</h3>
                                </motion.div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 aos-item"  >
                                <motion.div className="counter-bx"
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: "0%" }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                >
                                    <h2 className="counter text-primary">
                                        <CountUp end={987} duration={5} />
                                    </h2>
                                    <h3 className="m-b0">Client <br />Satisfaction</h3>
                                </motion.div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 aos-item"  >
                                <motion.div className="counter-bx"
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: "0%" }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                >
                                    <h2 className="counter text-primary">
                                        <CountUp end={874} duration={5} />
                                    </h2>
                                    <h3 className="m-b0">Cup Of <br />Coffee Meet</h3>
                                </motion.div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 aos-item"  >
                                <motion.div className="counter-bx"
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: "0%" }}
                                    transition={{ duration: 1, delay: 1 }}
                                >
                                    <h2 className="counter text-primary">
                                        <CountUp end={954} duration={5} />
                                    </h2>
                                    <h3 className="m-b0">Awards <br />International</h3>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="row spno">
                    <div className="col-lg-12">
                        <div className="video-bx content-media style-2">
                            <img src={IMAGES.video} alt="" />
                            <div className="video-btn aos-item" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                                {/* <button onClick={() => { setOpen(true) }} className="popup-youtube"><i className="fas fa-play"></i></button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
        </>
    )
}

export default VideoCounter