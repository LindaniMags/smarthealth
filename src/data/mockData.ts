import { Article, Source, Category } from "@/types";

export const mockSources: Source[] = [
  {
    id: "1",
    name: "TechCrunch",
    domain: "techcrunch.com",
    logoUrl: "/logos/techcrunch.png",
    description: "The leading technology startup news source",
    country: "US",
    credibilityScore: 85,
  },
  {
    id: "2",
    name: "BBC News",
    domain: "bbc.com",
    logoUrl: "/logos/bbc.png",
    description: "British Broadcasting Corporation",
    country: "UK",
    credibilityScore: 92,
  },
  {
    id: "3",
    name: "Reuters",
    domain: "reuters.com",
    logoUrl: "/logos/reuters.png",
    description: "International news organization",
    country: "UK",
    credibilityScore: 94,
  },
  {
    id: "4",
    name: "The Guardian",
    domain: "theguardian.com",
    logoUrl: "/logos/guardian.png",
    description: "British daily newspaper",
    country: "UK",
    credibilityScore: 88,
  },
  {
    id: "5",
    name: "CNN",
    domain: "cnn.com",
    logoUrl: "/logos/cnn.png",
    description: "Cable News Network",
    country: "US",
    credibilityScore: 82,
  },
  {
    id: "6",
    name: "Associated Press",
    domain: "apnews.com",
    logoUrl: "/logos/ap.png",
    description: "American nonprofit news agency",
    country: "US",
    credibilityScore: 96,
  },
];

