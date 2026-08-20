"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';

import {
  Mail,
  ChevronDown,
  Briefcase,
  User,
  Layers,
  TerminalSquare,
  Send,
  Phone,
  Home,
  ArrowUp,
  Link as LinkIcon,
  Globe,
  MapPin,
  GraduationCap
} from 'lucide-react';

// Imports from react-icons
import { 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiBootstrap, 
  SiMui, 
  SiGit, 
  SiGithub, 
  SiXampp, 
  //SiAdobephotoshop, 
  //SiAdobeillustrator,
  SiPython, 
  SiCplusplus, 
  SiAndroidstudio,
  SiWordpress,
  SiElementor,
  SiWoocommerce,
  SiYoast,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiMysql
} from "react-icons/si";

// --- Global Static Links ---
const GLOBAL_LINKS = {
  email: "371omidasgari@gmail.com",
  phone: "+989211196239",
  telegram_url: "https://t.me/O_MID_83",
  telegram_id: "@O_MID_83",
};

// --- Dictionary for Localization ---
const dict = {
  en: {
    personal: {
      name: "Omid Asgari",
      role: "Web & Front-End Developer",
      bio: "A detail-oriented developer focused on turning complex ideas into clean, fast, and SEO-optimized user interfaces.",
      greeting: "HELLO_WORLD",
      viewProjects: "View Projects",
      location: "Tabriz, Iran",
      education: "Computer Engineering, University of Tabriz (Class of 2023)"
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      p1: "I am a Front-End Developer who thinks beyond just coding.",
      p2: "My journey in the web world started 6 years ago by combining art and logic. To me, web development isn't just writing JavaScript or styling; it's creating a smooth, fast, and efficient experience for the end user while meeting the project's business goals.",
      p3: "My core expertise lies in the React and Next.js ecosystem, but what sets me apart is my holistic view of a product. My mastery of Technical SEO allows me to architect page structures and performance (Core Web Vitals) from the ground up so that the product ranks powerfully in search engines.",
      p4: "I'm passionate about clean code, component-based architectures, and solving complex challenges. I am also currently a senior computer engineering student at the University of Tabriz.",
      eduTitle: "Education",
      locTitle: "Location",
    },
    skills: {
      title: "Skills & Tools",
      categories: [
        { title: "Core Languages", items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL (Beginner)"] },
        { title: "Frameworks & Libraries", items: ["React.js", "Next.js"] },
        { title: "CMS & E-Commerce", items: ["WordPress", "Elementor", "WooCommerce", "Yoast SEO", "Rank Math"] },
        { title: "SEO & Analytics", items: ["Technical SEO", "Google Analytics", "Search Console"] },
        { title: "UI & Styling", items: ["Tailwind CSS", "Bootstrap", "Material UI"] },
        { title: "Dev Tools & Version Control", items: ["XAMPP", "MySQL (Beginner)", "Git", "GitHub"] },
        { title: "Design & Graphics", items: ["Photoshop", "Adobe Illustrator", "UI Layout Design"] },
        { title: "Other Skills", items: ["Python (Beginner)", "C++ (Beginner)", "Android Studio (Beginner)"] },
      ]
    },
    projects: {
      title: "Projects & Experience",
      viewProject: "View Project",
      exp: [
        {
          role: "Senior SEO Manager",
          company: "Atrban Store",
          period: "2021 - 2024",
          description: "Leading the content and SEO team to increase sales and market share.",
          bullets: [
            "Formulating and executing comprehensive SEO strategies (Technical, Content, Link Building).",
            "Managing and training the content team to write optimized and targeted articles.",
            "Continuous data analysis using Google Analytics and Search Console.",
            "Result: Ranked high-competition perfume keywords on Google's first page, significantly boosting organic sales."
          ]
        },
        {
          role: "WordPress Developer",
          company: "Dianakala Store",
          period: "2022 - 2023",
          description: "Designing, developing, and managing SEO for an active e-commerce store.",
          bullets: [
            "End-to-end design and setup of the online store using WordPress, Elementor, and WooCommerce.",
            "Designing high-conversion Landing Pages for sales campaigns.",
            "Implementing secure payment gateways, inventory management, and automated email notifications."
          ]
        },
        {
          role: "WordPress Developer",
          company: "Vian Market",
          period: "2024",
          description: "Implementing an efficient and fast e-commerce platform with WordPress.",
          bullets: [
            "End-to-end design and setup of the online store using WordPress, Elementor, and WooCommerce.",
            "Database and speed optimization to ensure a lag-free shopping experience.",
            "Implementing secure payment gateways and inventory systems."
          ]
        },
        {
          role: "Web Developer (SEO)",
          company: "Lut Bank Website",
          period: "Dec 2025",
          description: "Redesigning and developing a corporate website with a strong focus on performance and Technical SEO.",
          bullets: [
            "Full website development using Next.js utilizing SSR and SSG capabilities.",
            "Deep optimization of DOM Architecture and Page Speed to improve Core Web Vitals.",
            "Implementing advanced SEO principles including dynamic meta tags and Schema Markup.",
            "Significant UX improvement with smooth navigation and fully responsive design."
          ]
        },
        {
          role: "Front-End Developer",
          company: "Daramet",
          period: "2026",
          description: "Contributing to the architecture and front-end development of a financial platform.",
          bullets: [
            "Developing critical user modules including authentication, advanced ticketing, and support systems.",
            "Designing workflows for fund withdrawals and bank account management.",
            "Building interactive dashboards and Real-time Analytics using Recharts.",
            "Implementing secure form validations using Formik alongside best UX practices."
          ]
        },
        {
          role: "Full-Stack Developer",
          company: "DollerX Platform",
          period: "April 2026",
          description: "Developing and launching a comprehensive financial and currency platform using modern technologies.",
          bullets: [
            "Integrated front-end development using the powerful Next.js framework.",
            "Implementing complex UIs including advanced data tables with dynamic filtering and sorting.",
            "Designing an Admin Panel with analytical charts to monitor system performance.",
            "Developing real-time PDF report generation based on user data."
          ]
        }
      ]
    },
    contact: {
      title: "Let's Connect",
      desc: "Available for consulting, new project collaborations, or full-time opportunities. Reach out via the links below.",
    },
    footer: {
      designedBy: "Designed & Built by",
      backToTop: "Back to Top"
    }
  },
  fa: {
    personal: {
      name: "امید عسگری",
      role: "توسعه‌دهنده وب و فرانت‌اند",
      bio: "توسعه‌دهنده‌ای که به جزئیات اهمیت می‌دهد. تمرکز من بر تبدیل ایده‌های پیچیده به رابط‌های کاربری تمیز، سریع و بهینه‌شده برای موتورهای جستجو است.",
      greeting: "HELLO_WORLD",
      viewProjects: "مشاهده پروژه‌ها",
      location: "ایران، تبریز",
      education: "دانشجوی مهندسی کامپیوتر، دانشگاه تبریز (ورودی ۱۴۰۲)"
    },
    nav: {
      home: "اصلی",
      about: "درباره",
      skills: "مهارت‌ها",
      projects: "پروژه‌ها",
      contact: "تماس",
    },
    about: {
      title: "درباره من",
      p1: "من یک توسعه‌دهنده فرانت‌اند هستم که به فراتر از کدنویسی صرف فکر می‌کنم.",
      p2: "مسیر من در دنیای وب از ۶ سال پیش با ترکیب هنر و منطق آغاز شد. برای من، توسعه وب فقط نوشتن کدهای جاوااسکریپت یا استایل‌دهی نیست؛ بلکه خلق تجربه‌ای روان، سریع و کارآمد برای کاربر نهایی است که در عین حال اهداف تجاری پروژه را نیز برآورده کند.",
      p3: "تخصص اصلی من در اکوسیستم React و Next.js است، اما تفاوت من در داشتن دیدگاهی جامع به محصول است. تسلط من بر سئو تکنیکال (Technical SEO) به من این امکان را می‌دهد که ساختار صفحات و پرفورمنس را از پایه به گونه‌ای معماری کنم که محصول در موتورهای جستجو قدرتمند ظاهر شود.",
      p4: "من به کدنویسی تمیز، استفاده از معماری‌های مقیاس‌پذیر و حل چالش‌های پیچیده علاقه‌مندم. همچنین دانشجوی سال آخر کارشناسی مهندسی کامپیوتر در دانشگاه تبریز هستم.",
      eduTitle: "تحصیلات",
      locTitle: "موقعیت مکانی",
    },
    skills: {
      title: "مهارت‌ها و ابزارها",
      categories: [
        { title: "زبان‌های پایه", items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL (مبتدی)"] },
        { title: "فریم‌ورک‌ها و کتابخانه‌ها", items: ["React.js", "Next.js"] },
        { title: "سیستم‌های مدیریت محتوا (CMS)", items: ["WordPress", "Elementor", "WooCommerce", "Yoast SEO", "Rank Math"] },
        { title: "سئو و آنالیتیکس", items: ["Technical SEO", "Google Analytics", "Search Console"] },
        { title: "رابط کاربری و استایل‌دهی", items: ["Tailwind CSS", "Bootstrap", "Material UI"] },
        { title: "ابزارهای توسعه و کنترل نسخه", items: ["XAMPP", "MySQL (مبتدی)", "Git", "GitHub"] },
        { title: "طراحی و گرافیک", items: ["Photoshop", "Adobe Illustrator", "UI Layout Design"] },
        { title: "سایر مهارت‌ها", items: ["Python (مبتدی)", "C++ (مبتدی)", "Android Studio (مبتدی)"] },
      ]
    },
    projects: {
      title: "پروژه‌ها و تجربیات",
      viewProject: "مشاهده پروژه",
      exp: [
        {
          role: "مدیر ارشد سئو",
          company: "سایت فروشگاهی عطربان",
          period: "۱۴۰۰ - ۱۴۰۳",
          description: "رهبری تیم محتوا و سئو جهت افزایش فروش و سهم بازار.",
          bullets: [
            "تدوین و اجرای استراتژی جامع سئو (تکنیکال، محتوا و لینک‌سازی).",
            "مدیریت و آموزش تیم تولید محتوا جهت نگارش مقالات بهینه‌شده و هدفمند.",
            "تحلیل مداوم داده‌ها با Google Analytics و Search Console برای پیدا کردن فرصت‌های رشد.",
            "نتیجه: ارتقای رتبه کلمات کلیدی پررقابت حوزه عطر به صفحه اول گوگل و افزایش چشمگیر فروش ارگانیک."
          ]
        },
        {
          role: "توسعه‌دهنده وردپرس",
          company: "فروشگاه دیاناکالا",
          period: "۱۴۰۱ - ۱۴۰۲",
          description: "طراحی، توسعه و مدیریت سئوی یک فروشگاه اینترنتی فعال.",
          bullets: [
            "طراحی و راه‌اندازی صفر تا صد فروشگاه اینترنتی با استفاده از وردپرس، المنتور و ووکامرس.",
            "طراحی صفحات لندینگ (Landing Pages) کمپین‌های فروش با نرخ تبدیل (Conversion Rate) بالا.",
            "پیاده‌سازی درگاه‌های پرداخت امن و سیستم مدیریت موجودی کالا و اتوماسیون ایمیل‌های اطلاع‌رسانی سفارشات."
          ]
        },
        {
          role: "توسعه‌دهنده وردپرس",
          company: "فروشگاه آنلاین Vian Market",
          period: "۱۴۰۳",
          description: "پیاده‌سازی یک پلتفرم فروشگاهی کارآمد و سریع با وردپرس.",
          bullets: [
            "طراحی و راه‌اندازی صفر تا صد فروشگاه اینترنتی با استفاده از وردپرس، المنتور و ووکامرس.",
            "بهینه‌سازی پایگاه داده و سرعت سایت برای ایجاد تجربه خرید سریع و بدون تاخیر برای مشتریان.",
            "پیاده‌سازی درگاه‌های پرداخت امن و سیستم مدیریت موجودی کالا و اتوماسیون ایمیل‌های اطلاع‌رسانی سفارشات."
          ]
        },
        {
          role: "توسعه‌دهنده وب (بهینه‌سازی و سئو)",
          company: "وبسایت لوت بانک",
          period: "آذر ۱۴۰۴",
          description: "بازطراحی و توسعه وب‌سایت شرکتی با تمرکز شدید بر پرفورمنس و سئو تکنیکال.",
          bullets: [
            "توسعه کامل وب‌سایت با استفاده از Next.js برای بهره‌گیری از قابلیت‌های SSR و SSG.",
            "بهینه‌سازی عمیق ساختار صفحات (DOM Architecture) و سرعت بارگذاری (Page Speed) جهت ارتقای معیارهای Core Web Vitals.",
            "پیاده‌سازی اصول پیشرفته SEO شامل مدیریت متاتگ‌های پویا، نشانه‌گذاری استاندارد اسکیما (Schema Markup) و بهینه‌سازی تصاویر.",
            "ارتقای چشمگیر تجربه کاربری (UX) با ایجاد ناوبری روان و طراحی کاملاً واکنش‌گرا (Responsive) در تمامی دستگاه‌ها."
          ]
        },
        {
          role: "توسعه‌دهنده فرانت‌اند",
          company: "Daramet",
          period: "۱۴۰۵",
          description: "مشارکت در معماری و توسعه فرانت‌اند یک پلتفرم مالی.",
          bullets: [
            "توسعه ماژول‌های حساس کاربری از جمله سیستم احراز هویت، سیستم تیکتینگ و پشتیبانی پیشرفته.",
            "طراحی و پیاده‌سازی جریان‌های کاری مربوط به برداشت وجه و مدیریت حساب‌های بانکی.",
            "ساخت داشبوردهای تعاملی و مصورسازی لحظه‌ای داده‌ها با استفاده از Recharts.",
            "پیاده‌سازی فرم‌های امن با اعتبارسنجی دقیق سمت کاربر با استفاده از Formik."
          ]
        },
        {
          role: "توسعه‌دهنده فرانت‌اند و بک‌اند",
          company: "پلتفرم DollerX",
          period: "فروردین ۱۴۰۵",
          description: "توسعه و راه‌اندازی پلتفرم جامع ارزی و مالی با بهره‌گیری از تکنولوژی‌های مدرن.",
          bullets: [
            "توسعه یکپارچه بخش فرانت‌اند با استفاده از فریم‌ورک قدرتمند Next.js.",
            "پیاده‌سازی رابط کاربری پیچیده شامل جداول داده پیشرفته با قابلیت فیلترینگ.",
            "طراحی داشبورد مدیریت (Admin Panel) همراه با چارت‌ها و نمودارهای تحلیلی.",
            "توسعه سیستم تولید و اکسپورت گزارش‌ها به فرمت PDF به صورت لحظه‌ای."
          ]
        }
      ]
    },
    contact: {
      title: "در ارتباط باشیم",
      desc: "برای مشاوره، همکاری در پروژه‌های جدید و یا استخدام، از طریق راه‌های زیر پاسخگوی شما هستم.",
    },
    footer: {
      designedBy: "طراحی و توسعه با ❤️ توسط",
      backToTop: "بازگشت به بالا"
    }
  }
};

// --- Raw Links & Tech Data (Language Independent) ---
const LINKS = {
  lutbank: "https://www.lutbank.com/fa",
  vianmarket: "https://vianmarket.me/",
  dianakala: "https://dianakala.ir",
  daramet: "https://daramet.com/",
  dollerx: "https://dollerx.com/fa"
};

const TECH_STACKS = {
  atrban: ["SEO Strategy", "Google Analytics", "Content Management"],
  dianakala: ["WordPress", "Technical SEO", "WooCommerce", "Elementor"],
  vianmarket: ["WordPress", "WooCommerce", "Elementor"],
  lutbank: ["Next.js", "Technical SEO", "Performance Optimization"],
  daramet: ["React.js", "Tailwind CSS", "MUI", "Formik", "Recharts"],
  dollerx: ["Next.js", "React", "Node.js", "PDF Generation"]
};

// Skill Icons mapping (Now works perfectly with base name extraction)
const getSkillIcon = (name: string) => {
  switch(name) {
    case "JavaScript": return <SiJavascript className="text-[#F7DF1E] text-lg bg-black" />;
    case "TypeScript": return <SiTypescript className="text-[#3178C6] text-lg bg-white" />;
    case "HTML5": return <SiHtml5 className="text-[#E34F26] text-lg" />;
    case "React.js": return <SiReact className="text-[#61DAFB] text-lg" />;
    case "Next.js": return <SiNextdotjs className="text-white bg-black rounded-full text-lg" />;
    case "WordPress": return <SiWordpress className="text-[#0081e4] text-xl" />;
    case "Elementor": return <SiElementor className="text-[#c5074d] text-lg" />;
    case "WooCommerce": return <SiWoocommerce className="text-[#d728b4] text-xl" />;
    case "Yoast SEO": return <SiYoast className="text-[#A4286A] text-lg bg-white rounded-sm p-[1px]" />;
    case "Google Analytics": return <SiGoogleanalytics className="text-[#E37400] text-lg" />;
    case "Search Console": return <SiGooglesearchconsole className="text-[#4285F4] text-lg" />;
    case "SQL":
    case "MySQL": return <SiMysql className="text-[#4479A1] text-xl" />;
    case "Tailwind CSS": return <SiTailwindcss className="text-[#06B6D4] text-lg" />;
    case "Bootstrap": return <SiBootstrap className="text-[#7952B3] text-lg" />;
    case "Material UI": return <SiMui className="text-[#007FFF] text-lg" />;
    case "XAMPP": return <SiXampp className="text-[#FB7A24] text-lg" />;
    case "Git": return <SiGit className="text-[#F05032] text-lg" />;
    case "GitHub": return <SiGithub className="text-white text-lg" />;
    //case "Photoshop": return <SiAdobephotoshop className="text-[#31A8FF] text-lg bg-[#001D26] rounded-sm p-[1px]" />;
    //case "Adobe Illustrator": return <SiAdobeillustrator className="text-[#FF9A00] text-lg bg-[#330000] rounded-sm p-[1px]" />;
    case "Python": return <SiPython className="text-[#3776AB] text-lg" />;
    case "C++": return <SiCplusplus className="text-[#00599C] text-lg" />;
    case "Android Studio": return <SiAndroidstudio className="text-[#3DDC84] text-lg" />;
    default: return null;
  }
};


// --- Components ---
const RevealOnScroll: React.FC<{children: React.ReactNode, delay?: number, className?: string}> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        timerRef.current = setTimeout(() => setIsVisible(true), delay);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    observer.observe(currentRef);
    return () => { observer.disconnect(); clearTimeout(timerRef.current); };
  }, [delay]);

  return (
    <div ref={ref} className={`transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const ExperienceItem: React.FC<{experience: any, link?: string, tech: string[], langDict: any}> = ({ experience, link, tech, langDict }) => {
  return (
    <div className="relative group">
      <div className="absolute -left-[42px] rtl:-right-[42px] top-1 w-5 h-5 rounded-full bg-[#0a0f1c] border-4 border-slate-800 group-hover:border-emerald-500 transition-colors duration-300 z-10"></div>
      
      <div className="glass-card p-6 md:p-8 rounded-2xl transform transition-all duration-300 group-hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] relative overflow-hidden group-hover:border-emerald-500/40">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-2 gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors mb-1">{experience.role}</h3>
              <div className="flex items-center flex-wrap gap-3 mt-2">
                <span className="font-bold text-lg text-white">{experience.company}</span>
                {link && (
                  <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700 rounded-md text-slate-300 hover:text-emerald-400 transition-colors border border-slate-700 font-medium">
                    <LinkIcon size={12} />
                    {langDict.projects.viewProject}
                  </a>
                )}
              </div>
            </div>
            <span className="text-sm font-mono font-medium text-emerald-400/80 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full whitespace-nowrap self-start">{experience.period}</span>
          </div>

          <p className="text-slate-300 leading-relaxed md:text-base mt-4 mb-4 font-medium border-l-4 rtl:border-l-0 rtl:border-r-4 border-emerald-500/50 pl-4 rtl:pl-0 rtl:pr-4 bg-emerald-500/5 py-3 rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg">{experience.description}</p>
          
          {experience.bullets && experience.bullets.length > 0 && (
            <ul className="space-y-3 mt-5">
              {experience.bullets.map((bullet: string, idx: number) => (
                <li key={idx} className="flex items-start text-slate-400/90 text-sm md:text-base">
                  <span className="text-emerald-500 mr-3 rtl:mr-0 rtl:ml-3 text-lg leading-none mt-0.5">•</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-800/80">
              {tech.map((t: string, idx: number) => (
                <span key={idx} className="text-xs font-mono font-medium text-slate-400 bg-[#0a0f1c] px-3 py-1.5 rounded-full border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

// --- Main Portfolio Component ---
export default function Portfolio() {
  const [lang, setLang] = useState<'en' | 'fa'>('en'); // Default is English
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  
  const activeSectionRef = useRef(activeSection);
  const lenis = useLenis();

  const currentDict = dict[lang];

  activeSectionRef.current = activeSection;

  useEffect(() => { 
    setMounted(true); 
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;
      let currentSection = sections[0];
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) { currentSection = sections[i]; break; }
      }
      if (currentSection !== activeSectionRef.current) setActiveSection(currentSection);
    };
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) { window.requestAnimationFrame(() => { handleScroll(); ticking = false; }); ticking = true; }
    };
    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [mounted]);

  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (lenis) {
        lenis.scrollTo(element, { offset: -100, duration: 1.2 });
      } else {
        window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
      }
    }
  }, [lenis]);

  const navLinks = [
    { id: "home", icon: <Home size={18} />, label: currentDict.nav.home },
    { id: "about", icon: <User size={18} />, label: currentDict.nav.about },
    { id: "skills", icon: <Layers size={18} />, label: currentDict.nav.skills },
    { id: "projects", icon: <TerminalSquare size={18} />, label: currentDict.nav.projects },
    { id: "contact", icon: <Phone size={18} />, label: currentDict.nav.contact }
  ];

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'fa' : 'en');
  };

  if (!mounted) return null;

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <div className={`font-sans selection:bg-emerald-500/30 selection:text-emerald-200 transition-colors duration-500 min-h-screen relative overflow-hidden bg-[#050914] text-slate-300 ${lang === 'fa' ? 'rtl' : 'ltr'}`}>
        
        {/* Background elements */}
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>

        {/* Floating Header */}
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-fit transition-transform duration-300 flex items-center gap-2">
          
          <nav className={`glass-nav px-2 py-2 rounded-full flex items-center justify-center gap-1 sm:gap-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] transition-all duration-300`}>
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button key={item.id} onClick={() => scrollTo(item.id)} className={`relative px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 group ${isActive ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`} title={item.label}>
                  <span className={`${isActive ? 'scale-110' : 'scale-100'} transition-transform duration-300 group-hover:scale-110`}>{item.icon}</span>
                  <span className={`text-sm font-medium transition-all duration-300 overflow-hidden hidden md:block ${isActive ? 'max-w-xs opacity-100 ml-1 rtl:ml-0 rtl:mr-1' : 'max-w-xs opacity-100 ml-1 rtl:ml-0 rtl:mr-1 text-slate-400 group-hover:text-slate-200'}`}>{item.label}</span>
                  {isActive && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>}
                </button>
              )
            })}
          </nav>

          <button 
            onClick={toggleLanguage}
            className="glass-nav px-4 py-2 rounded-full text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:scale-105 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] flex items-center gap-2 font-bold text-sm"
          >
            <Globe size={16} />
            {lang === 'en' ? 'FA' : 'EN'}
          </button>

        </div>

        <main className="relative z-10 pt-10">

          {/* Hero Section */}
          <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center pt-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <RevealOnScroll>
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm font-mono animate-float tracking-wide font-medium">
                  {currentDict.personal.greeting}
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white tracking-tight">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-500">{currentDict.personal.name}</span>
                  <br />
                  <span className="text-3xl md:text-5xl opacity-90 mt-2 block">{currentDict.personal.role}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                  {currentDict.personal.bio}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button onClick={() => scrollTo('projects')} className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] text-lg">
                    <TerminalSquare size={22} />
                    {currentDict.personal.viewProjects}
                  </button>
                </div>
              </RevealOnScroll>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer text-slate-600 hover:text-emerald-400 transition-colors" onClick={() => scrollTo('about')}>
              <ChevronDown size={32} />
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-6">
              <RevealOnScroll>
                <div className="flex items-center gap-3 mb-12">
                  <User className="text-emerald-400" size={28} />
                  <h2 className="text-3xl font-bold text-white">{currentDict.about.title}</h2>
                  <div className="h-px bg-slate-800/80 grow ml-6 rtl:ml-0 rtl:mr-6"></div>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <div className="text-slate-400/90 leading-relaxed md:text-lg space-y-6">
                  <p className="text-xl md:text-2xl text-slate-200 font-bold mb-4">
                    {currentDict.about.p1}
                  </p>
                  <p className="font-medium text-justify">{currentDict.about.p2}</p>
                  <p className="font-medium text-justify">{currentDict.about.p3}</p>
                  <p className="font-medium text-justify">{currentDict.about.p4}</p>
                  
                  {/* Restored Education and Location Cards */}
                  <div className="grid md:grid-cols-2 gap-4 mt-8 pt-4">
                     <div className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-emerald-500 pl-4 rtl:pl-0 rtl:pr-4 bg-emerald-900/10 py-4 rounded-r-xl rtl:rounded-r-none rtl:rounded-l-xl">
                      <div className="flex items-center gap-2 mb-2 text-slate-200">
                        <GraduationCap className="text-emerald-400" size={20} />
                        <h4 className="font-bold">{currentDict.about.eduTitle}</h4>
                      </div>
                      <p className="m-0 text-slate-400 font-medium text-sm">
                        {currentDict.personal.education}
                      </p>
                    </div>
                    <div className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-emerald-500 pl-4 rtl:pl-0 rtl:pr-4 bg-emerald-900/10 py-4 rounded-r-xl rtl:rounded-r-none rtl:rounded-l-xl">
                      <div className="flex items-center gap-2 mb-2 text-slate-200">
                        <MapPin className="text-emerald-400" size={20} />
                        <h4 className="font-bold">{currentDict.about.locTitle}</h4>
                      </div>
                      <p className="m-0 text-slate-400 font-medium text-sm">
                        {currentDict.personal.location}
                      </p>
                    </div>
                  </div>

                </div>
              </RevealOnScroll>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-32 relative">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
              <RevealOnScroll>
                <div className="flex items-center gap-3 mb-20 max-w-5xl mx-auto">
                  <Layers className="text-emerald-400" size={32} />
                  <h2 className="text-4xl font-bold text-white tracking-wide">{currentDict.skills.title}</h2>
                  <div className="h-px bg-slate-800/80 grow ml-6 rtl:ml-0 rtl:mr-6"></div>
                </div>
              </RevealOnScroll>

              <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {currentDict.skills.categories.map((category, idx) => (
                  <RevealOnScroll key={category.title} delay={idx * 50}>
                    <div className="glass-card p-6 md:p-8 rounded-[1.5rem] h-full relative group transition-all duration-300 hover:border-emerald-500/40">
                      
                      <div className="absolute inset-0 rounded-[1.5rem] bg-linear-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"></div>

                      <h3 className="text-xl font-bold text-slate-100 mb-6 relative z-10">{category.title}</h3>
                      
                      <div className="flex flex-wrap gap-3 relative z-10">
                        {category.items.map((skillString) => {
                           // استخراج کردن کلمه اصلی و سطح مهارت (کلمه داخل پرانتز)
                           const hasLevel = skillString.includes('(');
                           const skillName = hasLevel ? skillString.substring(0, skillString.indexOf('(')).trim() : skillString;
                           const skillLevel = hasLevel ? skillString.substring(skillString.indexOf('(')) : "";
                           const icon = getSkillIcon(skillName);
                           
                           return (
                            <div
                              key={skillString}
                              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181E2D] border border-slate-700/50 hover:border-slate-500/80 transition-colors cursor-default shadow-none"
                            >
                              {icon && (
                                <div className="flex items-center justify-center w-5 h-5">
                                  {icon}
                                </div>
                              )}
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-sm font-bold tracking-wide text-slate-300">
                                  {skillName}
                                </span>
                                {skillLevel && (
                                  <span className="text-[11px] font-medium text-emerald-400/70 tracking-wider">
                                    {skillLevel}
                                  </span>
                                )}
                              </div>
                            </div>
                           )
                        })}
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </section>

          {/* Projects & Experience Section */}
          <section id="projects" className="py-24">
            <div className="max-w-5xl mx-auto px-6">
              <RevealOnScroll>
                <div className="flex items-center gap-3 mb-20">
                  <Briefcase className="text-emerald-400" size={32} />
                  <h2 className="text-4xl font-bold text-white tracking-wide">{currentDict.projects.title}</h2>
                  <div className="h-px bg-slate-800/80 grow ml-6 rtl:ml-0 rtl:mr-6"></div>
                </div>
              </RevealOnScroll>
              
              <div className="space-y-12 border-l-2 rtl:border-l-0 rtl:border-r-2 border-slate-800 pl-8 rtl:pl-0 rtl:pr-8 relative">
                {currentDict.projects.exp.map((exp, index) => {
                   const techKey = index === 0 ? 'atrban' : index === 1 ? 'dianakala' : index === 2 ? 'vianmarket' : index === 3 ? 'lutbank' : index === 4 ? 'daramet' : 'dollerx';
                   const linkKey = index === 1 ? 'dianakala' : index === 2 ? 'vianmarket' : index === 3 ? 'lutbank' : index === 4 ? 'daramet' : index === 5 ? 'dollerx' : undefined;
                   
                   return (
                    <RevealOnScroll key={index} delay={index * 100}>
                      <ExperienceItem 
                        experience={exp} 
                        link={linkKey ? LINKS[linkKey as keyof typeof LINKS] : undefined}
                        tech={TECH_STACKS[techKey as keyof typeof TECH_STACKS]}
                        langDict={currentDict}
                      />
                    </RevealOnScroll>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Minimal Contact Section */}
          <section id="contact" className="py-24 relative">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <RevealOnScroll>
                <h2 className="text-4xl font-black text-white mb-6">{currentDict.contact.title}</h2>
                <p className="text-lg text-slate-400 mb-10 font-medium">
                  {currentDict.contact.desc}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href={`mailto:${GLOBAL_LINKS.email}`} className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors">
                    <div className="p-3 bg-slate-800/50 rounded-full"><Mail size={20} /></div>
                    <span className="font-mono">{GLOBAL_LINKS.email}</span>
                  </a>
                  <a href={GLOBAL_LINKS.telegram_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                    <div className="p-3 bg-slate-800/50 rounded-full"><Send size={20} /></div>
                    <span className="font-mono">{GLOBAL_LINKS.telegram_id}</span>
                  </a>
                  <a href={`tel:${GLOBAL_LINKS.phone}`} className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors">
                     <div className="p-3 bg-slate-800/50 rounded-full"><Phone size={20} /></div>
                    <span className="font-mono" dir="ltr">{GLOBAL_LINKS.phone}</span>
                  </a>
                </div>
              </RevealOnScroll>
            </div>
          </section>

        </main>

        {/* Minimal Footer */}
        <footer className="relative z-10 py-8 border-t border-slate-800/50 mt-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">
              &copy; {new Date().getFullYear()} {currentDict.personal.name}. {currentDict.footer.designedBy}
            </p>
            <button 
                onClick={() => scrollTo('home')} 
                className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-emerald-400 transition-colors"
              >
                {currentDict.footer.backToTop}
                <ArrowUp size={14} />
            </button>
          </div>
        </footer>
      </div>
    </ReactLenis>
  );
}