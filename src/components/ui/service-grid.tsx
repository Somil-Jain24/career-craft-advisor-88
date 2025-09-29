import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Service {
  name: string;
  imageUrl: string;
  href: string;
}

export interface ServiceGridProps {
  title: string;
  subtitle?: string;
  services: Service[];
  className?: string;
}

const ServiceGrid = React.forwardRef<HTMLDivElement, ServiceGridProps>(
  ({ title, subtitle, services, className, ...props }, ref) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      },
    };

    return (
      <section
        ref={ref}
        className={cn("w-full py-12 md:py-16 lg:py-20", className)}
        {...props}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                {title}
              </h2>
              {subtitle && (
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.a
                key={index}
                href={service.href}
                className="group flex flex-col items-center justify-start gap-3 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28">
                  <img
                    src={service.imageUrl}
                    alt={`${service.name} service icon`}
                    width={100}
                    height={100}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                  {service.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }
);

ServiceGrid.displayName = "ServiceGrid";

export { ServiceGrid };


