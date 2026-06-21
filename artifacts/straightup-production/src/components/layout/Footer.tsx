import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-lg pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl tracking-widest mb-4">
              StraightUp <span className="text-primary">Production</span>
            </h3>
            <p className="text-white/50 max-w-sm font-light">
              A sovereign, spirit-led creative empire. One man, one vision, one God. Invented and Founded by Maurice Martel.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-xl tracking-wider mb-4 text-white/80">Explore</h4>
            <div className="flex flex-col gap-2">
              <Link href="/artist" className="text-white/50 hover:text-primary transition-colors">S.O.A.K.</Link>
              <Link href="/martel-engine" className="text-white/50 hover:text-accent transition-colors">MartelEngine</Link>
              <Link href="/music" className="text-white/50 hover:text-white transition-colors">Music</Link>
              <Link href="/apps" className="text-white/50 hover:text-white transition-colors">Apps</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-xl tracking-wider mb-4 text-white/80">Connect</h4>
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="text-white/50 hover:text-white transition-colors">Contact Us</Link>
              <a href="#" className="text-white/50 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">YouTube</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">Spotify</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} StraightUp Production. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-display tracking-widest text-lg">TO GOD BE THE GLORY</p>
        </div>
      </div>
    </footer>
  );
}
