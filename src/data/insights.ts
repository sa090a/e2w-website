import { Insight } from '@/lib/types';

const insights: Insight[] = [
  {
    slug: 'brand-feel-inevitable',
    title: 'What makes a brand feel inevitable',
    tagline: 'On the difference between a brand that looks expensive and one that looks correct.',
    category: 'Marketing',
    readTime: '6 min read',
    publishedAt: '2025-09-18',
    publishedLabel: 'September 2025',
    author: 'Shaleem Anjum',
    authorTitle: 'CEO, The E2W Company',
    grad: 'linear-gradient(135deg, #1a0a2a 0%, #2a1455 30%, #5028a0 60%, #b890e8 100%)',
    art: 'orbits',
    featured: true,
    excerpt: `There is a quality some brands have that the rest don't — a sense that the form, voice, and posture of the thing could not have been anything else. We call this inevitability. It's not the same as polish.`,
    sections: [
      {
        kind: 'p',
        text: `There is a quality some brands have that the rest don't. A sense that the form, voice, and posture of the thing could not have been anything else. We call this *inevitability*. It is not the same as polish. Many brands look expensive and still feel arbitrary — the typeface could have been one of fifty others, the photography could have been swapped without consequence, the tagline could have been written by any of the three competing agencies who pitched it. They are not inevitable. They are merely competent.`,
      },
      {
        kind: 'p',
        text: `Inevitability emerges when every decision is downstream of a single, defensible idea about what the brand is for. Not what it sells — *what it is for.* The clearest brands have answered this question with such conviction that the visual, verbal, and product decisions feel less like creative choices and more like consequences.`,
      },
      {
        kind: 'h2',
        text: 'Three failure modes',
      },
      {
        kind: 'p',
        text: `The most common is **brand by survey**. The team interviews customers, the team interviews internal stakeholders, the team interviews the founder's mother. The result is a positioning statement that no one disagrees with, which is also the problem. Brands that no one disagrees with rarely make anyone feel anything.`,
      },
      {
        kind: 'p',
        text: `The second is **brand by aesthetic**. The visual identity arrives first — a beautiful logo, a sophisticated palette, a typographic system that wins a design award — and the meaning gets backfilled. This produces brands that photograph beautifully and operate poorly. The first time the marketing team has to write a long email or run a webinar, the system breaks.`,
      },
      {
        kind: 'p',
        text: `The third is **brand by reaction**. The category is dominated by three incumbents, and the new entrant defines itself as the negation of them. *Not corporate. Not boring. Not slow.* This works for about six months. Then a competitor enters who is also "not corporate, not boring, not slow," and the entire positioning collapses into a sea of sameness.`,
      },
      {
        kind: 'h2',
        text: 'A simpler question',
      },
      {
        kind: 'p',
        text: `We have a question we ask early in any brand engagement, and it shortcuts most of these failure modes. *If your product disappeared tomorrow, what would your customers lose access to that they cannot easily replace?* Not the product. The thing the product gives them access to.`,
      },
      {
        kind: 'p',
        text: `The answer is usually not the answer the founder thinks it is. Once you have it, every brand decision becomes clearer. The voice writes itself. The visual system has to do less work, because the meaning is already there. The brand becomes inevitable — not because we made it that way, but because we got out of the way.`,
      },
      {
        kind: 'pullquote',
        text: 'Inevitability emerges when every decision is downstream of a single, defensible idea about what the brand is for. Not what it sells — what it is for.',
      },
      {
        kind: 'h2',
        text: 'A practical test',
      },
      {
        kind: 'p',
        text: `When we are reviewing our own work for inevitability, we run a deletion test. We pick any individual element — a colour, a phrase, a photograph, a section heading on the website — and ask, *if we removed this and replaced it with the next most reasonable thing, would the brand still be itself?* If the answer is yes, the element is doing decorative work. If the answer is no, the element is doing structural work.`,
      },
      {
        kind: 'p',
        text: `Brands that feel inevitable are mostly structural elements held together by a small amount of decoration. Brands that feel forgettable are the inverse.`,
      },
    ],
  },
  {
    slug: 'building-for-three-continents',
    title: 'Notes on building for three continents',
    tagline: 'What we have learned, two years into running a studio across Boulder, Manchester, and Islamabad.',
    category: 'Practice',
    readTime: '8 min read',
    publishedAt: '2025-08-22',
    publishedLabel: 'August 2025',
    author: 'Shamain Anjum',
    authorTitle: 'CTO, The E2W Company',
    grad: 'linear-gradient(135deg, #001824 0%, #003855 30%, #006b8c 65%, #5fc8d8 100%)',
    art: 'curves',
    featured: false,
    excerpt: `When people hear "distributed studio" they imagine a coordination problem. It is not really a coordination problem. It is a writing problem.`,
    sections: [
      {
        kind: 'p',
        text: `When people hear "distributed studio" they imagine a coordination problem. It is not really a coordination problem. It is a writing problem. Almost every difficulty we have encountered running across three continents has been resolved by writing something down better.`,
      },
      {
        kind: 'h2',
        text: 'The time zones are the easy part',
      },
      {
        kind: 'p',
        text: `Boulder is GMT-7. Manchester is GMT+0 (or +1 in summer). Islamabad is GMT+5. There is a four-hour overlap window where all three studios are awake — roughly 9am to 1pm Mountain Time. We don't try to expand it. We use it for the things that genuinely need everyone, and we move everything else to writing.`,
      },
      {
        kind: 'p',
        text: `The hidden cost of synchronous meetings is not the meeting itself. It is the writing that doesn't happen because the meeting absorbs the energy that would have gone into the writing. Distributed studios that try to be fully synchronous burn out their best people. Distributed studios that lean on writing scale calmly.`,
      },
      {
        kind: 'h2',
        text: 'What writing well does',
      },
      {
        kind: 'p',
        text: `Three things. First, it forces clarity. You cannot ramble in writing the way you can in speech. By the time something is written down well, you understand it better than you would have if you had only spoken about it. Second, it survives the time gap. A decision documented in a doc at 5pm Islamabad time is readable by Boulder at 6am the next day, without anyone losing sleep. Third, it scales. New people joining the team can read the project's history and catch up; they cannot watch every old meeting.`,
      },
      {
        kind: 'pullquote',
        text: 'Distributed studios that try to be fully synchronous burn out their best people. Distributed studios that lean on writing scale calmly.',
      },
      {
        kind: 'h2',
        text: 'What we got wrong',
      },
      {
        kind: 'p',
        text: `For about the first year, we tried to run things as if the three studios were one studio. Shared standups, shared retros, shared everything. It mostly didn't work. The studios are not one studio. They are three studios that collaborate on a shared portfolio. Once we accepted that, things settled. Each studio has its own cadence, its own internal rituals, its own way of working. The shared layer is thinner than we expected. The local layer is thicker than we expected.`,
      },
      {
        kind: 'h2',
        text: 'The asymmetry that matters most',
      },
      {
        kind: 'p',
        text: `It is not the time zone. It is the language asymmetry. We work in English across all three studios, but English is a first language for about half the team. We have learned to write more plainly, in shorter sentences, with fewer idioms. This has made our client-facing writing better too. Plainness is not a constraint we accepted reluctantly. It is, in retrospect, an improvement.`,
      },
      {
        kind: 'h2',
        text: 'What we would tell ourselves two years ago',
      },
      {
        kind: 'p',
        text: `Three things. *Hire the writer first.* Not the marketer who writes — the writer who can also do the work. Their fingerprints will be on everything: briefs, proposals, internal comms, client emails, the website. *Resist the urge to over-process.* Most coordination problems do not need a new tool. They need someone to write a one-page note clarifying the decision. *Treat the local layer as the unit.* The team in Manchester is a team. The team in Islamabad is a team. The team in Boulder is a team. The studio is the loose federation of the three.`,
      },
      {
        kind: 'p',
        text: `Most of what is written about distributed work assumes the unit is the individual contributor. In our experience, the unit is the studio. Get that right and most of the harder problems become easier.`,
      },
    ],
  },
  {
    slug: 'architecture-of-web-performance',
    title: 'The architecture of web performance',
    tagline: 'Why fast websites are not built by optimising slow ones — and what we do instead.',
    category: 'Engineering',
    readTime: '7 min read',
    publishedAt: '2025-07-04',
    publishedLabel: 'July 2025',
    author: 'Shamain Anjum',
    authorTitle: 'CTO, The E2W Company',
    grad: 'linear-gradient(135deg, #1a1410 0%, #3a2818 30%, #6a5040 60%, #c9a878 100%)',
    art: 'mountains',
    featured: false,
    excerpt: `The first thing we tell clients who want to speed up their site: stop trying to speed it up. The site is slow because its architecture allows it to be slow.`,
    sections: [
      {
        kind: 'p',
        text: `The first thing we tell clients who want to speed up their site is to stop trying to speed it up. The site is slow because its architecture allows it to be slow. Optimising the JavaScript bundle, lazy-loading the images, deferring the third-party scripts — all of these help, but only at the margins. The page is fundamentally heavy and you cannot make a fundamentally heavy thing fast.`,
      },
      {
        kind: 'p',
        text: `Fast websites are built by deciding, at the start, that the site will be fast. Then every subsequent decision is filtered through that constraint. This is closer to architecture than to optimisation.`,
      },
      {
        kind: 'h2',
        text: 'The three sources of weight',
      },
      {
        kind: 'p',
        text: `Almost every slow site is slow for the same three reasons. **Images that are larger than they need to be**, **JavaScript that runs before the user can interact**, and **third-party scripts that load synchronously**. In our experience these account for somewhere around 80% of all front-end performance debt.`,
      },
      {
        kind: 'p',
        text: `Images are easy to talk about and hard to solve. Modern formats (AVIF, WebP) help. Responsive sizing helps. Lazy loading helps. But the largest gains come from cropping more aggressively, using fewer images, and accepting that a photograph that is 1200px wide does not need to be served as a 3000px file. We see this every project.`,
      },
      {
        kind: 'p',
        text: `JavaScript is harder because it has become culturally invisible. Every component "needs" client-side state. Every page "needs" a router. Every team "needs" their preferred framework. Most pages on most websites need none of those things. They need to render server-side and load no JavaScript at all.`,
      },
      {
        kind: 'pullquote',
        text: 'Fast websites are built by deciding, at the start, that the site will be fast. Then every subsequent decision is filtered through that constraint.',
      },
      {
        kind: 'h2',
        text: 'What we do',
      },
      {
        kind: 'p',
        text: `Our default architecture for marketing sites is static HTML with the smallest amount of JavaScript necessary, served from a CDN. No framework on the page. No client-side router. No "isomorphic" anything. The site is a folder of HTML files. Each one is what it appears to be.`,
      },
      {
        kind: 'p',
        text: `For web applications it is different. There the framework earns its weight because the application is genuinely interactive. But even there, we draw a hard line between the marketing surface (static, fast) and the application surface (client-rendered, behind a login). The user who is visiting your homepage should never download your application's JavaScript bundle.`,
      },
      {
        kind: 'h2',
        text: 'The unspoken metric',
      },
      {
        kind: 'p',
        text: `Lighthouse scores are useful but they measure the wrong thing. What we actually care about is the time between a user clicking your URL and the page becoming useful to them. On a mid-tier Android phone over a 3G connection, in the markets we operate in. That number, in our experience, is the difference between a site that converts and a site that doesn't. It is rarely the same as the desktop Lighthouse score.`,
      },
      {
        kind: 'h2',
        text: 'The cheapest thing to fix',
      },
      {
        kind: 'p',
        text: `If we have to pick one performance lever for clients who can only afford one — pick the hero image. The largest image visible on first paint is usually the largest single contributor to load time. Compress it harder than feels comfortable. Crop it tighter. Then revisit it once a quarter. It will drift back to too large; everything drifts back to too large.`,
      },
      {
        kind: 'p',
        text: `Performance is not a feature you add. It is a posture you maintain.`,
      },
    ],
  },
];

export default insights;
