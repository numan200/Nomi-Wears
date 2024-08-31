import { motion } from "framer-motion"

const AdminPanel = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="admin-panel text-center">
      <h1>Admin Panel</h1>
    </motion.div>
  )
}

export default AdminPanel
