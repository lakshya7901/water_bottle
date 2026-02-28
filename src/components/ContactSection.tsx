import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Order form submitted:", formData);
    
    // Simulate API call
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
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-bold text-primary tracking-widest uppercase">
            For Distributors & Shop Owners
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Place Your <span className="text-gradient-water">Order</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Fill in your details below and our team will get back to you within 24 hours to confirm delivery.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Sidebar */}
          <motion.div
            className="glass-card p-8 flex flex-col gap-8 h-fit"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground">Get in Touch</h3>
            <div className="space-y-6">
              <ContactInfoItem 
                icon={<Phone className="w-5 h-5 text-primary" />} 
                label="Phone" 
                value="+91 98765 43210" 
              />
              <ContactInfoItem 
                icon={<Mail className="w-5 h-5 text-primary" />} 
                label="Email" 
                value="orders@aquapure.in" 
              />
              <ContactInfoItem 
                icon={<MapPin className="w-5 h-5 text-primary" />} 
                label="Head Office" 
                value="AquaPure Industries Ltd, Mumbai, Maharashtra" 
              />
            </div>
          </motion.div>

          {/* Order Form */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className={cn(
                "glass-card-highlight p-8 flex flex-col gap-6 transition-all duration-500",
                submitted && "opacity-20 pointer-events-none scale-[0.98]"
              )}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <FormInput label="Shop Name *" placeholder="Enter shop name" value={formData.shopName} onChange={(v) => handleChange("shopName", v)} required />
                <FormInput label="Owner Name *" placeholder="Your full name" value={formData.ownerName} onChange={(v) => handleChange("ownerName", v)} required />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormInput label="Phone Number *" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(v) => handleChange("phone", v)} required />
                <FormInput label="Email Address" type="email" placeholder="shop@example.com" value={formData.email} onChange={(v) => handleChange("email", v)} />
              </div>

              <FormInput label="Delivery Address *" placeholder="Detailed address for delivery" value={formData.address} onChange={(v) => handleChange("address", v)} required />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-foreground/80">Product Selection *</label>
                  <select
                    required
                    className="glass-input h-[50px] cursor-pointer"
                    value={formData.product}
                    onChange={(e) => handleChange("product", e.target.value)}
                  >
                    <option value="">Select a size</option>
                    <option value="500ml">AquaPure 500ml (24/case)</option>
                    <option value="1L">AquaPure 1L (12/case)</option>
                    <option value="20L">AquaPure 20L Can (Refillable)</option>
                  </select>
                </div>
                <FormInput label="Quantity (in cases) *" type="number" placeholder="Min. 5 cases" value={formData.quantity} onChange={(v) => handleChange("quantity", v)} required min="1" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-foreground/80">Special Instructions</label>
                <textarea
                  rows={3}
                  className="glass-input py-3 resize-none"
                  placeholder="Tell us about preferred delivery time..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
              </div>

              <button type="submit" className="btn-water w-full py-4 text-lg flex items-center justify-center gap-3 mt-2 shadow-lg">
                <Send className="w-5 h-5" />
                Submit Order Request
              </button>
            </form>

            {/* Success Overlay */}
            <AnimatePresence>
              {submitted && (
                <motion.div 
                  className="absolute inset-0 flex flex-col items-center justify-center text-center z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <div className="bg-white rounded-full p-4 shadow-xl mb-4">
                    <CheckCircle2 className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary">Order Received!</h3>
                  <p className="text-muted-foreground mt-2">Thank you, Papa Ji. We will contact you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* Small helper components to keep code clean */
const ContactInfoItem = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-primary/10 rounded-xl">{icon}</div>
    <div>
      <p className="text-xs font-bold text-primary uppercase tracking-tighter">{label}</p>
      <p className="text-sm font-medium text-foreground leading-snug">{value}</p>
    </div>
  </div>
);

const FormInput = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold text-foreground/80">{label}</label>
    <input 
      {...props} 
      className="glass-input h-[50px]" 
      onChange={(e) => props.onChange(e.target.value)} 
    />
  </div>
);

export default ContactSection;