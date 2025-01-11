import { motion } from 'framer-motion';
import { Drama, Shield } from 'lucide-react';
export default function CyberSecurity() {
    return (
        <>
            <section className="min-h-screen pt-16 bg-gradient-to-b heroSection" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Cyber security skills
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Red team, Blue team, Pentestitng
                        </p>
                    </motion.div>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                icon: <Drama className="h-10 w-10" />,
                                title: "Penetration Testing",
                                description: "Simulating attacks to identify and mitigate vulnerabilities in systems and networks.",
                            },
                            {
                                icon: <Shield className="h-10 w-10" />,
                                title: "Network Defense",
                                description: "Implementing strategies to protect systems against unauthorized access and attacks.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow card"
                            >
                                <div className="text-[#853dcc] mb-4 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-12"
                    >
                        <ul className="list-disc list-inside text-left max-w-2xl mx-auto text-2xl font-mono " style={{ textShadow: "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00" }}>
                            <li>Security Information and Event Management</li>
                            <li>Incident Response</li>
                            <li>Reconnaissance</li>
                            <li>Vulnerability Scanning and Reporting</li>
                            <li>System and network compromising</li>
                            <li>Compromising platforms</li>
                            <li>Cryptography and Encryption Techniques</li>
                        </ul>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
