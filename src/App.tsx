import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  Calendar, 
  User, 
  MessageSquare, 
  Menu, 
  X, 
  Award, 
  Sparkles, 
  CheckCircle, 
  ChevronRight, 
  Instagram, 
  Facebook,
  ShieldCheck,
  Coffee,
  Heart
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Corte + Barba',
    date: '',
    time: '14:00',
    notes: ''
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert('Por favor, preencha seu nome, telefone e a data desejada.');
      return;
    }

    const whatsappNumber = '5531991549151';
    const message = `*SOLICITAÇÃO DE AGENDAMENTO - PREMIER BARBEARIA*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *Telefone:* ${formData.phone}\n` +
      `✂️ *Serviço:* ${formData.service}\n` +
      `📅 *Data Desejada:* ${formData.date}\n` +
      `⏰ *Horário:* ${formData.time}\n` +
      `${formData.notes ? `💬 *Observações:* ${formData.notes}\n\n` : '\n'}` +
      `_Olá! Gostaria de verificar a disponibilidade para este horário. Aguardo confirmação!_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    setBookingSuccess(true);
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setBookingSuccess(false);
    }, 6000);
  };

  const servicesList = [
    {
      id: 'corte',
      title: 'Corte Masculino',
      description: 'Corte moderno ou clássico com técnicas avançadas em tesoura e máquina, degradê impecável e lavagem relaxante.',
      duration: 'Aprox. 45 min',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
      tag: 'Mais Procurado'
    },
    {
      id: 'barba',
      title: 'Barba Terapia',
      description: 'Modelagem de barba com toalha quente, óleos essenciais nutritivos, navalha tradicional e acabamento perfeito.',
      duration: 'Aprox. 35 min',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
      tag: 'Relaxante'
    },
    {
      id: 'combo',
      title: 'Combo Corte + Barba',
      description: 'A experiência completa Premier. Cuidado total para o seu visual com atendimento VIP e bebida de cortesia.',
      duration: 'Aprox. 1h 15 min',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
      tag: 'Experiência VIP'
    },
    {
      id: 'acabamento',
      title: 'Acabamento e Pezinho',
      description: 'Manutenção rápida dos contornos do cabelo e barba para manter o visual sempre alinhado entre os cortes.',
      duration: 'Aprox. 20 min',
      image: 'https://images.unsplash.com/photo-1512864082146-239c6ddc616f?auto=format&fit=crop&w=800&q=80',
      tag: 'Manutenção'
    },
    {
      id: 'cuidados',
      title: 'Cuidados e Tratamentos',
      description: 'Hidratação capilar profunda, pigmentação de barba/cabelo e limpeza de pele express masculina.',
      duration: 'Aprox. 40 min',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      tag: 'Especial'
    }
  ];

  const galleryItems = [
    {
      url: '/assets/aistudio/image_a18c4ccb.png',
      category: 'ambiente',
      title: 'Fachada Premier Barbearia'
    },
    {
      url: '/assets/aistudio/image_2c4a9495.png',
      category: 'cortes',
      title: 'Corte Moderno & Degradê'
    },
    {
      url: '/assets/aistudio/image_56656260.png',
      category: 'cortes',
      title: 'Acabamento & Estilo Premier'
    },
    {
      url: '/assets/aistudio/image_01e7d45d.png',
      category: 'barba',
      title: 'Barba Alinhada & Navalha'
    },
    {
      url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80',
      category: 'ambiente',
      title: 'Ambiente Sofisticado'
    },
    {
      url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80',
      category: 'barba',
      title: 'Barba Terapia'
    }
  ];

  const filteredGallery = activeGalleryTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeGalleryTab);

  const testimonials = [
    {
      quote: "Funcionários muito educados e ótimos profissionais na área.",
      author: "Cliente Verificado",
      rating: 5,
      source: "Google Avaliações"
    },
    {
      quote: "Atendimento diferenciado, profissionalismo, pontualidade e corte perfeito.",
      author: "Cliente Verificado",
      rating: 5,
      source: "Google Avaliações"
    },
    {
      quote: "Melhor Barbearia do Vale do Aço.",
      author: "Cliente Verificado",
      rating: 5,
      source: "Google Avaliações"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-[#d4af37] selection:text-black">
      
      {/* HEADER PREMIUM */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-md py-4 border-b border-[#d4af37]/20 shadow-2xl' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#bf953f] via-[#fbf5b7] to-[#aa771c] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Scissors className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-white">
                PREMIER
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#d4af37] font-semibold uppercase">
                Barbearia • Ipatinga
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#inicio" className="text-gray-300 hover:text-[#d4af37] transition-colors">Início</a>
            <a href="#sobre" className="text-gray-300 hover:text-[#d4af37] transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-300 hover:text-[#d4af37] transition-colors">Serviços</a>
            <a href="#galeria" className="text-gray-300 hover:text-[#d4af37] transition-colors">Galeria</a>
            <a href="#avaliacoes" className="text-gray-300 hover:text-[#d4af37] transition-colors">Avaliações</a>
            <a href="#contato" className="text-gray-300 hover:text-[#d4af37] transition-colors">Contato</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="#agendamento"
              className="bg-gradient-to-r from-[#d4af37] via-[#fef08a] to-[#b38728] text-black font-bold px-6 py-2.5 rounded-full text-sm uppercase tracking-wider hover:opacity-95 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all transform hover:-translate-y-0.5"
            >
              Agendar Horário
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-200 hover:text-[#d4af37] p-2 focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#121212] border-b border-[#d4af37]/30 px-6 py-6 shadow-2xl flex flex-col gap-4 animate-fadeIn">
            <a 
              href="#inicio" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-[#d4af37] transition-colors py-2 border-b border-gray-800"
            >
              Início
            </a>
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-[#d4af37] transition-colors py-2 border-b border-gray-800"
            >
              Sobre
            </a>
            <a 
              href="#servicos" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-[#d4af37] transition-colors py-2 border-b border-gray-800"
            >
              Serviços
            </a>
            <a 
              href="#galeria" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-[#d4af37] transition-colors py-2 border-b border-gray-800"
            >
              Galeria
            </a>
            <a 
              href="#avaliacoes" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-[#d4af37] transition-colors py-2 border-b border-gray-800"
            >
              Avaliações
            </a>
            <a 
              href="#contato" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-[#d4af37] transition-colors py-2 border-b border-gray-800"
            >
              Contato
            </a>
            <a 
              href="#agendamento" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center bg-gradient-to-r from-[#d4af37] to-[#b38728] text-black font-bold py-3 rounded-xl uppercase tracking-wider shadow-lg"
            >
              Agendar Horário
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=90" 
            alt="Premier Barbearia Interior" 
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left py-20">
          <div className="max-w-3xl">
            
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-black/60 border border-[#d4af37]/40 backdrop-blur-md px-4 py-2 rounded-full mb-8 shadow-lg">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-white">5.0</span>
              <span className="text-xs text-gray-400">|</span>
              <span className="text-xs text-gray-300 font-medium">53 avaliações no Google</span>
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              SEU ESTILO <br />
              <span className="text-gold-gradient">MERECE O MELHOR.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-normal mb-10 max-w-2xl leading-relaxed">
              Mais que um corte, uma experiência de cuidado, estilo e personalidade na melhor barbearia de Ipatinga.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#agendamento"
                className="w-full sm:w-auto bg-gradient-to-r from-[#d4af37] via-[#fef08a] to-[#b38728] text-black font-bold px-8 py-4 rounded-xl text-base uppercase tracking-wider hover:opacity-95 shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1 text-center"
              >
                Agendar Meu Horário
              </a>
              <a 
                href="#sobre"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl text-base transition-all backdrop-blur-sm text-center"
              >
                Conheça a Premier
              </a>
            </div>

            {/* Quick Info Badges */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 uppercase tracking-wider">Localização</h4>
                  <p className="text-sm font-semibold text-white">Iguaçu, Ipatinga - MG</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 uppercase tracking-wider">Horário</h4>
                  <p className="text-sm font-semibold text-white">Aberta hoje até 20:00</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 uppercase tracking-wider">Reputação</h4>
                  <p className="text-sm font-semibold text-white">Excelência 5 Estrelas</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SOBRE SECTION */}
      <section id="sobre" className="py-24 bg-[#111] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl">
                <img 
                  src="/assets/aistudio/image_a18c4ccb.png" 
                  alt="Fachada Premier Barbearia Ipatinga" 
                  className="w-full h-[450px] sm:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/70 backdrop-blur-md rounded-xl border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#d4af37] text-black flex items-center justify-center font-bold text-xl shrink-0">
                      5.0
                    </div>
                    <div>
                      <h4 className="font-cinzel text-white font-bold text-lg">Nossa Fachada • Iguaçu, Ipatinga</h4>
                      <p className="text-sm text-gray-300">Av. Brasil, 630 • Aberta até 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Accent */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none"></div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-[#d4af37] font-semibold text-sm tracking-widest uppercase mb-3">
                <Sparkles className="w-4 h-4" />
                Tradição & Modernidade
              </div>

              <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                EXCELÊNCIA EM <br />
                <span className="text-gold-gradient">CADA DETALHE.</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                A <strong className="text-white">Premier Barbearia</strong> nasceu com o propósito de elevar o conceito de cuidados masculinos em Ipatinga, Minas Gerais. Localizada no coração do bairro Iguaçu, oferecemos um espaço onde a tradição da barbearia clássica encontra as tendências mais modernas do estilo masculino.
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Nosso compromisso é proporcionar um ambiente agradável e aconchegante, pontualidade rigorosa e atendimento personalizado para que cada cliente tenha uma experiência única de bem-estar e renovação.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-black/40 p-4 rounded-xl border border-white/5">
                  <div className="mt-1 text-[#d4af37]">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Atendimento VIP</h4>
                    <p className="text-xs text-gray-400 mt-1">Personalizado para cada perfil e estilo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-black/40 p-4 rounded-xl border border-white/5">
                  <div className="mt-1 text-[#d4af37]">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Profissionais Especializados</h4>
                    <p className="text-xs text-gray-400 mt-1">Constantemente atualizados nas melhores técnicas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-black/40 p-4 rounded-xl border border-white/5">
                  <div className="mt-1 text-[#d4af37]">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Ambiente Aconchegante</h4>
                    <p className="text-xs text-gray-400 mt-1">Espaço climatizado, confortável e exclusivo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-black/40 p-4 rounded-xl border border-white/5">
                  <div className="mt-1 text-[#d4af37]">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Pontualidade Absoluta</h4>
                    <p className="text-xs text-gray-400 mt-1">Respeito total ao seu tempo e agenda.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SERVIÇOS SECTION */}
      <section id="servicos" className="py-24 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d4af37] font-semibold text-sm tracking-widest uppercase block mb-3">
              O Melhor Para O Seu Visual
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-4">
              NOSSOS <span className="text-gold-gradient">SERVIÇOS</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Técnica refinada, produtos de primeira linha e um resultado impecável para realçar sua melhor versão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div 
                key={service.id}
                className="bg-[#141414] rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-[#d4af37] text-xs font-semibold px-3 py-1 rounded-full border border-[#d4af37]/30">
                      {service.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                        {service.duration}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <a 
                    href="#agendamento"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: service.title }));
                    }}
                    className="w-full bg-white/5 hover:bg-[#d4af37] hover:text-black text-[#d4af37] border border-[#d4af37]/40 font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                  >
                    <span>Agendar Este Serviço</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-[#121212] border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-sm text-gray-300">
              💡 <strong className="text-white">Nota importante:</strong> Para garantir um atendimento exclusivo e personalizado, consulte valores e horários disponíveis diretamente pelo nosso WhatsApp ou através do formulário de agendamento abaixo.
            </p>
          </div>

        </div>
      </section>

      {/* GALERIA SECTION */}
      <section id="galeria" className="py-24 bg-[#111] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#d4af37] font-semibold text-sm tracking-widest uppercase block mb-3">
              Nossos Trabalhos & Espaço
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-4">
              GALERIA <span className="text-gold-gradient">PREMIER</span>
            </h2>
            <p className="text-gray-400 text-base">
              Inspire-se com alguns dos nossos cortes, acabamentos e o ambiente sofisticado da barbearia.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button 
              onClick={() => setActiveGalleryTab('all')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeGalleryTab === 'all' 
                  ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                  : 'bg-black/40 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              Todos
            </button>
            <button 
              onClick={() => setActiveGalleryTab('cortes')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeGalleryTab === 'cortes' 
                  ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                  : 'bg-black/40 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              Cortes
            </button>
            <button 
              onClick={() => setActiveGalleryTab('barba')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeGalleryTab === 'barba' 
                  ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                  : 'bg-black/40 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              Barba
            </button>
            <button 
              onClick={() => setActiveGalleryTab('ambiente')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeGalleryTab === 'ambiente' 
                  ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                  : 'bg-black/40 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              Ambiente
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <div 
                key={index}
                onClick={() => setSelectedImage(item.url)}
                className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer border border-[#d4af37]/20 shadow-lg"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-1">Premier Barbearia</span>
                  <h4 className="font-cinzel text-white font-bold text-xl">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#d4af37] p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Ampliada" 
              className="w-full max-h-[85vh] object-contain rounded-xl border border-[#d4af37]/40 shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* AVALIAÇÕES SECTION */}
      <section id="avaliacoes" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d4af37] font-semibold text-sm tracking-widest uppercase block mb-3">
              Reputação Impecável
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-6">
              QUEM CONHECE, <span className="text-gold-gradient">RECOMENDA.</span>
            </h2>
            
            {/* Google Stats Box */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#141414] border border-[#d4af37]/30 px-8 py-6 rounded-2xl shadow-xl">
              <div className="text-center sm:text-left">
                <span className="font-cinzel text-4xl font-extrabold text-white block">5,0</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">DE 5,0 ESTRELAS</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-800"></div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-800"></div>
              <div className="text-center sm:text-left">
                <span className="font-bold text-white text-lg block">53 Avaliações</span>
                <span className="text-xs text-[#d4af37] font-medium">Verificadas no Google</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div 
                key={index}
                className="bg-[#141414] p-8 rounded-2xl border border-[#d4af37]/20 flex flex-col justify-between shadow-xl relative group hover:border-[#d4af37]/60 transition-all"
              >
                <div>
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-200 text-lg italic leading-relaxed mb-8">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div>
                    <h4 className="font-semibold text-white text-sm">{item.author}</h4>
                    <span className="text-xs text-[#d4af37]">{item.source}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://maps.google.com/?q=Premier+Barbearia+Ipatinga" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4af37] hover:underline"
            >
              <span>Ver todas as avaliações no Google Maps</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* SEÇÃO DE AGENDAMENTO (WHATSAPP) */}
      <section id="agendamento" className="py-24 bg-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12">
            <span className="text-[#d4af37] font-semibold text-sm tracking-widest uppercase block mb-3">
              Rápido & Prático
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-4">
              SEU PRÓXIMO CORTE <span className="text-gold-gradient">COMEÇA AQUI.</span>
            </h2>
            <p className="text-gray-300 text-base">
              Preencha os dados abaixo e solicite o seu agendamento diretamente pelo nosso WhatsApp oficial.
            </p>
          </div>

          <div className="bg-[#181818] border border-[#d4af37]/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
            
            {bookingSuccess && (
              <div className="mb-8 p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-emerald-300 text-center flex items-center justify-center gap-2 animate-fadeIn">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Solicitação gerada com sucesso! O WhatsApp foi aberto para você enviar a mensagem.</span>
              </div>
            )}

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Seu Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: João da Silva" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#111] border border-gray-800 focus:border-[#d4af37] rounded-xl px-4 py-3.5 pl-12 text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Seu WhatsApp / Telefone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="tel" 
                      required
                      placeholder="Ex: (31) 99999-9999" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#111] border border-gray-800 focus:border-[#d4af37] rounded-xl px-4 py-3.5 pl-12 text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Serviço Desejado *
                  </label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-[#111] border border-gray-800 focus:border-[#d4af37] rounded-xl px-4 py-3.5 text-white focus:outline-none transition-colors"
                  >
                    <option value="Corte Masculino">Corte Masculino</option>
                    <option value="Barba Terapia">Barba Terapia</option>
                    <option value="Corte + Barba">Combo Corte + Barba</option>
                    <option value="Acabamento e Pezinho">Acabamento e Pezinho</option>
                    <option value="Cuidados e Tratamentos">Cuidados e Tratamentos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Data Desejada *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-[#111] border border-gray-800 focus:border-[#d4af37] rounded-xl px-4 py-3.5 pl-12 text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Horário Preferido *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <select 
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-[#111] border border-gray-800 focus:border-[#d4af37] rounded-xl px-4 py-3.5 pl-12 text-white focus:outline-none transition-colors"
                    >
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Observações (Opcional)
                </label>
                <textarea 
                  rows={3}
                  placeholder="Ex: Prefiro o barbeiro X, ou tenho preferência por degradê baixo..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-[#111] border border-gray-800 focus:border-[#d4af37] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#d4af37] via-[#fef08a] to-[#b38728] text-black font-extrabold py-4 rounded-xl text-base uppercase tracking-wider hover:opacity-95 shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5 fill-black" />
                  <span>Solicitar Agendamento via WhatsApp</span>
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">
                  * O horário é uma solicitação e passará por confirmação rápida da nossa equipe via WhatsApp.
                </p>
              </div>

            </form>

          </div>

        </div>
      </section>

      {/* LOCALIZAÇÃO SECTION */}
      <section id="contato" className="py-24 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[#d4af37] font-semibold text-sm tracking-widest uppercase block mb-3">
                Venha Nos Visitar
              </span>
              <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-6">
                ESTAMOS ESPERANDO <br />
                <span className="text-gold-gradient">POR VOCÊ.</span>
              </h2>

              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Localizada em ponto estratégico de fácil acesso no bairro Iguaçu em Ipatinga, nossa barbearia conta com todo o conforto que você merece.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Endereço</h4>
                    <p className="text-sm text-gray-300 mt-1">Av. Brasil, 630 - Iguaçu, Ipatinga - MG, 35162-036</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">WhatsApp / Contato</h4>
                    <p className="text-sm text-gray-300 mt-1">(31) 99154-9151</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Horário de Funcionamento</h4>
                    <p className="text-sm text-gray-300 mt-1">Segunda a Sábado: 09:00 às 20:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="https://maps.google.com/?q=Av.+Brasil,+630+-+Iguaçu,+Ipatinga+-+MG,+35162-036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-xl transition-all backdrop-blur-sm"
                >
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                  <span>Como Chegar (Google Maps)</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="lg:col-span-7">
              <div className="h-[450px] w-full rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl">
                <iframe 
                  title="Premier Barbearia Localização"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.869874801124!2d-42.508316!3d-19.482456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa38c7f20252e1f%3A0x6b63d91cf32d206f!2sAv.%20Brasil%2C%20630%20-%20Igua%C3%A7u%2C%20Ipatinga%20-%20MG%2C%2035162-036!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-900 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#bf953f] to-[#aa771c] flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-black" />
                </div>
                <div>
                  <span className="font-cinzel text-xl font-bold tracking-wider text-white">
                    PREMIER
                  </span>
                  <span className="block text-[10px] tracking-[0.25em] text-[#d4af37] font-semibold uppercase">
                    Barbearia
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A excelência em cortes, barba e cuidados masculinos em Ipatinga - MG. Mais que um visual, um estilo de vida.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#141414] border border-gray-800 flex items-center justify-center text-gray-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#141414] border border-gray-800 flex items-center justify-center text-gray-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-cinzel text-white font-bold text-base mb-6 tracking-wide">Navegação</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#inicio" className="text-gray-400 hover:text-[#d4af37] transition-colors">Início</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-[#d4af37] transition-colors">Sobre a Premier</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-[#d4af37] transition-colors">Nossos Serviços</a></li>
                <li><a href="#galeria" className="text-gray-400 hover:text-[#d4af37] transition-colors">Galeria de Fotos</a></li>
                <li><a href="#avaliacoes" className="text-gray-400 hover:text-[#d4af37] transition-colors">Avaliações Google</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-cinzel text-white font-bold text-base mb-6 tracking-wide">Serviços</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#servicos" className="text-gray-400 hover:text-[#d4af37] transition-colors">Corte Masculino</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-[#d4af37] transition-colors">Barba Terapia</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-[#d4af37] transition-colors">Combo Corte + Barba</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-[#d4af37] transition-colors">Acabamento e Pezinho</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-[#d4af37] transition-colors">Cuidados e Tratamentos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-cinzel text-white font-bold text-base mb-6 tracking-wide">Contato Direto</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Av. Brasil, 630 - Iguaçu, Ipatinga - MG</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>(31) 99154-9151</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>Seg - Sáb: 09:00 às 20:00</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Premier Barbearia. Todos os direitos reservados.</p>
            <p className="mt-2 sm:mt-0 flex items-center gap-1">
              Feito com <Heart className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" /> para Ipatinga - MG
            </p>
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="https://wa.me/5531991549151?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20horários%20e%20serviços%20da%20Premier%20Barbearia."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all transform hover:scale-110 group relative"
          aria-label="Contato WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-white" />
          <span className="absolute right-full mr-3 bg-[#141414] text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-emerald-500/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
            Fale conosco no WhatsApp
          </span>
        </a>
      </div>

    </div>
  );
}
