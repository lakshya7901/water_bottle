import { motion } from "framer-motion";

const products = [
  {
    name: "AquaPure 500ml",
    desc: "Perfect for on-the-go hydration",
    price: "₹15",
    size: "500ml",
    color: "hsla(190, 90%, 50%, 0.12)",
  },
  {
    name: "AquaPure 1L",
    desc: "Ideal for daily hydration needs",
    price: "₹25",
    size: "1 Litre",
    color: "hsla(185, 80%, 45%, 0.12)",
    featured: true,
  },
  {
    name: "AquaPure 20L Can",
    desc: "Dispenser can for offices & shops",
    price: "₹100",
    size: "20 Litres",
    color: "hsla(190, 85%, 48%, 0.12)",
  },
];

const ProductsSection = () => {
  return (
    /* Using section-padding utility from our index.css */
    <section id="products" className="relative section-padding overflow-hidden">
      <div className="container mx-auto relative z-10 px-4 md:px-0">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Our Range</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Choose Your <span className="text-gradient-water">Size</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              /* Applying glass-card utilities we defined in v4 */
              className={`${p.featured ? "glass-card-highlight border-primary/40 shadow-glow" : "glass-card"} 
                p-8 flex flex-col gap-5 hover:scale-105 transition-all duration-300 relative group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase tracking-tighter font-bold px-4 py-1.5 rounded-full shadow-lg z-20">
                  Best Seller
                </span>
              )}
              
              {/* Size Bubble with Watercolor Effect */}
              <div
                className="w-full h-40 rounded-2xl flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:scale-95"
                style={{ background: p.color }}
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_white,_transparent)]" />
                <span className="text-4xl font-display font-black text-primary drop-shadow-sm">{p.size}</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-auto border-t border-border/20">
                <span className="text-2xl font-black text-gradient-water">{p.price}</span>
                <a 
                  href="#contact" 
                  className="text-sm font-bold text-primary flex items-center gap-1 group/btn"
                >
                  Order 
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;