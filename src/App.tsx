/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Volume2, HelpCircle, ExternalLink, Monitor, Clock, Mail, Calendar, PlaySquare, ArrowDownAZ, ArrowUpZA, Search, Filter, Lightbulb, Coffee, Video, Newspaper, MessageCircle, Network, Globe, Calculator, PiggyBank, Landmark, CreditCard, AlertTriangle, Headphones, Mic, Link, XCircle, CheckCircle, BookOpen, Book, ChevronDown, Plus, Minus, Phone, ChevronRight, RefreshCw, Info, MessageSquare, MapPin, Play, Check } from "lucide-react";
import { Layout } from "./Layout";

function Home() {
  return (
    <div className="animate-in fade-in duration-500 w-full">
      {/* Hero Graphic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 h-64 md:h-80 lg:h-[400px]">
        
        {/* Main Large Image (Diverse Group) */}
        <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-sm relative group border border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Young diverse study group working online"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003a70]/30 to-transparent mix-blend-multiply"></div>
        </div>
        
        {/* Right side mature students */}
        <div className="hidden md:flex flex-col gap-4 h-full">
          <div className="flex-1 rounded-2xl overflow-hidden shadow-sm relative group border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80"
              alt="Mature student learning online"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-sm relative group border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
              alt="Professional adult male using laptop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-8">
        <div className="h-1 w-12 bg-[#ffc72c] shrink-0"></div>
        <h1 className="text-3xl md:text-5xl font-bold text-[#003a70] tracking-tight">
          👋 Pjila’si (Welcome) to the eCampus Information Site!
        </h1>
      </div>
      
      <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-4xl">
        <p>
          On a physical campus, getting answers and information might mean stopping by a front desk, chatting with staff in the hallway, or dropping into an office.
        </p>
        <p>
          As an eCampus student, you have access to the same level of support, resources, and expertise - delivered in a way that’s designed for our online environment. Our teams are here to ensure you receive the same high standard of service, with flexible, convenient options for accessing support and information.
        </p>
        <p>
          We know flexibility matters, and having access to the information you need - when you need it - is essential. That’s why this site was created: to provide reliable, up-to-date information at your fingertips, whether you’re studying after work, in the evening, or on the weekend.
        </p>
        <p>
          To make the most of your eCampus experience, we encourage you to bookmark this site for quick reference and join our{" "}
          <a
            href="https://teams.microsoft.com/l/team/19%3Ax83akfsrAXxz9xh9VSn08ItXqSfbDQXptMP0OeVrNzY1%40thread.tacv2/conversations?groupId=bf59ddd1-45d4-4c2a-8eb0-9fe75940eb60&tenantId=c59bd97a-4b1b-4dab-89ac-a0ab6a8e4435"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#005596] hover:text-[#003a70] underline font-medium transition-colors"
          >
            eCampus Community Teams site
          </a>
          . Staying connected to these resources will help you remain informed, engaged, and fully supported throughout your studies.
        </p>
      </div>
    </div>
  );
}

const programsData = [
  { credential: "Certificate", name: "Academic & Career Connections" },
  { credential: "High School Diploma", name: "Adult Learning Program" },
  { credential: "", name: "Adult Learning Program - Academic Upgrading" },
  { credential: "Certificate", name: "Administrative Professional" },
  { credential: "Diploma", name: "Business Administration" },
  { credential: "Diploma", name: "Business Administration - Accounting" },
  { credential: "Graduate Certificate", name: "Digital Marketing" },
  { credential: "Diploma", name: "Early Childhood Education" },
  { credential: "Diploma", name: "Funeral & Allied Health Services" },
  { credential: "Certificate", name: "Funeral Arranging & Directing" },
  { credential: "Diploma", name: "IT Programming" },
  { credential: "Diploma", name: "Library & Information Technology" },
  { credential: "Graduate Certificate", name: "Non-Profit Leadership" }
];

