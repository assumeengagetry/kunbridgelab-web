
import { Publication, NewsItem, Member } from './types';

export const LAB_NAME = "KUNBRIDGE LAB";
export const LAB_DESCRIPTION = "Kunbridge Lab is a student-led academic cooperation society dedicated to bridging the gap between biological perception and machine synthesis. Operating without financial exchange, we foster a pure research environment where members balance academics, research, and life. Our innovation hub at SCUPI draws exceptional talent from ECE, AI, CS, IE, and MSE disciplines.";

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'AI-Enhanced Chip-Scale Photonic Spectrometer',
    authors: ['Kunyu Wu', 'Prof. Cheng (Cambridge)'],
    venue: 'Wearable Sensing',
    year: 'Ongoing',
    thumbnail: 'https://images.unsplash.com/photo-1555664424-778a69032054?q=80&w=2000&auto=format&fit=crop',
    abstract: 'Developing an AI-enhanced chip-scale photonic spectrometer for next-generation wearable sensing applications. This project is a cross-institutional collaboration with the University of Cambridge.',
    pdfLink: '#',
    codeLink: '#'
  },
  {
    id: 'p2',
    title: 'Solana Bench: On-chain Agent',
    authors: ['Zelin Li'],
    venue: 'Blockchain AI',
    year: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
    abstract: 'Exploring the intersection of blockchain and autonomous agents. Benchmarking agent performance on the Solana chain for decentralized decision making.',
    pdfLink: '#'
  },
  {
    id: 'p3',
    title: 'PhysBench: Generalizable Physical World Benchmarking',
    authors: ['Kunbridge Lab', 'Global Partners'],
    venue: 'Global Collab',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop',
    abstract: 'A massive-scale benchmark for evaluating physical understanding in foundation models. Collaborating with researchers worldwide to set new standards for embodied AI.',
    pdfLink: '#',
    codeLink: '#'
  },
  {
    id: 'p4',
    title: 'RolePlay LLM',
    authors: ['Kunbridge Lab Team'],
    venue: 'EI-indexed CAS-4',
    year: 'Completed',
    thumbnail: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2000&auto=format&fit=crop',
    abstract: 'Investigating the capabilities of Large Language Models in complex role-playing scenarios, focusing on character consistency and narrative coherence.',
    pdfLink: '#',
    codeLink: '#'
  },
  {
    id: 'p5',
    title: 'Cervical Cancer Multimodal Diagnosis',
    authors: ['Medical AI Team'],
    venue: 'Shanghai AI Lab',
    year: 'Ongoing',
    thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop',
    abstract: 'Leveraging multimodal deep learning for accurate cervical cancer diagnosis. A strategic collaboration with Shanghai Artificial Intelligence Laboratory.',
    pdfLink: '#'
  },
  {
    id: 'p6',
    title: 'Agent Memory & Medical Collaboration',
    authors: ['Honghui', 'Team'],
    venue: 'Medical Agent',
    year: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1581093458891-7f311850d694?q=80&w=2000&auto=format&fit=crop',
    abstract: 'Researching distributed memory systems for medical agents to enable effective multi-agent collaboration in clinical settings.',
    pdfLink: '#'
  },
  {
    id: 'p7',
    title: 'Naked Eye 3D Decision Agent',
    authors: ['Honghui', 'Mita Vision'],
    venue: 'Mita Vision',
    year: 'Active',
    thumbnail: 'https://images.unsplash.com/photo-1535378437321-6f8af70977bb?q=80&w=2000&auto=format&fit=crop',
    abstract: 'Developing decision-making agents for naked-eye 3D display technologies, pushing the boundaries of immersive visual interaction.',
    pdfLink: '#'
  },
  {
    id: 'p8',
    title: 'RL-Detect: Blockchain Attack Detection',
    authors: ['Zelin Li'],
    venue: 'Security',
    year: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop',
    abstract: 'Applying Reinforcement Learning to detect and mitigate malicious attacks on blockchain infrastructure in real-time.',
    pdfLink: '#'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '2024-03-01',
    title: 'Recruiting: Join Our Student Research Society',
    content: 'We are looking for candidates who can balance academics, research, and life. Ideal backgrounds: ECE, AI, CS, IE, MSE. No financial exchange, just pure science.'
  },
  {
    id: 'n2',
    date: '2024-02-15',
    title: 'Collaboration with Shanghai AI Lab',
    content: 'Deepening our ties with Shanghai AI Lab on medical diagnosis and colonoscopy agent projects.'
  },
  {
    id: 'n3',
    date: '2024-01-20',
    title: 'Vessel Segmentation Project Completed',
    content: 'Successfully delivered the Vessel Segmentation codebase. The torch has been passed to the next cohort of researchers.'
  },
  {
    id: 'n4',
    date: '2024-01-10',
    title: 'Global Partnerships Expanded',
    content: 'Strengthening connections with UofT, Meta FAIR, and Google DeepMind to ensure our research stays on the cutting edge.'
  }
];

