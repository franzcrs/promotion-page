import React, { useState } from 'react';
import { Globe } from 'lucide-react';

// Language content
const content = {
  en: {
    name: "Franz Arthur Chuquirachi Rosales",
    introduction: "I am an engineer and researcher solving societal challenges through technology and design. I hold a Master’s degree in Intelligent Mechanical Systems from Tokyo Metropolitan University and specialize in machine learning, data analysis, and UX-driven product development. Currently, I am developing research tools for muscle fatigue prediction using Tyscript, React and Rust. My greatest strength lies in bridging technology and design. Through my work, I strive to create tools that spark creativity and empower people to pursue their dreams.",
    contact: "Contact: franz.chuquirachi@gmail.com",
    links: [
      { name: "CV", url: "https://www.canva.com/design/DAGh51QyaM4/lFuwbo24GznNMr4nPD_L1w/view" },
      { name: "Work History (Japanese)", url: "https://drive.google.com/file/d/1uT8J3RH8Xx1K0Ob7OSGjdP2ooQ4daq-C/view?usp=sharing" },
      { name: "GitHub", url: "https://github.com/franzcrs" },
      { name: "ResearchGate", url: "https://researchgate.net/profile/Franz-Chuquirachi" },
      { name: "Portfolio", url: "https://docs.google.com/presentation/d/e/2PACX-1vTscKcOPAF6j--Rg5eeEEQvwp8Y3u0KBSQHD-kiuVLIdGPYqFV-r75o-jG4kAJEd3oVLbeo6drgBXZs/pub" }
    ]
  },
  ja: {
    name: "チュキラチ　ロサレス　フランツ　アーサー",
    introduction: "私は、テクノロジーとデザインを通じて社会的課題を解決するエンジニア兼研究者です。東京都立大学で知能機械システムの修士号を取得し、機械学習、データ分析、そしてUXを重視したプロダクト開発を専門としています。現在、TypeScript、React、Rustを用いて筋肉疲労予測のための研究ツールを開発しています。私の強みは、テクノロジーとデザインをつなぐことにあります。私の仕事を通じて、創造性を刺激し、人々が自分の夢を追い求める自信を持てるようなツールを生み出すことを目指しています。",
    contact: "連絡先: franz.chuquirachi@gmail.com",
    links: [
      { name: "CV", url: "https://www.canva.com/design/DAGh51QyaM4/lFuwbo24GznNMr4nPD_L1w/view" },
      { name: "職務経歴書", url: "https://drive.google.com/file/d/1uT8J3RH8Xx1K0Ob7OSGjdP2ooQ4daq-C/view?usp=sharing" },
      { name: "GitHub", url: "https://github.com/franzcrs" },
      { name: "ResearchGate", url: "https://researchgate.net/profile/Franz-Chuquirachi" },
      { name: "ポートフォリオ", url: "https://docs.google.com/presentation/d/e/2PACX-1vTscKcOPAF6j--Rg5eeEEQvwp8Y3u0KBSQHD-kiuVLIdGPYqFV-r75o-jG4kAJEd3oVLbeo6drgBXZs/pub" }
    ]
  }
};

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#0A192F] to-[#112240] animate-gradient z-0"></div>
      <div className="absolute inset-0 digital-grid z-10"></div>
      <div className="absolute inset-0 digital-dots z-20 opacity-30"></div>
      
      {/* Glow effects */}
      <div className="absolute top-20 left-1/4 w-[90] h-[90] bg-indigo-800 animate-slow-pulse rounded-full blur-3xl"></div>
      <div className="absolute top-[10px] lg:top-[7rem] left-[10px] lg:left-[5rem] w-[40rem] h-[40rem] bg-cyan-200 animate-slow-pulse rounded-full blur-xl" style={{ animationDelay: '-6s' }}></div>
      <div className="absolute -bottom-80 -right-80 w-[60rem] h-[60rem] bg-teal-400 animate-slow-pulse rounded-full blur-3xl" style={{ animationDelay: '-9s' }}></div>

      {/* Content */}
      <div className="relative z-30 min-h-screen flex items-center justify-center pt-[50px] pb-12">
        <div className="w-full max-w-[85%] md:max-w-[80%] lg:max-w-[1024px]">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column */}
            <div className="md:w-1/2 flex flex-col space-y-8">
              <h1 className={`${lang==='en' ? 'text-4xl':'text-3xl'} md:text-5xl font-bold text-white pt-12`}>
                {content[lang].name}
              </h1>
              
              {/* Profile picture */}
              <div className="w-full rounded-lg">
                <img src="https://i.ibb.co/Z6rkj509/portrait.jpg" alt="portrait photo" className="contrast-[1.05] brightness-[0.89] grayscale-[0.1] w-[94%] mx-auto rounded-lg border border-blue-900/30 shadow-xl  bg-blue-950"/>
              </div>
            </div>

            {/* Right column */}
            <div className="md:w-1/2 flex flex-col">
              {/* Language toggle */}
              <button
                onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}
                className="self-end w-[112px] mb-1 h-11 px-4 py-2 bg-blue-900/20 rounded-full hover:bg-blue-800/30 transition-colors flex items-center gap-2 border border-blue-800/30"
              >
                <Globe size="18" className="text-blue-400" />
                <span className="text-blue-200">{lang === 'en' ? '日本語' : 'English'}</span>
              </button>

              <div className="hidden md:block w-full mt-[96px]" />
              
              {/* Introduction */}
              <div className="bg-blue-900/10 backdrop-blur-sm rounded-lg p-6 mb-8 mt-8 border border-blue-800/30">
                <p className="text-sm text-blue-100 leading-relaxed">
                  {content[lang].introduction}
                </p>
              </div>

              {/* Links */}
              <div className="grid gap-4">
                {content[lang].links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900/10 backdrop-blur-sm rounded-lg p-4 hover:bg-blue-800/20 transition-all transform hover:-translate-y-1 flex items-center justify-between group border border-blue-800/30"
                  >
                    <span className="text-blue-100">{link.name}</span>
                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                ))}
              </div>

              {/* Contact */}
              <p className="text-blue-400/60 mt-8 text-center">
                {content[lang].contact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;