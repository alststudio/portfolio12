export const BOOK_URL = 'https://halaskastudio.com/./book';

export const MARQUEE_IMAGES: string[] = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

export const PARALLAX_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85';

export const pexelsAvatar = (id: number): string =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=100`;

export const PARTNER_AVATAR = pexelsAvatar(415829);

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marcus Anderson',
    role: 'CEO',
    company: 'Data.storage',
    quote:
      'Dengan arahan yang sangat minim, tim ini menghasilkan desain yang selalu tepat sasaran. Setiap pengiriman terasa seperti mereka sudah membaca pikiran kami.',
    avatar: pexelsAvatar(2379004),
  },
  {
    name: 'alexwu',
    role: 'Pendiri',
    company: 'Nexgate',
    quote:
      'Viktor memimpin pembuatan deck fundraising terbaik kami sejauh ini. Deck itu membantu kami menutup putaran pendanaan dengan penuh percaya diri.',
    avatar: pexelsAvatar(1043471),
  },
  {
    name: 'James Mitchell',
    role: 'VP Produk',
    company: 'LaunchPad',
    quote:
      'Bekerja dengan Viktor mengubah visi produk kami menjadi pengalaman yang benar-benar bisa dipakai dan dicintai pengguna.',
    avatar: pexelsAvatar(733872),
  },
  {
    name: 'Rachel Foster',
    role: 'Co-founder',
    company: 'Nexus Labs',
    quote:
      'Kualitas desainnya melampaui ekspektasi kami. Cepat, tajam, dan konsisten dari konsep pertama sampai hasil akhir.',
    avatar: pexelsAvatar(1239291),
  },
  {
    name: 'David Zhang',
    role: 'Kepala Desain',
    company: 'Paradigm Labs',
    quote:
      'Hasil kerja yang luar biasa dari awal sampai akhir. Standar desain kelas Apple terasa di setiap detailnya.',
    avatar: pexelsAvatar(614810),
  },
];

export interface Project {
  name: string;
  description: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'evr',
    description: 'Dari ide sampai pendanaan jutaan dolar untuk produk AI web3',
    image: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    name: 'Automation Machines',
    description: 'Menyederhanakan proses otomasi industri',
    image: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    name: 'xPortfolio',
    description: 'Platform manajemen portofolio modern',
    image: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
];
