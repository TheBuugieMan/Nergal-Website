import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
  link?: string;
}

export function ProjectCard({ title, description, image, tags, index, link }: ProjectCardProps) {
  const CardContent = (
    <>
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 via-transparent to-[#FFD700]/20" />
      </div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl text-white group-hover:text-[#FFD700] transition-colors duration-300">
            {title}
          </h3>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 45 }}
            className="text-[#8B0000] group-hover:text-[#FFD700] transition-colors duration-300"
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.div>
        </div>

        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs text-[#FFD700] bg-[#FFD700]/10 rounded-full border border-[#FFD700]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#8B0000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </>
  );

  const cardClasses = "group relative bg-gradient-to-br from-[#0a0a0a] to-[#050505] rounded-lg overflow-hidden border border-[#1a1a1a] hover:border-[#8B0000] transition-all duration-500 block";

  if (link) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
      >
        <Link to={link} className={cardClasses}>
          {CardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={cardClasses}
    >
      {CardContent}
    </motion.div>
  );
}