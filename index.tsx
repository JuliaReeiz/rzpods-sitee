
import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 p-6 text-white">
      <section className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-2">Rzpods</h1>
          <p className="text-lg">Vapes e Cigarros Eletrônicos com estilo</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl shadow-lg">
            <div className="bg-white text-black rounded-2xl overflow-hidden p-4">
              <img
                src="/vape1.jpg"
                alt="Ignite V80"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">Ignite V80</h2>
              <p className="mb-2">Ignite V80, diversos sabores.</p>
              <p className="mb-4 font-bold">R$ 80,00</p>
              <button
                className="w-full bg-green-600 text-white hover:bg-green-700 py-2 px-4 rounded-xl"
                onClick={() =>
                  window.open(
                    'https://wa.me/5511983634751?text=Olá,+quero+comprar+o+Ignite+V80+por+Pix.+Minha+chave+Pix+é:+11983634751',
                    '_blank'
                  )
                }
              >
                Comprar via Pix (WhatsApp)
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
