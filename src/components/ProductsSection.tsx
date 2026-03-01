import { motion } from "framer-motion";

const products = [
  {
    name: "AquaPure 500ml",
    desc: "Perfect for on-the-go hydration",
    price: "₹15",
    size: "500ml",
    // Light Blue/Teal colors from image
    color: "rgba(76, 169, 188, 0.1)", 
  },
  {
    name: "AquaPure 1L",
    desc: "Ideal for daily hydration needs",
    price: "₹25",
    size: "1 Litre",
    color: "rgba(76, 169, 188, 0.15)",
    featured: true,
  },
  {
    name: "AquaPure 20L Can",
    desc: "Dispenser can for offices & shops",
    price: "₹100",
    size: "20 Litres",
    color: "rgba(76, 169, 188, 0.1)",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-white/30 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#4CA9BC]">
            Our Range
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A3A42] leading-tight">
            Choose Your <span className="text-[#4CA9BC]">Size</span>
          </h2>
        </motion.div>

        {/* Grid Layout: 1 col on Mobile, 3 on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              className={`relative p-8 rounded-[2.5rem] bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl flex flex-col gap-6 transition-all duration-300 active:scale-95 md:hover:-translate-y-2 ${
                p.featured ? "ring-2 ring-[#4CA9BC]/20" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2D7A8E] text-white text-[9px] uppercase tracking-widest font-bold px-5 py-1.5 rounded-full shadow-lg">
                  Best Seller
                </div>
              )}
              
              {/* Product Visual Area - Matches Image */}
              <div
                className="w-full h-44 rounded-3xl flex items-center justify-center relative overflow-hidden"
                style={{ background: p.color }}
              >
                <span className="text-4xl font-bold text-[#2D7A8E] tracking-tight">{p.size}</span>
              </div>

              {/* Product Info */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#1A3A42]">{p.name}</h3>
                <p className="text-sm text-[#5A7D87] font-medium opacity-80">{p.desc}</p>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-5 mt-auto border-t border-[#4CA9BC]/10">
                <span className="text-3xl font-bold text-[#2D7A8E]">{p.price}</span>
                <a 
                  href="#contact" 
                  className="text-sm font-bold text-[#4CA9BC] hover:text-[#2D7A8E] flex items-center gap-1 group/btn transition-colors"
                >
                  Order 
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
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