import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ShieldCheck,
  ScanLine,
  ServerCog,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers,
  Rocket,
  Mail,
} from "lucide-react";

// Minimal, professional landing for Qubrius Labs
// WHY: single-file component for a fast launch; hooks to Trust page & demo repo

const features = [
  {
    icon: ScanLine,
    title: "Cryptographic Inventory",
    text: "Automated scans across HTTPS, mail (STARTTLS), VPN, and reverse proxies — outputs CSV/JSON + transcripts.",
  },
  {
    icon: ServerCog,
    title: "Hybrid TLS Migration",
    text: "Enable TLS 1.3 hybrid ML‑KEM (e.g., X25519MLKEM768) with canaries, fallbacks, and scripted rollback.",
  },
  {
    icon: FileCheck2,
    title: "Continuous Evidence",
    text: "Scheduled scans, drift detection, rotation evidence, and executive reporting.",
  },
];

const sellingPoints = [
  { label: "On‑prem / No telemetry" },
  { label: "Evidence‑first (CSV + transcripts)" },
  { label: "Zero‑downtime playbooks" },
  { label: "OMB • NIS2 • DORA aligned" },
];

const packages = [
  {
    name: "Baseline",
    desc: "Readiness inventory for a scoped set of endpoints.",
    bullets: ["CSV/JSON inventory", "Transcript evidence", "Risk heatmap", "Executive brief"],
  },
  {
    name: "Migration Pilot",
    desc: "Enable hybrid TLS on a canary tier with rollback.",
    bullets: ["Change plan", "Config updates", "Validation transcripts", "Rollback rehearsal"],
  },
  {
    name: "Monitoring",
    desc: "Ongoing scans, drift alerts, and rotation evidence.",
    bullets: ["Scheduled scans", "Drift detection", "Rotation policy", "Quarterly reports"],
  },
];

const codeTranscript = `# Verify hybrid TLS negotiation\nopenssl s_client -connect example.com:443 -tls1_3 -groups X25519MLKEM768 < /dev/null\n# Look for:\n# Group: X25519MLKEM768`; 

const codeCsv = `hostname,port,group,cipher,cert_sig_alg,cert_key_bits\nexample.com,443,X25519MLKEM768,TLS_AES_256_GCM_SHA384,rsa_pkcs1_sha256,3072`;

