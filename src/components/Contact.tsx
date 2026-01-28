import { motion } from 'framer-motion';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('messages').insert([formData]);
      if (error) throw error;

      toast.success('Message sent successfully!', {
        style: { background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' },
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send. Try emailing directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <Toaster position="bottom-center" />
      <div className="divider mb-24" />
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-mono text-accent">04</span>
            <h2 className="heading-section text-[var(--text)]">Get in Touch</h2>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div>
              <p className="text-body text-xl mb-8">
                I'm currently looking for new opportunities.
                Whether you have a project in mind or just want to connect,
                I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:illurukarthik991@gmail.com"
                  className="card card-hover flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Email</p>
                    <p className="font-medium text-[var(--text)]">illurukarthik991@gmail.com</p>
                  </div>
                  <ArrowUpRight size={18} className="text-[var(--text-muted)] group-hover:text-accent transition-colors" />
                </a>

                <div className="card flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-mint/10 text-mint">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Location</p>
                    <p className="font-medium text-[var(--text)]">Kurnool, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <form onSubmit={handleSubmit} className="card space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
