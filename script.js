// Estatísticas do GitHub
fetch('https://api.github.com/users/madu-huida')
  .then(res => res.json())
  .then(data => {
    if (data.public_repos == null) return;
    document.getElementById('github-repos').textContent = data.public_repos;
    document.getElementById('github-followers').textContent = data.followers;
  })
  .catch(() => {});

// Destaca o item da navbar conforme a seção visível
const links = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('main section');

const onScroll = () => {
  const y = scrollY + 200;
  sections.forEach(sec => {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      links.forEach(a => a.classList.toggle('active', a.hash === '#' + sec.id));
    }
  });
};

addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Internacionalização (PT-BR / EN)
const translations = {
  pt: {
    'nav-about': 'Sobre',
    'nav-skills': 'Ferramentas',
    'nav-projects': 'Projetos',
    'nav-contact': 'Contato',
    'hero-status': 'Disponível para Oportunidades',
    'hero-location': 'Joinville, SC – Brasil',
    'hero-subtitle': 'Desenvolvedora Full-Stack em formação com foco na construção de aplicações escaláveis, seguras e de alto desempenho.',
    'hero-btn-projects': 'Ver Projetos',
    'hero-btn-contact': 'Fale Comigo',
    'about-title': 'Resumo & Mindset',
    'about-text': 'Alio a sólida fundamentação teórica da Engenharia de Software ao desenvolvimento prático de soluções reais. Possuo perfil autodidata, forte resiliência e facilidade para assimilar arquiteturas complexas e documentações globais.',
    'tag-self': 'Autogestão',
    'tag-agile': 'Resolução Ágil',
    'tag-comm': 'Comunicação Assertiva',
    'edu-title': 'Formação Acadêmica',
    'edu-degree': 'Bacharelado em Engenharia de Software',
    'edu-period': '2024 – Presente (Joinville, SC)',
    'lang-title': 'Comunicação Global',
    'lang-name': 'Inglês',
    'lang-level': 'Avançado / C1',
    'lang-desc': 'Leitura e interpretação fluente de documentações técnicas, RFCs e participação em discussões internacionais.',
    'stat-repos': 'Repositórios',
    'stat-followers': 'Seguidores',
    'stat-btn': 'Acessar @Madu-huida',
    'skills-title': 'Ferramentas & <span class="highlight">Tecnologias</span>',
    'skills-desc': 'Stack técnica consolidada através da Engenharia de Software e prática em projetos reais.',
    'tech-lang': 'Linguagem',
    'tech-versioning': 'Versionamento',
    'tech-github': 'DevOps / Repositório',
    'projects-title': 'Projetos em <span class="highlight">Destaque</span>',
    'projects-desc': 'Aplicações completas com arquitetura robusta, segurança e foco em valor prático.',
    'btn-repo': 'Repositório',
    'highlights-title': 'Destaques de Engenharia:',
    'p1-badge': 'Arquitetura Industrial & Gestão de Ativos',
    'p1-desc': 'Aplicação web completa para centralização de ativos industriais e prediais com orquestração do ciclo de vida de Ordens de Manutenção preventivas e corretivas.',
    'p1-h1': 'Controle de acesso granular baseado em papéis (RBAC) com autenticação stateless via JWT.',
    'p1-h2': 'Modelagem de máquina de estados finita para controle rígido das transições de chamados.',
    'p1-h3': 'Integridade referencial ACID com cálculo dinâmico de custos e tempo de inatividade (downtime).',
    'p2-badge': 'Comunidades & Governança Multinível',
    'p2-title': 'MAGUGI – Plataforma de Fóruns & Comunidades',
    'p2-desc': 'Plataforma colaborativa com tópicos dinâmicos de discussão, árvores de comentários aninhados e interações em tempo real estruturadas para alta escalabilidade.',
    'p2-h1': 'Sistema hierárquico de governança e moderação multinível com matriz de permissões validada nas rotas da API.',
    'p2-h2': 'Persistência orientada a UUID para mitigação de ataques por enumeração (IDOR).',
    'p2-h3': 'Arquitetura relacional otimizada para integridade de relacionamentos complexos.',
    'p3-badge': 'Impacto Social & Comércio Regional',
    'p3-desc': 'Vitrine virtual web responsiva desenvolvida para mitigar a invisibilidade digital do comércio regional e impulsionar a agricultura familiar.',
    'p3-h1': 'Conexão ponta a ponta entre feirantes locais, organizadores de eventos e consumidores finais.',
    'p3-h2': 'Interface fluida e acessível focada na usabilidade de feirantes autônomos.',
    'p3-h3': 'Integração de catálogo com geolocalização e banco de dados relacional.',
    'contact-title': 'Vamos <span class="highlight">Conversar?</span>',
    'contact-desc': 'Aberta a oportunidades de emprego.',
    'contact-mail': 'E-mail',
    'contact-phone': 'WhatsApp / Telefone',
    'footer-text': '© Desenvolvido com HTML5, CSS3 e JavaScript.'
  },
  en: {
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    'hero-status': 'Available for Opportunities',
    'hero-location': 'Joinville, SC – Brazil',
    'hero-subtitle': 'Full-Stack Developer in training focused on building scalable, secure, and high-performance applications.',
    'hero-btn-projects': 'View Projects',
    'hero-btn-contact': 'Get in Touch',
    'about-title': 'Summary & Mindset',
    'about-text': 'I combine solid theoretical foundations in Software Engineering with hands-on development of real-world solutions. Self-taught, resilient, and quick to assimilate complex architectures and global documentation.',
    'tag-self': 'Self-Management',
    'tag-agile': 'Agile Problem Solving',
    'tag-comm': 'Assertive Communication',
    'edu-title': 'Education',
    'edu-degree': 'Bachelor\'s in Software Engineering',
    'edu-period': '2024 – Present (Joinville, SC)',
    'lang-title': 'Global Communication',
    'lang-name': 'English',
    'lang-level': 'Advanced / C1',
    'lang-desc': 'Fluent reading and interpretation of technical documentation, RFCs, and participation in international discussions.',
    'stat-repos': 'Repositories',
    'stat-followers': 'Followers',
    'stat-btn': 'Access @Madu-huida',
    'skills-title': 'Tools & <span class="highlight">Technologies</span>',
    'skills-desc': 'Technical stack consolidated through Software Engineering and hands-on practice in real-world projects.',
    'tech-lang': 'Language',
    'tech-versioning': 'Version Control',
    'tech-github': 'DevOps / Repository',
    'projects-title': 'Featured <span class="highlight">Projects</span>',
    'projects-desc': 'Full-stack applications with robust architecture, security, and focus on practical value.',
    'btn-repo': 'Repository',
    'highlights-title': 'Engineering Highlights:',
    'p1-badge': 'Industrial Architecture & Asset Management',
    'p1-desc': 'Complete web application for industrial and building asset centralization with lifecycle orchestration of preventive and corrective Maintenance Orders.',
    'p1-h1': 'Granular role-based access control (RBAC) with stateless JWT authentication.',
    'p1-h2': 'Finite state machine modeling for strict management of ticket workflow transitions.',
    'p1-h3': 'ACID referential integrity with dynamic downtime and cost calculations.',
    'p2-badge': 'Communities & Multi-level Governance',
    'p2-title': 'MAGUGI – Forums & Communities Platform',
    'p2-desc': 'Collaborative platform with dynamic discussion topics, nested comment trees, and real-time interactions structured for high scalability.',
    'p2-h1': 'Hierarchical multi-level governance and moderation system with permission matrix validated at API routes.',
    'p2-h2': 'UUID-oriented persistence mitigating enumeration attacks (IDOR).',
    'p2-h3': 'Relational architecture optimized for integrity across complex relationships.',
    'p3-badge': 'Social Impact & Regional Commerce',
    'p3-desc': 'Responsive web showcase built to mitigate digital invisibility of regional commerce and empower family farming.',
    'p3-h1': 'End-to-end connection between local stallholders, event organizers, and end consumers.',
    'p3-h2': 'Fluid, accessible interface tailored to the usability needs of independent vendors.',
    'p3-h3': 'Catalog integration with geolocation and relational database.',
    'contact-title': 'Let\'s <span class="highlight">Connect!</span>',
    'contact-desc': 'Open to job opportunities.',
    'contact-mail': 'Email',
    'contact-phone': 'WhatsApp / Phone',
    'footer-text': '© Built with HTML5, CSS3, and JavaScript.'
  }
};

const langToggle = document.getElementById('lang-toggle');
const langSwitch = document.querySelector('.lang-switch');

function setLanguage(lang) {
  const isEn = lang === 'en';
  langToggle.checked = isEn;
  langToggle.setAttribute('aria-checked', String(isEn));
  langSwitch.classList.toggle('en', isEn);
  document.documentElement.lang = isEn ? 'en' : 'pt-BR';
  document.title = isEn ? 'Maria Huida | Portfolio' : 'Maria Huida | Portfólio';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = isEn
      ? 'Portfolio of Maria Huida - Full-Stack Developer and Software Engineering student.'
      : 'Portfólio de Maria Huida - Desenvolvedora Full-Stack e estudante de Engenharia de Software.';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang]?.[key];
    if (val != null) {
      if (val.includes('<')) el.innerHTML = val;
      else el.textContent = val;
    }
  });

  localStorage.setItem('lang', lang);
}

langToggle.addEventListener('change', () => {
  setLanguage(langToggle.checked ? 'en' : 'pt');
});

const initialLang = localStorage.getItem('lang') || 'pt';
if (initialLang === 'en') {
  setLanguage('en');
}
