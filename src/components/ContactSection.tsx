import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    shopName: "", ownerName: "", phone: "", email: "", 
    address: "", product: "", quantity: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ 
        shopName: "", ownerName: "", phone: "", email: "", 
        address: "", product: "", quantity: "", message: "" 
      });
    }, 4000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white/30 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        
        {/* Header - Exact Match to Image */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A3A42]">
            Place Your <span className="text-[#4CA9BC]">Order</span>
          </h2>
          <p className="text-[#5A7D87] mt-4 max-w-lg mx-auto text-sm md:text-base">
            Fill in your details below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Contact Info Sidebar - Clean Layout */}
          <motion.div
            className="p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/20 shadow-xl flex flex-col gap-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#1A3A42]">Get in Touch</h3>
            <div className="space-y-6">
              <ContactInfoItem icon={<Phone size={20}/>} label="Phone" value="+91 98765 43210" />
              <ContactInfoItem icon={<Mail size={20}/>} label="Email" value="orders@aquapure.in" />
              <ContactInfoItem icon={<MapPin size={20}/>} label="Head Office" value="AquaPure Industries Ltd, Mumbai, India" />
            </div>
          </motion.div>

          {/* Order Form - Professional Styling */}
          <motion.div
            className="lg:col-span-2 relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className={cn(
                "p-8 md:p-10 rounded-[2.5rem] bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl flex flex-col gap-6",
                submitted && "opacity-10 pointer-events-none scale-[0.98] blur-sm transition-all"
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="Shop Name *" placeholder="ss" value={formData.shopName} onChange={(v) => handleChange("shopName", v)} required />
                <FormInput label="Owner Name *" placeholder="Full name" value={formData.ownerName} onChange={(v) => handleChange("ownerName", v)} required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="Phone *" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(v) => handleChange("phone", v)} required />
                <FormInput label="Email" type="email" placeholder="email@example.com" value={formData.email} onChange={(v) => handleChange("email", v)} />
              </div>

              <FormInput label="Delivery Address *" placeholder="Full delivery address" value={formData.address} onChange={(v) => handleChange("address", v)} required />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#1A3A42]/80">Product *</label>
                  <select
                    required
                    className="w-full h-[55px] px-4 rounded-xl bg-white/50 border border-[#2D7A8E]/20 outline-none focus:border-[#4CA9BC] transition-all appearance-none cursor-pointer"
                    value={formData.product}
                    onChange={(e) => handleChange("product", e.target.value)}
                  >
                    <option value="">Select product</option>
                    <option value="500ml">500ml Bottle Pack</option>
                    <option value="1L">1L Bottle Pack</option>
                    <option value="20L">20L Water Can</option>
                  </select>
                </div>
                <FormInput label="Quantity (cases) *" type="number" placeholder="e.g. 50" value={formData.quantity} onChange={(v) => handleChange("quantity", v)} required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#1A3A42]/80">Additional Message</label>
                <textarea
                  rows={4}
                  className="w-full p-4 rounded-xl bg-white/50 border border-[#2D7A8E]/20 outline-none focus:border-[#4CA9BC] transition-all resize-none"
                  placeholder="Any special instructions..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
              </div>

              <button type="submit" className="w-full py-5 rounded-2xl bg-[#4CA9BC] hover:bg-[#2D7A8E] text-white font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95">
                <Send size={20} /> Submit Order Request
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div 
                  className="absolute inset-0 flex flex-col items-center justify-center text-center z-20"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                >
                  <div className="bg-white rounded-full p-5 shadow-2xl mb-4 text-[#4CA9BC]">
                    <CheckCircle2 size={60} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D7A8E]">Order Received!</h3>
                  <p className="text-[#5A7D87] mt-2">Hum aapse jald hi sampark karenge.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-start gap-5 group">
    <div className="p-4 bg-[#4CA9BC]/10 rounded-2xl text-[#2D7A8E] group-hover:bg-[#4CA9BC] group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-[#4CA9BC] tracking-widest uppercase mb-1">{label}</p>
      <p className="text-sm font-semibold text-[#1A3A42] leading-snug">{value}</p>
    </div>
  </div>
);

const FormInput = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold text-[#1A3A42]/80">{label}</label>
    <input 
      {...props} 
      className="w-full h-[55px] px-4 rounded-xl bg-white/50 border border-[#2D7A8E]/20 outline-none focus:border-[#4CA9BC] transition-all" 
      onChange={(e) => props.onChange(e.target.value)} 
    />
  </div>
);

export default ContactSection;