import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, PackageCheck, RefreshCw, ShoppingBag, Truck, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCatalog } from '@/components/product-catalog';
import { exchangeDays, instagramUrl } from '@/lib/catalog';
import { pageHead } from '@/lib/page-head';
import campaign from '@/assets/campaign.jpg';
import lifestyle1 from '@/assets/lifestyle-1.jpg';
import lifestyle2 from '@/assets/lifestyle-2.jpg';
import lifestyle3 from '@/assets/lifestyle-3.jpg';
import lifestyle4 from '@/assets/lifestyle-4.jpg';
export const Route = createFileRoute("/")({
  head: () => pageHead('Nova kolekcija', 'Otkrij novu SrbijaDrip kolekciju. Jakne, haljine, kompleti i aksesoari, uz jednostavno poručivanje i plaćanje pouzećem.'),
  component: Index,
});
function Index() {
  return <main>
    <section className="campaign"><img className="campaign-image" src={campaign} alt="SrbijaDrip nova kolekcija — moderni krojevi u neutralnim tonovima" width={1920} height={1024} fetchPriority="high"/><div className="campaign-content page-width"><p className="eyebrow">SrbijaDrip · Nova sezona, tvoja pravila</p><h1 className="campaign-title">Nova kolekcija<br/>je <em>stigla.</em></h1><p className="mb-8 max-w-xs text-xs leading-6 opacity-90">Opušteni krojevi. Pažljivo odabrani detalji.<br/>Komadi u kojima si svoja, svakog dana.</p><Button variant="campaign" onClick={() => document.getElementById('katalog')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>Pogledaj ponudu <ArrowRight className="ml-5"/></Button><span className="absolute bottom-7 right-0 hidden items-center gap-3 text-[10px] md:flex">Pronađi svoj stil <ArrowDown size={13}/></span></div></section>
    <div className="benefit-band"><div className="page-width benefit-inner"><span className="flex items-center gap-2.5"><Truck size={17} strokeWidth={1.2}/>Dostava širom Srbije</span><span className="flex items-center gap-2.5"><ShoppingBag size={16} strokeWidth={1.2}/>Plaćanje pouzećem</span><span className="flex items-center gap-2.5"><RefreshCw size={15} strokeWidth={1.2}/>Zamena veličine u roku od {exchangeDays} dana</span></div></div>
    <ProductCatalog/>
    <section className="steps-section"><div className="page-width"><p className="eyebrow mb-3 text-center text-muted-foreground">Od omiljenog komada do tvoje adrese</p><h2 className="editorial-title text-center">Jednostavno do novog stila</h2><p className="mt-4 text-center text-xs text-muted-foreground">Kako funkcioniše poručivanje</p><div className="steps-grid">{[{icon: ShoppingBag, title: 'Izaberi model i veličinu', text: 'Pronađi komad koji ti se dopada i odaberi svoju veličinu.'}, {icon: MessageCircle, title: 'Pošalji nam porudžbinu', text: 'Popuni podatke ili nam pošalji poruku na Instagramu.'}, {icon: PackageCheck, title: 'Stiže na tvoju adresu', text: 'Brza dostava kurirskom službom. Plaćaš pri preuzimanju.'}].map((step, i) => <div key={step.title} className="step-item"><div className="mb-5 flex items-center justify-center gap-4"><span className="step-number">0{i+1}</span><step.icon size={27} strokeWidth={1.1}/></div><h3 className="text-sm font-medium">{step.title}</h3><p className="mx-auto mt-3 max-w-[240px] text-xs leading-6 text-muted-foreground">{step.text}</p></div>)}</div></div></section>
    <section className="social-section page-width"><div className="catalog-heading"><div><p className="eyebrow mb-3 text-muted-foreground">Inspiracija za svaki dan</p><h2 className="editorial-title">U tvom ritmu. U tvom stilu.</h2></div><a href={instagramUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-xs md:flex"><Instagram size={15}/> @srbijadrip <ArrowUpRight size={14}/></a></div><div className="social-grid">{[lifestyle1,lifestyle2,lifestyle3,lifestyle4].map((image,i) => <a key={image} href={instagramUrl} target="_blank" rel="noreferrer" aria-label={`SrbijaDrip inspiracija ${i+1} na Instagramu`}><img src={image} alt={['Gradski stil u bež kompletu', 'Bordo torba i zlatni detalji', 'Kafa i omiljene modne kombinacije', 'Kožna jakna za svaki dan'][i]} width={768} height={768} loading="lazy"/></a>)}</div><div className="text-center"><Button variant="outline" className="h-11 rounded-none px-6 text-xs" asChild><a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={15}/>Pratite nas na Instagramu <ArrowUpRight size={14}/></a></Button></div></section>
  </main>;
}
