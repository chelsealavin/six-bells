import { useState } from "react";

const styles = {
  wrap: { fontFamily: "'Georgia', serif", background: "#f5f0e8", color: "#1a1510", maxWidth: 820, margin: "0 auto", padding: "48px 40px 80px", lineHeight: 1.8 },
  header: { textAlign: "center", borderBottom: "1.5px solid #c9b99a", paddingBottom: 32, marginBottom: 44 },
  eyebrow: { fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a6f60", marginBottom: 14 },
  title: { fontSize: 36, lineHeight: 1.2, color: "#1a1510", marginBottom: 6, fontStyle: "italic" },
  subtitle: { fontSize: 18, color: "#4a3f30", marginBottom: 20, fontStyle: "italic" },
  meta: { fontSize: 12, color: "#7a6f60", letterSpacing: "0.06em" },
  ornament: { textAlign: "center", color: "#c9b99a", fontSize: 18, margin: "28px 0", letterSpacing: "0.3em" },
  section: { marginBottom: 48 },
  sectionLabel: { fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a3b1e", marginBottom: 6 },
  h2: { fontSize: 24, color: "#1a1510", borderBottom: "0.75px solid #c9b99a", paddingBottom: 8, marginBottom: 18, fontStyle: "italic" },
  h3: { fontSize: 18, color: "#4a3f30", margin: "24px 0 8px", fontStyle: "italic" },
  h4: { fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7a3b1e", margin: "18px 0 6px" },
  p: { marginBottom: 12, color: "#4a3f30", fontWeight: 300, fontSize: 15 },
  launchStatement: { borderLeft: "3px solid #7a3b1e", padding: "18px 24px", margin: "24px 0", background: "#ece4d2" },
  launchStatementP: { fontSize: 17, lineHeight: 1.7, color: "#1a1510", margin: 0, fontStyle: "italic" },
  audienceGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, margin: "18px 0" },
  audienceCard: { border: "0.75px solid #c9b99a", padding: "18px 20px", background: "white" },
  audienceCardLabel: { fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a6f60", marginBottom: 4 },
  audienceCardTitle: { fontSize: 17, color: "#1a1510", marginBottom: 8, fontStyle: "italic" },
  audienceCardP: { fontSize: 13, lineHeight: 1.7, color: "#4a3f30", fontWeight: 300 },
  channelBlock: { border: "0.75px solid #c9b99a", marginBottom: 20, background: "white" },
  channelHeader: { background: "#1a1510", color: "#f5f0e8", padding: "10px 20px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" },
  channelBody: { padding: "18px 20px" },
  riskNote: { fontSize: 13, color: "#7a3b1e", fontStyle: "italic", borderTop: "0.5px solid #c9b99a", paddingTop: 10, marginTop: 10 },
  compList: { listStyle: "none", padding: 0, margin: "10px 0" },
  compListItem: { padding: "8px 0", borderBottom: "0.5px solid #ece4d2", fontSize: 14, color: "#4a3f30" },
  timeline: { margin: "18px 0" },
  timelineWeek: { display: "grid", gridTemplateColumns: "130px 1fr", borderLeft: "2px solid #c9b99a", marginBottom: 0, position: "relative" },
  weekDot: { position: "absolute", left: -7, top: 16, width: 12, height: 12, borderRadius: "50%", background: "#f5f0e8", border: "2px solid #7a3b1e" },
  weekLabel: { fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a3b1e", padding: "14px 0 14px 18px", lineHeight: 1.4 },
  weekContent: { padding: "14px 14px 14px 20px", borderBottom: "0.5px solid #ece4d2" },
  weekP: { fontSize: 13, margin: "0 0 4px", color: "#4a3f30", fontWeight: 300 },
  channelTag: { display: "inline-block", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", background: "#ece4d2", color: "#7a6f60", padding: "2px 8px", margin: "2px 3px 2px 0", border: "0.5px solid #c9b99a" },
  kpiTable: { width: "100%", borderCollapse: "collapse", fontSize: 13, margin: "14px 0" },
  kpiTh: { fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#7a6f60", textAlign: "left", padding: "8px 10px", borderBottom: "1px solid #c9b99a", background: "#ece4d2" },
  kpiTd: { padding: "9px 10px", borderBottom: "0.5px solid #ece4d2", color: "#4a3f30", verticalAlign: "top", lineHeight: 1.6 },
  moodGrid: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, margin: "18px 0" },
  moodItem: { border: "0.75px solid #c9b99a", padding: 14, background: "white" },
  moodSwatch: { height: 70, marginBottom: 10 },
  moodTitle: { fontSize: 14, color: "#1a1510", marginBottom: 4, fontStyle: "italic" },
  moodP: { fontSize: 12, color: "#7a6f60", margin: 0, lineHeight: 1.6 },
  paletteRow: { display: "flex", gap: 10, margin: "14px 0 20px", flexWrap: "wrap" },
  swatch: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 },
  swatchColor: { width: 48, height: 48, border: "0.75px solid #c9b99a" },
  swatchName: { fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a6f60", textAlign: "center", lineHeight: 1.4 },
  footer: { marginTop: 56, paddingTop: 20, borderTop: "1px solid #c9b99a", textAlign: "center", fontSize: 11, color: "#7a6f60", letterSpacing: "0.08em" },
  nav: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32, justifyContent: "center" },
  navBtn: { fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", padding: "5px 12px", border: "0.75px solid #c9b99a", background: "transparent", color: "#7a3b1e", cursor: "pointer", fontFamily: "Georgia, serif" },
  navBtnActive: { background: "#1a1510", color: "#f5f0e8", border: "0.75px solid #1a1510" },
};

const P = ({ children, style }) => <p style={{ ...styles.p, ...style }}>{children}</p>;
const H4 = ({ children }) => <div style={styles.h4}>{children}</div>;

const sections = ["positioning", "audience", "channels", "timeline", "kpis", "palette"];
const sectionLabels = ["I. Positioning", "II. Audience", "III. Channels", "IV. Timeline", "V. KPIs", "VI. Color Palette"];

export default function Memo() {
  const [active, setActive] = useState("positioning");

  return (
    <div style={styles.wrap}>
      <div style={styles.header}>
        <div style={styles.eyebrow}>Go-to-Market Memo — Confidential Draft</div>
        <div style={styles.title}>The Six Bells × The Wallach Project</div>
        <div style={styles.subtitle}>A Collaboration in Preservation and Craft</div>
        <div style={styles.meta}>Spring 2026 Launch &nbsp;·&nbsp; Chelsea Lavin</div>
      </div>

      <div style={styles.nav}>
        {sections.map((s, i) => (
          <button key={s} style={active === s ? { ...styles.navBtn, ...styles.navBtnActive } : styles.navBtn} onClick={() => setActive(s)}>{sectionLabels[i]}</button>
        ))}
      </div>

      {active === "positioning" && (
        <section style={styles.section}>
          <div style={styles.sectionLabel}>I. Positioning & Framing</div>
          <div style={styles.h2}>Launch Statement</div>
          <div style={styles.launchStatement}>
            <p style={styles.launchStatementP}>The Six Bells is proud to introduce a collection made in partnership with the Wallach Project — the organization dedicated to preserving the artistic legacy of the Wallach House of Munich, one of Europe's great emporiums of folk art and regional craft, founded in 1900 and seized by the Nazi regime in 1937. The collection revives three heritage Bavarian prints — the 12er Muster, the Herzerlmuster, and the Wild und Wald — realized in a pinafore dress, café curtains, throw pillows, ruffle napkins, scalloped placemats, a dog bed, makeup pouch, fanny pack, and potholder and oven mitt. It is an act of preservation as much as an act of living: objects made to be used, loved, and handed down, bearing a story that deserves to be told. The Wallach prints survived a century of upheaval because Josef Fromholzer kept making them. With this collection, we carry the prints and the story forward.</p>
          </div>
          <div style={styles.h3}>Strategic Framing</div>
          <P>Most product collaborations in the heritage and craft space trade on aesthetics alone, invoking tradition superficially without actually connecting to it. What distinguishes this collection is historical weight and provenance. The Wallach story gives this collection a specificity and lineage that aesthetics alone cannot capture.</P>
          <P>Six Bells also has a natural advantage because its design language is already closely aligned with the Wallach prints. The collaboration does not feel grafted on or performative; it feels arrived at.</P>
          <H4>Competitive Scan</H4>
          <ul style={styles.compList}>
            {[
              ["Lee Jeans × J.Crew", "a heritage American workwear brand repositioned through a fashion collaborator.", "Nostalgia-led and mass-market in scale; no preservation mission or cultural depth. The story is style."],
              ["Liberty London × many brands (Anthropologie, Adidas, Meri Meri)", "the most visible heritage print collaboration model in the market — licensed prints applied broadly across categories and partners.", "Ubiquity is the liability. Liberty's prints are beautiful but everywhere, which is the opposite of what Six Bells is doing. Exclusivity and story depth are the differentiators here."],
              ["The Gap × Doên", "a mainstream retailer partnering with an independent brand to bring elevated aesthetic to a broader audience.", "A successful collaboration on its own terms, but a different model entirely: reach and accessibility over depth and story."],
              ["Levi's × Target", "a 100+ item home collection spanning tabletop, furnishings, linens, and more, with prices starting at $3.", "A textbook example of brand extension mistaken for collaboration: the volume dilutes any sense of curation, the price point signals mass rather than considered, and there is no story that earns the objects."],
            ].map(([name, desc, note]) => (
              <li key={name} style={styles.compListItem}><strong>{name}</strong> — {desc} <em>{note}</em></li>
            ))}
          </ul>
          <P><strong>What Six Bells must do to stand apart:</strong> Lead with story, not style. Every caption, email, and product page should carry enough Wallach history that a customer finishes reading and feels they've learned something meaningful.</P>
        </section>
      )}

      {active === "audience" && (
        <section style={styles.section}>
          <div style={styles.sectionLabel}>II. Target Audience</div>
          <div style={styles.h2}>Who We Are Talking To</div>
          <div style={styles.audienceGrid}>
            <div style={styles.audienceCard}>
              <div style={styles.audienceCardLabel}>Segment 1</div>
              <div style={styles.audienceCardTitle}>The Six Bells Familiar</div>
              <p style={styles.audienceCardP}>Culturally omnivorous and design-literate, 35–45. They like to cook, decorate, and read. They care about where things come from and have strong opinions about interiors. Their home includes seasonal and occasion-based decor, family heirlooms, and tastefully arranged tchotchkes. When you point out an item in their home or something they're wearing, they respond with a backstory. Target through image-rich editorial across email, social, and Substack.</p>
              <p style={styles.audienceCardP}><strong>Channel approach:</strong> Reached primarily through the existing email list and organic social. On paid, targeted via lookalike audiences modeled on existing subscribers and buyers.</p>
            </div>
            <div style={styles.audienceCard}>
              <div style={styles.audienceCardLabel}>Segment 2</div>
              <div style={styles.audienceCardTitle}>The Outsider / Folk Art Collector</div>
              <p style={styles.audienceCardP}>38–58, graduate-educated, professionally adjacent to museums, galleries, or academia. Their home contains American folk and outsider art and international craft objects acquired on travel. They read the provenance before the price. They buy intentionally, keep things forever, and don't respond to urgency. They will read a 600-word product description and click through to the Wallach Project website. Reach them through cultural press and specialist Instagram accounts.</p>
              <p style={styles.audienceCardP}><strong>Channel approach:</strong> Not on the existing list. Reached through interest-based paid targeting — folk art, craft, design, antiques — and through press placements in design and cultural outlets.</p>
            </div>
            <div style={styles.audienceCard}>
              <div style={styles.audienceCardLabel}>Segment 3</div>
              <div style={styles.audienceCardTitle}>The Culturally-Engaged New Customer</div>
              <p style={styles.audienceCardP}>Jewish-American woman with German or European heritage, museum-going, intellectually engaged. She may not yet know Six Bells. She is likely to encounter the collection through editorial, earned media in cultural publications, through the Wallach Project's own channels, or word of mouth. For her, the story is primary and the objects are the beautiful outcome of the story.</p>
              <p style={styles.audienceCardP}><strong>Channel approach:</strong> Also new to Six Bells. Reached through interest-based paid targeting — Jewish cultural heritage, museum-going, history — and through cultural and Jewish press placements.</p>
            </div>
          </div>
        </section>
      )}

      {active === "channels" && (
        <section style={styles.section}>
          <div style={styles.sectionLabel}>III. Channel Plan</div>
          <div style={styles.h2}>Go-to-Market Channels</div>

          <div style={styles.channelBlock}>
            <div style={styles.channelHeader}>01 · Social — Organic (Instagram, Pinterest, Substack)</div>
            <div style={styles.channelBody}>
              <H4>Platform Focus</H4>
              <P>Instagram is the primary channel doing the atmospheric work — telling the story in fragments, driving people to the product page. Pinterest runs parallel and keeps working long after launch; well-seeded pins surface in relevant searches. Substack carries the full story, earning trust and giving press something to quote from or link to.</P>
              <H4>Pre-Launch</H4>
              <P>Announce the collaboration through story, without product. Visuals include archival images, print details, and related imagery. A dedicated Instagram Highlight collects the backstory in sequence. The three weeks leading up to launch feature one deeper print-history post per week.</P>
              <H4>Launch Week</H4>
              <P>Full campaign photography, three grid posts across launch week, Stories driving to shop. A 60–90 second Reel with the Wallach story in text. Pinterest fully seeded and linked to product pages.</P>
              <H4>Post-Launch</H4>
              <P>Use-in-life imagery, event recap content, customer reposts, and a potential creator collaboration post. Pinterest runs passively from here.</P>
              <P><strong>What great looks like:</strong> Captions long enough to mean something. A comment section where people ask questions and share their own connections to the story. Objects shown in use or graphically collaged with Wallach archival imagery to underpin how the collaboration carries the prints and story forward.</P>
              <div style={styles.riskNote}>Key risk to avoid: Treating this as a product drop. Urgency mechanics will alienate the audience and undermine the historical weight.</div>
            </div>
          </div>

          <div style={styles.channelBlock}>
            <div style={styles.channelHeader}>02 · Email / CRM</div>
            <div style={styles.channelBody}>
              <H4>List Growth</H4>
              <P>List growth for this launch is a byproduct of effective storytelling. The landing page is the primary capture mechanism throughout pre-launch, framed as "Follow the Collaboration" — triggering an email with the full Wallach story and noting the collection launch date.</P>
              <P><strong>Instagram</strong></P>
              <ul style={styles.compList}>
                <li style={styles.compListItem}><em>Organic</em> — existing followers who aren't subscribers are a meaningful unconverted audience. Link in bio and Stories point to the landing page consistently throughout pre-launch.</li>
                <li style={styles.compListItem}><em>Paid</em> — Meta amplification extends reach to lookalike audiences and targeted interest groups — folk art, Jewish cultural heritage, interiors, craft.</li>
              </ul>
              <P><strong>Substack</strong> — each pre-launch piece includes a clear link to the landing page. Substack readers who aren't email subscribers are a warm, unconverted audience.</P>
              <P><strong>The Wallach Project's community</strong> — if the Project is willing to mention the collaboration in their newsletter or owned communications, that audience arrives already warm and story-first.</P>
              <H4>Segmentation</H4>
              <P>The full list — existing buyers, existing subscribers, and new landing page sign-ups — receives the same sequence from T–4 through T–1. The list is not segmented until T–2, when two weeks of engagement data informs a fork:</P>
              <P><em>Didn't open T–4</em> — they've never seen the story or the collection. Re-engagement email at T–2: story-led, tighter than T–4, CTA to landing page from the top.</P>
              <P><em>Opened but didn't click</em> — they read the story but weren't compelled to act. Re-engagement email at T–2: product-led, one strong image, minimal copy, CTA to landing page collection preview.</P>
              <P>The full list reconvenes for the T–1 and launch sends.</P>
              <H4>Pre-Launch</H4>
              <P><strong>T–4:</strong> Collaboration announcement and the Wallach Project story. <strong>T–3:</strong> The 12er Muster print focus. <strong>T–2:</strong> The Herzerlmuster print focus. <strong>T–1:</strong> The Wild und Wald print focus. Each email ends with the collection arrival date.</P>
              <H4>Launch</H4>
              <P>Hero image, images, or gif — a brief story recap in two to three sentences, direct shop link.</P>
              <H4>Post-Launch</H4>
              <P>Use-in-life email — customer photos and testimonials, event recap content.</P>
            </div>
          </div>

          <div style={styles.channelBlock}>
            <div style={styles.channelHeader}>03 · Landing Page & CTA Strategy</div>
            <div style={styles.channelBody}>
              <H4>Pre-Launch Landing Page</H4>
              <P>One page, live from T–4. Contains the Wallach story in brief, the full collection preview (visible, not yet purchasable), the launch date, and an email capture CTA — "Follow the Collaboration." Built with anchor links to each print's dedicated section. Body copy includes a link to the Substack collaboration announcement for those who want to go deeper into the Wallach story and the thinking behind the collaboration — understated, not a CTA, just an invitation.</P>
              <H4>Email Capture & New Subscriber Flow</H4>
              <P>The primary CTA for anyone not yet on the list is "Follow the Collaboration." Upon sign-up they receive the T–4 email automatically — the collaboration announcement and the Wallach story. This email goes to the full list at T–4 and serves as the automated welcome for anyone who signs up via the landing page. New subscribers who join mid-sequence receive the welcome email upon sign-up and then merge into the live sequence from wherever it currently is. They may miss individual print emails but the welcome email provides enough context to follow along.</P>
              <H4>Email CTAs — Pre-Launch</H4>
              <P>T–4: landing page — collection preview. T–3: landing page — 12er Muster section (anchor link). T–2: landing page — Herzerlmuster section (anchor link). T–1: landing page — Wild und Wald section (anchor link); Substack deep-dive linked in body copy for those who want to go further.</P>
              <H4>Paid IG CTAs — Pre-Launch</H4>
              <P>Story-led ads target lookalike and interest-based audiences not yet on the list. CTA drives to the landing page for email capture. Ads run from T–4 through T–1 without interruption.</P>
              <H4>At Launch</H4>
              <P>The landing page becomes the product page. The shop opens. All channels — social, email, paid — redirect to the product page. Paid IG creative swaps from capture to conversion.</P>
            </div>
          </div>

          <div style={styles.channelBlock}>
            <div style={styles.channelHeader}>04 · Influencer</div>
            <div style={styles.channelBody}>
              <H4>Creator Profile</H4>
              <P>Target creators with strong taste, genuine engagement with interiors, home, and food, and an audience that skews toward people 35–55 who read, cook, and decorate deliberately. They could be existing customers or followers of the brand. Ideal accounts: (1) slow-living and interior/design creators; (2) food and tablescape creators who would naturally use the napkins and placemats in their content; (3) a small number of Jewish cultural institutions or identity creators who can engage with the Wallach story from a personal angle without it feeling exploitative.</P>
              <H4>Creators</H4>
              <P><strong>Alison Roman</strong> (@alisoneroman, 800K) — food writer, cookbook author, Brooklyn-based, half-Jewish. Already in the Six Bells orbit. High-profile but the fit is genuine.</P>
              <P><strong>Katie Merchant</strong> (@thankyou_ok, 160K IG / 15K+ Substack) — freelance creative director, stylist, and photographer. Covers cooking, interiors, flowers, and considered objects. Aesthetic overlap with Six Bells is strong.</P>
              <P><strong>Mia Swinehart</strong> (@gatherednutrition, 476K) — registered dietitian and recipe developer, currently documenting a home renovation. Large following, genuine Six Bells affinity. Less focused on the Wallach story, more suited to use-in-life and objects-in-home content.</P>
              <P><strong>Emma Apple Chozick</strong> (@emcho41, 26K) — creative consultant and design writer for Architectural Digest and Surface. Runs a video series called Surroundings about the histories and environments that shape creative lives.</P>
              <P><strong>Sarah Isenberg</strong> (@happy_tunes, 10K) — crafts, clothes, and contemporary art; social manager at Art Basel. Smaller following but highly credible and directly relevant to Segment 2. Skews slightly younger than the other creators.</P>
              <H4>Cultural Story Amplifiers</H4>
              <P>The following accounts are positioned to amplify the story rather than the product. Outreach should focus on the Wallach Project's history and preservation mission, not the collection itself. One or more of these organizations could also make for a meaningful partner or attendee at the store or inn activations.</P>
              <P><strong>Jewish Food Society</strong> (@jewishfoodsociety, 88K) — non-profit preserving and celebrating global Jewish culinary heritage. Mission directly aligned with the Wallach Project; natural story amplifier.</P>
              <P><strong>Jewish Women's Archive</strong> (@jewishwomensarchive, 38K) — institutional credibility, preservation and memory focus.</P>
              <P><strong>Museum of Jewish Heritage</strong> (@museumjewishheritage, 43K) — NY's Holocaust museum dedicated to Jewish life before, during, and after the Holocaust. Audience closely mirrors Segment 3; potential museum shop placement worth exploring.</P>
              <H4>Content Direction</H4>
              <P>The brief should be clear and intentional: share the full Wallach context upfront — the history, the seizure, the prints, what this collaboration means to Six Bells. Ask creators to engage with whatever aspect of the story resonates with them personally, whether that's the craft, the objects in their home, or the history itself. Do not assign an angle. Do not ask for a specific format. The ask is authenticity, not content.</P>
              <div style={styles.riskNote}>The Wallach story carries real historical weight. Every creator relationship should begin with a conversation, not a package. Share the context before the product. A creator who understands what they're holding and chooses to engage will produce something more meaningful than one who receives a brief cold.</div>
            </div>
          </div>

          <div style={styles.channelBlock}>
            <div style={styles.channelHeader}>05 · Owned Editorial & Earned Press</div>
            <div style={styles.channelBody}>
              <H4>Substack / Owned Editorial</H4>
              <P>Substack is the long-form home for the Wallach story. Two pieces anchor the pre-launch period: Audrey's first-person collaboration announcement at T–4, and a deep-dive on all three prints at T–1. With permission from the Wallach Project, these pieces could include Q&As and quotes from Project representatives.</P>
              <H4>Earned Media — Target Outlets & Angles</H4>
              <P><strong>Cultural/Jewish press:</strong> Tablet Magazine, Havurah Journal (havurah.art), Verklempt! — angle: the return of a nearly lost design legacy; objects as a form of cultural memory. Note: Verklempt! is a monthly print-only magazine of Jewish art and literature published by Havurah, a NYC-based collective of young Jewish artists. The Havurah Journal is their online publication.</P>
              <P><strong>Design press:</strong> Architectural Digest, Domino, Domino Home Front (Substack), House Beautiful — angle: the most interesting homegoods collaboration of the season; provenance, craft, and heritage print.</P>
              <P><strong>General lifestyle/culture:</strong> New York Times T Magazine or Styles, New York Magazine / The Cut — angle: the Wallach story as a story of survival and re-emergence; the growing market for objects with genuine historical weight.</P>
              <P><strong>Hudson Valley regional:</strong> Chronogram, Hudson Valley Magazine — angle: a Rosendale inn brings a century-old Bavarian craft story into its Hudson Valley home.</P>
              <P><strong>Independent press:</strong> Feed Me — Audrey has been featured in Emily Sundberg's Guest Lecture series; a water cooler mention would be a natural extension of that existing relationship.</P>
              <H4>Podcast</H4>
              <P><strong>Time Sensitive</strong> (Spencer Bailey) — long-form, story-driven format; the Wallach story and Audrey's relationship to it is a natural fit. Audience spans all three segments.</P>
              <P><strong>Business of Home</strong> (Dennis Scully) — active, interview-driven; reaches the design and interiors world. Better for brand awareness than direct list growth but worth pursuing in parallel.</P>
            </div>
          </div>

          <div style={styles.channelBlock}>
            <div style={styles.channelHeader}>06 · Events & Activations</div>
            <div style={styles.channelBody}>
              <H4>Brooklyn Shop — In-Store Activation</H4>
              <P>The shop is merchandized with archival Wallach House imagery. A zine telling the Wallach Project story — language drawn from the long-form Substack piece — is available free in-store and designed to travel home. The same zine ships to influencers at T–2 with a handwritten note from Audrey. Radler and/or Apfelschorle served. Customers, press, and select influencers invited. A potential speaker from the Wallach Project, the Jewish Museum, or an equivalent institution (pending approval) present for remarks and conversation.</P>
              <H4>The Feathers — Intimate Sit-Down</H4>
              <P>An intimate brunch or dinner for 10–20 guests at The Feathers. The table is set entirely with the Wallach collection. The menu features a handful of special items with Bavarian influence. Name cards showcase the three featured prints; the zine is at each place setting. Audrey makes brief remarks about why she launched the collaboration. A potential speaker from the Wallach Project, the Jewish Museum, or an equivalent institution (pending approval) present for remarks and conversation. Guests include press, cultural figures and creators, regulars, and close friends and collaborators.</P>
              <H4>Purpose</H4>
              <P>Both activations are the physical celebration and anchor of the collaboration — the moment the prints come off the screen and into the room. The objects and craft are experienced firsthand, and guests leave having learned something meaningful and carry that story home with them.</P>
              <P>Within 24–48 hours of each activation, send attendees a curated selection of event photography and invite them to share. Removes friction and increases the likelihood of posting without being prescriptive.</P>
            </div>
          </div>
        </section>
      )}

      {active === "timeline" && (
        <section style={styles.section}>
          <div style={styles.sectionLabel}>IV. Launch Timeline</div>
          <div style={styles.h2}>Week-by-Week Calendar</div>
          <div style={styles.timeline}>
            {[
              { label: "T–4", sub: "Announce", goal: "Introduce the collaboration and the Wallach story. Begin email capture.", body: "Substack: Audrey's first-person collaboration announcement — the Wallach story, why she pursued the collaboration, and what it means to her. Social: first archival image, partnership introduced, Wallach Project named, link to Six Bells landing page. Email: collaboration announcement and Wallach Project story sent to full list. Paid IG: launch one set of 3–5 story-led ads with creative variations to A/B test; drive to landing page for email capture. Allow to run and optimize through T–1 without interruption. Landing page live with collection visible but not yet purchasable. Press kit sent to Tier 1 targets under embargo. Influencer outreach begins.", tags: ["Substack", "Social", "Email", "Paid", "Press", "Influencer"] },
              { label: "T–3", sub: "12er Muster", goal: "Introduce the first print. Drive email capture.", body: "Social: 12er Muster detail and one or two products in the print, Wallach Project named. Email: 12er Muster print focus. Paid IG: ads running and optimizing. Collection arrival date included across all channels.", tags: ["Social", "Email", "Paid"] },
              { label: "T–2", sub: "Herzerlmuster", goal: "Introduce the second print. Drive email capture. Deploy engagement-based email fork.", body: "Social: Herzerlmuster detail and one or two products in the print. Email: Herzerlmuster print focus to engaged list; re-engagement send to non-openers (story-led, CTA to landing page); re-engagement send to opened-but-didn't-click (product-led, CTA to collection preview). Paid IG: ads running and optimizing. Product ships to influencers with zine and a handwritten note from Audrey/Six Bells.", tags: ["Social", "Email", "Paid", "Influencer"] },
              { label: "T–1", sub: "Wild und Wald", goal: "Introduce the third print; publish print deep-dive.", body: "Substack: single deep-dive on all three prints — their histories, what makes each distinct. Social: Wild und Wald detail and one or two products in the print. Email: Wild und Wald print focus. Paid IG: ads running and optimizing. Influencer content begins posting organically.", tags: ["Substack", "Social", "Email", "Paid"] },
              { label: "Launch", sub: "", goal: "Drive purchase; activate both locations.", body: "Shop opens. Press embargo lifts. Social: campaign photography, three to four posts across the week, Stories daily driving to shop, Reel. Pinterest fully seeded. Email: hero image, story recap, shop link. Paid IG: swap full ad set to conversion-focused creative driving to product page. Brooklyn shop activation and inn dinner at The Feathers. Influencer content continues.", tags: ["All Channels"] },
              { label: "T+1", sub: "Momentum", goal: "Keep the story moving; convert non-purchasers.", body: "Social: use-in-life imagery, activation recap content, and potential creator collaboration post. Email: use-in-life, customer photos, event recap content. Paid IG: conversion ads continue running.", tags: ["Social", "Email", "Paid"] },
            ].map(({ label, sub, goal, body, tags }) => (
              <div key={label} style={styles.timelineWeek}>
                <div style={styles.weekDot} />
                <div style={styles.weekLabel}>{label}<br /><em>{sub}</em></div>
                <div style={styles.weekContent}>
                  <p style={{ ...styles.weekP, fontWeight: 500, color: "#1a1510" }}>Goal: {goal}</p>
                  <p style={styles.weekP}>{body}</p>
                  <div>{tags.map(t => <span key={t} style={styles.channelTag}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {active === "kpis" && (
        <section style={styles.section}>
          <div style={styles.sectionLabel}>V. Goals, KPIs & Measurement</div>
          <div style={styles.h2}>Success Metrics by Channel</div>
          <table style={styles.kpiTable}>
            <thead>
              <tr>
                {["Channel", "Core Metrics", "Early Indicator", "Adjustment Trigger"].map(h => <th key={h} style={styles.kpiTh}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ["Social (Organic)", "Average saves per post: 75+ across campaign; average DMs per post: 25+; average link clicks per post: 150+; follower growth: 3–5% over campaign window.", "Save rate on T–4 announcement post. Below 50 average saves signals story is not landing — reconsider caption depth or visual approach.", "If saves are strong but link clicks are low, tighten the CTA and link-in-bio clarity. If DMs drop below baseline (~17), the content is not prompting personal connection — revisit caption tone and depth."],
                ["Paid IG", "CPL during pre-launch: $5–10; conversion rate at launch: 1–3% of ad clicks to purchase; A/B test winner identified within first two weeks.", "CPL in first 7 days. If above $10, reassess creative or audience targeting before the algorithm exits learning mode.", "If CPL is high and CTR is low, the creative is the problem. If CTR is strong but conversion is low, the landing page experience needs attention."],
                ["Email / CRM", "Open rate: 35–42% (industry benchmark for retail/lifestyle); click-through rate: 2–3%; list growth: 3–5% over pre-launch period.", "Open rate on T–4 announcement email. If below 30%, revise subject line approach for subsequent sends.", "If click-through is strong but purchase conversion is low, the product page experience needs attention. If list growth is below 2%, reassess paid IG targeting and landing page framing."],
                ["Influencer", "Quality of content produced; average engagement rate of 4%+ on attendee and creator posts; inbound traffic from creator links.", "Creator content quality before launch — does it feel authentic? If not, do not repost.", "If creator content drives no measurable site traffic, deprioritize gifting and redirect resources to press."],
                ["Press / Editorial", "3–5 placements across target outlets; at least one Tier 1 press placement (Tablet, NYT, New York Magazine).", "Embargo response rate at T–4. If fewer than 30% of Tier 1 targets respond, follow up with a more personal pitch angle.", "If cultural press runs but design press does not, lead follow-up pitches with product photography rather than the story."],
                ["Events", "8–12 pieces of content across posts and Stories from attendees across both activations; average engagement rate of 4%+ on those posts.", "RSVPs two weeks before. If fewer than 60% of invited guests have confirmed, follow up personally — prioritize press and cultural figures first.", "If key targets decline entirely, reconsider the date or thoughtfully expand the guest list outreach."],
                ["Overall / Revenue", "60–70% sell-through within 60 days of launch; ratio of first-time to returning buyers tracked during the campaign window.", "First 48 hours of sales vs. any prior collection launches if data is available.", "If sales in the first 48 hours are significantly below expectation, bring the T+1 use-in-life email forward to maintain momentum. If sell-through is strong on apparel but weak on home goods, consider a use-in-life editorial guide. If the majority of sales are coming from existing customers, revisit paid targeting and press strategy."],
              ].map(([ch, metrics, early, trigger], i) => (
                <tr key={ch}>
                  <td style={{ ...styles.kpiTd, background: i % 2 === 0 ? "rgba(255,255,255,0.5)" : "transparent", fontWeight: 500, color: "#1a1510" }}>{ch}</td>
                  <td style={{ ...styles.kpiTd, background: i % 2 === 0 ? "rgba(255,255,255,0.5)" : "transparent" }}>{metrics}</td>
                  <td style={{ ...styles.kpiTd, background: i % 2 === 0 ? "rgba(255,255,255,0.5)" : "transparent" }}>{early}</td>
                  <td style={{ ...styles.kpiTd, background: i % 2 === 0 ? "rgba(255,255,255,0.5)" : "transparent" }}>{trigger}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {active === "moodboard" && (
        <section style={styles.section}>
          <div style={styles.sectionLabel}>VI. Campaign Mood Board</div>
          <div style={styles.h2}>Photoshoot Direction</div>
          <P>The campaign imagery should feel like it was found, not made. No model-facing-camera shots. No white studio. The world of these objects is specific: a 19th-century German folk print meeting a Hudson Valley stone house. The light is morning or late afternoon. The color palette is earned, not styled.</P>
          <H4>Color Palette — Shoot Direction</H4>
          <div style={styles.paletteRow}>
            {[["#c5b49a","Linen & Oatmeal"],["#8b4513","Rust & Terracotta"],["#2f4f2f","Forest Green"],["#1a1510","Ink Black"],["#e8dcc8","Raw Parchment"],["#b5a06e","Mustard & Ochre"],["#8b7355","Warm Walnut"]].map(([c, n]) => (
              <div key={c} style={styles.swatch}>
                <div style={{ ...styles.swatchColor, background: c }} />
                <div style={styles.swatchName}>{n}</div>
              </div>
            ))}
          </div>
          <div style={styles.moodGrid}>
            {[
              ["#c5b49a","#e8dcc8","Still Life — Morning Table","Reference: Laura Letinsky tabletop photography. Uncleared breakfast table with the placemats and napkins. Morning light through the café curtains. Grain in the image. No styling that looks like styling."],
              ["#8b4513","#c5b49a","The Curtains in a Stone Room","Reference: World of Interiors location shoots in Austrian and German farmhouses. The café curtains hung in the inn's tavern windows, stone wall behind, afternoon crosslight."],
              ["#2f4f2f","#8b7355","Wild und Wald in the Field","Reference: Old hunting and field prints; sporting-life photography from Town & Country archives. A dog in the dog bed, or a dog bed in a field. The hunting print brought outside into the landscape it depicts."],
              ["#8b4513","#1a1510","The Archival Moment","One to two shots that integrate the Wallach archive directly — a vintage print or photograph laid flat next to a current object. Past and present in the same frame."],
              ["#e8dcc8","#b5a06e","The Pinafore in Motion","The pinafore dress worn by someone actually doing something — cooking, gardening, carrying something. No one standing still and looking at the camera."],
              ["#c5b49a","#2f4f2f","The Herzerlmuster Close-Up","The heart-and-flower print at 1:1 scale, shot with a tilt-shift or medium-format lens. Close enough to see the texture of the fabric. The print as an object of beauty in itself."],
            ].map(([c1, c2, title, desc]) => (
              <div key={title} style={styles.moodItem}>
                <div style={{ ...styles.moodSwatch, background: `linear-gradient(135deg, ${c1}, ${c2})` }} />
                <div style={styles.moodTitle}>{title}</div>
                <p style={styles.moodP}>{desc}</p>
              </div>
            ))}
          </div>
          <H4>Shoot Notes</H4>
          <P><strong>Location:</strong> The Feathers tavern and inn rooms at The Six Bells, Rosendale. Possibly one exterior location creek-side for the Wild und Wald objects. Avoid generic Hudson Valley "magic hour" clichés.</P>
          <P><strong>Photographer direction:</strong> Shoot on medium format if budget allows; film for archival comparison shots. No overly warm filters. The prints are already saturated; let the photography be a little cooler and quieter than you think it should be.</P>
          <P><strong>Styling:</strong> Minimal. Objects do the work. No additional props that compete. One or two books, one simple vessel. The styling should feel like someone lives there, not like a shoot happened there.</P>
        </section>
      )}

      {active === "palette" && (
        <section style={styles.section}>
          <div style={styles.sectionLabel}>VII. Color Palette</div>
          <div style={styles.h2}>The Wallach Prints — Color System</div>

          {[
            { label: "12er Muster", name: "Geometric dot-grid", colors: [["#EDE8DC","Ecru"],["#B8924A","Weathered ochre"],["#6B8F4E","Sage green"],["#2F5C30","Forest green"],["#9B3030","Barn red"],["#3D5A8A","Slate blue"],["#7B6B9E","Periwinkle"]] },
            { label: "Herzerlmuster", name: "Hearts & florals", colors: [["#EDE8DC","Ecru"],["#C0392B","Folk red"],["#6B9EC4","Cornflower blue"]] },
            { label: "Wild und Wald", name: "Forest scenes", colors: [["#EDE8DC","Ecru"],["#3D4A7A","Indigo blue"],["#8B2635","Maroon"],["#1C3A1E","Deep hunter"]] },
          ].map(({ label, name, colors }) => (
            <div key={label} style={{ marginBottom: 32 }}>
              <div style={styles.sectionLabel}>{label}</div>
              <div style={{ fontSize: 16, fontStyle: "italic", color: "#4a3f30", marginBottom: 14 }}>{name}</div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {colors.map(([hex, cname]) => (
                  <div key={hex} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ width: 72, height: 72, background: hex, border: "0.75px solid #c9b99a" }} />
                    <div style={{ fontSize: 11, color: "#4a3f30", width: 72, lineHeight: 1.4 }}>{cname}</div>
                    <div style={{ fontSize: 10, color: "#7a6f60", fontFamily: "monospace" }}>{hex}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ borderTop: "0.75px solid #c9b99a", paddingTop: 24, marginTop: 8 }}>
            <H4>Hero Palette</H4>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", margin: "14px 0 28px" }}>
              {[["#B8924A","Weathered ochre"],["#6B9EC4","Cornflower blue"],["#8B2635","Maroon"],["#EDE8DC","Ecru"],["#1C3A1E","Deep hunter"]].map(([hex, cname]) => (
                <div key={hex} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ width: 90, height: 90, background: hex, border: "0.75px solid #c9b99a" }} />
                  <div style={{ fontSize: 12, color: "#4a3f30", width: 90, lineHeight: 1.4 }}>{cname}</div>
                  <div style={{ fontSize: 10, color: "#7a6f60", fontFamily: "monospace" }}>{hex}</div>
                </div>
              ))}
            </div>
          </div>

          <H4>Application Notes</H4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 14 }}>
            {[
              ["IG grid posts", "One print, one color story", "Each print introduces its full color range across pre-launch posts. 12er Muster: weathered ochre, sage green, forest green, barn red, slate blue — on ecru. Herzerlmuster: folk red and cornflower blue — on ecru. Wild und Wald: maroon, deep hunter, indigo blue — on ecru. Broad campaign and archival graphics introduce cornflower blue as the campaign's consistent through-line. Text always in ecru or white.", ["#EDE8DC","#B8924A","#C0392B","#6B9EC4","#8B2635","#1C3A1E"]],
              ["IG Stories", "Bold & full-bleed", "Full-bleed backgrounds in maroon, deep hunter, or ochre for print-specific story moments. Cornflower blue for broad campaign and archival story content — announcement graphics, collaboration story frames, and any content not tied to a specific print. Text in ecru or white throughout.", ["#8B2635","#1C3A1E","#B8924A","#6B9EC4","#EDE8DC"]],
              ["Zine / printed matter", "Restrained with a thread", "Ecru as the paper ground. Maroon or deep hunter as the primary ink color per spread. Cornflower blue appears as a consistent accent — a rule, a section marker, a detail — tying the zine to the broader campaign without competing with the prints.", ["#EDE8DC","#8B2635","#1C3A1E","#6B9EC4"]],
              ["Landing page / web experience", "A distinct departure", "Ecru as the page background. Deep hunter for headings, maroon for section dividers. Cornflower blue takes structural prominence — navigation header, Herzerlmuster section background, and the Follow the Collaboration CTA — signaling this is distinct from the Six Bells website. Print patterns as decorative texture only.", ["#EDE8DC","#1C3A1E","#8B2635","#6B9EC4"]],
            ].map(([applabel, title, desc, dots]) => (
              <div key={applabel} style={{ background: "white", border: "0.75px solid #c9b99a", padding: "18px 20px" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#7a6f60", marginBottom: 6 }}>{applabel}</div>
                <div style={{ fontSize: 15, fontStyle: "italic", color: "#1a1510", marginBottom: 8 }}>{title}</div>
                <p style={{ fontSize: 13, color: "#4a3f30", lineHeight: 1.7, fontWeight: 300, margin: "0 0 10px" }}>{desc}</p>
                <div style={{ display: "flex", gap: 6 }}>
                  {dots.map(hex => <div key={hex} style={{ width: 18, height: 18, borderRadius: "50%", background: hex, border: "0.5px solid #c9b99a" }} />)}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div style={styles.ornament}>— ✦ —</div>
      <div style={styles.footer}>The Six Bells × The Wallach Project &nbsp;·&nbsp; Spring 2026 &nbsp;·&nbsp; Chelsea Lavin</div>
    </div>
  );
}