export const mockCategories: Category[] = [
  {
    id: "1",
    name: "Politics",
    slug: "politics",
    icon: "🏛️",
    color: "bg-blue-500",
    description: "Political news and government affairs",
  },
  {
    id: "2",
    name: "Technology",
    slug: "technology",
    icon: "💻",
    color: "bg-purple-500",
    description: "Technology and innovation news",
  },
  {
    id: "3",
    name: "Business",
    slug: "business",
    icon: "💼",
    color: "bg-green-500",
    description: "Business and financial news",
  },
  {
    id: "4",
    name: "Science",
    slug: "science",
    icon: "🔬",
    color: "bg-teal-500",
    description: "Scientific discoveries and research",
  },
  {
    id: "5",
    name: "Sports",
    slug: "sports",
    icon: "⚽",
    color: "bg-orange-500",
    description: "Sports news and updates",
  },
  {
    id: "6",
    name: "Health",
    slug: "health",
    icon: "🏥",
    color: "bg-red-500",
    description: "Health and medical news",
  },
  {
    id: "7",
    name: "Entertainment",
    slug: "entertainment",
    icon: "🎬",
    color: "bg-pink-500",
    description: "Entertainment and celebrity news",
  },
  {
    id: "8",
    name: "Environment",
    slug: "environment",
    icon: "🌍",
    color: "bg-emerald-500",
    description: "Environmental and climate news",
  },
];

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "AI Revolution: New ChatGPT Update Changes Everything",
    excerpt:
      "OpenAI announces major improvements to ChatGPT with enhanced reasoning capabilities and multi-modal features that could transform how we interact with AI.",
    content: `OpenAI has unveiled its most significant update to ChatGPT yet, introducing revolutionary features that promise to change the landscape of artificial intelligence interaction. The new version includes enhanced reasoning capabilities, improved multi-modal processing, and a more intuitive user interface.

The update introduces several groundbreaking features:

**Enhanced Reasoning**: The new model demonstrates significantly improved logical reasoning and problem-solving capabilities, making it more reliable for complex tasks and professional applications.

**Multi-Modal Processing**: Users can now seamlessly interact with text, images, and audio in a single conversation, opening up new possibilities for creative and professional workflows.

**Improved Context Understanding**: The model now maintains better context over longer conversations and can reference previous discussions more accurately.

**Professional Integration**: New API endpoints and enterprise features make it easier for businesses to integrate ChatGPT into their existing workflows and systems.

Industry experts are calling this update a "game changer" for the AI industry, with potential applications spanning from education and healthcare to creative industries and software development. The enhanced capabilities are expected to accelerate AI adoption across various sectors.

The update is being rolled out gradually to users worldwide, with premium subscribers getting early access to the new features. OpenAI has also announced plans for additional updates throughout the year, focusing on safety, reliability, and user experience improvements.`,
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    publishedAt: new Date("2025-01-15T08:00:00Z"),
    author: "Sarah Chen",
    source: mockSources[0],
    category: mockCategories[1],
    tags: ["AI", "ChatGPT", "OpenAI", "Technology"],
    readTime: 4,
  },
  {
    id: "2",
    title: "Climate Summit Reaches Historic Agreement on Carbon Emissions",
    excerpt:
      "World leaders sign unprecedented climate accord with binding commitments to reduce global carbon emissions by 60% within the next decade.",
    content: `In a landmark moment for global climate action, representatives from 195 countries have signed a historic agreement at the International Climate Summit, committing to unprecedented reductions in carbon emissions and a coordinated response to climate change.

**Key Commitments:**

**Emission Reductions**: All signatory nations have agreed to reduce carbon emissions by 60% from 2020 levels by 2035, with interim targets of 30% by 2030.

**Renewable Energy**: Countries commit to generating at least 80% of their electricity from renewable sources by 2035, with developed nations leading the transition.

**Financial Support**: Developed countries pledge $500 billion annually in climate finance to help developing nations transition to clean energy and adapt to climate impacts.

**Technology Sharing**: A new global framework for sharing clean energy technologies and innovations, removing barriers and accelerating deployment worldwide.

**Accountability Measures**: Regular monitoring and reporting mechanisms with independent verification of progress toward emission targets.

The agreement goes beyond previous climate accords by including legally binding commitments and automatic consequences for countries that fail to meet their targets. This represents a significant shift from the voluntary nature of previous international climate agreements.

Environmental groups have praised the accord as "the most ambitious climate agreement in history," while business leaders express optimism about the clarity it provides for long-term investment planning in clean technologies.

The agreement will officially take effect in January 2026, giving countries time to develop detailed implementation plans and secure necessary legislative approvals.`,
    imageUrl:
      // "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&h=400&fit=crop",
      "/image1.jpg",

    publishedAt: new Date("2025-01-14T14:30:00Z"),
    author: "Marcus Thompson",
    source: mockSources[1],
    category: mockCategories[7],
    tags: ["Climate", "Environment", "Politics", "Global"],
    readTime: 6,
  },
  {
    id: "3",
    title: "Stock Market Hits Record High as Tech Sector Surges",
    excerpt:
      "Major indices reach all-time highs driven by strong earnings from technology companies and optimistic economic forecasts.",
    content: `The stock market achieved new record highs today as major technology companies reported better-than-expected earnings and positive economic indicators boosted investor confidence across all sectors.

**Market Performance:**
- S&P 500 closed up 2.1% at a record 6,247 points
- NASDAQ gained 3.2%, reaching a new all-time high
- Dow Jones Industrial Average rose 1.8%

**Technology Sector Leadership:**
Several major tech companies drove the rally with exceptional quarterly results:

**Apple** reported revenue growth of 15% year-over-year, driven by strong iPhone and services performance. The company also announced new AI initiatives that excited investors.

**Microsoft** exceeded expectations with 22% growth in cloud services revenue, demonstrating the continued strength of the digital transformation trend.

**NVIDIA** continued its impressive run with data center revenue up 35% quarter-over-quarter, reflecting ongoing AI infrastructure demand.

**Economic Indicators:**
The positive market sentiment was reinforced by strong economic data:
- Unemployment rate fell to 3.2%, the lowest in two years
- Consumer confidence index reached a 10-month high
- Manufacturing activity showed signs of recovery

**Analyst Outlook:**
Financial analysts are cautiously optimistic about the market's trajectory, citing several positive factors:
- Strong corporate earnings growth
- Stabilizing inflation rates
- Continued innovation in technology sectors
- Improving global economic conditions

However, experts also warn of potential risks including geopolitical tensions and the possibility of interest rate changes that could impact market dynamics in the coming months.`,
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    publishedAt: new Date("2025-01-14T16:45:00Z"),
    author: "Jennifer Walsh",
    source: mockSources[2],
    category: mockCategories[2],
    tags: ["Stock Market", "Technology", "Economy", "Earnings"],
    readTime: 5,
  },
  {
    id: "4",
    title: "Breakthrough in Quantum Computing Promises Revolutionary Changes",
    excerpt:
      "Scientists achieve quantum supremacy milestone with new 1000-qubit processor that could revolutionize computing, cryptography, and scientific research.",
    content: `Researchers at the International Quantum Research Institute have announced a groundbreaking achievement in quantum computing, successfully demonstrating quantum supremacy with their new 1000-qubit quantum processor, marking a significant milestone in the field.

**The Breakthrough:**
The new quantum processor, called "QuantumLeap-1000," has successfully solved complex mathematical problems that would take classical supercomputers thousands of years to complete, demonstrating clear quantum advantage across multiple problem domains.

**Key Achievements:**
- **Scale**: 1000 stable qubits with 99.9% fidelity
- **Coherence**: Maintained quantum states for unprecedented durations
- **Error Correction**: Advanced error correction significantly reduces computational errors
- **Speed**: Solved specific problems 10 million times faster than classical computers

**Revolutionary Applications:**
The breakthrough opens doors to numerous applications:

**Drug Discovery**: Quantum simulations could accelerate the development of new medications by modeling molecular interactions with unprecedented accuracy.

**Cryptography**: Current encryption methods may become obsolete, necessitating new quantum-resistant security protocols.

**Financial Modeling**: Complex financial risk calculations and portfolio optimization could be performed in real-time.

**Climate Modeling**: More accurate climate predictions through detailed atmospheric and oceanic simulations.

**Artificial Intelligence**: Quantum machine learning algorithms could dramatically improve AI capabilities.

**Industry Impact:**
Major technology companies are already investing heavily in quantum applications:
- IBM plans to integrate quantum processors into cloud services
- Google is developing quantum AI algorithms
- Amazon is building quantum networking infrastructure

**Challenges Ahead:**
Despite the breakthrough, significant challenges remain:
- Quantum computers require extremely cold operating temperatures
- Specialized programming languages and algorithms need development
- High costs limit accessibility to research institutions and large corporations

The research team expects practical quantum applications to emerge within the next 5-10 years, potentially transforming industries from healthcare to finance.`,
    imageUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
    publishedAt: new Date("2025-01-13T11:20:00Z"),
    author: "Dr. Alan Quantum",
    source: mockSources[3],
    category: mockCategories[3],
    tags: ["Quantum Computing", "Science", "Technology", "Research"],
    readTime: 7,
  },
  {
    id: "5",
    title: "Major League Championship Finals Set Record Viewership",
    excerpt:
      "The championship game attracted over 200 million viewers worldwide, becoming the most-watched sporting event in television history.",
    content: `Last night's championship final shattered all previous viewership records, with over 200 million people worldwide tuning in to watch the thrilling conclusion to one of the most competitive seasons in sports history.

**Record-Breaking Numbers:**
- **Global Viewership**: 203.7 million viewers across all platforms
- **Digital Streaming**: 45% of viewers watched via streaming services
- **Social Media**: Over 500 million social media interactions during the game
- **International Reach**: Broadcast in 195 countries and 40 languages

**The Game:**
The championship lived up to its hype with a nail-biting finish that went into overtime. Key moments included:
- A stunning comeback in the fourth quarter
- Multiple lead changes in the final minutes
- Game-winning play with just 3 seconds remaining
- Outstanding performances from both teams' star players

**Technology Integration:**
The broadcast showcased several innovative technologies:
- **AR Graphics**: Real-time augmented reality statistics and replays
- **Multi-Angle Cameras**: Viewers could choose from 12 different camera angles
- **Interactive Features**: Real-time polls and statistics for streaming viewers
- **4K/8K Coverage**: Ultra-high-definition viewing options

**Economic Impact:**
The event generated significant economic activity:
- $2.3 billion in total economic impact for the host city
- 30-second commercials sold for $8 million each
- Merchandise sales increased by 400% during the game
- Tourism boost expected to continue for months

**Cultural Phenomenon:**
Beyond sports, the championship became a cultural moment:
- Celebrity attendance included A-list actors, musicians, and politicians
- Halftime show featured surprise guest appearances
- Social media trends dominated globally for 48 hours
- Charitable initiatives raised $50 million for local communities

**Future Implications:**
The success of this championship is expected to influence future sports broadcasting:
- Increased investment in streaming technology
- Enhanced interactive viewing experiences
- Greater focus on global audience engagement
- Innovation in sports presentation and storytelling

League officials announced plans to expand international markets and invest in new technologies to build on this momentum for next season.`,
    imageUrl:
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&h=400&fit=crop",
    publishedAt: new Date("2025-01-13T22:15:00Z"),
    author: "Mike Rodriguez",
    source: mockSources[4],
    category: mockCategories[4],
    tags: ["Sports", "Championship", "Television", "Records"],
    readTime: 6,
  },
  {
    id: "6",
    title: "New Medical Treatment Shows Promise for Alzheimer's Disease",
    excerpt:
      "Clinical trials reveal that an innovative gene therapy approach could potentially slow or reverse the progression of Alzheimer's disease.",
    content: `Researchers at the Global Medical Research Institute have announced promising results from Phase III clinical trials of a revolutionary gene therapy treatment for Alzheimer's disease, offering hope to millions of patients and families affected by this devastating condition.

**Clinical Trial Results:**
The study, involving 2,400 patients across 50 medical centers worldwide, showed remarkable outcomes:
- **Cognitive Function**: 68% of patients showed improved or stabilized cognitive function
- **Disease Progression**: Treatment slowed disease progression by an average of 75%
- **Quality of Life**: Significant improvements in daily living activities
- **Safety Profile**: Minimal side effects with no serious adverse reactions

**The Treatment:**
The innovative therapy, called "NeuroGen-AD," works by:
- Delivering healthy genes directly to brain cells affected by Alzheimer's
- Promoting the production of protective proteins
- Reducing harmful amyloid plaque formation
- Enhancing neural communication and memory formation

**Scientific Breakthrough:**
This represents a paradigm shift in Alzheimer's treatment:

**Previous Approaches**: Most treatments focused on managing symptoms rather than addressing underlying causes.

**New Strategy**: NeuroGen-AD targets the genetic and molecular basis of the disease, potentially offering long-term benefits.

**Precision Medicine**: Treatment can be customized based on individual genetic profiles and disease characteristics.

**Patient Stories:**
Trial participants have reported significant improvements:
- Recovery of lost memories and cognitive abilities
- Increased independence in daily activities
- Improved relationships with family members
- Enhanced overall quality of life

**Expert Opinions:**
Leading neurologists are calling this a "breakthrough moment":

Dr. Sarah Mitchell, Director of Alzheimer's Research at Johns Hopkins, stated: "These results represent the most significant advancement in Alzheimer's treatment in decades. We're moving from managing decline to potentially reversing it."

**Next Steps:**
The research team is working toward:
- **Regulatory Approval**: Submitting for FDA approval in the next 6 months
- **Accessibility**: Developing programs to ensure treatment availability
- **Cost Reduction**: Working to make therapy affordable for patients worldwide
- **Further Research**: Investigating applications for other neurodegenerative diseases

**Global Impact:**
With over 55 million people worldwide living with dementia, this breakthrough could:
- Transform the lives of patients and families
- Reduce healthcare costs by billions of dollars
- Change how we approach neurodegenerative diseases
- Inspire new research in regenerative medicine

The treatment is expected to be available to patients within 12-18 months, pending regulatory approval.`,
    imageUrl: "/image2.jpg",
    publishedAt: new Date("2025-01-12T09:30:00Z"),
    author: "Dr. Emily Chen",
    source: mockSources[5],
    category: mockCategories[5],
    tags: ["Healthcare", "Medical Research", "Alzheimer's", "Gene Therapy"],
    readTime: 8,
  },
  {
    id: "7",
    title: "Hollywood Strikes End with Historic Agreement",
    excerpt:
      "After months of negotiations, writers and actors reach groundbreaking deal that includes AI protections and streaming revenue sharing.",
    content: `After 148 days of strikes that brought Hollywood to a standstill, the Writers Guild of America (WGA) and Screen Actors Guild (SAG-AFTRA) have reached a historic agreement with major studios, ending one of the longest work stoppages in entertainment industry history.

**Key Agreement Terms:**

**AI Protections:**
- Studios cannot use AI to replace writers or actors without explicit consent
- AI-generated content must be clearly disclosed
- Artists retain rights to their digital likenesses
- New compensation structures for AI-assisted productions

**Streaming Revenue:**
- Writers and actors will receive percentage of streaming platform profits
- Residual payments increased by 15% for streaming content
- Transparency requirements for viewership data
- Bonus payments for highly successful streaming shows

**Working Conditions:**
- Minimum staffing requirements for writers' rooms
- Improved healthcare and pension benefits
- Shorter maximum working hours on sets
- Enhanced safety protocols

**Financial Terms:**
- 18% pay increase over three years for writers
- 20% pay increase for actors
- Improved residual payments for reruns and international distribution
- New categories for digital content creators

**Industry Impact:**

**Production Restart:**
- Major studios resuming production immediately
- Over 100 delayed projects getting green light
- Holiday movie releases back on schedule
- Streaming platforms restocking content pipelines

**Economic Recovery:**
The strikes had significant economic impact:
- $6.5 billion in lost production value
- 170,000 crew members temporarily unemployed
- Local businesses around studios severely affected
- International productions relocated to other countries

**Innovation Focus:**
The agreement establishes new frameworks for:
- Collaborative AI development in entertainment
- Revenue sharing models for digital platforms
- Creator rights in an evolving media landscape
- International co-production standards

**Celebrity Reactions:**
Many prominent figures expressed relief and optimism:

"This agreement ensures that creativity and human artistry remain at the center of storytelling while embracing technological advancement responsibly," said acclaimed director Jennifer Morrison.

Actor and union leader David Washington added: "We've secured protections that will benefit current and future generations of entertainment professionals."

**Future Implications:**
The agreement sets precedents that may influence:
- Labor negotiations in other creative industries
- AI governance in entertainment globally
- Streaming platform business models
- International entertainment labor standards

Production is expected to fully resume within two weeks, with the first new content reaching audiences in early 2026.`,
    imageUrl: "/image3.jpg",
    publishedAt: new Date("2025-01-11T18:45:00Z"),
    author: "Rachel Green",
    source: mockSources[0],
    category: mockCategories[6],
    tags: ["Hollywood", "Strikes", "Entertainment", "Labor"],
    readTime: 7,
  },
  {
    id: "8",
    title: "Election Results: New Leadership Promises Major Policy Changes",
    excerpt:
      "Historic election results bring new political leadership with ambitious plans for economic reform, climate action, and social programs.",
    content: `In a stunning political upset, challenger Maria Santos has won the presidential election by a significant margin, promising to bring "transformational change" to the country with her progressive policy agenda and commitment to addressing climate change, economic inequality, and social justice.

**Election Results:**
- **Santos**: 54.2% of popular vote (312 electoral votes)
- **Incumbent**: 43.1% of popular vote (226 electoral votes)
- **Third Party**: 2.7% of popular vote
- **Voter Turnout**: Record-breaking 78% turnout, highest in 40 years

**Key Policy Promises:**

**Climate Action:**
- Net-zero carbon emissions by 2035
- $2 trillion green infrastructure investment
- Renewable energy incentives for homeowners and businesses
- International climate leadership initiatives

**Economic Reform:**
- Progressive tax system with higher rates for wealthy individuals
- $15 minimum wage increase
- Universal basic income pilot programs
- Small business support and entrepreneurship funding

**Healthcare:**
- Public healthcare option expansion
- Prescription drug price controls
- Mental health services integration
- Rural healthcare infrastructure improvement

**Education:**
- Free community college programs
- Student loan debt forgiveness initiatives
- Teacher pay increases and education funding
- Technology integration in classrooms

**Voter Demographics:**
The election showed significant shifts in traditional voting patterns:
- **Youth Vote**: 85% turnout among 18-29 age group, heavily favoring Santos
- **Suburban Areas**: Significant swing toward Santos compared to previous elections
- **Urban Centers**: Strong Santos support with increased turnout
- **Rural Areas**: Mixed results with some surprising Santos victories

**International Response:**
World leaders have begun reaching out to congratulate Santos:
- European Union leaders praised climate commitments
- Trade partners expressed interest in economic cooperation
- Environmental organizations worldwide celebrated the outcome
- International markets showed positive response to stability

**Transition Planning:**
Santos's transition team is already working on:
- Cabinet appointments with diverse representation
- First 100 days legislative priorities
- International relationship building
- Government reform initiatives

**Opposition Response:**
The outgoing administration has committed to peaceful transition while opposition parties are regrouping to provide "constructive opposition" to the new administration's policies.

**Historic Significance:**
This election marks several historic firsts:
- First woman president in the country's history
- Largest margin of victory in 20 years
- Highest youth voter participation ever recorded
- Most diverse cabinet in the nation's history

The inauguration is scheduled for next month, with Santos promising to "hit the ground running" on her ambitious policy agenda.`,
    imageUrl:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=400&fit=crop",
    publishedAt: new Date("2025-01-10T23:30:00Z"),
    author: "Political Desk",
    source: mockSources[1],
    category: mockCategories[0],
    tags: ["Election", "Politics", "Government", "Policy"],
    readTime: 9,
  },
];
