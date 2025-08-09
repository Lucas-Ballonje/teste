import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground font-body">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo e descrição */}
          <div>
            <h2 className="font-headline text-2xl font-bold text-accent">
              Lv Advogados
            </h2>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Seu parceiro de confiança na busca por justiça. Consultoria
              jurídica especializada, com integridade e dedicação.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-headline text-lg font-semibold uppercase tracking-wider">
              Contato
            </h3>
            <div className="mt-4 flex flex-col space-y-3">
              <p className="flex items-center text-sm">
                <MapPin className="mr-3 h-4 w-4 text-accent" />
                Rua mexicana 260
              </p>
              <a
                href="mailto:contato@lexconnect.com"
                className="flex items-center text-sm hover:text-accent transition-colors"
              >
                <Mail className="mr-3 h-4 w-4 text-accent" />
                lv.advass2025@gmail.com
              </a>
              <a
                href="tel:+5511947507228"
                className="flex items-center text-sm hover:text-accent transition-colors"
              >
                <Phone className="mr-3 h-4 w-4 text-accent" />
                (11) 94750-7228
              </a>
              <a
                href="tel:+5511951076572"
                className="flex items-center text-sm hover:text-accent transition-colors"
              >
                <Phone className="mr-3 h-4 w-4 text-accent" />
                (11) 95107-6572
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-headline text-lg font-semibold uppercase tracking-wider">
              Links Rápidos
            </h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link
                href="#about"
                className="text-sm hover:text-accent transition-colors"
              >
                Sobre Nós
              </Link>
              <Link
                href="#specialties"
                className="text-sm hover:text-accent transition-colors"
              >
                Áreas de Atuação
              </Link>
              <Link
                href="#why-us"
                className="text-sm hover:text-accent transition-colors"
              >
                Por que Escolher a LexConnect
              </Link>
              <Link
                href="#schedule"
                className="text-sm hover:text-accent transition-colors"
              >
                Agendar Consulta
              </Link>
            </nav>
          </div>

          {/* Áreas de prática */}
          <div>
            <h3 className="font-headline text-lg font-semibold uppercase tracking-wider">
              Áreas de Prática
            </h3>
            <div className="mt-4 flex flex-col space-y-2 text-sm text-primary-foreground/80">
              <p>Direito Empresarial</p>
              <p>Direito de Família</p>
              <p>Defesa Criminal</p>
              <p>Direito Imobiliário</p>
              <p>Propriedade Intelectual</p>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} LexConnect. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