export default function QubriusLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/40">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6" />
            <span className="font-semibold tracking-tight">Qubrius Labs</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Product</a>
            <a href="#evidence" className="hover:text-foreground">Evidence</a>
            <a href="#packages" className="hover:text-foreground">Packages</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
            <a href="/security" className="hover:text-foreground">Security & Trust</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="secondary"><a href="#contact">Contact</a></Button>
            <Button asChild className="hidden md:inline-flex"><a href="#cta">Book Review</a></Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity: 0, y: 8}} animate={{opacity: 1, y: 0}} transition={{duration: 0.4}}
              className="text-3xl md:text-5xl font-semibold tracking-tight">
              Become quantum‑safe without downtime
            </motion.h1>
            <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-xl">
              NIST/ENISA‑aligned cryptographic <b>inventory</b>, safe <b>hybrid TLS</b> migration, and
              <b> continuous evidence</b>—ready for OMB M‑23‑02 and EU programs (NIS2, DORA).
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {sellingPoints.map((p, i) => (
                <Badge key={i} variant="secondary">{p.label}</Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#cta" className="inline-flex items-center">Book a 20‑minute readiness review <ArrowRight className="h-4 w-4 ml-2"/></a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#evidence" className="inline-flex items-center">See evidence snapshot</a>
              </Button>
            </div>
          </div>
          <div>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Approach (3 steps)</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl border p-4">
                  <Layers className="h-5 w-5" />
                  <div className="font-medium mt-2">Inventory</div>
                  <p className="text-sm text-muted-foreground">CSV/JSON + transcripts; risk heatmap.</p>
                </div>
                <div className="rounded-xl border p-4">
                  <ServerCog className="h-5 w-5" />
                  <div className="font-medium mt-2">Migrate</div>
                  <p className="text-sm text-muted-foreground">Hybrid TLS on canaries; fallback & rollback.</p>
                </div>
                <div className="rounded-xl border p-4">
                  <FileCheck2 className="h-5 w-5" />
                  <div className="font-medium mt-2">Monitor</div>
                  <p className="text-sm text-muted-foreground">Scheduled scans; rotation evidence; reports.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <Card key={i} className="shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <f.icon className="h-5 w-5" />
                <CardTitle className="text-base">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{f.text}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Evidence snapshot */}
      <section id="evidence" className="bg-white/60 border-y">
        <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Evidence that sticks</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-prose">
              We prove hybrid negotiation and ship machine‑readable artifacts. Auditors get raw transcripts
              and CSV fields they can verify independently.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> OpenSSL transcript shows <code>Group: X25519MLKEM768</code></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Inventory CSV with group, cipher, cert algorithm & key bits</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Control mapping (<code>control_map.json</code>) for OMB/NIS2/DORA/CRA</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Transcript</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="rounded-xl border bg-muted p-4 text-xs leading-5 whitespace-pre-wrap">{codeTranscript}</pre>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Inventory CSV</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="rounded-xl border bg-muted p-4 text-xs leading-5 whitespace-pre-wrap">{codeCsv}</pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Packages</h2>
            <p className="text-sm text-muted-foreground">Start small, scale as you go. Fixed‑fee pilots available.</p>
          </div>
          <Badge variant="secondary" className="hidden md:inline-flex"><Globe className="h-4 w-4 mr-1"/> US & EU ready</Badge>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {packages.map((p) => (
            <Card key={p.name} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{p.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> {b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white/60 border-y">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="f1">
              <AccordionTrigger>Do we need to replace RSA certificates now?</AccordionTrigger>
              <AccordionContent>
                No. Keep RSA/ECDSA for identity today. We start with <b>hybrid ML‑KEM</b> in TLS 1.3 to protect key exchange; plan ML‑DSA as the ecosystem matures.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="f2">
              <AccordionTrigger>Will hybrid TLS break clients?</AccordionTrigger>
              <AccordionContent>
                We enable on <b>canaries</b>, keep classic fallback (e.g., X25519), and script rollback. We also verify with transcripts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="f3">
              <AccordionTrigger>Can you align to OMB, NIS2, or DORA?</AccordionTrigger>
              <AccordionContent>
                Yes. Our outputs are framework‑neutral. Each run can emit a <code>control_map.json</code> mapped to OMB M‑23‑02, NIS2, DORA, or CRA.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="f4">
              <AccordionTrigger>Where does the data live?</AccordionTrigger>
              <AccordionContent>
                On your infrastructure. Our tools run on‑prem/VPC with <b>no telemetry by default</b>. Optional anonymisation and retention knobs are available.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-6xl px-6 py-16">
        <Card className="shadow-sm">
          <CardContent className="p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Book a readiness review</h3>
              <p className="text-sm text-muted-foreground mt-2">We’ll show a sample inventory export and a transcript proving hybrid negotiation.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary">15–20 minutes</Badge>
                <Badge variant="secondary">No prep needed</Badge>
              </div>
            </div>
            <form id="contact" className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We will reach out."); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input required name="name" placeholder="Full name" />
                <Input required type="email" name="email" placeholder="Work email" />
              </div>
              <Input name="org" placeholder="Organization" />
              <Textarea name="msg" placeholder="What systems are in scope? (optional)" />
              <div className="flex items-center gap-2">
                <Button type="submit" className="inline-flex items-center"><Mail className="h-4 w-4 mr-2"/> Request review</Button>
                <Button asChild variant="outline"><a href="/security" className="inline-flex items-center"><ShieldCheck className="h-4 w-4 mr-2"/> Security & Trust</a></Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            <span className="font-medium">Qubrius Labs</span>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Qubrius Labs · Security • Privacy • Compliance
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="/security" className="hover:text-foreground">Security & Trust</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="mailto:hello@qubriuslabs.com" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
