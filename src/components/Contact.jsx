import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-sm"
        >
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-[#853dcc]" />
              <div>
                <p className="text-gray-600">Email</p>
                <a href="mailto:harmox_velikov@abv.bg" className="text-gray-900 hover:text-[#853dcc] transition-colors">
                  harmox_velikov@abv.bg
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-[#853dcc]" />
              <div>
                <p className="text-gray-600">Phone</p>
                <a href="tel:+359876934882" className="text-gray-900 hover:text-[#853dcc] transition-colors">
                  +359 876 934 882
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-[#853dcc]" />
              <div>
                <p className="text-gray-600">Location</p>
                <p className="text-gray-900">Sofia, Bulgaria</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}