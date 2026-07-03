/* @ds-bundle: {"format":3,"namespace":"ConsortDesignSystem_5951af","components":[],"sourceHashes":{"ui_kits/web/About.jsx":"44e9658d5fdc","ui_kits/web/ContactSection.jsx":"997b903d40b4","ui_kits/web/Footer.jsx":"bcff498b1ba0","ui_kits/web/Header.jsx":"b68436fab254","ui_kits/web/Hero.jsx":"94172eccfccb","ui_kits/web/Services.jsx":"d1173159bfda"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ConsortDesignSystem_5951af = window.ConsortDesignSystem_5951af || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/web/About.jsx
try { (() => {
// About.jsx — Consort about/values section
const About = () => {
  const values = [{
    title: 'Åpne og ærlige',
    desc: 'Vi sier det som det er — alltid. Ingen skjulte agendaer, ingen byråkratisk newspeak.'
  }, {
    title: 'Løsningsfokuserte',
    desc: 'Problemet er utgangspunktet, ikke destinasjonen. Vi er fornøyde når du er fornøyd.'
  }, {
    title: 'Litt annerledes',
    desc: 'Vi bryr oss genuint. Det merkes — og det gjør en forskjell.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "om-oss",
    style: {
      background: '#0D0D0D',
      padding: '100px 48px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/dots-tripptrapp.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 40,
      right: 0,
      width: 380,
      opacity: 0.35,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 2,
      background: '#0BCD75',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#0BCD75',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "Om Consort")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 900,
      fontSize: 'clamp(32px, 3.5vw, 52px)',
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
      color: '#fff',
      marginBottom: 28
    }
  }, "En varm og trygg", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(90deg, #0BCD75, #0C8BE2)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "r\xE5dgivende stemme")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.6)',
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      marginBottom: 20
    }
  }, "Vi er oppmerksomme og ekte i m\xF8te med andre, og balanserer profesjonalitet med en leken, varm og nysgjerrig stil."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.6)',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "Consort AS ble til fordi vi mener r\xE5dgivning kan gj\xF8res bedre \u2014 med tydeligere kommunikasjon, mer \xE6rlighet og et genuint \xF8nske om \xE5 hjelpe."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-portrait.png",
    alt: "Consort",
    style: {
      height: 80,
      opacity: 0.9
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, values.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v.title,
    style: {
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 12,
      padding: '24px 28px',
      display: 'flex',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: 'linear-gradient(135deg, #0BCD75, #0C8BE2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: 14,
      color: '#fff',
      fontWeight: 900,
      fontFamily: 'Poppins, sans-serif'
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 800,
      fontSize: 17,
      color: '#fff',
      marginBottom: 6,
      letterSpacing: '-0.01em'
    }
  }, v.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.55)',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, v.desc))))))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/dots-linje.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      opacity: 0.4,
      pointerEvents: 'none'
    }
  }));
};
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/ContactSection.jsx
try { (() => {
// ContactSection.jsx — Consort contact form section
const ContactSection = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [sent, setSent] = React.useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "kontakt",
    style: {
      background: '#fff',
      padding: '100px 48px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/dots-kvadrat.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: -40,
      right: -20,
      width: 260,
      opacity: 0.18,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 2,
      background: '#0BCD75',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#0BCD75',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "Kontakt")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 900,
      fontSize: 'clamp(32px, 3.5vw, 52px)',
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
      color: '#0D0D0D',
      marginBottom: 20
    }
  }, "Hva trenger", /*#__PURE__*/React.createElement("br", null), "du hjelp med?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: '#4A4A4A',
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      marginBottom: 40
    }
  }, "Vi svarer raskt \u2014 og alltid med en konkret tilbakemelding. Ikke forpliktende \xE5 ta kontakt."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, [{
    label: 'E-post',
    val: 'hei@consort.no'
  }, {
    label: 'Telefon',
    val: '+47 123 45 678'
  }, {
    label: 'Adresse',
    val: 'Oslo, Norge'
  }].map(item => /*#__PURE__*/React.createElement("div", {
    key: item.label,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: '#0BCD75',
      opacity: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#0D0D0D'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#9A9A9A',
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      marginBottom: 2
    }
  }, item.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: '#0D0D0D',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, item.val)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F5F5F5',
      borderRadius: 16,
      padding: '40px 36px'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: '#0BCD75',
      margin: '0 auto 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 28
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 900,
      fontSize: 24,
      color: '#0D0D0D',
      marginBottom: 12
    }
  }, "Takk for meldingen!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#4A4A4A',
      lineHeight: 1.6,
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "Vi tar kontakt med deg snart."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSent(false),
    style: {
      marginTop: 24,
      background: 'none',
      border: 'none',
      color: '#0BCD75',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "Send ny melding \u2192")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, ['Fornavn', 'Etternavn'].map(pl => /*#__PURE__*/React.createElement("div", {
    key: pl,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#0D0D0D',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, pl), /*#__PURE__*/React.createElement("input", {
    placeholder: pl === 'Fornavn' ? 'Kari' : 'Nordmann',
    style: {
      padding: '11px 14px',
      borderRadius: 8,
      border: '1.5px solid #E0E0E0',
      fontSize: 15,
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      outline: 'none',
      background: '#fff',
      color: '#0D0D0D'
    },
    onFocus: e => {
      e.target.style.borderColor = '#0BCD75';
      e.target.style.boxShadow = '0 0 0 3px rgba(11,205,117,0.15)';
    },
    onBlur: e => {
      e.target.style.borderColor = '#E0E0E0';
      e.target.style.boxShadow = '';
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#0D0D0D',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "E-post ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#0BCD75'
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "kari@eksempel.no",
    required: true,
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    }),
    style: {
      padding: '11px 14px',
      borderRadius: 8,
      border: '1.5px solid #E0E0E0',
      fontSize: 15,
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      outline: 'none',
      background: '#fff',
      color: '#0D0D0D'
    },
    onFocus: e => {
      e.target.style.borderColor = '#0BCD75';
      e.target.style.boxShadow = '0 0 0 3px rgba(11,205,117,0.15)';
    },
    onBlur: e => {
      e.target.style.borderColor = '#E0E0E0';
      e.target.style.boxShadow = '';
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#0D0D0D',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "Hva lurer du p\xE5?"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Beskriv hva du trenger hjelp med...",
    rows: 4,
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    }),
    style: {
      padding: '11px 14px',
      borderRadius: 8,
      border: '1.5px solid #E0E0E0',
      fontSize: 15,
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      outline: 'none',
      background: '#fff',
      color: '#0D0D0D',
      resize: 'vertical'
    },
    onFocus: e => {
      e.target.style.borderColor = '#0BCD75';
      e.target.style.boxShadow = '0 0 0 3px rgba(11,205,117,0.15)';
    },
    onBlur: e => {
      e.target.style.borderColor = '#E0E0E0';
      e.target.style.boxShadow = '';
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      background: '#0BCD75',
      color: '#fff',
      border: 'none',
      padding: '14px 28px',
      borderRadius: 8,
      fontSize: 16,
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'Poppins, sans-serif',
      transition: 'filter 0.2s, transform 0.15s',
      boxShadow: '0 4px 16px rgba(11,205,117,0.25)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.filter = 'brightness(1.08)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = '';
      e.currentTarget.style.transform = '';
    }
  }, "Send melding"))))));
};
Object.assign(window, {
  ContactSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Footer.jsx
try { (() => {
// Footer.jsx — Consort dark footer
const Footer = ({
  onNav
}) => {
  const links = {
    'Tjenester': ['Strategisk rådgivning', 'IT og digitalisering', 'Organisasjonsutvikling', 'Prosjektledelse'],
    'Selskap': ['Om oss', 'Blogg', 'Karriere', 'Presse'],
    'Kontakt': ['hei@consort.no', '+47 123 45 678', 'Oslo, Norge']
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#0D0D0D',
      padding: '72px 48px 40px',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/dots-rektangel.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 300,
      opacity: 0.12,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 48,
      marginBottom: 64,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "Consort",
    style: {
      height: 28,
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.45)',
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      maxWidth: 260,
      marginBottom: 28
    }
  }, "Vi bryr oss om det vi gj\xF8r \u2014 en varm og trygg r\xE5dgivende stemme, alltid med l\xF8sninger i fokus."), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('kontakt'),
    style: {
      background: '#0BCD75',
      color: '#fff',
      border: 'none',
      padding: '10px 22px',
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "Ta kontakt")), Object.entries(links).map(([heading, items]) => /*#__PURE__*/React.createElement("div", {
    key: heading
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#0BCD75',
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      marginBottom: 18
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.5)',
      textDecoration: 'none',
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      transition: 'color 0.2s'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
  }, item)))))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/dots-linje.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      width: '100%',
      opacity: 0.3,
      marginBottom: 28,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.3)',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "\xA9 2026 Consort AS. Alle rettigheter forbeholdes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, ['Personvern', 'Cookies'].map(label => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.3)',
      textDecoration: 'none',
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      transition: 'color 0.2s'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'
  }, label))))));
};
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Header.jsx
try { (() => {
// Header.jsx — Consort sticky navigation
const Header = ({
  activeSection,
  onNav
}) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [{
    id: 'tjenester',
    label: 'Tjenester'
  }, {
    id: 'om-oss',
    label: 'Om oss'
  }, {
    id: 'kontakt',
    label: 'Kontakt'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(13,13,13,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 72
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('hero'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "Consort",
    style: {
      height: 28
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 36,
      alignItems: 'center'
    }
  }, links.map(link => /*#__PURE__*/React.createElement("button", {
    key: link.id,
    onClick: () => onNav(link.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontSize: 15,
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      color: activeSection === link.id ? '#0BCD75' : 'rgba(255,255,255,0.75)',
      fontWeight: activeSection === link.id ? 600 : 400,
      transition: 'color 0.2s'
    }
  }, link.label)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('kontakt'),
    style: {
      background: '#0BCD75',
      color: '#fff',
      border: 'none',
      padding: '10px 22px',
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      transition: 'filter 0.2s, transform 0.15s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.filter = 'brightness(1.1)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = '';
      e.currentTarget.style.transform = '';
    }
  }, "Ta kontakt"))));
};
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Hero.jsx
try { (() => {
// Hero.jsx — Consort full-bleed dark hero section
const Hero = ({
  onNav
}) => {
  return /*#__PURE__*/React.createElement("section", {
    id: "hero",
    style: {
      background: '#0D0D0D',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 48px 80px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/dots-rektangel.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 80,
      right: 0,
      width: 340,
      opacity: 0.45,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/dots-kvadrat.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: -60,
      left: -40,
      width: 220,
      opacity: 0.25,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      width: '100%',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 2,
      background: '#0BCD75',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#0BCD75',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "R\xE5dgivning med hjertet p\xE5 rett sted")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 900,
      fontSize: 'clamp(48px, 6vw, 88px)',
      lineHeight: 1.0,
      letterSpacing: '-0.03em',
      color: '#fff',
      marginBottom: 28,
      maxWidth: 760,
      textWrap: 'pretty'
    }
  }, "Vi bryr oss om", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(90deg, #0BCD75, #0C8BE2)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "det vi gj\xF8r")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      fontSize: 20,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,0.65)',
      maxWidth: 560,
      marginBottom: 44
    }
  }, "En varm og trygg r\xE5dgivende stemme \u2014 alltid lett \xE5 forst\xE5. Enkelt, og med l\xF8sninger i fokus."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('kontakt'),
    style: {
      background: '#0BCD75',
      color: '#fff',
      border: 'none',
      padding: '16px 36px',
      borderRadius: 8,
      fontSize: 17,
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'Poppins, sans-serif',
      transition: 'filter 0.2s, transform 0.15s',
      boxShadow: '0 4px 20px rgba(11,205,117,0.30)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.filter = 'brightness(1.1)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = '';
      e.currentTarget.style.transform = '';
    }
  }, "Ta kontakt"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('tjenester'),
    style: {
      background: 'transparent',
      color: 'rgba(255,255,255,0.85)',
      border: '1.5px solid rgba(255,255,255,0.25)',
      padding: '16px 36px',
      borderRadius: 8,
      fontSize: 17,
      fontWeight: 600,
      cursor: 'pointer',
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      transition: 'border-color 0.2s, color 0.2s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = '#0BCD75';
      e.currentTarget.style.color = '#0BCD75';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
      e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
    }
  }, "Se tjenester \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      marginTop: 80,
      paddingTop: 48,
      borderTop: '1px solid rgba(255,255,255,0.08)',
      flexWrap: 'wrap'
    }
  }, [{
    val: '10+',
    label: 'År med erfaring'
  }, {
    val: '200+',
    label: 'Fornøyde kunder'
  }, {
    val: '100%',
    label: 'Løsningsfokus'
  }].map(stat => /*#__PURE__*/React.createElement("div", {
    key: stat.val
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 900,
      fontSize: 40,
      color: '#0BCD75',
      letterSpacing: '-0.03em',
      lineHeight: 1
    }
  }, stat.val), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      fontSize: 14,
      color: 'rgba(255,255,255,0.45)',
      marginTop: 6
    }
  }, stat.label))))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/dots-linje.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }));
};
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Services.jsx — Consort services section
const ServiceCard = ({
  icon,
  title,
  desc,
  tag
}) => {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      background: hovered ? '#0D0D0D' : '#fff',
      border: `1.5px solid ${hovered ? '#0BCD75' : '#E0E0E0'}`,
      borderRadius: 12,
      padding: '32px 28px',
      transition: 'all 0.25s ease',
      transform: hovered ? 'translateY(-4px)' : 'none',
      boxShadow: hovered ? '0 8px 32px rgba(11,205,117,0.15)' : '0 2px 8px rgba(0,0,0,0.06)',
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 10,
      background: hovered ? 'rgba(11,205,117,0.15)' : '#F5F5F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      fontSize: 22,
      transition: 'background 0.25s'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#0BCD75',
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      marginBottom: 10
    }
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 900,
      fontSize: 22,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: hovered ? '#fff' : '#0D0D0D',
      marginBottom: 12,
      transition: 'color 0.25s'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      fontSize: 15,
      lineHeight: 1.65,
      color: hovered ? 'rgba(255,255,255,0.6)' : '#4A4A4A',
      transition: 'color 0.25s'
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontSize: 14,
      fontWeight: 600,
      color: '#0BCD75',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "Les mer \u2192"));
};
const Services = () => {
  const services = [{
    icon: '◈',
    tag: 'Strategi',
    title: 'Strategisk rådgivning',
    desc: 'Vi hjelper deg å ta de riktige beslutningene — med klare analyser og praktiske løsninger du faktisk kan bruke.'
  }, {
    icon: '⬡',
    tag: 'Teknologi',
    title: 'IT og digitalisering',
    desc: 'Fra systemvalg til implementering. Vi navigerer det tekniske landskapet med deg, og sørger for at det blir riktig.'
  }, {
    icon: '◎',
    tag: 'Ledelse',
    title: 'Organisasjonsutvikling',
    desc: 'Mennesker og prosesser som fungerer sammen. Vi bygger strukturer som gir rom for vekst og samarbeid.'
  }, {
    icon: '▣',
    tag: 'Prosjekt',
    title: 'Prosjektledelse',
    desc: 'Tydelig ansvar, god kommunikasjon og kontroll på fremdriften. Vi leverer — innen tid og budsjett.'
  }, {
    icon: '◉',
    tag: 'Analyse',
    title: 'Data og innsikt',
    desc: 'Vi gjør data til forståelig innsikt som hjelper deg å handle raskere og smartere.'
  }, {
    icon: '◌',
    tag: 'Kurs',
    title: 'Kurs og kompetanse',
    desc: 'Praktiske kurs tilpasset din organisasjon — relevant, engasjerende og alltid med løsninger i fokus.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "tjenester",
    style: {
      background: '#F5F5F5',
      padding: '100px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 60,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 2,
      background: '#0BCD75',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#0BCD75',
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "Tjenester")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 900,
      fontSize: 'clamp(36px, 4vw, 52px)',
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      color: '#0D0D0D',
      maxWidth: 480
    }
  }, "Hva kan vi hjelpe deg med?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: '#4A4A4A',
      maxWidth: 380,
      fontFamily: 'Segoe UI, system-ui, sans-serif'
    }
  }, "Vi er oppmerksomme og ekte i m\xF8te med andre \u2014 og leverer alltid l\xF8sninger som er lette \xE5 forst\xE5.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 20
    }
  }, services.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s))))));
};
Object.assign(window, {
  Services,
  ServiceCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Services.jsx", error: String((e && e.message) || e) }); }

})();
