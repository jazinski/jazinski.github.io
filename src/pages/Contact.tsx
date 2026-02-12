export default function Contact() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "hello@jazinski.dev",
      link: "mailto:hello@jazinski.dev",
      description: "For project inquiries and general questions"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "@jazinski",
      link: "https://github.com/jazinski",
      description: "Check out my open source work"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/jazinski",
      description: "Let's grow our professional network"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 gold-glow">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-400">
          Let's discuss how we can work together to bring your ideas to life
        </p>
      </div>

      {/* Contact Methods Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {contactMethods.map((method) => (
          <a
            key={method.title}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-geometric p-8 text-center animate-on-scroll group"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-br from-jazinski-gold to-jazinski-gold-light flex items-center justify-center">
              <span className="text-3xl">{method.icon}</span>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-2">{method.title}</h2>
            <p className="text-jazinski-gold font-semibold mb-3">{method.value}</p>
            <p className="text-gray-400 text-sm">{method.description}</p>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="card-geometric p-8 md:p-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center gold-glow">
          Send Me a Message
        </h2>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-dark-base border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-jazinski-gold focus:ring-2 focus:ring-jazinski-gold/20 transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-dark-base border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-jazinski-gold focus:ring-2 focus:ring-jazinski-gold/20 transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 bg-dark-base border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-jazinski-gold focus:ring-2 focus:ring-jazinski-gold/20 transition-all"
              placeholder="Project Inquiry"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 bg-dark-base border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-jazinski-gold focus:ring-2 focus:ring-jazinski-gold/20 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          
          <button
            type="submit"
            className="btn-primary w-full text-lg py-4"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Additional Info */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-4">
          I typically respond within 24-48 hours
        </p>
        <p className="text-sm text-gray-500">
          Looking forward to hearing from you! 🚀
        </p>
      </div>
    </div>
  );
}
