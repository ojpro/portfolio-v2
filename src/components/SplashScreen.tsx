import {motion} from "framer-motion";

export default function SplashScreen() {

    return (
        <div
            className="bg-gray-800 flex min-h-screen w-full justify-center items-center text-white text-4xl font-bold">
            <motion.div animate={{
                scale: [0.9, 1, 0.9],
            }} transition={{ease: "linear", repeat: Infinity, duration: 2.4, repeatType: "loop"}}>
                <div
                    className="w-32 h-32 bg-gray-700 backdrop-blur-lg dark:opacity-80 rounded-3xl shadow-xl relative grid grid-cols-2 grid-rows-2 justify-items-center items-center">
                    <motion.span animate={{
                        scale: [1, 1.2, 1, 0.9, 1],
                    }}
                                 transition={{ease: "linear", duration: 2, repeat: Infinity}}>
                        <span
                            className="bg-gray-200 border-[6px] border-gray-600 w-9 h-9 inline-block rounded-full drop-shadow-lg"></span>
                    </motion.span>
                    <motion.span animate={{
                        scale: [1, 0.9, 1, 1.2, 1],
                    }}
                                 transition={{ease: "linear", duration: 2, repeat: Infinity}}>
                        <span
                            className="bg-gray-500 border-[6px] border-gray-200 w-9 h-9 inline-block rounded-full drop-shadow-lg"></span>
                    </motion.span>
                    <motion.span animate={{
                        scale: [1, 0.9, 1, 1.2, 1],
                    }}
                                 transition={{ease: "linear", duration: 2, repeat: Infinity}}>
                        <span
                            className="bg-gray-500 border-[6px] border-gray-200 w-9 h-9 inline-block rounded-full drop-shadow-lg"></span>
                    </motion.span>
                    <motion.span animate={{
                        scale: [1, 1.2, 1, 0.9, 1],
                    }}
                                 transition={{ease: "linear", duration: 2, repeat: Infinity}}>
                        <span
                            className="bg-gray-200 border-[6px] border-gray-600 w-9 h-9 inline-block rounded-full drop-shadow-lg"></span>
                    </motion.span>
                </div>
            </motion.div>
        </div>
    )
        ;
}