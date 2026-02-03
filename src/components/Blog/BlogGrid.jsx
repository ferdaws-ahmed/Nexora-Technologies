import * as motion from "motion/react-client";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className='px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