function OurCampus() {
  const indigenousTextEnglish = "NSCC is located in Mi’kma’ki, the unceded territory and traditional homeland of the Mi’kmaq Nation. Our relationship is based on a series of peace and friendship treaties between the Mi’kmaq Nation and the Crown, dating back to 1725.\n\nAs Treaty beneficiaries, we recognize that we are all Treaty People.";
  const indigenousTextMikmaq = "NSCC etek Mi’kma’ki, Mi’kmaq wmitkiwow, maqamikew mena’q pmi-ika’luksi’kw. Kijija’ti’k wjit sa’qewe’l wla’matnewey aq wlteskamkewe’l tli’ti’l kiwto’qi’k Mi’kmaq aq Crown, weja’tekemk 1725.\n\nMa’muni-ksalultiek, mui’n nuji-kina’muen, kiskuk elmi’knikewe’k el-lukuti’k.";

  const africanTextEnglish = "NSCC recognizes the African Nova Scotians as a distinct group who arrived here 400 years ago. From that time on, they have contributed to the infrastructure and economic wealth of the towns and cities they helped to build, but from which they could not benefit.\n\nLet us learn more about how our respective communities were shaped by the historical contributions of African Nova Scotians to Mi'kma'ki.";
  const africanTextSwahili = "NSCC inatambua Waafrika wa Nova Scotia kama kundi tofauti ambalo lilifika hapa miaka 400 iliyopita. Kuanzia wakati huo, wamechangia katika miundombinu na utajiri wa kiuchumi wa miji na majiji waliyosaidia kujenga, lakini ambayo hawakuweza kufaidika nayo.\n\nHebu tujifunze zaidi kuhusu jinsi jamii zetu zilivyoundwa na mchango wa kihistoria wa Waafrika wa Nova Scotia kwa Mi'kma'ki.";
  const africanTextSomali = "NSCC waxay u aqoonsan tahay dadka Afrikaanka ah ee reer Nova Scotia inay yihiin koox gaar ah oo halkan yimid 400 oo sano ka hor. Laga soo bilaabo waqtigaas, waxay gacan ka geysteen kaabayaasha iyo hantida dhaqaale ee magaalooyinka ay gacan ka geysteen dhisitaankooda, laakiin aysan ka faa'iideysan karin.\n\nAan wax badan ka ogaano sida bulshooyinkeenna ay u qaabeeyeen wax ku darsiga taariikhiga ah ee Afrikaanka Nova Scotia ee Mi'kma'ki.";
  const africanTextAmharic = "NSCC አፍሪካውያን የኖቫ ስኮሸያ ነዋሪዎችን ከ400 ዓመታት በፊት እዚህ እንደደረሱ የተለየ ቡድን እውቅና ይሰጣል። ከዚያን ጊዜ ጀምሮ፣ ለመገንባት በረዱት፣ ነገር ግን ተጠቃሚ መሆን ባልቻሉባቸው ከተሞች መሠረተ ልማት እና ኢኮኖሚያዊ ሀብት ላይ አስተዋጽኦ አድርገዋል።\n\nየየራሳችን ማህበረሰቦች በአፍሪካውያን ኖቫ ስኮሸያ ታሪካዊ አስተዋፅኦ እንዴት እንደተቀርጹ የበለጠ እንወቅ።";

  const [indigenousLang, setIndigenousLang] = useState<"EN" | "MIK">("EN");
  const [africanLang, setAfricanLang] = useState<"EN" | "SW" | "SO" | "AM">("EN");

  const playAudio = (text: string, langHint?: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (langHint) {
        utterance.lang = langHint;
      }
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="animate-in fade-in duration-500 w-full">
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-1 w-12 bg-[#ffc72c] shrink-0"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Our Campus</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Mi'kmaq Acknowledgement */}
        <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
          <div className="w-full h-48 md:h-56 mb-6 rounded-lg overflow-hidden relative border border-slate-200">
            <img 
              src="/indigenous-quillwork.png" 
              alt="Symbolic nature landscape representing Mi'kma'ki" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-[#003a70] mb-4">Indigenous Land Acknowledgement</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed flex-grow text-sm md:text-base whitespace-pre-line">
            {indigenousLang === "EN" ? indigenousTextEnglish : indigenousTextMikmaq}
          </div>
          <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <button 
                onClick={() => setIndigenousLang("EN")} 
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${indigenousLang === "EN" ? "bg-[#003a70] text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}
              >
                English
              </button>
              <button 
                onClick={() => setIndigenousLang("MIK")} 
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${indigenousLang === "MIK" ? "bg-[#003a70] text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}
              >
                Mi'kmaq
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => playAudio(indigenousLang === "EN" ? indigenousTextEnglish : indigenousTextMikmaq, indigenousLang === "EN" ? "en-CA" : undefined)}
                className="flex items-center gap-2 text-sm text-[#003a70] hover:text-[#002b55] font-medium transition-colors"
                title="Read text aloud"
              >
                <Volume2 className="w-4 h-4" /> Listen
              </button>
              <div className="relative group flex items-center">
                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                  <HelpCircle className="w-4 h-4" />
                </button>
                <div className="absolute bottom-full right-0 md:left-1/2 md:-translate-x-1/2 mb-2 w-64 bg-slate-900 text-white text-xs rounded p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 pointer-events-none">
                  This will use your browser's built-in text-to-speech system. If your browser doesn't have one or it's not supported, you can use a third-party screen reader or TTS service.
                  <div className="absolute top-full right-2 md:left-1/2 md:-translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* African Nova Scotian Acknowledgement */}
        <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
          <div className="w-full h-48 md:h-56 mb-6 rounded-lg overflow-hidden relative border border-slate-200">
            <img 
              src="/african-ns-acknowledgement.png" 
              alt="Symbolic woven and abstract pattern representing African Nova Scotian heritage" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply"></div>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-[#003a70] mb-4">African Nova Scotians Recognition</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed flex-grow text-sm md:text-base whitespace-pre-line">
             {africanLang === "EN" && africanTextEnglish}
             {africanLang === "SW" && africanTextSwahili}
             {africanLang === "SO" && africanTextSomali}
             {africanLang === "AM" && africanTextAmharic}
          </div>
          <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2 flex-wrap">
              <button 
                onClick={() => setAfricanLang("EN")} 
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${africanLang === "EN" ? "bg-[#003a70] text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}
              >
                English
              </button>
              <button 
                onClick={() => setAfricanLang("SW")} 
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${africanLang === "SW" ? "bg-[#003a70] text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}
              >
                Swahili
              </button>
              <button 
                onClick={() => setAfricanLang("SO")} 
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${africanLang === "SO" ? "bg-[#003a70] text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}
              >
                Somali
              </button>
              <button 
                onClick={() => setAfricanLang("AM")} 
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${africanLang === "AM" ? "bg-[#003a70] text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}
              >
                Amharic
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => {
                  const textAudio = africanLang === "EN" ? africanTextEnglish :
                                    africanLang === "SW" ? africanTextSwahili :
                                    africanLang === "SO" ? africanTextSomali :
                                    africanTextAmharic;
                  let langHint = "en-CA";
                  if (africanLang === "SW") langHint = "sw-KE";
                  if (africanLang === "SO") langHint = "so-SO";
                  if (africanLang === "AM") langHint = "am-ET";
                  playAudio(textAudio, langHint);
                }}
                className="flex items-center gap-2 text-sm text-[#003a70] hover:text-[#002b55] font-medium transition-colors"
                title="Read text aloud"
              >
                <Volume2 className="w-4 h-4" /> Listen
              </button>
              <div className="relative group flex items-center">
                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                  <HelpCircle className="w-4 h-4" />
                </button>
                <div className="absolute bottom-full right-0 md:left-1/2 md:-translate-x-1/2 mb-2 w-64 bg-slate-900 text-white text-xs rounded p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 pointer-events-none">
                  This will use your browser's built-in text-to-speech system. If your browser doesn't have one or it's not supported, you can use a third-party screen reader or TTS service.
                  <div className="absolute top-full right-2 md:left-1/2 md:-translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-16 border-t border-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003a70] mb-12">You Belong. Right here. Right now. Always.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Statements */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-red-50 text-red-900 p-5 rounded-r-xl border-l-4 border-red-500 text-base md:text-lg">
              You belong if you're Indigenous, African Nova Scotian, a newcomer, or a settler. Whether your ancestors walked these lands, or you just arrived.
            </div>
            
            <div className="bg-orange-50 text-orange-900 p-5 rounded-r-xl border-l-4 border-orange-500 text-base md:text-lg">
              You belong here - in every course, every conversation, every click.
            </div>
            
            <div className="bg-amber-50 text-amber-900 p-5 rounded-r-xl border-l-4 border-amber-500 text-base md:text-lg">
              You belong if you speak Mi’kmaw, Arabic, French, ASL, or the language of emojis. Whether English is your first, second, or fifth language.
            </div>
            
            <div className="bg-green-50 text-green-900 p-5 rounded-r-xl border-l-4 border-green-500 text-base md:text-lg">
              You belong if you're queer, trans, nonbinary, or questioning. If you're disabled, neurodivergent, or chronically ill. If you need captions, quiet spaces, or time to breathe.
            </div>
            
            <div className="bg-teal-50 text-teal-900 p-5 rounded-r-xl border-l-4 border-teal-500 text-base md:text-lg">
              You belong if you're 17 or 70. If you're parenting, caregiving, working nights, or chasing dreams between shifts.
            </div>
            
            <div className="bg-blue-50 text-blue-900 p-5 rounded-r-xl border-l-4 border-blue-500 text-base md:text-lg">
              You belong if you pray, if you don’t, if your faith is private, public, or evolving.
            </div>
            
            <div className="bg-indigo-50 text-indigo-900 p-5 rounded-r-xl border-l-4 border-indigo-500 text-base md:text-lg">
              You belong if you've faced barriers. If you've been underestimated. If you're ready to rewrite your story.
            </div>
            
            <div className="bg-purple-50 text-purple-900 p-5 rounded-r-xl border-l-4 border-purple-500 text-base md:text-lg">
              Inclusion, Diversity, Equity, Accessibility, and Anti-Racism isn’t just a framework - it’s our heartbeat.
            </div>
            
            <div className="bg-pink-50 text-pink-900 p-5 rounded-r-xl border-l-4 border-pink-500 text-base md:text-lg">
              Inclusion. Diversity. Equity. Accessibility. Anti-Racism. Every day. For everyone.
            </div>
            
            <p className="font-bold text-slate-700 text-xl mt-8 pl-4">- Your eCampus Team</p>
          </div>
          
          {/* Faculty Images */}
          <div className="space-y-6">
             <div className="aspect-square bg-slate-100 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-slate-300 text-slate-400 overflow-hidden shadow-sm relative group">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Faculty member" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
             </div>
             <div className="aspect-square bg-slate-100 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-slate-300 text-slate-400 overflow-hidden shadow-sm relative group">
               <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" alt="Faculty member" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
             </div>
             <div className="aspect-square bg-slate-100 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-slate-300 text-slate-400 overflow-hidden shadow-sm relative group">
               <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80" alt="Faculty member" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
             </div>
          </div>
          
        </div>
      </div>

      <div className="mt-20 pt-16 border-t border-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003a70] mb-12">Learn more about eCampus</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Video Embed */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-[#003a70] mb-4">This is eCampus</h3>
            <iframe className="w-full aspect-video rounded-xl shadow-sm border border-slate-200" src="https://www.youtube.com/embed/sEA6XDhplQk" title="This is eCampus" allowFullScreen></iframe>
          </div>

          {/* Virtual Tour */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-[#003a70] mb-4">Virtual Tour</h3>
            <a href="https://virtualtour.nscc.ca/nscc/home/featured-tours/ecampus" target="_blank" rel="noopener noreferrer" className="flex-grow group relative rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col justify-end min-h-[250px]">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" alt="Virtual Tour" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003a70]/90 to-transparent"></div>
              <div className="relative p-8 text-white">
                <span className="inline-flex items-center gap-2 font-semibold text-xl">
                  Explore our Virtual Campus <ExternalLink className="w-5 h-5" />
                </span>
                <p className="text-blue-100 mt-2 text-sm">Take a self-guided 360° tour of what eCampus looks and feels like.</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 mb-8">
          <p className="text-xl md:text-2xl text-center text-[#003a70] font-medium mb-12 leading-relaxed">
            At eCampus, our programs are offered <span className="font-bold text-[#ffc72c]">asynchronous</span> or <span className="font-bold text-[#ffc72c]">synchronous</span>; part-time or full-time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4 text-[#003a70]">
                <Monitor className="w-7 h-7" />
                <h4 className="text-2xl font-bold">Synchronous</h4>
              </div>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Learning is delivered entirely online and includes scheduled classes. Live virtual sessions are held daily, Monday through Friday, and attendance is required.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4 text-[#003a70]">
                <Clock className="w-7 h-7" />
                <h4 className="text-2xl font-bold">Asynchronous</h4>
              </div>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Program learning is delivered entirely online, with no scheduled class times. While learners have the flexibility to complete their coursework on their own schedule, courses are not self-paced. Students are expected to meet established deadlines and actively participate in assignments, quizzes, and discussions throughout the program.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-slate-200">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003a70] mb-12">Our Programs</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-7 gap-x-8 gap-y-4 lg:grid-flow-col">
            {programsData.map((program, idx) => (
              <div key={idx} className="flex gap-4 items-stretch group cursor-pointer min-h-[60px]">
                 <div className="w-1/3 bg-[#e8e8e8] text-[#003a70] font-bold text-xs md:text-sm flex items-center justify-center p-3 rounded-lg text-center shadow-sm whitespace-pre-wrap">
                   {program.credential}
                 </div>
                 <div className="w-2/3 bg-[#004b87] hover:bg-[#003a70] text-white font-bold text-sm md:text-base flex items-center justify-center p-3 rounded-lg text-center shadow-sm transition-colors underline underline-offset-4 decoration-white/50 hover:decoration-white">
                   {program.name}
                 </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function OurTeam() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filterDepartment, setFilterDepartment] = useState<string>("All");

  const departments = ["All", ...Array.from(new Set(contactsData.map(c => c.department)))];

  const filteredAndSortedContacts = contactsData
    .filter(contact => {
      const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            contact.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDepartment = filterDepartment === "All" || contact.department === filterDepartment;
      return matchesSearch && matchesDepartment;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });

  return (
    <div className="animate-in fade-in duration-500 w-full mb-16">
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Our Team</h1>
      </div>

      {/* Callout Section */}
      <div className="bg-blue-50/70 border border-blue-100 rounded-3xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003a70] mb-6">We are here for you.</h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            No matter where you're learning from, our entire eCampus team is behind the screen
            - ready to support, guide, and champion you throughout your learning journey.
          </p>
        </div>
        
        <div className="flex-1 w-full flex justify-center mt-4 md:mt-0">
          {/* Laptop Mockup */}
          <div className="relative w-full max-w-md pt-2">
            {/* Screen Bezel */}
            <div className="bg-[#111] rounded-t-xl md:rounded-t-2xl p-3 md:p-4 shadow-xl relative z-10">
              {/* Inner Screen */}
              <div className="relative aspect-[16/10] bg-zinc-800 rounded-sm overflow-hidden flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Our eCampus Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Laptop Base */}
            <div className="bg-[#fbeae2] h-3 md:h-4 w-[116%] -ml-[8%] rounded-t-md shadow-lg relative z-20 flex justify-center border-b-[3px] border-[#e2cdc2]">
              {/* Trackpad Indent */}
              <div className="w-16 md:w-24 h-1 md:h-1.5 bg-black/5 rounded-b-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Departments/Teams Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[#003a70] mb-8">Departments/Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamsInfo.map((team, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-2xl font-bold text-[#003a70] mb-4">{team.name}</h3>
              <ul className="list-disc pl-5 space-y-2 text-[#003a70] font-medium">
                {team.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-12 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
        {/* Search */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-[#003a70] focus:ring-1 focus:ring-[#003a70] sm:text-sm shadow-sm"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter */}
        <div className="relative w-full md:w-64 flex-shrink-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-gray-400" />
          </div>
          <select
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-white text-gray-900 focus:outline-none focus:border-[#003a70] focus:ring-1 focus:ring-[#003a70] sm:text-sm appearance-none shadow-sm"
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <button
          onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
          className="flex items-center justify-center space-x-2 bg-white border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex-shrink-0"
        >
          {sortOrder === "asc" ? <ArrowDownAZ className="w-5 h-5 text-[#003a70]" /> : <ArrowUpZA className="w-5 h-5 text-[#003a70]" />}
          <span className="text-sm font-medium">Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filteredAndSortedContacts.map(contact => (
          <div key={contact.id} className="flex flex-col items-center">
            {/* Top Blue Background Card area */}
            <div className="bg-[#e8eff5] rounded-3xl w-full pt-8 pb-16 px-4 text-center shadow-sm">
              <h3 className="text-xl font-bold text-[#003a70]">{contact.name}</h3>
              <p className="text-[#005a9c] text-sm mt-1">{contact.pronouns}</p>
            </div>
            
            {/* Overlapping Profile Image */}
            <div className="w-32 h-32 rounded-full border-[6px] border-white overflow-hidden -mt-16 z-10 shadow-sm bg-white">
              <img src={contact.image} alt={contact.name} className="w-full h-full object-cover" />
            </div>

            {/* Bottom details */}
            <div className="mt-3 text-center flex flex-col items-center w-full">
              <h4 className="font-bold text-[#003a70] text-lg">{contact.role}</h4>
              <p className="text-sm text-gray-500 mb-5 font-medium px-4 py-1 bg-slate-100 rounded-full mt-2">{contact.department}</p>

              <div className="flex flex-col space-y-3 text-left w-full max-w-[200px]">
                <a href={contact.meetLink} className="flex items-center space-x-3 text-[#005a9c] hover:underline group">
                  <PlaySquare className="w-5 h-5 text-[#6eb4fb] group-hover:text-[#005a9c] transition-colors" />
                  <span className="text-sm font-medium underline-offset-4">Meet {contact.name.split(' ')[0]}</span>
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center space-x-3 text-[#005a9c] hover:underline group">
                  <Mail className="w-5 h-5 text-[#c1a0e8] group-hover:text-[#005a9c] transition-colors" />
                  <span className="text-sm font-medium underline-offset-4">Email</span>
                </a>
                <a href={contact.teamsLink} className="flex items-center space-x-3 text-[#005a9c] hover:underline group">
                  <Monitor className="w-5 h-5 text-[#73cfd7] group-hover:text-[#005a9c] transition-colors" />
                  <span className="text-sm font-medium underline-offset-4">Teams Chat or Call</span>
                </a>
                <a href={contact.bookLink} className="flex items-center space-x-3 text-[#005a9c] hover:underline group">
                  <Calendar className="w-5 h-5 text-[#b0a8e8] group-hover:text-[#005a9c] transition-colors" />
                  <span className="text-sm font-medium underline-offset-4">Book now</span>
                </a>
              </div>
            </div>
          </div>
        ))}
        {filteredAndSortedContacts.length === 0 && (
          <div className="col-span-full py-16 flex flex-col items-center justify-center text-slate-500 bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
            <Search className="w-12 h-12 text-slate-300 mb-4" />
            <p className="text-lg font-medium">No contacts found</p>
            <p className="text-sm">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function OurCommunication() {
  return (
    <div className="animate-in fade-in duration-500 w-full mb-16">
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Our Communication</h1>
      </div>

      {/* Callout Section */}
      <div className="bg-blue-50/70 border border-blue-100 rounded-3xl p-8 md:p-12 mb-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column: Communication is key */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex-shrink-0 w-16 h-16 bg-[#e9496a] rounded-full flex items-center justify-center mt-1 outline outline-offset-[3px] outline-2 outline-white">
            <span className="text-white text-5xl font-bold leading-none mb-1">!</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#003a70] mb-6">Communication is key:</h2>
            <div className="space-y-6 text-lg text-[#003a70] leading-relaxed">
              <p>As an online learner, reading thoroughly and paying attention to detail is key to your success.</p>
              <p>Since much of your course information and communication is shared in writing, taking the time to read carefully will help you stay on track, feel confident in your work, and avoid missing important details.</p>
              <p>Review the ways we communicate here:</p>
            </div>
          </div>
        </div>

        {/* Right Column: ProTips */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex-shrink-0 mt-1 relative w-16 h-16 flex items-center justify-center">
            {/* Custom Lightbulb icon resembling the image */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#ffe600]" fill="none" stroke="currentColor">
              <path strokeWidth="8" strokeLinecap="round" d="M50 15 v-10 M15 50 h-10 M85 50 h10 M25 25 l-7 -7 M75 25 l7 -7" />
              <circle cx="50" cy="50" r="25" fill="currentColor" />
              <path d="M40 75 Q 50 85 60 75 Z" fill="currentColor" />
              <path d="M45 80 h10 M46 87 h8" strokeWidth="4" stroke="currentColor" />
              <path d="M40 50 l7 7 l15 -15" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#003a70] mb-6">ProTips:</h2>
            <ul className="list-disc pl-5 space-y-4 text-lg text-[#003a70]">
              <li className="pl-2 marker:text-black">
                Bookmark: <a href="#" className="underline hover:text-blue-800 transition-colors underline-offset-4">nscc.ca</a>, <a href="#" className="underline hover:text-blue-800 transition-colors underline-offset-4">eCampus Information Site</a>, <a href="#" className="underline hover:text-blue-800 transition-colors underline-offset-4">academic calendar</a>
              </li>
              <li className="pl-2 marker:text-black">
                Join: <a href="#" className="underline hover:text-blue-800 transition-colors underline-offset-4">eCampus Community</a> - <a href="#" className="underline hover:text-blue-800 transition-colors underline-offset-4">set up notifications</a>
              </li>
              <li className="pl-2 marker:text-black">
                Download Outlook app: <a href="#" className="underline hover:text-blue-800 transition-colors underline-offset-4">iPhone</a> or <a href="#" className="underline hover:text-blue-800 transition-colors underline-offset-4">Android</a>
              </li>
              <li className="pl-2 marker:text-black">
                <a href="#" className="underline hover:text-blue-800 transition-colors underline-offset-4">Connect Outlook & Brightspace Calendars</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {[
          {
            title: "Brightspace",
            content: (
              <>
                <p className="mb-4">Brightspace is our online learning platform. Visit the <a href="#" className="underline hover:text-blue-800 transition-colors underline-offset-4 font-medium">Brightspace Tool Kit</a> to review the 'How to Guide', take a Brightspace Practice Course, and learn more.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="pl-2 marker:text-black">This <a href="#" className="underline hover:text-blue-800 transition-colors underline-offset-4 font-medium">video</a> introduces you to Brightspace and shows how to find your way around your Course Home page.</li>
                  <li className="pl-2 marker:text-black"><a href="#" className="underline hover:text-blue-800 transition-colors underline-offset-4 font-medium">Brightspace 'Pulse App'</a> can be used to check-in on course material, however, the app is missing key functions of the web format.</li>
                  <li className="pl-2 marker:text-black">Ensure you check Brightspace through the website daily.</li>
                </ul>
              </>
            ),
            icon: (
              <svg className="w-28 h-28 text-[#003a70]" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10 20 h80 v60 h-80 z" fill="#003a70"/>
                <path d="M15 25 h70 v46 h-70 z" fill="white"/>
                <circle cx="50" cy="76" r="2.5" fill="white"/>
                <rect x="25" y="30" width="50" height="36" rx="2" fill="none" stroke="#003a70" strokeWidth="3"/>
                <line x1="33" y1="37" x2="44" y2="37" stroke="#003a70" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="33" y1="43" x2="44" y2="43" stroke="#003a70" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="33" y1="49" x2="44" y2="49" stroke="#003a70" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="56" y1="37" x2="67" y2="37" stroke="#003a70" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="56" y1="43" x2="67" y2="43" stroke="#003a70" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="56" y1="49" x2="67" y2="49" stroke="#003a70" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="50" y1="30" x2="50" y2="53" stroke="#003a70" strokeWidth="3"/>
                <text x="50" y="61" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#003a70" letterSpacing="0.5">E-LEARNING</text>
              </svg>
            )
          },
          {
            title: "NSCC Email (Outlook)",
            content: (
              <>
                <p className="mb-4">Check your NSCC email daily. Official communications from the College and your instructors will be sent here.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="pl-2 marker:text-black">Keep your inbox organized.</li>
                  <li className="pl-2 marker:text-black">Use a clear subject line when emailing instructors.</li>
                </ul>
              </>
            ),
            icon: (
              <svg className="w-28 h-28 text-[#003a70]" viewBox="0 0 100 100" fill="currentColor">
                 <rect x="15" y="25" width="70" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="4"/>
                 <path d="M15 30 L50 55 L85 30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          },
          {
            title: "Microsoft Teams",
            content: (
              <>
                <p className="mb-4">Teams is used for online classes, group work, and chatting with peers or instructors.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="pl-2 marker:text-black">Download the desktop app for the best experience.</li>
                  <li className="pl-2 marker:text-black">Keep your app updated.</li>
                </ul>
              </>
            ),
            icon: (
              <svg className="w-28 h-28 text-[#003a70]" viewBox="0 0 100 100" fill="currentColor">
                 <rect x="20" y="25" width="50" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="4"/>
                 <path d="M70 35 L85 25 V65 L70 55" fill="#003a70" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
                 <path d="M35 45 A10 10 0 0 1 55 45" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            )
          }
        ].map((method, i) => (
          <div key={i} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm block clearfix">
            <h3 className="text-2xl font-bold text-[#003a70] mb-6">{method.title}</h3>
            <div className="text-lg text-slate-800 leading-relaxed">
              {method.icon && (
                <div className="float-right w-24 h-24 md:w-28 md:h-28 ml-6 mb-2" aria-hidden="true">
                  {method.icon}
                </div>
              )}
              {method.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const keyTermsData = [
  {
    title: "Career Chat",
    description: "Live sessions, vodcasts, and drop-in sessions to prepare students for work experience and job search.",
    icon: <Coffee className="w-12 h-12 text-[#003a70]" />,
  },
  {
    title: "eBite",
    description: "Short videos (vodcasts) that share information on a range of topics.",
    icon: <Video className="w-12 h-12 text-[#003a70]" />,
  },
  {
    title: "eBrief",
    description: "Weekly eCampus newsletter sharing updates and important information via email.",
    icon: <Newspaper className="w-12 h-12 text-[#003a70]" />,
  },
  {
    title: "eMeetup",
    description: "Live virtual sessions that explore supports and opportunities available to students.",
    icon: <MessageCircle className="w-12 h-12 text-[#003a70]" />,
  },
  {
    title: "eCampus Community Teams Site",
    description: "Our virtual campus - a place for real-time updates, events, and connecting with others.",
    icon: <Network className="w-12 h-12 text-[#003a70]" />,
  },
  {
    title: "eCampus Information Site",
    description: "Your go-to website for essential, eCampus and program-specific resources, supports and information.",
    icon: <Globe className="w-12 h-12 text-[#003a70]" />,
  }
];

function KeyTerms() {
  return (
    <div className="animate-in fade-in duration-500 w-full mb-16">
      <div className="flex items-start space-x-4 mb-12 mt-4">
        <div className="h-1 w-12 bg-[#ffc72c] mt-6"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight max-w-xl leading-tight">Our Key terms, explained simply</h1>
      </div>

      <div className="flex flex-col space-y-6 max-w-5xl">
        {keyTermsData.map((term, i) => (
          <div key={i} className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="flex-shrink-0 w-24 h-24 flex flex-col items-center justify-center text-center">
              {term.icon}
            </div>
            <div className="flex-1 w-full border-[3px] border-[#ffc72c] rounded-3xl p-6 sm:px-8 sm:py-6 bg-white shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-[#003a70] mb-2">{term.title}</h3>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">{term.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const teamsInfo = [
  {
    name: "Student Services",
    responsibilities: [
      "Student Advising & Cultural Support",
      "Counselling",
      "Accessibility Services",
      "Registrar"
    ]
  },
  {
    name: "School of Business",
    responsibilities: [
      "Business Administration",
      "Accounting & Finance",
      "Marketing",
      "Management"
    ]
  },
  {
    name: "Management",
    responsibilities: [
      "Campus Operations",
      "Strategic Planning",
      "Human Resources",
      "Facilities"
    ]
  }
];

const contactsData = [
  {
    id: 1,
    name: "Lillian Lake",
    pronouns: "(she/her)",
    role: "Student Advisor",
    department: "Student Services",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    meetLink: "#",
    email: "lillian@example.com",
    teamsLink: "#",
    bookLink: "#"
  },
  {
    id: 2,
    name: "John Doe",
    pronouns: "(he/him)",
    role: "Department Chair",
    department: "School of Business",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
    meetLink: "#",
    email: "john@example.com",
    teamsLink: "#",
    bookLink: "#"
  },
  {
    id: 3,
    name: "Jane Smith",
    pronouns: "(they/them)",
    role: "Management Consultant",
    department: "Management",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    meetLink: "#",
    email: "jane@example.com",
    teamsLink: "#",
    bookLink: "#"
  },
  {
    id: 4,
    name: "Michael Johnson",
    pronouns: "(he/him)",
    role: "Financial Aid Officer",
    department: "Student Services",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    meetLink: "#",
    email: "michael@example.com",
    teamsLink: "#",
    bookLink: "#"
  },
  {
    id: 5,
    name: "Sarah Williams",
    pronouns: "(she/her)",
    role: "Marketing Instructor",
    department: "School of Business",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    meetLink: "#",
    email: "sarah@example.com",
    teamsLink: "#",
    bookLink: "#"
  },
  {
    id: 6,
    name: "David Brown",
    pronouns: "(he/him)",
    role: "Operations Manager",
    department: "Management",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80",
    meetLink: "#",
    email: "david@example.com",
    teamsLink: "#",
    bookLink: "#"
  },
];

function Contacts() {
  return (
    <div className="animate-in fade-in duration-500 w-full mb-16 max-w-4xl">
      <div className="flex items-center space-x-4 mb-12">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Contacts & Quick Links</h1>
      </div>

      {/* Hero Image Section */}
      <div className="relative mb-12 rounded-[2rem] overflow-hidden h-[250px] md:h-[350px]">
        <img
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
          alt="Student at laptop"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-white px-8 py-5 md:py-6 rounded-tr-[2rem]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#005a9c]">Questions? We've got you.</h2>
        </div>
      </div>

      {/* Inquiry Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-2xl text-sm md:text-base">
        <a href="#" className="flex items-center space-x-4 bg-slate-50 shadow-sm border border-slate-200 p-2 rounded hover:bg-slate-100 transition-colors">
          <div className="w-8 h-8 flex items-center justify-center font-bold shrink-0 bg-[#ffe4e6] text-red-500 rounded text-lg">?</div>
          <span className="text-[#005a9c] font-medium underline underline-offset-4 flex-1 text-center pr-8">General Inquiries</span>
        </a>
        <a href="#" className="flex items-center space-x-4 bg-slate-50 shadow-sm border border-slate-200 p-2 rounded hover:bg-slate-100 transition-colors">
          <div className="w-8 h-8 flex items-center justify-center text-lg shrink-0 overflow-hidden bg-[#e2e8f0] rounded">
            <span role="img" aria-label="books">📚</span>
          </div>
          <span className="text-[#005a9c] font-medium underline underline-offset-4 flex-1 text-center pr-8">Library Inquiries</span>
        </a>
        <a href="#" className="flex items-center space-x-4 bg-slate-50 shadow-sm border border-slate-200 p-2 rounded hover:bg-slate-100 transition-colors">
          <div className="w-8 h-8 flex items-center justify-center font-bold shrink-0 bg-[#dcfce7] text-green-600 rounded text-lg">$</div>
          <span className="text-[#005a9c] font-medium underline underline-offset-4 flex-1 text-center pr-8">Finance Inquiries</span>
        </a>
        <a href="#" className="flex items-center space-x-4 bg-slate-50 shadow-sm border border-slate-200 p-2 rounded hover:bg-slate-100 transition-colors">
          <div className="w-8 h-8 flex items-center justify-center text-lg shrink-0 overflow-hidden bg-[#e2e8f0] rounded">
            <span role="img" aria-label="store">🏛️</span>
          </div>
          <span className="text-[#005a9c] font-medium underline underline-offset-4 flex-1 text-center pr-8">Bookstore Inquiries</span>
        </a>
        <a href="#" className="flex items-center space-x-4 bg-slate-50 shadow-sm border border-slate-200 p-2 rounded hover:bg-slate-100 transition-colors md:col-span-1">
          <div className="w-8 h-8 flex items-center justify-center font-bold shrink-0 bg-[#fef3c7] text-yellow-600 rounded text-lg">🔓</div>
          <span className="text-[#005a9c] font-medium underline underline-offset-4 flex-1 text-center pr-8">Accessibility Inquiries</span>
        </a>
      </div>

      {/* Quick Click Links */}
      <div>
        <h3 className="text-[#005a9c] font-bold text-lg mb-6">Quick Click Links:</h3>

        <div className="space-y-8 text-sm text-[#005a9c]">
          
          {/* Learning Supports */}
          <div>
            <h4 className="font-bold mb-2">Learning Supports</h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🔗</span> <p><a href="#" className="underline hover:text-blue-800 underline-offset-2">eCampus Info Site</a>: Your go-to for essential resources, supports and information</p></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">💻</span> <p><a href="#" className="underline hover:text-blue-800 underline-offset-2">Technology</a> &amp; <a href="#" className="underline hover:text-blue-800 underline-offset-2">Learning Supports</a>: Tools and resources for success</p></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">📚</span> <p><a href="#" className="underline hover:text-blue-800 underline-offset-2">Library Live Chat</a>: Research support and help finding resources</p></li>
            </ul>
          </div>

          {/* Mental Health & Wellness */}
          <div>
            <h4 className="font-bold mb-2">Mental Health &amp; Wellness</h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🌱</span> <a href="#" className="underline hover:text-blue-800 underline-offset-2">Wellness &amp; Counselling Services</a></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🤝</span> <p><a href="#" className="underline hover:text-blue-800 underline-offset-2">Togetherall</a>, online peer community for your mental health, available 24/7</p></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🧘</span> <p><a href="#" className="underline hover:text-blue-800 underline-offset-2">MyWellness</a> a free program designed specifically for post-secondary students</p></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">💬</span> <p>Live Chat: Mon–Fri, 8:30 a.m.–4:30 p.m.</p></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">📍</span> <p><a href="#" className="underline hover:text-blue-800 underline-offset-2">Student Wellness Hub</a> is your go-to space for tools, resources, and support</p></li>
            </ul>
          </div>

          {/* Career Supports Hub */}
          <div>
            <h4 className="font-bold mb-2"><a href="#" className="underline hover:text-blue-800 underline-offset-2">Career Supports Hub</a></h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">💼</span> <p>Job postings, networking and job search tools</p></li>
            </ul>
          </div>

          {/* Student Advising Handbook */}
          <div>
            <h4 className="font-bold mb-2"><a href="#" className="underline hover:text-blue-800 underline-offset-2">Student Advising Handbook</a></h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">📖</span> <p>Activities, worksheets, and tips</p></li>
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h4 className="font-bold mb-2">Emergency Contacts</h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">📞</span> <p>Provincial Mental Health Crisis Line: 1-888-429-8167 (toll-free)</p></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🚨</span> <p>Good2Talk Post-Secondary Student Helpline (24/7): 1-833-292-3698</p></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">📱</span> <p>Crisis Text Line: Text Good2TalkNS to 686868</p></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🪶</span> <p>Mi'kmaw Crisis Line (24/7 in English and Mi'kmaw): 1-855-379-2099</p></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🏛️</span> <p>NSCC provides professional counseling – at no cost – Book with Laurie.</p></li>
            </ul>
          </div>

          {/* Library (APA, research) & Academic Supports */}
          <div>
            <h4 className="font-bold mb-2"><a href="#" className="underline hover:text-blue-800 underline-offset-2">Library</a> (APA, research) &amp; <a href="#" className="underline hover:text-blue-800 underline-offset-2">Academic Supports</a></h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🎓</span> <p>Peer Assisted Learning Supports (PALS) peers support peers in learning</p></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">📧</span> <a href="mailto:library.eCampus@nscc.ca" className="underline hover:text-blue-800 underline-offset-2">library.eCampus@nscc.ca</a></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">📅</span> <a href="#" className="underline hover:text-blue-800 underline-offset-2">Book a library appointment</a></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">📍</span> <p>Access any of our 13 Campus Libraries with your <a href="#" className="underline hover:text-blue-800 underline-offset-2">Student ID</a></p></li>
            </ul>
          </div>

          {/* Campus Resources */}
          <div>
            <h4 className="font-bold mb-2">Campus Resources</h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🧑‍🤝‍🧑</span> <p><a href="#" className="underline hover:text-blue-800 underline-offset-2">Student Services</a> (counseling, student life)</p></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">✍️</span> <a href="#" className="underline hover:text-blue-800 underline-offset-2">Writing Centre</a></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">💰</span> <a href="#" className="underline hover:text-blue-800 underline-offset-2">Student Awards &amp; Financial Aid</a></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🤝</span> <a href="#" className="underline hover:text-blue-800 underline-offset-2">Student Association</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold mb-2">Policies</h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🤝</span> <a href="#" className="underline hover:text-blue-800 underline-offset-2">Respectful Community</a></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🌐</span> <a href="#" className="underline hover:text-blue-800 underline-offset-2">Student Community Standards</a></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">✅</span> <a href="#" className="underline hover:text-blue-800 underline-offset-2">Academic Integrity</a></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">🚫</span> <a href="#" className="underline hover:text-blue-800 underline-offset-2">Sexual Violence</a></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">♿</span> <a href="#" className="underline hover:text-blue-800 underline-offset-2">Academic Accommodations</a></li>
              <li className="flex items-start gap-2"><span className="shrink-0 text-base leading-snug">⚖️</span> <a href="#" className="underline hover:text-blue-800 underline-offset-2">Educational Equity</a></li>
            </ul>
            <p className="mt-3 text-sm">[View all <a href="#" className="underline hover:text-blue-800 underline-offset-2">NSCC Policies &amp; Procedures</a>]</p>
          </div>

          {/* Footer content */}
          <div className="pt-8">
            <p className="font-bold">Compiled by:</p>
            <p className="font-bold">Christine White, Faculty</p>
            <p className="font-bold">School of Business &amp; Creative Industries</p>
          </div>

        </div>
      </div>
    </div>
  );
}

function TuitionAndPayment() {
  return (
    <div className="animate-in fade-in duration-500 w-full mb-16 max-w-6xl">
      <div className="flex items-center space-x-4 mb-12">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Tuition & Payment</h1>
      </div>

      <div className="mb-12 max-w-4xl">
        <p className="text-lg text-slate-800 mb-8 leading-relaxed">
          A successful student is someone who has their finances in check. Not having to worry about your financial standing as a student can help you achieve your learning goals faster and with less stress. Watch this video overview to learn how to take charge of your finances during your academic career.
        </p>
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-100 shadow-sm bg-slate-50">
          <iframe 
            src="https://www.youtube.com/embed/BrZGNEJWvfo?si=QyHoaHNXYRWlZY6Y" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 mt-20">
        {/* Left: Graphic */}
        <div className="bg-[#f4f6fb] rounded-3xl p-8 md:p-10 lg:p-12 border border-slate-100 flex flex-col h-full relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 relative z-10 leading-tight">
            Success at eCampus<br />begins with financial<br />preparedness.
          </h2>

          <div className="flex-1 flex flex-col space-y-6 md:space-y-4 text-sm relative z-10">
            <div className="flex items-start gap-4 z-10 w-full md:w-3/4">
              <div className="bg-[#9ec845] p-3 rounded shrink-0 shadow-sm text-white">
                <Calculator className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-slate-100/50 mt-1 flex-1">
                <h3 className="font-bold text-slate-900 mb-1">Understand Tuition & Fees</h3>
                <p className="text-slate-700 text-xs leading-relaxed">Review all tuition and fee information available.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 z-10 w-full md:w-3/4 md:ml-[10%]">
              <div className="bg-[#00a86b] p-3 rounded shrink-0 shadow-sm text-white">
                <PiggyBank className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-slate-100/50 mt-1 flex-1">
                <h3 className="font-bold text-slate-900 mb-1">Budget & Save</h3>
                <p className="text-slate-700 text-xs leading-relaxed">Be prepared to purchase your technology and textbooks prior to receiving funding/loans</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 z-10 w-full md:w-3/4 md:ml-[20%]">
              <div className="bg-[#009bda] p-3 rounded shrink-0 shadow-sm text-white">
                <Landmark className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-slate-100/50 mt-1 flex-1">
                <h3 className="font-bold text-slate-900 mb-1">Secure Funds</h3>
                <p className="text-slate-700 text-xs leading-relaxed">Apply for loans, funding, bursaries - and - have a plan 'B' to pay if funds are not approved - or are delayed</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 z-10 w-full md:w-3/4 md:ml-[25%] lg:ml-[20%] xl:ml-[25%]">
              <div className="bg-[#005fb8] p-3 rounded shrink-0 shadow-sm text-white">
                <CreditCard className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-slate-100/50 mt-1 flex-1">
                <h3 className="font-bold text-slate-900 mb-1">Make Payment</h3>
                <p className="text-slate-700 text-xs leading-relaxed">Ensure tuition is paid on time - complete 'Opt Out' forms if not using virtual health services to prevent incorrect charges.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-200/60 relative z-10">
            <p className="text-center text-lg">
              Questions? <a href="mailto:eCampus.finance@nscc.ca" className="font-bold underline hover:text-blue-800 underline-offset-4 decoration-2">eCampus.finance@nscc.ca</a>
            </p>
          </div>
        </div>

        {/* Right: Text and Links */}
        <div className="flex flex-col justify-center space-y-10 lg:pl-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Understand Tuition & Fees:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg">
              <li className="pl-2 marker:text-black">Review the information below to <a href="#" className="text-blue-900 font-medium underline hover:text-blue-700 underline-offset-4 decoration-1">calculate your tuition</a> and <a href="#" className="font-medium text-blue-900 underline hover:text-blue-700 underline-offset-4 decoration-1">submit your payment</a> on time.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Budget & Save:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg">
              <li className="pl-2 marker:text-black">Use our <a href="#" className="font-medium text-blue-900 underline hover:text-blue-700 underline-offset-4 decoration-1">Budget Calculator</a> to determine financial support you'll require</li>
              <li className="pl-2 marker:text-black">Listen to our <a href="#" className="font-medium text-blue-900 underline hover:text-blue-700 underline-offset-4 decoration-1">Money MATTers podcast</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Secure Funds:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg">
              <li className="pl-2 marker:text-black"><a href="#" className="font-medium text-blue-900 underline hover:text-blue-700 underline-offset-4 decoration-1">NSCC Awards & Bursaries </a> - current students & incoming students with a confirmed seat apply through our <a href="#" className="font-medium text-blue-900 underline hover:text-blue-700 underline-offset-4 decoration-1">Student Awards Portal</a>.</li>
              <li className="pl-2 marker:text-black"><a href="#" className="font-medium text-blue-900 underline hover:text-blue-700 underline-offset-4 decoration-1">Nova Scotia Student Loans</a></li>
              <li className="pl-2 marker:text-black"><a href="#" className="font-medium text-blue-900 underline hover:text-blue-700 underline-offset-4 decoration-1">Nova Scotia Student Loans - Part Time</a></li>
              <li className="pl-2 marker:text-black">Explore other ways to <a href="#" className="font-medium text-blue-900 underline hover:text-blue-700 underline-offset-4 decoration-1">fund your college education</a>.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Make Payment:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg">
              <li className="pl-2 marker:text-black"><a href="#" className="font-medium text-blue-900 underline hover:text-blue-700 underline-offset-4 decoration-1">NSCC Payment Schedule and Options</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Important Notices & Financial Education */}
      <div className="mt-20 space-y-6 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-[#003a70] text-white rounded-2xl p-6 flex items-center justify-center text-center font-bold shadow-md sm:w-[220px] shrink-0 text-lg">
            Important<br />Notices
          </div>
          <div className="flex-1 space-y-3">
            <div className="bg-slate-100 rounded-2xl p-5 text-sm text-slate-800 shadow-sm border border-slate-200">
              <ul className="list-disc pl-5">
                <li>Tuition balance will <strong>not appear</strong> in your MyNSCC Account until you are enrolled in courses.</li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-2xl p-5 text-sm text-slate-800 shadow-sm border border-slate-200">
              <ul className="list-disc pl-5">
                <li>If you've been approved for a student loan, or are waiting for approval, you'll need to <a href="#" className="underline font-medium hover:text-blue-800">complete this form</a> prior to the tuition deadline.</li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-2xl p-5 text-sm text-slate-800 shadow-sm border border-slate-200">
              <ul className="list-disc pl-5 leading-relaxed">
                <li>Students receive notice when their student loans are confirmed. This will include information about any balances due. We cannot post student loans to accounts until we receive funds from student loan.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <div className="bg-[#003a70] text-white rounded-2xl p-6 flex items-center justify-center text-center font-bold shadow-md sm:w-[220px] shrink-0 text-lg">
            Financial<br />Education
          </div>
          <div className="flex-1 bg-slate-100 rounded-2xl p-6 text-sm text-slate-800 shadow-sm border border-slate-200">
            <p className="mb-3 leading-relaxed">MyWellness provides students with free access to <a href="#" className="underline font-medium hover:text-blue-800">KOFE</a>, a resource designed to support student financial education. <a href="#" className="underline font-medium hover:text-blue-800">Register Here.</a> Services and tools include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Free financial coaching, learning modules and webinars</li>
              <li>Budgeting tools and online calculators</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full-time Learners */}
      <div className="mt-24">
        <h2 className="text-3xl font-medium text-center text-slate-900 mb-12">Full-time Learners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl mx-auto">
          {/* Full-time Tuition */}
          <div className="relative pt-6">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full font-bold text-slate-900 border border-slate-200 shadow-sm z-10 whitespace-nowrap text-lg">
              Full-time Tuition
            </div>
            <div className="bg-[#004a8b] rounded-[2rem] p-10 pt-16 text-white text-center shadow-md h-full flex flex-col items-center justify-center">
              <p className="text-lg">Please visit <a href="#" className="underline hover:text-blue-200 underline-offset-4 font-medium">Program fees | NSCC</a> on the NSCC website to view fees</p>
            </div>
          </div>

          {/* Full-time Student Loans */}
          <div className="relative pt-6">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full font-bold text-slate-900 border border-slate-200 shadow-sm z-10 whitespace-nowrap text-lg">
              Full-time Student Loans
            </div>
            <div className="bg-[#004a8b] rounded-[2rem] p-10 pt-16 text-white text-center shadow-md h-full flex flex-col items-center justify-center">
              <p className="text-lg">Complete an <strong>online application</strong> - for information on this process, visit the Student Assistance website - <a href="#" className="underline hover:text-blue-200 underline-offset-4 font-medium">Financing | novascotia.ca</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Part-time Learners */}
      <div className="mt-24 mb-16">
        <h2 className="text-3xl font-medium text-center text-slate-900 mb-12">Part-time Learners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 max-w-5xl mx-auto mb-16">
          {/* Part-time Tuition */}
          <div className="relative pt-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#004a8b] text-white px-8 py-4 rounded-[2rem] font-bold shadow-md z-10 whitespace-nowrap text-lg w-max min-w-[240px] text-center">
              Part-time Tuition
            </div>
            <div className="bg-slate-100/80 rounded-[2.5rem] p-10 pt-20 text-slate-800 shadow-sm border border-slate-200 h-full">
              <p className="mb-6 leading-relaxed">Part-time tuition is calculated on a <strong>per-unit basis</strong> and will vary based how many units you are taking each semester and which type of credential you are completing. A unit is equal to four credits or 60 hours.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Certificate, Diploma, Advanced Diploma = $478/unit</li>
                <li>Graduate Certificate = $677/unit</li>
                <li>Academic and Career Connections = $187/unit</li>
                <li>Adult Learning Program = $0</li>
              </ul>
            </div>
          </div>

          {/* Sample Part-time Tuition Calculation */}
          <div className="relative pt-12 md:mt-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#004a8b] text-white px-8 py-5 rounded-[2rem] font-bold shadow-md z-10 text-center flex flex-col items-center justify-center text-base min-w-[240px]">
              <span>Sample</span>
              <span>Part-time Tuition</span>
              <span>Calculation</span>
            </div>
            <div className="bg-slate-100/80 rounded-[2.5rem] p-10 pt-24 text-slate-800 shadow-sm border border-slate-200 h-full">
              <ul className="list-disc pl-5 space-y-5">
                <li>
                  College Services Fee - paid in first term each academic year
                  <div className="font-medium mt-1">$100</div>
                </li>
                <li>
                  Virtual Health Fee - paid in the first term of each academic year
                  <div className="font-medium mt-1">$49</div>
                </li>
                <li>
                  Student Association Fee - paid in each Fall term only
                  <div className="font-medium mt-1">$42.50</div>
                </li>
                <li>
                  Courses - example: 3 units per semester
                  <div className="font-medium mt-1">$1434.50</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Part-time Student Loans */}
        <div className="relative pt-6 max-w-5xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#004a8b] text-white px-8 py-3 rounded-full font-bold shadow-md z-10 whitespace-nowrap text-lg">
            Part-time Student Loans
          </div>
          <div className="bg-slate-100/80 rounded-[2rem] p-10 pt-16 text-slate-900 shadow-sm border border-slate-200 text-[15px] leading-relaxed">
            <ul className="list-disc pl-5 space-y-4">
              <li className="pl-2">
                <strong>Step 1</strong> - Download part-time student loan application from your <a href="#" className="underline font-medium hover:text-blue-800">provincial Student Assistance office.</a> When downloading the part-time application you have to <strong>save it to your computer</strong>, then <strong>close the application</strong> and <strong>bring up the version you saved to your computer</strong> before completing the application. If you do not don't follow this process it will upload as a blank application.
              </li>
              <li className="pl-2">
                <strong>Step 2</strong> - Send completed application (do not include your SIN#) to <a href="mailto:ecampus.registrar@nscc.ca" className="underline font-medium hover:text-blue-800">ecampus.registrar@nscc.ca</a> for Educational Institution information to be completed.
              </li>
              <li className="pl-2">
                <strong>Step 3</strong> - Once completed application is sent back to you, complete the required information on pages 1 and 2 and send to your provincial Student Assistance office. <a href="#" className="underline font-medium hover:text-blue-800">Any questions about student loans should be directed to them.</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function PurchasingTextbooks() {
  return (
    <div className="animate-in fade-in duration-500 w-full mb-16 max-w-4xl">
      <div className="flex items-center space-x-4 mb-12">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Purchasing Textbooks</h1>
      </div>

      <div className="mb-14">
        <div className="bg-slate-100 rounded-3xl p-6 md:p-8 flex items-start gap-6 relative">
          <div className="w-16 h-16 rounded-full bg-[#003a70] text-[#ffc72c] flex items-center justify-center shrink-0 absolute -top-8 -left-4 shadow-md border-4 border-white">
            <AlertTriangle className="w-8 h-8" strokeWidth={2.5} />
          </div>
          <div className="pl-6 md:pl-10">
            <p className="text-lg font-bold text-[#003a70] leading-relaxed">
              Be prepared to purchase your technology and textbooks prior to receiving funding/loans. Delaying purchase of required textbooks, technology and materials will impact your success.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-12 max-w-3xl pl-4 md:pl-8">
        {[
          {
            title: "Visit the NSCC Bookstore Website",
            desc: null,
            link: "https://bookstore.nscc.ca",
            linkText: "NSCC Bookstore Website"
          },
          {
            title: "Choose eCampus",
            desc: "Textbooks can vary by campus. Only order from eCampus."
          },
          {
            title: "Select the correct term",
            desc: "Order materials only for the current term – materials may change in future semesters."
          },
          {
            title: "Select program and courses",
            desc: "Confirm your courses by visiting your program map located on your program page of the eCampus Information Site.",
            link: "#",
            linkText: "eCampus Information Site"
          },
          {
            title: "View Selections to see required textbooks and materials",
            desc: null
          },
          {
            title: "Click to make purchase and repeat process for each course",
            desc: null
          },
          {
            title: "Once all course textbooks have been added, view cart for total and pay",
            desc: null
          }
        ].map((step, index) => (
          <div key={index} className="flex gap-6 md:gap-8 items-start">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 font-medium text-xl shadow-sm bg-[#003a70] text-white">
              {index + 1}
            </div>
            <div className="pt-3">
              <h3 className="text-xl font-bold text-slate-900 leading-tight">
                {step.linkText && step.title.includes(step.linkText) && step.title === "Visit the NSCC Bookstore Website" ? (
                  <>
                    Visit the <a href={step.link} className="text-[#005a9c] underline hover:text-blue-800 underline-offset-4 decoration-2">{step.linkText}</a>
                  </>
                ) : (
                  step.title
                )}
              </h3>
              {step.desc && (
                <p className="text-slate-700 mt-2 text-lg">
                  {step.linkText && step.desc.includes(step.linkText) && step.title === "Select program and courses" ? (
                    <>
                      Confirm your courses by visiting your program map located on your program page of the <a href={step.link} className="text-[#005a9c] underline hover:text-blue-800 underline-offset-4 decoration-2">{step.linkText}</a>.
                    </>
                  ) : (
                    step.desc
                  )}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-8 border-t border-slate-200">
        <p className="text-lg text-slate-800">
          Have questions?<br />
          Contact <a href="mailto:Bookstore@nscc.ca" className="font-bold text-[#005a9c] hover:underline underline-offset-4">Bookstore@nscc.ca</a> for assistance.
        </p>
      </div>
    </div>
  );
}

function PurchasingTech() {
  return (
    <div className="animate-in fade-in duration-500 w-full mb-16 max-w-5xl">
      <div className="flex items-center space-x-4 mb-12">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Purchasing Tech</h1>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#003a70] mb-4">eCampus Tech Reqs</h2>
        <ul className="list-disc pl-6 space-y-1 text-slate-800 text-lg">
          <li>You need your own <strong>computer</strong> and <strong>technology accessories</strong>, listed below, to study at eCampus.</li>
          <li>If you have a computer, it may already meet your program requirements. Make sure you check.</li>
        </ul>
      </div>

      <div className="flex justify-center mb-16">
        <div className="bg-[#003a70] p-6 rounded-2xl w-full max-w-2xl border-4 border-[#003a70]">
          <div className="flex flex-col space-y-3">
            {[
              { icon: <Monitor className="w-5 h-5 text-[#0081c6]" />, text: "Computer (Windows 10 or later)" },
              { icon: <Headphones className="w-5 h-5 text-[#0081c6]" />, text: "Teams certified headset" },
              { icon: <Mic className="w-5 h-5 text-[#0081c6]" />, text: "Microphone" },
              { icon: <Video className="w-5 h-5 text-[#0081c6]" />, text: "Webcam" },
              { icon: <Globe className="w-5 h-5 text-[#0081c6]" />, text: "Reliable internet access" },
              { icon: <Link className="w-5 h-5 text-[#0081c6]" />, text: <>Learn more: <a href="https://nscc.ca/techreqs" className="underline hover:text-[#003a70]">nscc.ca/techreqs</a></> }
            ].map((item, index) => (
              <div key={index} className="flex gap-3 h-12">
                <div className="bg-white rounded w-12 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="bg-white rounded flex-1 flex items-center justify-center font-bold text-sm sm:text-base text-slate-900 px-4 text-center">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6 mb-16">
        {/* Red X block */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <div className="shrink-0 flex justify-center w-full md:w-32">
            <div className="bg-white text-red-600 rounded-2xl p-1 shadow-sm border-2 border-red-600 inline-flex mt-2">
              <XCircle className="w-20 h-20" strokeWidth={2.5} />
            </div>
          </div>
          <div className="bg-white border rounded-2xl p-6 md:p-8 flex-1 border-[#b5c7d8] shadow-sm text-slate-800 text-[15px] space-y-4 leading-relaxed">
            <p>Our programs cannot be completed on a <strong>Chromebook, tablet, or smartphone.</strong></p>
            <p>Thinking about using a Mac with Windows virtualization?<br/>
            While it might seem like a solution, <strong>it can lead to performance and compatibility issues</strong> that could affect your learning.</p>
            <p>If you have a Macintosh computer, you will need to ensure your program does not require you to use software that's only available on a Windows computer.</p>
          </div>
        </div>

        {/* Green Check block */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <div className="shrink-0 flex justify-center w-full md:w-32">
            <div className="bg-white text-[#7ac142] rounded-full p-2 inline-flex border-[6px] border-[#7ac142] mt-2">
              <CheckCircle className="w-16 h-16" strokeWidth={4} />
            </div>
          </div>
          <div className="bg-white border rounded-2xl p-6 md:p-8 flex-1 border-[#b5c7d8] shadow-sm text-slate-800 text-[15px] space-y-4 leading-relaxed">
            <p>We use Windows-based programs and recommend using a <strong>Windows-based computer</strong> for the best experience.</p>
            <p><strong>Best option?</strong> Use a Windows-based computer, or take advantage of on-campus computer access - it's the most reliable way to ensure things run smoothly!</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-stretch pt-2">
        <div className="w-full md:w-48 pt-4">
          <p className="text-lg text-slate-700 leading-snug">
            Verify your<br/>
            <strong className="text-[#003a70]">program-specific<br/>technology requirements:</strong>
          </p>
        </div>
        <div className="bg-[#e7f0F9] rounded-2xl p-8 flex-1 border border-blue-100/50 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[13px] sm:text-[14px]">
            <ul className="list-disc pl-5 space-y-2 text-[#005a9c]">
              <li><a href="#" className="underline hover:text-blue-800 underline-offset-4 decoration-1">Academic and Career Connections</a></li>
              <li><a href="#" className="underline hover:text-blue-800 underline-offset-4 decoration-1">Administrative Professional</a></li>
              <li><a href="#" className="underline hover:text-blue-800 underline-offset-4 decoration-1">Business Administration - (Year 1, Year 2 and Accounting)</a></li>
              <li><a href="#" className="underline hover:text-blue-800 underline-offset-4 decoration-1">Early Childhood Education</a></li>
              <li><a href="#" className="underline hover:text-blue-800 underline-offset-4 decoration-1">Funeral and Allied Health Services</a></li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-[#005a9c]">
              <li><a href="#" className="underline hover:text-blue-800 underline-offset-4 decoration-1">Funeral Arranging and Directing</a></li>
              <li><a href="#" className="underline hover:text-blue-800 underline-offset-4 decoration-1">IT Programming</a></li>
              <li><a href="#" className="underline hover:text-blue-800 underline-offset-4 decoration-1">Library and Information Technology</a></li>
              <li><a href="#" className="underline hover:text-blue-800 underline-offset-4 decoration-1">Nonprofit Leadership</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

// Academics Placeholders
function SchoolOfAccess() {
  return (
    <div className="animate-in fade-in duration-500 w-full max-w-4xl pb-24">
      <div className="flex items-center space-x-4 mb-12">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">School of Access, Education & Language</h1>
      </div>

      <div className="relative mb-2 rounded-[2rem] overflow-hidden h-[250px] md:h-[400px]">
        <img 
           src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80" 
           alt="eCampus student in a library" 
           className="w-full h-full object-cover object-center"
        />
      </div>
      <p className="text-[11px] text-gray-500 mb-12 pl-4">Photo of eCampus student in a library</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:px-12 md:py-10 mb-16 text-slate-800 text-[15px] leading-relaxed relative">
         {/* Decorative vertical bar imitating a scrollbar/handle on the right if wanted, or just clean box */}
        <p className="mb-5">
          The School of Access, Education and Language delivers programs at campuses across the province and online. Many of our programs are designed to meet our students where they are so they can get the education they need to start their future.
        </p>
        <p>
          Our faculty and staff are experts in their field and experienced in supporting all learners, including adults returning to school or high school graduates entering college for the first time.
        </p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-[34px] font-black text-[#004780] tracking-tight mb-2 font-sans">eCampus</h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] bg-gray-400 w-24"></div>
          <span className="text-[13px] font-bold text-[#004780]">Program Pages</span>
          <div className="h-[1px] bg-gray-400 w-24"></div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 max-w-[420px] mx-auto">
        {/* Button 1 */}
        <a href="#" className="w-full text-center bg-[#ebf0f4] border border-gray-200 hover:bg-[#dfe6ed] transition-colors rounded-[2.5rem] py-4 px-6 shadow-sm">
          <h3 className="text-[#004780] font-extrabold text-[15.5px] underline underline-offset-2 mb-0.5">Academic & Career Connections</h3>
          <p className="text-slate-600 text-[12px]">asynchronous part-time and full-time</p>
        </a>
        
        {/* Button 2 */}
        <a href="#" className="w-full text-center bg-[#c6d7e5] border border-gray-200 hover:bg-[#b8cde0] transition-colors rounded-[2.5rem] py-4 px-6 shadow-sm">
          <h3 className="text-[#004780] font-extrabold text-[15.5px] underline underline-offset-2 mb-0.5">Adult Learning Program</h3>
          <p className="text-slate-700 text-[12px]">asynchronous part-time</p>
        </a>
        
        {/* Button 3 */}
        <a href="#" className="w-full text-center bg-[#9fb9d1] border border-gray-300 hover:bg-[#8eadd3] transition-colors rounded-[2.5rem] py-4 px-6 shadow-sm">
          <h3 className="text-[#004780] font-extrabold text-[15.5px] underline underline-offset-2 mb-0.5">Early Childhood Education</h3>
          <p className="text-slate-700 text-[12px]">asynchronous part-time</p>
        </a>
      </div>
    </div>
  );
}

function SchoolOfBusiness() {
  return (
    <div className="animate-in fade-in duration-500 w-full max-w-5xl pb-24">
      <div className="flex items-center space-x-4 mb-12">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">School of Business, Creative Industries and Education</h1>
      </div>

      <div className="relative mb-2 rounded-[2rem] overflow-hidden h-[250px] md:h-[400px]">
        <img 
           src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" 
           alt="Business students collaborating" 
           className="w-full h-full object-cover object-center"
        />
      </div>
      <p className="text-[11px] text-gray-500 mb-12 pl-4">Photo placeholder of students</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:px-12 md:py-10 mb-16 text-slate-800 text-[15px] leading-relaxed max-w-4xl mx-auto">
        <p className="mb-5">
          The School of Business and Creative Industries delivers over 30 unique programs at campuses across the province and online.
        </p>
        <p className="mb-5">
          Our faculty come from industry, bringing with them career success from a variety of disciplines and organizations.
        </p>
        <p>
          Below are the School of Business and Creative Industries programs offered at eCampus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Left Column: Programs */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-black mb-2">Program pages:</h2>
          
          <a href="#" className="w-full text-center bg-[#ebf0f4] hover:bg-[#dfe6ed] transition-colors rounded-full py-4 px-6 shadow-sm border border-slate-200">
            <h3 className="text-[#004780] font-extrabold text-[15px] underline underline-offset-2 mb-0.5">Administrative Professional</h3>
            <p className="text-slate-600 text-[11px]">asynchronous part-time and full-time</p>
          </a>
          
          <a href="#" className="w-full text-center bg-[#c5d6e6] hover:bg-[#b8cce0] transition-colors rounded-full py-4 px-6 shadow-sm border border-slate-200">
            <h3 className="text-[#004780] font-extrabold text-[15px] underline underline-offset-2 mb-0.5">Business Administration<br/>& Business Administration Accounting</h3>
            <p className="text-slate-600 text-[11px] mt-1">asynchronous part-time and full-time</p>
          </a>
          
          <a href="#" className="w-full text-center bg-[#9fbad1] hover:bg-[#8eb0cb] transition-colors rounded-full py-4 px-6 shadow-sm border border-slate-300">
            <h3 className="text-[#004780] font-extrabold text-[15px] underline underline-offset-2 mb-0.5">Digital Marketing</h3>
            <p className="text-[#004780] text-[11px]">synchronous full-time</p>
          </a>

          <a href="#" className="w-full text-center bg-[#7a9ebd] hover:bg-[#6c93b4] transition-colors rounded-full py-4 px-6 shadow-sm border border-slate-300">
            <h3 className="text-[#004780] font-extrabold text-[15px] underline underline-offset-2 mb-0.5">Library & Information Technology</h3>
            <p className="text-[#004780] text-[11px]">asynchronous part-time</p>
          </a>

          {/* Spacer */}
          <div className="h-4"></div>

          <a href="#" className="w-full text-center bg-[#8b9fb6] hover:bg-[#7a91aa] transition-colors rounded-full py-4 px-6 shadow-sm border border-slate-300">
            <h3 className="text-[#002b55] font-extrabold text-[15px] underline underline-offset-2 mb-0.5">Non-Profit Leadership</h3>
            <p className="text-[#002b55] text-[11px]">asynchronous part-time and full-time</p>
          </a>
        </div>

        {/* Right Column: Requirements & Info */}
        <div className="flex flex-col gap-8 md:pt-14">
          <div className="flex flex-col items-center">
             <h2 className="text-[17px] font-bold text-[#004780] mb-3">Recognition of Prior Learning</h2>
             <a href="#" className="w-full text-center bg-white border border-[#004780] hover:bg-slate-50 transition-colors py-4 px-8 shadow-sm">
                <span className="text-[#005a9c] font-medium text-[15px] underline underline-offset-2 block">Prior Learning & Assessment</span>
                <span className="text-[#005a9c] font-medium text-[15px] underline underline-offset-2 block">Recognition</span>
             </a>
          </div>

          <div className="flex flex-col items-center">
             <h2 className="text-[17px] font-bold text-[#004780] mb-3 mt-4">Your Final Graduation ...</h2>
             <div className="flex flex-col gap-4 w-full items-center">
                <a href="#" className="w-4/5 text-center bg-white border border-[#004780] hover:bg-slate-50 transition-colors py-3 px-6 shadow-sm">
                    <span className="text-[#005a9c] font-medium text-[14px] underline underline-offset-2">Work Experience</span>
                </a>
                <a href="#" className="w-4/5 text-center bg-white border border-[#004780] hover:bg-slate-50 transition-colors py-3 px-6 shadow-sm">
                    <span className="text-[#005a9c] font-medium text-[14px] underline underline-offset-2">Portfolio milestone</span>
                </a>
             </div>
          </div>

          <div className="mt-auto bg-[#f4f7f9] border border-slate-200 p-6 text-center text-sm text-slate-800 shadow-sm">
             <p className="mb-2">This program has an industry-based Capstone Project as opposed to a 'Work Experience'</p>
             <a href="#" className="font-bold text-[#004780] hover:text-[#002b55] hover:underline">
               👉 Learn more on the program page
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SchoolOfHealth() {
  return (
    <div className="animate-in fade-in duration-500 w-full max-w-4xl pb-24">
      <div className="flex items-center space-x-4 mb-12">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">School of Health & Human Services</h1>
      </div>

      <div className="relative mb-2 rounded-[2rem] overflow-hidden h-[250px] md:h-[400px]">
        <img 
           src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" 
           alt="Health and human services professionals" 
           className="w-full h-full object-cover object-center"
        />
      </div>
      <p className="text-[11px] text-gray-500 mb-12 pl-4">Photo placeholder of health professionals</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:px-12 md:py-10 mb-16 text-slate-800 text-[15px] leading-relaxed relative">
        <p className="mb-5">
          The School of Health and Human Services delivers programs at campuses across the province. We train people who aim to improve the quality of life for others, while building healthier, stronger communities from one end of Nova Scotia to the other.
        </p>
        <p>
          Our faculty come from industry, bringing with them career success from a variety of disciplines and organizations.
        </p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-[34px] font-black text-[#004780] tracking-tight mb-2 font-sans">eCampus</h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] bg-gray-400 w-24"></div>
          <span className="text-[13px] font-bold text-[#004780]">Program Pages</span>
          <div className="h-[1px] bg-gray-400 w-24"></div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 max-w-[420px] mx-auto">
        {/* Button 1 */}
        <a href="#" className="w-full text-center bg-[#ebf0f4] border border-gray-200 hover:bg-[#dfe6ed] transition-colors rounded-[2.5rem] py-4 px-6 shadow-sm">
          <h3 className="text-[#004780] font-extrabold text-[15.5px] underline underline-offset-2 mb-0.5">Funeral & Allied Health Services</h3>
          <p className="text-slate-600 text-[12px]">asynchronous full-time</p>
        </a>
        
        {/* Button 2 */}
        <a href="#" className="w-full text-center bg-[#c6d7e5] border border-gray-200 hover:bg-[#b8cde0] transition-colors rounded-[2.5rem] py-4 px-6 shadow-sm">
          <h3 className="text-[#004780] font-extrabold text-[15.5px] underline underline-offset-2 mb-0.5">Funeral Arranging & Directing</h3>
          <p className="text-slate-700 text-[12px]">asynchronous part-time</p>
        </a>
      </div>
    </div>
  );
}

function AppliedTech() {
  return (
    <div className="animate-in fade-in duration-500 w-full max-w-4xl pb-24">
      <div className="flex items-center space-x-4 mb-12">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">School of Applied Technology and Innovation</h1>
      </div>

      <div className="relative mb-2 rounded-[2rem] overflow-hidden h-[250px] md:h-[400px]">
        <img 
           src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" 
           alt="Technology and innovation" 
           className="w-full h-full object-cover object-center"
        />
      </div>
      <p className="text-[11px] text-gray-500 mb-12 pl-4">Photo placeholder of technology</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:px-12 md:py-10 mb-16 text-slate-800 text-[15px] leading-relaxed relative">
        <p className="mb-5">
          The School of Applied Technology and Innovation offers dynamic programs that prepare students for a range of careers in the fields of engineering technologies; environment, sustainability and natural resources; IT and data analytics; and surveying, mapping and geomatics.
        </p>
        <p className="mb-5">
          Our faculty come from industry, bringing with them career success from a variety of disciplines and organizations.
        </p>
        <p>
          eCampus offers one Diploma from the School of Applied Technology and Innovation:
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 max-w-[420px]">
        <a href="#" className="w-full text-center bg-[#ebf0f4] border border-[#aab6c4] hover:bg-[#dfe6ed] transition-colors rounded-[2.5rem] py-4 px-6 shadow-sm">
          <h3 className="text-[#004780] font-extrabold text-[15.5px] underline underline-offset-2 mb-0.5">IT Programming</h3>
          <p className="text-slate-600 text-[12px]">synchronous full-time</p>
        </a>
      </div>
    </div>
  );
}

function FundedPrograms() {
  return (
    <div className="animate-in fade-in duration-500 w-full max-w-4xl pb-24">
      <div className="flex items-center space-x-4 mb-12">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Funded Programs</h1>
      </div>

      <div className="relative mb-2 rounded-[2rem] overflow-hidden h-[250px] md:h-[400px]">
        <img 
           src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80" 
           alt="Funded programs context" 
           className="w-full h-full object-cover object-center"
        />
      </div>
      <p className="text-[11px] text-gray-500 mb-12 pl-4">Photo placeholder of students</p>

      <div className="relative mb-12 max-w-3xl mx-auto">
        <div className="flex justify-center mb-4 relative z-10 items-center">
          <h2 className="text-3xl font-normal text-[#004780]">Important Note</h2>
          <div className="absolute right-0 -top-2 bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center -mr-2">
            <AlertTriangle className="text-orange-400 fill-orange-100 w-5 h-5" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 p-8 md:px-12 md:py-6 text-slate-800 text-[14px] font-medium leading-relaxed w-full">
          <p className="mb-5">
            We offer more than one Early Childhood Education cohort at eCampus.
            Please ensure you are selecting the program that applies to you.
          </p>
          <p>
            Questions? <a href="mailto:ecampus.info@nscc.ca" className="text-slate-800 hover:text-blue-900 transition-colors">ecampus.info@nscc.ca</a>
          </p>
        </div>
      </div>

      <div className="relative mb-16 max-w-3xl mx-auto">
        <div className="flex justify-center mb-4 text-center">
          <h2 className="text-3xl font-normal text-[#004780]">Funded Programs</h2>
        </div>
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 p-8 md:px-12 md:py-8 text-slate-800 text-[14px] font-medium leading-[1.6] w-full relative">
          <p>
            NSCC proudly partners with the Province of Nova Scotia to deliver customized, industry-driven programs that support workforce development and meet needs of key sectors. Below are information pages
          </p>
          {/* Imitating scroll bar from screenshot */}
          <div className="absolute right-3 top-6 w-1.5 h-12 bg-gray-400 rounded-full opacity-80"></div>
        </div>
      </div>

      <div className="text-center mb-8 mt-12 bg-white">
        <h2 className="text-[36px] font-black text-[#004780] tracking-tight mb-2 font-sans">eCampus</h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] bg-[#a8c1d5] w-24"></div>
          <span className="text-[12px] font-extrabold text-[#004780]">Funded Program Pages</span>
          <div className="h-[1px] bg-[#a8c1d5] w-24"></div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 max-w-[480px] mx-auto">
        <a href="#" className="w-full text-center bg-[#ebf0f4] border border-[#d0dbe6] hover:bg-[#dfe6ed] transition-colors rounded-full py-[1.125rem] px-6 shadow-sm">
          <h3 className="text-[#004780] font-extrabold text-[12px] underline underline-offset-[3px] decoration-1">Early Childhood Education Africentric Offering</h3>
        </a>
        
        <a href="#" className="w-full text-center bg-[#ebf0f4] border border-[#d0dbe6] hover:bg-[#dfe6ed] transition-colors rounded-full py-[1.125rem] px-6 shadow-sm">
          <h3 className="text-[#004780] font-extrabold text-[12px] underline underline-offset-[3px] decoration-1 leading-relaxed">Poqji-kina'masulti'kw tel-kina'mujik mijua'ji - Early<br/>Childhood Education Accelerated</h3>
        </a>

        <a href="#" className="w-full text-center bg-[#ebf0f4] border border-[#d0dbe6] hover:bg-[#dfe6ed] transition-colors rounded-full py-[1.125rem] px-6 shadow-sm">
          <h3 className="text-[#004780] font-extrabold text-[12px] underline underline-offset-[3px] decoration-1 leading-relaxed">Poqji-kina'masulti'kw tel-kina'mujik mijua'ji - Early<br/>Childhood Education Direct Entry</h3>
        </a>
        
        <a href="#" className="w-full text-center bg-[#ebf0f4] border border-[#d0dbe6] hover:bg-[#dfe6ed] transition-colors rounded-full py-[1.125rem] px-6 shadow-sm">
          <h3 className="text-[#004780] font-extrabold text-[12px] underline underline-offset-[3px] decoration-1">Teacher Assistant</h3>
        </a>
      </div>
    </div>
  );
}

function Convocation() {
  return (
    <div className="animate-in fade-in duration-500 w-full max-w-5xl pb-24 mx-auto">
      <div className="flex items-center space-x-4 mb-12">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Convocation, Credentials & Transcripts</h1>
      </div>

      <div className="relative mb-2 rounded-[2rem] overflow-hidden h-[250px] md:h-[400px]">
        <img 
           src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200" 
           alt="Graduation caps" 
           className="w-full h-full object-cover object-center"
        />
      </div>
      <p className="text-[11px] text-gray-500 mb-16 pl-4">Photo placeholder for graduation</p>

      {/* Convocation eMeetup Video Placeholder */}
      <div className="bg-white border border-gray-200 shadow-sm mb-16 mx-auto max-w-3xl flex flex-col p-4 md:p-6">
        <div className="w-full aspect-video bg-gray-100 flex items-center justify-center relative mb-4">
           {/* Video placeholder */}
           <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-white">
              <div className="text-center">
                 <h3 className="text-2xl font-bold mb-2">eCampus Convocation</h3>
                 <p className="text-sm">Information for Students 2026</p>
                 <div className="mt-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                   <Play className="w-6 h-6 text-white fill-current ml-1" />
                 </div>
              </div>
           </div>
        </div>
        <h2 className="text-xl font-bold text-black mb-1">eMeetup - Convocation (Graduation) Information Session-20260415_145432UTC- Meeting Recording</h2>
        <p className="text-xs text-slate-500 mb-4 line-clamp-2">eMeetup - Convocation (Graduation) Information Session-20260415_145432UTC-Meeting Recording</p>
        <a href="#" className="text-[10px] font-bold text-slate-700 tracking-wider hover:underline">READ MORE SCREENPAL (FORMERLY SCREENCAST-O-MATIC) &gt;</a>
      </div>

      {/* What you need to know Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16 items-start">
        <div className="w-full md:w-1/3 shrink-0">
           <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80" alt="Student smiling at graduation" className="w-full h-auto rounded-tl-3xl rounded-br-3xl" />
        </div>
        <div className="w-full md:w-2/3">
           <div className="mb-4">
             <div className="h-[2px] w-12 bg-[#005a9c] mb-2"></div>
             <h2 className="text-2xl font-bold text-black">What you need to know</h2>
           </div>
           <ul className="list-disc pl-5 space-y-2 text-sm text-slate-800">
             <li>Credentials are issued 3 times a year - visit the <a href="#" className="text-[#005a9c] underline underline-offset-2 hover:text-blue-900">Academic Calendar 🗓️</a></li>
             <li>Convocation is held once a year in June - <a href="#" className="text-[#005a9c] underline underline-offset-2 hover:text-blue-900">visit our website to learn more 🎓</a></li>
             <li>Credentials are mailed to the address you provided - confirm details on <a href="#" className="text-[#005a9c] underline underline-offset-2 hover:text-blue-900">MyNSCC ⚙️</a></li>
             <li>Need a transcript? Follow instructions below. 👇</li>
             <li>Need a letter for employment or academic reasons? <a href="#" className="text-[#005a9c] underline underline-offset-2 hover:text-blue-900">Complete Document Request.</a></li>
             <li>Official frames available for purchase <a href="#" className="text-[#005a9c] underline underline-offset-2 hover:text-blue-900">Bookstore 🖼️</a></li>
           </ul>
        </div>
      </div>

      {/* Accessing Transcripts Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-black mb-6">Accessing Transcripts</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
             <div className="aspect-video bg-gray-100 flex items-center justify-center relative shadow-sm border border-slate-200">
               {/* Video placeholder */}
               <div className="absolute inset-0 bg-[#003a70] flex items-center justify-center text-white p-4 text-center">
                  <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
               </div>
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="font-bold text-black mb-3">Official Transcripts</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800 mb-6">
              <li>Log into <a href="#" className="text-[#005a9c] underline hover:text-blue-900">MyNSCC</a></li>
              <li>Select 'My Schedule & Grades' from menu</li>
              <li>Choose 'Request Official Transcript'</li>
              <li>You will receive an email with instructions to set up a <a href="#" className="text-[#005a9c] underline hover:text-blue-900">MyCreds™</a> account. You can share your official transcript by providing the secure link from <a href="#" className="text-[#005a9c] underline hover:text-blue-900">MyCreds™</a>.</li>
            </ul>
            
            <h3 className="font-bold text-black mb-3">Unofficial Transcripts</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
              <li>Log into <a href="#" className="text-[#005a9c] underline hover:text-blue-900">MyNSCC</a></li>
              <li>Select 'My Schedule & Grades' from menu</li>
              <li>Choose 'View Unofficial Transcript'</li>
              <li>Select 'Report'</li>
            </ul>
          </div>
        </div>
      </div>

      {/* If you've learned with us Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
        <div className="w-full md:w-[45%]">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" alt="Group of diverse alumni smiling" className="w-full h-auto rounded-tl-2xl rounded-br-2xl object-cover" />
        </div>
        <div className="w-full md:w-[55%] pt-2">
           <div className="mb-4">
             <div className="h-[2px] w-12 bg-[#005a9c] mb-2"></div>
             <h2 className="text-2xl font-bold text-black">If you've learned with us, you're one of us.</h2>
           </div>
           <p className="text-sm text-slate-800 mb-6">
             NSCC alumni are part of a growing network of successful graduates with a massive collective reach.
           </p>
           <p className="text-sm text-slate-800">
             Make sure your contact details are updated in
           </p>
        </div>
      </div>

      {/* Alumni checklist Section */}
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold text-black mb-6">Alumni checklist:</h2>
        <div className="space-y-4 text-[13px] text-slate-800">
           <div className="flex items-start gap-4">
             <div className="shrink-0 mt-2">
               <Check className="w-6 h-6 stroke-[3] text-[#6b21a8]" />
             </div>
             <div className="bg-slate-100 p-4 rounded w-full border border-slate-200">
               Order an alumni ring <a href="#" className="text-[#005a9c] underline hover:text-blue-900">online through Charm Diamonds</a>, or by visiting a local Charm Diamond Centre or Crescent Gold and Diamonds in
             </div>
           </div>

           <div className="flex items-start gap-4">
             <div className="shrink-0 mt-2">
               <Check className="w-6 h-6 stroke-[3] text-[#6b21a8]" />
             </div>
             <div className="bg-slate-100 p-4 rounded w-full border border-slate-200">
               <a href="#" className="text-[#005a9c] underline hover:text-blue-900">Update contact information in MyNSCC</a> before graduating - include a personal email to receive alumni communication
             </div>
           </div>

           <div className="flex items-start gap-4">
             <div className="shrink-0 mt-2">
               <Check className="w-6 h-6 stroke-[3] text-[#6b21a8]" />
             </div>
             <div className="bg-slate-100 p-4 rounded w-full border border-slate-200">
               Forward emails, documents & info you want to save from Outlook, MyNSCC, OneDrive & Brightspace; grads lose access 2 months after
             </div>
           </div>
           
           <div className="flex items-start gap-4">
             <div className="shrink-0 mt-2">
               <Check className="w-6 h-6 stroke-[3] text-[#6b21a8]" />
             </div>
             <div className="bg-slate-100 p-4 rounded w-full border border-slate-200">
               Learn about <a href="#" className="text-[#005a9c] underline hover:text-blue-900">alumni discounts, offerings and other exclusive benefits</a>
             </div>
           </div>

           <div className="flex items-start gap-4">
             <div className="shrink-0 mt-2">
               <Check className="w-6 h-6 stroke-[3] text-[#6b21a8]" />
             </div>
             <div className="bg-slate-100 p-4 rounded w-full border border-slate-200">
               Continue using our career supports; <a href="#" className="text-[#005a9c] underline hover:text-blue-900">Scan job postings</a>, <a href="#" className="text-[#005a9c] underline hover:text-blue-900">tap into career supports</a>; <a href="#" className="text-[#005a9c] underline hover:text-blue-900">regional and cultural supports</a>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

// Student Services Placeholders
function StudentSupports() {
  const advisors = [
    {
      name: "Lillian Lake", pronouns: "(she/her)", role: "Student Advisor",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      programs: ["Academic & Career Connections", "Administrative Professional", "Library & Information Technology", "IT Programming"]
    },
    {
      name: "Andrea Ferguson", pronouns: "(she/her)", role: "Student Advisor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      programs: ["Business Administration", "Business Administration - Accounting", "Digital Marketing", "Non-Profit Leadership"]
    },
    {
      name: "Apollonia Laureijs", pronouns: "(she/her)", role: "Student Advisor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      programs: ["Funeral & Allied Health Services", "Funeral Arranging & Directing", "Teacher Assistant"]
    }
  ];

  const accessibility = [
    {
      name: "Quinn Burt", pronouns: "(he/him)", role: "Accessibility Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      desc: "Quinn will help you identify your barriers and support you with removing or reducing them.",
      resources: ["Grants through NS Student Loans", "Assistive Technology - Read & Write", "Accessibility Supports"]
    }
  ];

  const counsellors = [
    {
      name: "Laurie Baird", pronouns: "(she/her)", role: "Counsellor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      desc: "Laurie can support you with overcoming challenges like stress, substance use, relationship issues, and emotional difficulties; and build coping skills to manage overall mental health and wellness.",
      resources: ["NSCC Wellness Hub", "Tranquility", "Togetherall", "Healthy Minds NS", "Good2Talk Helpline 1-833-292-3698", "Crisis Line: text Good2TalkNS to 686868", "Mental Health Crisis line: 1-888-429-8167", "Eskasoni Mi'Kmaw Crisis: 1-855-379-2099"]
    }
  ];

  const cultural = [
    {
      name: "Bree Menge", pronouns: "(she/her)", role: "Indigenous Community & Cultural Liaison",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Gillian Stanton", pronouns: "(she/they)", role: "African Canadian Community & Cultural Liaison",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Melanie Karas", pronouns: "(she/her)", role: "2SLGBTQIA+ Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const renderCard = (contact: any, isHorizontal: boolean = false) => {
    if (isHorizontal) {
      return (
        <div key={contact.name} className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden w-full max-w-3xl">
          {/* Top/Left Blue Background Card area containing image */}
          <div className="bg-[#f4f6fb] w-full md:w-64 p-8 flex flex-col items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-slate-200/60 pb-8 relative mt-0">
            <h3 className="text-xl font-bold text-[#003a70] text-center">{contact.name}</h3>
            <p className="text-[#005a9c] text-sm mt-1">{contact.pronouns}</p>
            <div className="w-24 h-24 rounded-full border-[6px] border-[#f4f6fb] overflow-hidden shadow-sm bg-white mt-4 mb-2 absolute -top-12 md:static md:mt-6">
              <img src={contact.image} alt={contact.name} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-[#003a70] text-[15px] mt-10 md:mt-3 text-center px-2">{contact.role}</h4>
          </div>
          
          {/* Right details */}
          <div className="p-6 md:p-8 flex-1 flex flex-col justify-center bg-[#f4f6fb]">
            <div className="mb-4">
              {contact.desc && (
                <p className="text-slate-800 text-[14px] leading-relaxed mb-6 font-medium">
                  {contact.desc}
                </p>
              )}
              
              {contact.resources && contact.resources.length > 0 && (
                <div className="mb-4">
                  <h5 className="font-bold text-[13px] text-slate-900 mb-3">Additional Resources:</h5>
                  <ul className="grid grid-cols-1 gap-1.5 text-[13px] text-[#005a9c]">
                    {contact.resources.map((res: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                         <Globe className="w-[14px] h-[14px] text-[#73cfd7] shrink-0 mt-0.5" />
                         <a href="#" className="hover:underline underline-offset-2">{res}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="flex flex-col gap-y-2.5 pt-4">
              <a href="#" className="flex items-center space-x-2 text-[#005a9c] hover:underline group">
                <PlaySquare className="w-[18px] h-[18px] text-[#6eb4fb] group-hover:text-[#005a9c] transition-colors" />
                <span className="text-[13px] font-medium underline-offset-4">Meet {contact.name.split(' ')[0]}</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#005a9c] hover:underline group">
                <Mail className="w-[18px] h-[18px] text-[#c1a0e8] group-hover:text-[#005a9c] transition-colors" />
                <span className="text-[13px] font-medium underline-offset-4">Email</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#005a9c] hover:underline group">
                <Monitor className="w-[18px] h-[18px] text-[#73cfd7] group-hover:text-[#005a9c] transition-colors" />
                <span className="text-[13px] font-medium underline-offset-4">Teams Chat or Call</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#005a9c] hover:underline group">
                <Calendar className="w-[18px] h-[18px] text-[#b0a8e8] group-hover:text-[#005a9c] transition-colors" />
                <span className="text-[13px] font-medium underline-offset-4">Book now</span>
              </a>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div key={contact.name} className="flex flex-col items-center">
        {/* Top Blue Background Card area */}
        <div className="bg-[#e8eff5] rounded-3xl w-full pt-8 pb-16 px-4 text-center shadow-sm">
          <h3 className="text-xl font-bold text-[#003a70]">{contact.name}</h3>
          <p className="text-[#005a9c] text-sm mt-1">{contact.pronouns}</p>
        </div>
        
        {/* Overlapping Profile Image */}
        <div className="w-32 h-32 rounded-full border-[6px] border-white overflow-hidden -mt-16 z-10 shadow-sm bg-white">
          <img src={contact.image} alt={contact.name} className="w-full h-full object-cover" />
        </div>

        {/* Bottom details */}
        <div className="mt-3 text-center flex flex-col items-center w-full">
          <h4 className="font-bold text-[#003a70] text-lg">{contact.role}</h4>
          
          {contact.programs && (
            <div className="mt-4 px-2 w-full text-left max-w-[200px]">
              <h5 className="font-bold text-[13.5px] text-[#003a70] text-left mb-2">Programs:</h5>
              <ul className="text-[13.5px] text-[#005a9c] text-left space-y-2 list-disc pl-5 font-medium">
                {contact.programs.map((program: string, i: number) => (
                  <li key={i} className="marker:text-[#003a70] leading-snug">{program}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col space-y-3 text-left w-full max-w-[200px] mt-6 mb-4">
            <a href="#" className="flex items-center space-x-3 text-[#005a9c] hover:underline group">
              <PlaySquare className="w-5 h-5 text-[#6eb4fb] group-hover:text-[#005a9c] transition-colors" />
              <span className="text-sm font-medium underline-offset-4">Meet {contact.name.split(' ')[0]}</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-[#005a9c] hover:underline group">
              <Mail className="w-5 h-5 text-[#c1a0e8] group-hover:text-[#005a9c] transition-colors" />
              <span className="text-sm font-medium underline-offset-4">Email</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-[#005a9c] hover:underline group">
              <Monitor className="w-5 h-5 text-[#73cfd7] group-hover:text-[#005a9c] transition-colors" />
              <span className="text-sm font-medium underline-offset-4">Teams Chat or Call</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-[#005a9c] hover:underline group">
              <Calendar className="w-5 h-5 text-[#b0a8e8] group-hover:text-[#005a9c] transition-colors" />
              <span className="text-sm font-medium underline-offset-4">Book now</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="animate-in fade-in duration-500 w-full mb-16 max-w-5xl">
      {/* Title */}
      <div className="flex items-center space-x-4 mb-12">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Student Supports</h1>
      </div>

      {/* Intro Text */}
      <div className="max-w-4xl mb-16 border-t border-b border-[#005a9c]/30 py-5">
        <p className="text-slate-800 text-sm leading-relaxed max-w-4xl">
          Our supports and services will <strong>help you get the most out of your experiences</strong> while studying with us. We offer online <strong>supports to guide you</strong> through your academic journey.
        </p>
      </div>
      
      {/* Video (Requested at top) */}
      <div className="mb-24 max-w-4xl rounded-xl overflow-hidden shadow-md aspect-video relative isolate">
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/khHafgtE26g?si=rlx4aVd-DyWAuqZO" 
          title="Student Services Overview" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>

      {/* Section: Student Advising */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-[#003a70] mb-3 border-b-4 border-[#b5c7d8] pb-2 inline-block">Student Advising</h2>
        <p className="text-slate-700 mt-4 mb-2 text-[14.5px] leading-relaxed max-w-4xl">
          Advisors are often your first point of contact - and support you throughout your program. We help you understand and navigate your program, set goals, solve problems, connect to supports, services and resources to ensure you maximize your experience at nscc.
        </p>
        <p className="text-slate-800 text-[14.5px] mb-16 font-medium flex items-center gap-1.5">
          Check out this great resource: <a href="#" className="underline font-bold hover:text-blue-800 underline-offset-2 inline-flex items-center gap-1 text-slate-800"><BookOpen className="w-4 h-4 text-slate-500 fill-slate-300" /> Student Advising Handbook</a>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 px-4 w-full">
          {advisors.map(c => renderCard(c))}
        </div>
      </section>

      {/* Section: Accessibility Services */}
      <section className="mb-24 mt-12">
        <h2 className="text-2xl font-bold text-[#003a70] mb-3 border-b-4 border-[#b5c7d8] pb-2 inline-block">Accessibility Services</h2>
        <p className="text-slate-700 mt-4 mb-2 text-[14.5px] leading-relaxed max-w-4xl">
          If you're a student with a disability and have a diagnosed physical, mental health, chronic health or learning challenge and need to access academic accommodations to remove barriers to learning, we can help. Learn How to Register with NSCC Accessibility Services: <a href="#" className="underline hover:text-blue-800 underline-offset-2 flex items-center inline-flex gap-1.5 ml-1 text-blue-900"><PlaySquare className="w-[18px] h-[18px] text-[#6eb4fb]" /> Student Tutorial</a>
        </p>

        <div className="mt-16 flex justify-center px-4 w-full">
          {accessibility.map(c => renderCard(c, true))}
        </div>
      </section>

      {/* Section: Counselling & Wellness */}
      <section className="mb-24 mt-12">
        <h2 className="text-2xl font-bold text-[#003a70] mb-3 border-b-4 border-[#b5c7d8] pb-2 inline-block">Counselling & Wellness</h2>
        <p className="text-slate-700 mt-4 mb-2 text-[14.5px] leading-relaxed max-w-4xl">
          Personal wellness is one of the keys to academic success. We provide a range of services that support wellbeing and mental wellness - including free virtual counselling. Learn more about our services: <a href="#" className="underline font-medium hover:text-blue-800 inline-flex items-center gap-1 ml-1"><ExternalLink className="w-[18px] h-[18px] text-green-500" /> nscc website</a>. If experiencing an emergency, call 911 or go to the closest hospital.
        </p>

        <div className="mt-16 flex justify-center px-4 w-full">
          {counsellors.map(c => renderCard(c, true))}
        </div>
      </section>

      {/* Section: Cultural Supports */}
      <section className="mb-16 mt-12">
        <h2 className="text-xl font-bold text-[#003a70] mb-3 border-b-4 border-[#b5c7d8] pb-2 inline-block">Cultural Supports</h2>
        <p className="text-slate-700 mt-4 text-[14.5px] leading-relaxed max-w-4xl mb-16">
          When it comes to reaching out for support, it can be helpful and comforting to connect with someone who shares a similar heritage and/or ethnicity. Learn more about our services: <a href="#" className="underline font-medium hover:text-blue-800 inline-flex items-center gap-1 text-blue-900"><ExternalLink className="w-5 h-5 -mt-0.5" /> nscc website</a>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 px-4 w-full">
          {cultural.map(c => renderCard(c))}
        </div>
      </section>

    </div>
  );
}

function TechnologySupports() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordions = [
    "Install Microsoft 365",
    "PowerPoint",
    "Teams",
    "Outlook",
    "Word",
    "Excel",
    "One Drive"
  ];

  return (
    <div className="animate-in fade-in duration-500 w-full max-w-5xl">
      <div className="flex items-center space-x-4 mb-10">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Technology Supports</h1>
      </div>

      <div className="mb-8 pl-1">
        <h2 className="text-[20px] font-medium text-slate-800">Technology supports available to you, <b>anytime</b>.</h2>
      </div>

      <div className="space-y-12 mb-20">
        {/* LinkedIn Learning Card */}
        <div className="relative pt-6">
          <div className="absolute top-0 left-6 bg-[#003a70] text-white px-6 py-2.5 rounded-md font-bold text-sm shadow-md z-10 w-auto inline-block">
            LinkedIn Learning at NSCC
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm pt-12 pb-8 px-8 relative">
            <p className="text-slate-700 leading-relaxed mb-6 text-[15px]">
              NSCC has a College-wide subscription to LinkedIn Learning, a mobile-friendly streaming platform with a comprehensive library of resources. It's designed to supplement in-class and online instruction, as well as support your personal and professional development.
            </p>
            <ul className="space-y-2 list-disc pl-5 text-[#005a9c] text-[15px]">
              <li><a href="#" className="hover:underline font-medium hover:text-[#003a70]">About LinkedIn Learning</a></li>
              <li><a href="#" className="hover:underline font-medium hover:text-[#003a70]">Accessing LinkedIn Learning</a></li>
            </ul>
          </div>
        </div>

        {/* Knowledge Base Card */}
        <div className="relative pt-6">
          <div className="absolute top-0 left-6 bg-[#003a70] text-white px-6 py-2.5 rounded-md font-bold text-sm shadow-md z-10 w-auto inline-block">
            Knowledge Base
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm pt-12 pb-8 px-8 relative overflow-hidden">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-20 w-1.5 bg-gray-400"></div>
            <p className="text-slate-700 leading-relaxed mb-6 pr-6 text-[15px]">
              An internal resource containing dozens of step-by-step articles on the tasks and features most commonly requested at the Technology Service Desk. Get information on Office 365 applications, including Email, OneDrive, Calendar, SharePoint, Word, PowerPoint, Excel and OneNote.
            </p>
            <ul className="space-y-2 list-disc pl-5 text-[#005a9c] text-[15px]">
              <li><a href="#" className="hover:underline font-medium hover:text-[#003a70]">Digital Innovation & Technology - Knowledge Base</a></li>
            </ul>
          </div>
        </div>

        {/* Microsoft Training Support Card */}
        <div className="relative pt-6">
          <div className="absolute top-0 left-6 bg-[#003a70] text-white px-6 py-2.5 rounded-md font-bold text-sm shadow-md z-10 w-auto inline-block">
            Microsoft Training Support
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm pt-12 pb-8 px-8 relative">
            <p className="text-slate-700 leading-relaxed mb-6 text-[15px]">
              This free training hub on <a href="#" className="text-[#005a9c] hover:underline font-medium">Microsoft.com</a> provides walkthroughs and videos for all Microsoft 365 products, including Outlook, OneDrive, Word, SharePoint, Word, PowerPoint, Excel, Teams, and OneNote.
            </p>
            <ul className="space-y-2 list-disc pl-5 text-[#005a9c] text-[15px]">
              <li><a href="#" className="hover:underline font-medium hover:text-[#003a70]">Microsoft Training Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-[22px] font-bold text-black mb-10">Live support during business hours.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12">
          {/* Online Support Card */}
          <div className="relative pt-6">
            <div className="absolute top-0 left-6 bg-[#f4f6fb] text-black px-8 py-2.5 rounded-md font-bold text-sm shadow-md z-10 border border-slate-200">
              Online Support
            </div>
            <div className="bg-[#004780] rounded-xl text-white pt-10 pb-8 px-8 relative h-full">
              <h3 className="font-bold mb-5 text-[15px]">Live chat - general inquiries</h3>
              <div className="space-y-1.5 text-[14px]">
                <a href="#" className="flex items-center gap-2.5 hover:text-blue-200 group w-fit">
                  <Mail className="w-4 h-4 text-white group-hover:text-blue-200"/>
                  <span className="font-bold underline underline-offset-4">Email</span>
                </a>
                <a href="#" className="flex items-center gap-2.5 hover:text-blue-200 group w-fit">
                  <MessageCircle className="w-4 h-4 text-white group-hover:text-blue-200 p-[1px] fill-white"/>
                  <span className="font-bold underline underline-offset-4">Live Chat</span>
                </a>
                <a href="#" className="flex items-center gap-2.5 hover:text-blue-200 group w-fit">
                  <Phone className="w-4 h-4 text-white group-hover:text-blue-200 p-[1px] fill-white"/>
                  <span className="font-bold text-[#ea9999]">1-877-491-6774</span>
                </a>
              </div>
            </div>
          </div>

          {/* Technology Service Card */}
          <div className="relative pt-6">
            <div className="absolute top-0 left-6 bg-[#f4f6fb] text-black px-8 py-2.5 rounded-md font-bold text-sm shadow-md z-10 border border-slate-200">
              Technology Service Desk
            </div>
            <div className="bg-[#004780] rounded-xl text-white pt-10 pb-8 px-8 relative h-full overflow-hidden">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 h-20 w-1.5 bg-[#6eb4fb]/50"></div>
              <h3 className="font-bold mb-5 text-[15px] max-w-[200px] leading-tight">Your single point of entry for technical support.</h3>
              <div className="space-y-1.5 text-[14px]">
                <a href="#" className="flex items-center gap-2.5 hover:text-blue-200 group w-fit">
                  <MessageCircle className="w-4 h-4 text-white group-hover:text-blue-200 p-[1px] fill-white"/>
                  <span className="font-bold underline underline-offset-4">Live Chat</span>
                </a>
                <a href="#" className="flex items-center gap-2.5 hover:text-blue-200 group w-fit">
                  <Phone className="w-4 h-4 text-white group-hover:text-blue-200 p-[1px] fill-white"/>
                  <span className="font-bold text-[#ea9999]">1-866-898-4357</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-24 flex flex-col items-center">
        <h2 className="text-[22px] font-bold text-black mb-8">Additional Technology Resources</h2>
        
        <div className="w-full max-w-2xl border border-gray-300 rounded-sm divide-y divide-gray-300 shadow-sm">
          {accordions.map((title, idx) => (
            <div key={idx} className="bg-white">
              <button 
                onClick={() => toggleAccordion(title)}
                className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold tracking-wide text-black text-[13px]">{title}</span>
                {openAccordion === title ? (
                  <Minus className="w-[14px] h-[14px] text-gray-400 stroke-[3]" />
                ) : (
                  <Plus className="w-[14px] h-[14px] text-gray-400 stroke-[3]" />
                )}
              </button>
              {openAccordion === title && (
                <div className="px-6 py-5 text-sm text-gray-700 bg-slate-50 border-t border-gray-100">
                  <p>Placeholder content for the {title} accordion. We will edit it later. This space can hold text, links, or instructions.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function EventSchedule() {
  return (
    <div className="animate-in fade-in duration-500 w-full max-w-4xl">
      <div className="flex items-center space-x-4 mb-12">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Event Schedule</h1>
      </div>

      <div className="relative mb-16 pl-6 pr-12">
        {/* Banner Image Container */}
        <div className="w-full h-[240px] md:h-[280px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[120px] overflow-hidden relative">
           <img 
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80" 
              alt="Person holding coffee" 
              className="w-full h-full object-cover" 
           />
        </div>
        {/* Overlapping Text Label */}
        <div className="absolute -bottom-1 left-16 bg-white px-10 py-4 rounded-t-3xl rounded-br-3xl shadow-sm border border-slate-50 font-bold text-[26px] z-10 text-black">
          Winter Term
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center mb-16 max-w-3xl ml-4">
        {/* eMeetups Logo Graphic */}
        <div className="relative shrink-0 ml-4 mt-2">
          {/* Main Bubble */}
          <div className="bg-[#004780] text-white px-4 py-6 rounded-md font-medium text-lg relative z-10 w-28 flex items-center justify-center">
            eMeetups
          </div>
          {/* Main Bubble Tail */}
          <div className="absolute -bottom-2.5 left-8 w-6 h-6 bg-[#004780] rotate-45 z-0"></div>
          {/* Background Outlined Bubble */}
           <div className="absolute -bottom-5 -left-5 w-12 h-10 border-2 border-[#004780] rounded-md z-20 bg-white"></div>
           <div className="absolute -bottom-7 -left-1 w-3 h-3 border-r-2 border-b-2 border-[#004780] rotate-45 z-20 bg-white"></div>
           {/* Dots inside */}
           <div className="absolute -bottom-1 -left-3.5 flex gap-1 z-30">
              <div className="w-1.5 h-1.5 rounded-full bg-[#004780]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#004780]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#004780]"></div>
           </div>
        </div>

        {/* Gray Info Bubble */}
        <div className="bg-[#e9ecef] rounded-3xl rounded-tl-xl p-6 text-slate-800 text-[15.5px] leading-relaxed relative">
          Live sessions exploring supports and opportunities at NSCC. 
          eMeetups <span className="font-bold">are recorded</span> and shared on our <a href="#" className="text-blue-700 hover:text-blue-900 underline underline-offset-2">eCampus Community Teams site</a> and <a href="#" className="text-blue-700 hover:text-blue-900 underline underline-offset-2">eCampus Information Site.</a>
        </div>
      </div>

      <div className="space-y-8 max-w-3xl ml-4 mb-24">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row gap-6 md:items-start group">
          <a href="#" className="shrink-0 bg-[#004780] group-hover:bg-[#003a70] text-white font-bold px-6 py-5 rounded-xl text-center shadow-md w-full md:w-44 transition-colors">
            <span className="underline underline-offset-4 decoration-2">Join Session</span>
          </a>
          <div className="text-[15.5px] pt-1">
            <h3 className="font-bold text-black text-[17px] mb-1.5">Human + Tech: Modern Hiring Practices with AI</h3>
            <p className="text-slate-800">Host: Robyn Michaud, Marketing Coordinator, Career Beacon</p>
            <p className="text-slate-800">Moderator: Andrea Ferguson</p>
            <p className="text-slate-800 mt-1">February 25, 2026 - 12:00pm to 1:00pm</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row gap-6 md:items-start group">
          <a href="#" className="shrink-0 bg-[#004780] group-hover:bg-[#003a70] text-white font-bold px-6 py-5 rounded-xl text-center shadow-md w-full md:w-44 transition-colors">
            <span className="underline underline-offset-4 decoration-2">Join Session</span>
          </a>
          <div className="text-[15.5px] pt-1">
            <h3 className="font-bold text-black text-[17px] mb-1.5">Acing the Interview</h3>
            <p className="text-slate-800">Host: Andrea Ferguson</p>
            <p className="text-slate-800">Special Guest: TBA</p>
            <p className="text-slate-800 mt-1">March 11, 2026 - 12:00pm to 1:00pm</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row gap-6 md:items-start group">
          <a href="#" className="shrink-0 bg-[#004780] group-hover:bg-[#003a70] text-white font-bold px-6 py-5 rounded-xl text-center shadow-md w-full md:w-44 transition-colors">
            <span className="underline underline-offset-4 decoration-2">Join Session</span>
          </a>
          <div className="text-[15.5px] pt-1">
            <h3 className="font-bold text-black text-[17px] mb-1.5">Convocation (Graduation) Information Session</h3>
            <p className="text-slate-800">Hosts: Karl Moore and Nicki Taylor</p>
            <p className="text-slate-800">Moderator: Lillian Lake</p>
            <p className="text-slate-800 mt-1">April 15, 2026 - 12:00pm to 1:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EbiteVodcasts() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordions = [
    "eCampus Onboarding Series",
    "Let's Talk About It Series",
    "Wellness Series",
    "Career Chat Series"
  ];

  return (
    <div className="animate-in fade-in duration-500 w-full max-w-5xl">
      <div className="flex items-center space-x-4 mb-10">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">eBite Vodcasts &amp; eMeetup Recordings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pt-4">
        {/* eMeetups Info */}
        <div className="flex items-start gap-6">
          {/* eMeetups Logo Graphic */}
          <div className="relative shrink-0 ml-3 mt-2">
            {/* Main Bubble */}
            <div className="bg-[#004780] text-white px-3 py-5 rounded-md font-medium text-[15px] relative z-10 w-24 flex items-center justify-center leading-tight">
              eMeetups
            </div>
            {/* Main Bubble Tail */}
            <div className="absolute -bottom-2 left-6 w-5 h-5 bg-[#004780] rotate-45 z-0"></div>
            {/* Background Outlined Bubble */}
             <div className="absolute -bottom-4 -left-4 w-10 h-8 border-2 border-[#004780] rounded-md z-20 bg-white"></div>
             <div className="absolute -bottom-6 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-[#004780] rotate-45 z-20 bg-white"></div>
             {/* Dots inside */}
             <div className="absolute -bottom-0.5 -left-2.5 flex gap-0.5 z-30">
                <div className="w-1 h-1 rounded-full bg-[#004780]"></div>
                <div className="w-1 h-1 rounded-full bg-[#004780]"></div>
                <div className="w-1 h-1 rounded-full bg-[#004780]"></div>
             </div>
          </div>
          <div className="text-[14.5px] text-[#004780] max-w-[280px]">
            <p className="mb-4">
              <span className="font-medium">eMeetups</span> are live virtual sessions that explore supports and opportunities available to students at NSCC.
            </p>
            <p>
              These sessions are recorded and shared here to maximize accessibility.
            </p>
          </div>
        </div>

        {/* eBites Info */}
        <div className="flex items-start gap-6 relative h-full">
          {/* Vertical Separator */}
          <div className="hidden md:block absolute -left-6 top-1 bottom-1 w-[4px] bg-gray-500 rounded-full"></div>
          
          {/* eBites Logo Graphic */}
          <div className="relative shrink-0 mt-2 ml-2">
            <div className="bg-[#004780] text-white px-3 py-3.5 rounded-md font-medium text-[14.5px] relative z-10 w-[80px] flex flex-col items-center justify-center">
              <span>eBites</span>
              <div className="mt-1.5 bg-white rounded-sm w-[28px] h-[18px] flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-[#004780] border-b-[4px] border-b-transparent ml-0.5"></div>
              </div>
            </div>
            {/* The video camera cone/lens on the right */}
            <div className="absolute top-1/2 -mt-4 -right-4 w-0 h-0 border-t-[14px] border-t-transparent border-l-[18px] border-l-[#004780] border-b-[14px] border-b-transparent z-0"></div>
          </div>
          <div className="text-[14.5px] text-[#004780] max-w-[280px]">
            <p className="mb-4">
              <span className="font-medium">eBites</span> are short videos that effectively share important information on a broad range of topics.
            </p>
            <p>
              eBites can be watched - or listened to -and include a blend of storytelling, conversation, and expert knowledge.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24 flex flex-col items-center w-full">
        <div className="w-full max-w-[800px] space-y-6">
          {accordions.map((title, idx) => (
            <div key={idx} className="bg-white border border-gray-300 shadow-sm rounded-sm">
              <button 
                onClick={() => toggleAccordion(title)}
                className="w-full flex justify-between items-center px-8 py-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-black text-[16.5px]">{title}</span>
                {openAccordion === title ? (
                  <Minus className="w-5 h-5 text-gray-400 stroke-[2]" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 stroke-[2]" />
                )}
              </button>
              {openAccordion === title && (
                <div className="px-8 py-5 text-sm text-gray-700 bg-slate-50 border-t border-gray-200">
                  <p>Placeholder content for the {title} accordion. We will edit it later. This space can hold text, links, or instructions.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlipCard({ title }: { title: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-square group cursor-pointer [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-gray-100 rounded-sm shadow-sm flex items-center justify-center p-6 text-center shadow-md">
          <div className="absolute top-2.5 right-2.5 text-black">
             <RefreshCw className="w-3.5 h-3.5" />
          </div>
          <h3 className="font-bold text-[#004780] text-[15px]">{title}</h3>
        </div>
        {/* Back */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white border border-[#004780] rounded-sm shadow-sm flex flex-col items-center justify-center p-4 text-center">
          <div className="absolute top-2.5 right-2.5 text-[#004780]">
             <RefreshCw className="w-3.5 h-3.5" />
          </div>
          <p className="text-sm font-medium text-[#004780]">Placeholder content for {title}. You can enter more info here.</p>
        </div>
      </div>
    </div>
  );
}

function LibraryLearning() {
  const learningSupports = [
    "Peer Assisted Learning Supports",
    "Writing Centre",
    "LinkedIn Learning",
    "Nimbus Virtual Tutoring",
    "English as an Additional Language",
    "College 101"
  ];

  return (
    <div className="animate-in fade-in duration-500 w-full max-w-[840px] pb-24">
      <div className="flex items-center space-x-4 mb-10">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Library & Learning Commons</h1>
      </div>

      <div className="relative mb-2 rounded-[2rem] overflow-hidden h-[250px] md:h-[350px]">
        <img 
           src="/student-nscc-campus.jpg" 
           alt="Student working from a physical campus cafe" 
           className="w-full h-full object-cover object-center"
        />
      </div>
      <p className="text-[11px] text-gray-500 mb-8 pl-4">Photo of student working from a physical campus cafe</p>

      <div className="bg-[#f0f8ff] border border-[#004780] p-6 mb-8 flex gap-4 rounded-sm">
        <Info className="w-6 h-6 text-[#004780] shrink-0 mt-0.5" />
        <div>
          <h2 className="text-[17px] font-bold text-black mb-3">Your hub for academic support.</h2>
          <p className="text-slate-800 text-[15px] leading-relaxed">
            Our learning supports help you succeed with your academic studies. From our library services and resources to tutoring options and peer assisted learning, we offer several options to help you.
          </p>
        </div>
      </div>

      <div className="bg-[#004780] py-4 px-6 text-center">
        <h2 className="text-[22px] font-bold text-white mb-2">Learning Supports</h2>
        <p className="text-white text-[14.5px]">
          Our <a href="#" className="underline font-bold decoration-2 underline-offset-4 hover:text-blue-200 transition-colors">needs assessment</a> can help choose the best support(s)
        </p>
      </div>

      <div className="bg-[#f8f9fa] p-8 pb-10 mb-8 border-x border-b border-gray-100 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {learningSupports.map((title, idx) => (
             <FlipCard key={idx} title={title} />
          ))}
        </div>
      </div>

      <div className="bg-[#004780] py-4 px-6 text-center mb-6">
        <h2 className="text-[22px] font-bold text-white">Library Supports</h2>
      </div>

      <div className="space-y-4 mb-12 border-x border-b border-gray-100 shadow-sm px-6 pb-8 pt-4">
         {/* List items */}
         <div className="flex flex-col md:flex-row gap-6 justify-between items-center py-2">
            <p className="text-[14.5px] text-slate-800 flex-1">Need help deciding if you can use a resource, such as a picture or audio, in your assignment?</p>
            <a href="#" className="w-full md:w-[280px] text-center bg-[#2b598a] hover:bg-[#1a3d63] text-white font-bold py-[14px] px-4 rounded-full text-[12px] tracking-wider transition-colors shrink-0">COPYRIGHT SUPPORT</a>
         </div>
         <div className="flex flex-col md:flex-row gap-6 justify-between items-center py-2">
            <p className="text-[14.5px] text-slate-800 flex-1">View our APA citation guide for resources and support to ensure your writing is in APA style.</p>
            <a href="#" className="w-full md:w-[280px] text-center bg-[#2b598a] hover:bg-[#1a3d63] text-white font-bold py-[14px] px-4 rounded-full text-[12px] tracking-wider transition-colors shrink-0">APA SUPPORT</a>
         </div>
         <div className="flex flex-col md:flex-row gap-6 justify-between items-center py-2">
            <p className="text-[14.5px] text-slate-800 flex-1">The Library's Novanet search provides easy access to the physical and electronic resources available to you through the library.</p>
            <a href="#" className="w-full md:w-[280px] text-center bg-[#2b598a] hover:bg-[#1a3d63] text-white font-bold py-[14px] px-4 rounded-full text-[12px] tracking-wider transition-colors shrink-0">NOVANET SEARCH</a>
         </div>
         <div className="flex flex-col md:flex-row gap-6 justify-between items-center py-2">
            <p className="text-[14.5px] text-slate-800 flex-1">Chat with a library professional through our Live Help Service.</p>
            <a href="#" className="w-full md:w-[280px] text-center bg-[#2b598a] hover:bg-[#1a3d63] text-white font-bold py-[14px] px-4 rounded-full text-[12px] tracking-wider transition-colors shrink-0">LIVE CHAT SUPPORT</a>
         </div>
         <div className="flex flex-col md:flex-row gap-6 justify-between items-center py-2">
            <p className="text-[14.5px] text-slate-800 flex-1">Need help getting started with research for your assignment? Unsure about where to find credible and accurate information?</p>
            <a href="#" className="w-full md:w-[280px] text-center bg-[#2b598a] hover:bg-[#1a3d63] text-white font-bold py-[14px] px-4 rounded-full text-[12px] tracking-wider transition-colors shrink-0">RESEARCH HELP</a>
         </div>
      </div>

      <div className="bg-[#eaedf2] border border-[#004780] p-6 mb-10 flex gap-4 rounded-sm">
        <Info className="w-6 h-6 text-[#004780] shrink-0 mt-0.5" />
        <div>
          <h2 className="text-xl font-bold text-black mb-5">Questions?</h2>
          <div className="space-y-4">
             <div className="flex items-center gap-2.5 text-blue-800">
                <MessageSquare className="w-5 h-5 text-indigo-400 fill-indigo-100" />
                <a href="#" className="underline underline-offset-2 hover:text-blue-900 font-medium text-[15px]">Live Help</a>
             </div>
             <div className="flex items-center gap-2.5 text-blue-800">
                <Mail className="w-5 h-5 text-indigo-400 fill-indigo-100" />
                <a href="mailto:library.eCampus@nscc.ca" className="underline underline-offset-2 hover:text-blue-900 font-medium text-[15px]">library.eCampus@nscc.ca</a>
             </div>
             <div className="flex items-center gap-2.5 text-slate-900">
                <Phone className="w-5 h-5 text-pink-500 fill-pink-100" />
                <span className="font-medium text-[15px]">(902) 543-0684</span>
             </div>
             <div className="flex items-center gap-2.5 text-blue-800">
                <Calendar className="w-5 h-5 text-blue-500 fill-blue-100" />
                <a href="#" className="underline underline-offset-2 hover:text-blue-900 font-medium text-[15px]">Book a library appointment</a>
             </div>
             <div className="flex items-center gap-2.5 text-slate-800 mt-6 pt-1">
                <div className="w-1.5 h-1.5 bg-red-600 rotate-45 shrink-0 ml-1.5"></div>
                <span className="ml-1.5 text-[15px]">Access any of our 13 Campus Libraries with your <a href="#" className="text-blue-700 underline hover:text-blue-900 font-medium">Student ID</a></span>
             </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
         <div className="relative w-full h-[400px] bg-[#1d2a3f] overflow-hidden flex items-center justify-center p-8">
             <div className="absolute top-8 left-8 z-10 w-full">
               <h2 className="text-white text-[32px] font-bold max-w-[280px] leading-[1.1] mb-2 font-serif">Nova Scotia.<br/>We're all over that.</h2>
             </div>
             
             {/* Map elements visualization */}
             <div className="absolute inset-0 z-0">
               <div className="w-full h-full opacity-60">
                  <svg viewBox="0 0 800 500" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M180,380 Q250,420 320,380 T450,280 T600,180 T700,100 L720,120 L550,400 L250,480 Z" fill="#2d3d57" stroke="#4a5d7c" strokeWidth="2"/>
                    <path d="M400,200 Q450,220 500,180" stroke="#4a5d7c" strokeWidth="2" strokeDasharray="4 4"/>
                    
                    {/* Fake Map Pins */}
                    {/* Pin 1 */}
                    <circle cx="280" cy="350" r="4" fill="#a3cf8d" />
                    <circle cx="280" cy="350" r="1.5" fill="white" />
                    <text x="290" y="353" fill="white" fontSize="10" opacity="0.8">Annapolis Valley Campus</text>
                    
                    {/* Pin 2 */}
                    <circle cx="340" cy="300" r="4" fill="#a3cf8d" />
                    <circle cx="340" cy="300" r="1.5" fill="white" />
                    <text x="350" y="303" fill="white" fontSize="10" opacity="0.8">Kingstec Campus</text>
                    
                    {/* Pin 3 */}
                    <circle cx="420" cy="280" r="4" fill="#a3cf8d" />
                    <circle cx="420" cy="280" r="1.5" fill="white" />
                    <text x="430" y="283" fill="white" fontSize="10" opacity="0.8">Truro Campus</text>

                    {/* Pin 4 */}
                    <circle cx="580" cy="180" r="4" fill="#a3cf8d" />
                    <circle cx="580" cy="180" r="1.5" fill="white" />
                    <text x="590" y="183" fill="white" fontSize="10" opacity="0.8">Sydney Waterfront</text>

                    <circle cx="600" cy="140" r="4" fill="#a3cf8d" />
                    <circle cx="600" cy="140" r="1.5" fill="white" />

                    <circle cx="480" cy="220" r="4" fill="#a3cf8d" />
                    <circle cx="480" cy="220" r="1.5" fill="white" />
                  </svg>
               </div>
             </div>

             <div className="absolute bottom-6 right-8 z-10 flex flex-col items-end">
               <div className="text-white text-sm bg-black/30 p-4 rounded mb-4">
                  <div className="mb-2 font-bold opacity-70 border-b border-white/20 pb-1">LEGEND</div>
                  <div className="flex items-center gap-2 mb-1.5 opacity-80">
                     <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                     <span className="text-[11px]">NSCC Campus</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-80">
                     <div className="w-2 h-2 rounded-full bg-[#a3cf8d]"></div>
                     <span className="text-[11px]">Community Learning<br/>Centre and/or NSCC Institute</span>
                  </div>
               </div>
               <div className="text-white text-4xl font-bold italic tracking-tighter opacity-90">nscc</div>
             </div>
             
             <div className="absolute bottom-10 left-10 z-10">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1e8cc0] flex items-center justify-center border-2 border-white">
                      <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-white text-[11px] font-medium leading-tight opacity-90">
                     Study online<br/>from anywhere<br/>with eCampus
                  </div>
               </div>
             </div>

         </div>
         <p className="text-[11px] text-gray-500 mt-3 border-b border-gray-300 pb-2">Image of a map of Nova Scotia highlighting campus library locations</p>
      </div>
    </div>
  );
}

function CareerJobSearch() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="animate-in fade-in duration-500 w-full max-w-4xl pb-24">
      <div className="flex items-center space-x-4 mb-10">
        <div className="h-1 w-12 bg-[#ffc72c]"></div>
        <h1 className="text-4xl font-bold text-[#003a70] tracking-tight">Career & Job Search</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10 mb-12">
        <h2 className="text-[26px] font-bold text-center text-black mb-6">Services and resources</h2>
        <p className="text-slate-800 text-[15px] leading-relaxed mb-4">
          Whether you're a student, a recent graduate or a member of our established alumni community, we offer a variety of employment supports to help you on your career journey.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[15px] text-slate-800">
          <li>
            Learn about NSCC's <a href="#" className="text-blue-700 underline hover:text-blue-900 underline-offset-2">career and employment supports and services</a> on Connect (log-in required).
          </li>
          <li>
            Find organizations across the province offering cultural, career and employment supports. <a href="#" className="text-blue-700 underline hover:text-blue-900 underline-offset-2">Learn more about career supports in your region</a>
          </li>
        </ul>
      </div>

      <div className="space-y-6 w-full max-w-[800px] mx-auto">
        {/* Accordion 1 */}
        <div className="bg-white border border-gray-300 shadow-sm rounded-sm">
          <button 
            onClick={() => toggleAccordion("career-chats")}
            className="w-full flex justify-between items-center px-8 py-6 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-bold text-black text-[16.5px]">Career Chats - an eBite vodcast series</span>
            {openAccordion === "career-chats" ? (
              <Minus className="w-5 h-5 text-gray-400 stroke-[2]" />
            ) : (
              <Plus className="w-5 h-5 text-gray-400 stroke-[2]" />
            )}
          </button>
          {openAccordion === "career-chats" && (
            <div className="px-8 py-5 text-sm text-gray-700 border-t border-gray-200">
              <p>Placeholder content for Career Chats. Links and info will go here.</p>
            </div>
          )}
        </div>

        {/* Accordion 2 */}
        <div className="bg-white border border-gray-300 shadow-sm rounded-sm">
          <button 
            onClick={() => toggleAccordion("resume-cover-letter")}
            className="w-full flex justify-between items-center px-8 py-6 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-bold text-black text-[16.5px]">Resume & Cover Letter Supports</span>
            {openAccordion === "resume-cover-letter" ? (
              <Minus className="w-5 h-5 text-gray-400 stroke-[2]" />
            ) : (
              <Plus className="w-5 h-5 text-gray-400 stroke-[2]" />
            )}
          </button>
          {openAccordion === "resume-cover-letter" && (
            <div className="px-8 py-5 text-sm text-gray-700 border-t border-gray-200">
              <p>Placeholder content for Resume & Cover Letter Supports.</p>
            </div>
          )}
        </div>

        {/* Accordion 3 */}
        <div className="bg-white border border-gray-300 shadow-sm rounded-sm">
          <button 
            onClick={() => toggleAccordion("interview-prep")}
            className="w-full flex justify-between items-center px-8 py-6 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-bold text-black text-[16.5px]">Interview Preparation</span>
            {openAccordion === "interview-prep" ? (
              <Minus className="w-5 h-5 text-gray-400 stroke-[2]" />
            ) : (
              <Plus className="w-5 h-5 text-gray-400 stroke-[2]" />
            )}
          </button>
          {openAccordion === "interview-prep" && (
            <div className="px-8 py-5 text-sm text-gray-700 border-t border-gray-200">
              <p>Placeholder content for Interview Preparation.</p>
            </div>
          )}
        </div>

        {/* Accordion 4 */}
        <div className="bg-white border border-gray-300 shadow-sm rounded-sm">
          <button 
            onClick={() => toggleAccordion("online-resources")}
            className="w-full flex justify-between items-center px-8 py-6 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-bold text-black text-[16.5px]">Online Resources at your Fingertips</span>
            {openAccordion === "online-resources" ? (
              <Minus className="w-5 h-5 text-gray-400 stroke-[2]" />
            ) : (
              <Plus className="w-5 h-5 text-gray-400 stroke-[2]" />
            )}
          </button>
          {openAccordion === "online-resources" && (
            <div className="px-8 py-5 text-sm text-gray-700 border-t border-gray-200">
              <p>Placeholder content for Online Resources.</p>
            </div>
          )}
        </div>

        {/* Accordion 5 */}
        <div className="bg-white border border-gray-300 shadow-sm rounded-sm">
          <button 
            onClick={() => toggleAccordion("linkedin-learning")}
            className="w-full flex justify-between items-center px-8 py-6 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-bold text-black text-[16.5px]">LinkedIn Learning & O'Reilly</span>
            {openAccordion === "linkedin-learning" ? (
              <Minus className="w-5 h-5 text-gray-400 stroke-[2]" />
            ) : (
              <Plus className="w-5 h-5 text-gray-400 stroke-[2]" />
            )}
          </button>
          {openAccordion === "linkedin-learning" && (
            <div className="px-8 py-5 text-sm text-gray-700 border-t border-gray-200">
              <p>Placeholder content for LinkedIn Learning & O'Reilly.</p>
            </div>
          )}
        </div>

        {/* File Download Block */}
        <a href="#" className="flex items-center justify-between p-6 bg-slate-50 border border-gray-300 shadow-sm rounded-sm hover:bg-slate-100 transition-colors group">
          <div className="flex items-center gap-5">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded flex items-center justify-center font-bold text-xs uppercase tracking-wider shrink-0">
              PDF
            </div>
            <div>
              <h3 className="font-bold text-black text-[15px] group-hover:underline underline-offset-2">LinkedIn Learning and O'Reilly.pdf</h3>
              <p className="text-gray-500 text-xs mt-0.5">154.5 KB</p>
            </div>
          </div>
          <div className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </div>
        </a>

        {/* Accordion 6 */}
        <div className="bg-white border border-gray-300 shadow-sm rounded-sm">
          <button 
            onClick={() => toggleAccordion("career-jump-start")}
            className="w-full flex justify-between items-center px-8 py-6 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-bold text-black text-[16.5px]">Career Jump Start</span>
            {openAccordion === "career-jump-start" ? (
              <Minus className="w-5 h-5 text-gray-400 stroke-[2]" />
            ) : (
              <Plus className="w-5 h-5 text-gray-400 stroke-[2]" />
            )}
          </button>
          {openAccordion === "career-jump-start" && (
            <div className="px-8 py-5 text-sm text-gray-700 border-t border-gray-200">
              <p>Placeholder content for Career Jump Start.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about">
            <Route index element={<Navigate to="our-campus" replace />} />
            <Route path="our-campus" element={<OurCampus />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route path="our-communication" element={<OurCommunication />} />
            <Route path="key-terms" element={<KeyTerms />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="finances">
            <Route index element={<Navigate to="tuition-payment" replace />} />
            <Route path="tuition-payment" element={<TuitionAndPayment />} />
            <Route path="purchasing-textbooks" element={<PurchasingTextbooks />} />
            <Route path="purchasing-tech" element={<PurchasingTech />} />
          </Route>
          <Route path="academics">
            <Route index element={<Navigate to="school-of-access" replace />} />
            <Route path="school-of-access" element={<SchoolOfAccess />} />
            <Route path="school-of-business" element={<SchoolOfBusiness />} />
            <Route path="school-of-health" element={<SchoolOfHealth />} />
            <Route path="applied-technology" element={<AppliedTech />} />
            <Route path="funded-programs" element={<FundedPrograms />} />
            <Route path="convocation" element={<Convocation />} />
          </Route>
          <Route path="services">
            <Route index element={<Navigate to="student-supports" replace />} />
            <Route path="student-supports" element={<StudentSupports />} />
            <Route path="technology-supports" element={<TechnologySupports />} />
            <Route path="event-schedule" element={<EventSchedule />} />
            <Route path="ebite-vodcasts" element={<EbiteVodcasts />} />
            <Route path="library-learning" element={<LibraryLearning />} />
            <Route path="career-job-search" element={<CareerJobSearch />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