export const TEAM: Member[] = [
  // Expert Advisors
  {
    id: 'e1',
    name: 'Ouyang Yuqi',
    role: 'Advisor',
    image: 'https://picsum.photos/400/400?random=20',
    bio: 'Faculty at Sichuan University (CS). Expert in Computer Science and Engineering at SCUPI.',
    scholar: 'https://scholar.google.com/citations?user=ervWlSsAAAAJ&hl=en'
  },
  {
    id: 'e2',
    name: 'Guangwu Qian',
    role: 'Advisor',
    image: 'https://picsum.photos/400/400?random=21',
    bio: 'Faculty at Sichuan University (CS). Researching advanced computational methods at SCUPI.',
    website: 'https://scupi.scu.edu.cn/faculty-staff/faculty/钱光武'
  },
  {
    id: 'e3',
    name: 'Hao Qin',
    role: 'Advisor',
    image: 'https://picsum.photos/400/400?random=22',
    bio: 'Faculty at Sichuan University (ECE). Focusing on Electronic and Computer Engineering innovations.',
    scholar: 'https://scholar.google.com/citations?user=aBmmwloAAAAJ&hl=en'
  },
  {
    id: 'e4',
    name: 'Issac Li',
    role: 'Advisor',
    image: 'https://picsum.photos/400/400?random=23',
    bio: 'Researcher at University of Pittsburgh / Math Inc. Specializing in Formal Math and AI4Math.',
  },
  {
    id: 'e5',
    name: 'Zelin Li',
    role: 'Advisor',
    image: 'https://picsum.photos/400/400?random=24',
    bio: 'Researcher at Ohio State University / TrueNorth. Expert in Blockchain and Blockchain Security.',
  },
  // Student Researchers
  {
    id: 'r1',
    name: 'Kunyu Wu',
    role: 'Researcher',
    image: 'https://picsum.photos/400/400?random=25',
    bio: 'Sichuan University ECE. Researching AI+Photonics and coarse-to-fine communications. Leading the Chip-Scale Spectrometer project.',
    scholar: 'https://scholar.google.com/citations?user=LY9Z26MAAAAJ&hl=zh-CN'
  },
  {
    id: 'r2',
    name: 'Junqiao Wang',
    role: 'Researcher',
    image: 'https://picsum.photos/400/400?random=26',
    bio: 'SCU / Shanghai AI Lab / Gradient / TrueNorth CS. Driving core research in computer science and AI systems.',
    scholar: 'https://scholar.google.com/citations?user=fKuqskgAAAAJ&hl=zh-CN'
  },
  {
    id: 'r3',
    name: 'Zihao Zhang',
    role: 'Researcher',
    image: 'https://picsum.photos/400/400?random=27',
    bio: 'SCU / BAAI (Beijing Academy of Artificial Intelligence). Focusing on Large Language Models and Agents.',
    website: 'https://ziha0-zhang.github.io/',
    scholar: 'https://scholar.google.com/citations?user=92N9f3QAAAAJ&hl=zh-CN'
  },
  {
    id: 'r4',
    name: 'Honghui',
    role: 'Researcher',
    image: 'https://picsum.photos/400/400?random=28',
    bio: 'Researcher focusing on Agent Memory, Medical Agent Collaboration, and Naked Eye 3D Decision Agents.',
  },
  {
    id: 'r5',
    name: 'Lanfeng',
    role: 'Researcher',
    image: 'https://picsum.photos/400/400?random=29',
    bio: 'Researcher working on Pathology WSI Chat Large Models and medical AI applications.',
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI research assistant for Kunbridge Lab (KBLAB).
KBLAB is a student academic cooperation society at SCUPI, Sichuan University.
Your goal is to answer visitor questions about the lab based on the following context.
Be professional, academic, yet accessible.

Lab Info:
${LAB_DESCRIPTION}

Key Research Areas:
- AI + Communications (Coarse to Fine, Temperature Field)
- AI + Material (Absorber)
- AI + Photonics (Chip-Scale Spectrometer)
- Medical AI (Cervical Cancer, Pathology WSI, Colonoscopy)
- Blockchain AI (Solana Bench, RL-Detect)

Expert Advisors:
${TEAM.filter(m => m.role === 'Advisor').map(m => `- ${m.name}: ${m.bio}`).join('\n')}

Student Researchers:
${TEAM.filter(m => m.role === 'Researcher').map(m => `- ${m.name}: ${m.bio}`).join('\n')}

Ongoing Projects:
${PUBLICATIONS.map(p => `- ${p.title} (${p.venue}). ${p.abstract}`).join('\n')}

If asked about something not in the context, politely mention you only have information about Kunbridge Lab's public data.
`;
