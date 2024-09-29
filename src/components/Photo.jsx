
import { motion } from "framer-motion";
import Image from "next/image";

export  const Photo = () => {
    return (
        <div className="w-full h-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="w-[398px] h-[398px] xl:w-[598px] xl:h-[598px] rounded-full overflow-hidden"
        >
          <Image
            src="/assets/Me.jpg"
            width={598}
            height={598}
            quality={100}
            alt="My Photo"
            className="object-contain rounded-full"
          />
        </motion.div>
      </div>
    )
  }