import {
  CoachingPathway,
  RootedPrinciple,
  InstagramPost,
  Testimonial,
  PodcastEpisode,
  Article,
  CuratedPick,
} from '../types';

export const BRAND_INFO = {
  name: 'ROOTED COLLECTIVE',
  personalBrand: 'GROW WITH RO',
  handle: '@grow.withro_',
  coachName: 'Ro',
  location: 'Global Online Coaching',
  tagline: 'Fitness + Growth Coaching',
  eyebrow: 'ROOTED COLLECTIVE',
  heroHeadline: 'GET ROOTED.\nGROW STRONG.\nBECOME MORE YOU.',
  heroSupporting:
    'Fitness, mindset & growth coaching for women who want to feel stronger, more confident, and more at home in themselves.',
  instagramUrl: 'https://www.instagram.com/grow.withro_/',
  spotifyUrl: 'https://open.spotify.com',
  applePodcastUrl: 'https://podcasts.apple.com',
  amazonUrl: 'https://amazon.com',
};

export const PRINCIPLES: RootedPrinciple[] = [
  {
    number: '01',
    title: 'STRENGTH',
    subtitle: 'Build a body you trust.',
    description:
      'True physical strength transforms how you move through everyday life. We focus on progressive overload, lifting mechanics, and honoring what your body can accomplish — not shrinking to take up less room.',
    deepDive:
      'Lifting heavy weights changes your internal narrative. When you learn you can deadlift your bodyweight, you walk into hard meetings and messy relationship conversations with completely different posture.',
    quote: 'Strength is not an aesthetic — it is a quiet, grounded permission to inhabit your own life.',
    image: '/images/ig_6.jpg',
  },
  {
    number: '02',
    title: 'NOURISHMENT',
    subtitle: 'Fuel yourself without fear or obsession.',
    description:
      'Good nutrition should make your life expansive, not tiny. Learn to eat for sustained energy, muscle repair, and mental clarity without labeling foods as "good" or "sinful."',
    deepDive:
      'No tracking apps at restaurant dinners. No guilt spiral because you had fresh bread with your partner. We build an abundant nutritional framework grounded in protein, vibrant whole foods, and real peace of mind.',
    quote: 'Fueling your body should feel like care, not a lifelong sentencing of restriction.',
    image: '/images/ig_7.jpg',
  },
  {
    number: '03',
    title: 'GROWTH',
    subtitle: 'Become someone you are proud to be.',
    description:
      'Consistency is built through self-compassion, radical ownership, and micro-habits that survive real life, demanding careers, and low-energy seasons. If you do not plan to do it, keep those lips closed.',
    deepDive:
      'You do not need more willpower. You need a system that accommodates your menstrual cycle, your demanding schedule, and human fatigue. Growth is what happens when you stop restarting every Monday.',
    quote: 'The goal was never perfection. The goal is becoming someone who stays in relationship with herself.',
    image: '/images/ig_4.jpg',
  },
  {
    number: '04',
    title: 'CONNECTION',
    subtitle: 'Build a better relationship with yourself and others.',
    description:
      'How you treat your body is mirrored in how you communicate in your relationships. We explore attachment, emotional regulation, boundary setting, and learning what makes you great.',
    deepDive:
      'When you stop abandoning your physical needs, you stop abandoning your emotional needs in dating, friendship, and family. The body is always the starting ground for relational self-respect.',
    quote: 'When your roots are deep, you do not have to beg the wind to be gentle.',
    image: '/images/ig_5.jpg',
  },
];

export const COACHING_PATHWAYS: CoachingPathway[] = [
  {
    id: '1-on-1',
    number: 'PATH 01',
    badge: 'SIGNATURE FITNESS + HABITS',
    title: 'ROOTED 1:1',
    subtitle: 'Fitness + Growth Coaching',
    tagline: 'Build habits you genuinely enjoy, and the body that will result from that will be one you can maintain.',
    description:
      'Comprehensive, high-touch individualized coaching tailored to your unique physiology, schedule, and goals. We strip away the noise and build your custom training, nutrition, and daily rhythm from the inside out.',
    forWhom: [
      'Women tired of spinning their wheels with random HIIT classes or restrictive diets',
      'Lifters looking to master barbell & dumbbell compound lifts with safe, progressive form',
      'Anyone trapped in the "strict Monday to off-the-rails Sunday" restart cycle',
      'Women seeking body confidence rooted in capability rather than scale numbers',
    ],
    includes: [
      'Customized 4 to 6-week progressive strength training blocks (gym or home)',
      'Individualized nutrition strategy (flexible tracking, biofeedback, or intuitive fueling)',
      'Weekly in-depth Loom video audits covering form, energy, and habit friction',
      'Private 1:1 direct WhatsApp & voice note access for daily guidance & celebrations',
      'Monthly mindset & habit recalibration calls to adapt as life shifts',
      'Full access to the Rooted Exercise Library & Habit Architecture Portal',
    ],
    timeframe: 'Minimum 12-Week Commitment (Spaces strictly capped to 15 women)',
    ctaText: 'APPLY FOR 1:1 COACHING →',
    image: '/images/ig_2.jpg',
    imageAlt: 'Ro on sustainable habits: build routines you enjoy and keep for life',
  },
  {
    id: 'relationships',
    number: 'PATH 02',
    badge: 'RELATIONAL & INTENTIONAL GROWTH',
    title: 'ROOTED IN RELATIONSHIPS',
    subtitle: 'Relationship + Personal Growth Coaching',
    tagline: 'Break people-pleasing loops, clarify emotional boundaries, and show up securely in your partnerships.',
    description:
      'An intimate, introspective coaching space designed for women who are ready to examine attachment patterns, communicate authentically, and stop abandoning themselves to keep the peace.',
    forWhom: [
      'Women who feel like they over-function in dating, romantic partnerships, or friendships',
      'Anyone struggling to express needs or set boundaries without intense guilt or fear',
      'Women navigating transitions: breakups, dating intentionally, or deepening intimacy',
      'Those ready to bridge somatic bodily awareness with emotional self-trust',
    ],
    includes: [
      'Bi-weekly 60-minute 1:1 deep-dive video coaching sessions with Ro',
      'Personalized Somatic & Emotional Regulation toolkit for nervous system calm',
      'Communication scripts & real-time boundary debriefs before difficult conversations',
      'Private voice-memo support between sessions for dating/relational pivots',
      'Attachment pattern mapping & self-worth reflective workbooks',
      'Lifetime access to the "Secure From Within" journal prompts & audio guides',
    ],
    timeframe: '8-Week or 16-Week Intimate Cohort / 1:1 Mentorship',
    ctaText: 'EXPLORE RELATIONSHIP COACHING →',
    image: '/images/ig_3.jpg',
    imageAlt: 'Ro discussing healthy coping mechanisms and emotional self-trust',
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    category: 'talking-camera',
    categoryLabel: 'MEET RO',
    image: '/images/ig_1.jpg',
    alt: 'Ro - Romana - Founder & Coach at Rooted Collective',
    caption:
      'Hi, I’m Romana! But pretty much only my mom calls me that. Everyone else just calls me Ro 🤍 If you’re here looking for a coach for your fitness + growth journey, let’s see if we relate. I’m a coach, wifey, dog mom, podcast host, CEO, avid walker, and personal development enthusiast. Born in Slovakia, grew up in LA, went to UC Irvine, moved to NYC for musical theatre, Denver in 2018, and St. Pete in 2022. Completed #75Hard 6 times. Transitioned from in-person personal trainer to online coach to help women build confidence, self-awareness, and the ability to trust themselves in food, fitness, and relationships. 🌱🫶',
    likes: 73,
    comments: 2,
    date: 'July 15',
    isReel: false,
    postUrl: 'https://www.instagram.com/grow.withro_/p/Da08j4ytnXx/',
  },
  {
    id: 'post-2',
    category: 'strength',
    categoryLabel: 'SUSTAINABLE HABITS',
    image: '/images/ig_2.jpg',
    alt: 'Ro sharing insights on sustainable habits and body goals',
    caption:
      'PSA: The things you do to get the body that you want are things you’re going to have to KEEP DOING to keep that body. Build habits you genuinely enjoy, and the body that will result from that will be one you’ll be able to maintain! 🤍',
    likes: 25,
    comments: 3,
    date: 'September 8',
    isReel: true,
    postUrl: 'https://www.instagram.com/grow.withro_/reel/DdCiMP_NnQd/',
  },
  {
    id: 'post-3',
    category: 'relationships',
    categoryLabel: 'NERVOUS SYSTEM',
    image: '/images/ig_3.jpg',
    alt: 'Ro discussing healthy coping mechanisms and emotional regulation',
    caption:
      'Healthy coping mechanisms or whatever 🤣🙃 Honest conversations on emotional regulation, self-soothing, and staying grounded through life’s unexpected turbulence.',
    likes: 20,
    comments: 1,
    date: 'September 7',
    isReel: true,
    postUrl: 'https://www.instagram.com/grow.withro_/reel/Dc_bJVzRNl3/',
  },
  {
    id: 'post-4',
    category: 'talking-camera',
    categoryLabel: 'RADICAL ACCOUNTABILITY',
    image: '/images/ig_4.jpg',
    alt: 'Ro candid message on keeping commitments to yourself',
    caption:
      'That simple. If you don’t plan to do it, just keep those lips closeddd 😇🙃 Radical self-accountability is where self-trust and confidence are actually born. #fitnessinspo #mindsetmotivation #fitnesscoach',
    likes: 58,
    comments: 6,
    date: 'August 30',
    isReel: true,
    postUrl: 'https://www.instagram.com/grow.withro_/reel/DcrDSrHRQ9J/',
  },
  {
    id: 'post-5',
    category: 'relationships',
    categoryLabel: 'SELF-WORTH & GROWTH',
    image: '/images/ig_5.jpg',
    alt: 'Ro speaking on identifying your strengths and self-worth',
    caption:
      'Let’s spend a litttleeee less time thinking about all the ways in which we’re inferior to others and spend a litttleee more time learning about what makes us great and how to use that to our advantage! 🕊️ #personaldevelopment #lifecoach #growth',
    likes: 31,
    comments: 2,
    date: 'August 25',
    isReel: true,
    postUrl: 'https://www.instagram.com/grow.withro_/reel/DceZg53NEil/',
  },
  {
    id: 'post-6',
    category: 'strength',
    categoryLabel: 'FUNCTIONAL FITNESS',
    image: '/images/ig_6.jpg',
    alt: 'Ro demonstrating functional movement and barbell training',
    caption:
      'Train both. Movement mechanics, joint integrity, and barbell strength that protects your body while challenging your potential. #functionalfitness #fitnesscoach #fittips #fitlife',
    likes: 116,
    comments: 5,
    date: 'August 22',
    isReel: true,
    postUrl: 'https://www.instagram.com/grow.withro_/reel/DcV8niZxaZ4/',
  },
  {
    id: 'post-7',
    category: 'nutrition',
    categoryLabel: 'SIMPLIFIED NOURISHMENT',
    image: '/images/ig_7.jpg',
    alt: 'Ro on simplifying meal prepping without overwhelm',
    caption:
      '“Meal Prepping” doesn’t have to mean a boring Tupperware meal or some extravagant entree that takes an hour to make. SIMPLIFY. High-protein, whole food staples that fuel your life without complication.',
    likes: 19,
    comments: 0,
    date: 'July 7',
    isReel: true,
    postUrl: 'https://www.instagram.com/grow.withro_/reel/DagK5S_R-l4/',
  },
  {
    id: 'post-8',
    category: 'mindset',
    categoryLabel: 'DAY ONE',
    image: '/images/ig_8.jpg',
    alt: 'Ro reminder that One Day needs a Day One',
    caption:
      'Everyone dreams of the “one day” version of themselves... But here’s your reminder that “One Day” needs a DAY ONE. And Day One is scary for everyone. Your “One Day” starts with a choice. Message me “Rooted” if you’re done saying “one day” and are ready to start your day one. Let’s do this together. 🤍 #startnow #personaldevelopment #selfgrowth #fitnessjourney',
    likes: 30,
    comments: 1,
    date: 'July 8',
    isReel: true,
    postUrl: 'https://www.instagram.com/grow.withro_/reel/DMFs7o6Sl56/',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'She didn’t just help me get stronger. She helped me trust myself again. For the first time in ten years, I can go out for dinner with friends, eat what sounds delicious, and wake up excited to lift without feeling like I need to "burn it off".',
    client: 'Maya Lindqvist',
    location: 'Sydney, Australia',
    pathway: 'Rooted 1:1 Coaching',
    duration: '6 Months Coached',
    results: 'Deadlifted 105kg • Healed chronic food guilt • Consistent 4x/week',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85',
  },
  {
    id: '2',
    quote:
      'Before working with Ro, I had restarted my fitness journey probably 30 times. She dismantled my perfectionism within the first three weeks. Her weekly Loom reviews feel like talking to a brilliant mentor who truly sees you.',
    client: 'Elena Vance',
    location: 'London, UK',
    pathway: 'Rooted 1:1 Coaching',
    duration: '8 Months Coached',
    results: 'First unassisted pull-up • Regulated cycle • Zero Sunday scaries',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=85',
  },
  {
    id: '3',
    quote:
      'The Rooted in Relationships coaching completely shifted my life. I went from chronic people-pleasing and feeling anxious in romantic relationships to being able to hold calm, compassionate boundaries without breaking down.',
    client: 'Sophie Carmichael',
    location: 'Melbourne, Australia',
    pathway: 'Rooted in Relationships',
    duration: '16-Week Mentorship',
    results: 'Broke chronic anxious-attachment cycle • Calm boundary communication',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=85',
  },
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'ep-48',
    episodeNumber: 'EPISODE 48',
    title: 'The Trap of "Starting Over Every Monday" & The Psychology of Real Consistency',
    duration: '42 mins',
    date: 'Sept 2026',
    description:
      'Why perfectionism is the number one saboteur of women’s physical and mental progress. How to set a "baseline minimum" for chaotic weeks so you never feel like you’ve fallen off.',
    topics: ['Habit Architecture', 'Perfectionism', 'Micro-Wins'],
    audioSampleLength: '01:45',
  },
  {
    id: 'ep-47',
    episodeNumber: 'EPISODE 47',
    title: 'Are You Emotionally Exhausted or Just Disconnected From Your Body?',
    duration: '38 mins',
    date: 'Aug 2026',
    description:
      'Exploring the somatic link between suppressed emotions and chronic fatigue. Simple physical grounding cues to bring your nervous system back into regulation.',
    topics: ['Nervous System', 'Somatic Healing', 'Rest'],
    audioSampleLength: '01:30',
  },
  {
    id: 'ep-46',
    episodeNumber: 'EPISODE 46',
    title: 'Boundaries in Love & Dating: How to Stop Abandoning Yourself to Keep the Peace',
    duration: '49 mins',
    date: 'July 2026',
    description:
      'The uncomfortable truth about why setting boundaries feels like danger to women conditioned to be "easy going." Concrete phrases to use when speaking your needs.',
    topics: ['Relationships', 'Attachment Styles', 'Self-Trust'],
    audioSampleLength: '02:10',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    category: 'HABITS & MINDSET',
    readTime: '6 MIN READ',
    title: 'HOW TO STOP STARTING OVER',
    excerpt:
      'The dangerous myth that Monday is a magic reset button, and how to build a routine that survives imperfect days, low energy, and real life.',
    publishedDate: 'Editorial Vol. 14',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=85',
    content: [
      'Every Sunday night, millions of women write out an idealistic version of their upcoming week: 5:30 AM alarm, pristine meal prep, zero sugar, four intense gym sessions, ten thousand steps. By Wednesday afternoon, an unexpected late meeting or a sick child hits, the routine fractures, and the mental script kicks in: "Well, this week is ruined. I’ll restart next Monday."',
      'Here is the reality: You do not have a discipline problem. You have an elasticity problem.',
      'A routine that only works when life is calm, predictable, and stress-free is not a routine — it is a fantasy. Real strength is built in how we navigate the messy 60% days, not the pristine 100% days.',
      'Instead of an all-or-nothing threshold, I teach my clients the concept of the "Non-Negotiable Baseline." On your busiest, lowest-energy days, what is the single thread you can hold onto? It might be drinking a litre of water before noon, taking a 15-minute walk around the block, or eating a protein-dense breakfast.',
      'When you protect the baseline, you never "fall off." And when you never fall off, you never have to undergo the humiliating, exhausting psychological ritual of starting over.',
    ],
  },
  {
    id: 'art-2',
    category: 'NUTRITION PHILOSOPHY',
    readTime: '8 MIN READ',
    title: '5 WAYS TO BUILD A STRONGER RELATIONSHIP WITH FOOD',
    excerpt:
      'Why restriction breeds obsession, and how transitioning from "eating less" to "fueling capability" transforms your relationship with your plate.',
    publishedDate: 'Editorial Vol. 12',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=85',
    content: [
      '1. Shift from Subtraction to Addition. Instead of obsessing over what to cut out, ask yourself: "What can I add to this meal to nourish my body?" Add crisp greens, add olive oil, add 30g of protein, add seasonal fruit. Abundance rewires the deprivation panic.',
      '2. Fire the Moral Police. Food is fuel, culture, connection, and joy. It is not a moral scorecard. Eating a warm chocolate croissant on a Saturday morning does not make you "bad," just as eating steamed broccoli does not make you "virtuous."',
      '3. Respect Your Biological Hunger. If you starve yourself until 3:00 PM, your physiology will demand quick-acting sugar by 7:00 PM. That is not weakness; that is basic biology trying to keep you alive. Eat consistent, nourishing meals early in the day.',
      '4. Slow Down at the Table. The nervous system cannot digest food in fight-or-flight mode. Taking three deep breaths before you take your first bite switches your body into rest-and-digest parasympathetic mode, reducing bloating and improving satiety cues.',
      '5. Remember What Food Enables. You do not eat to look a certain way on an Instagram photo. You eat to lift heavy, think clearly, laugh with friends, and have the stamina to build a meaningful life.',
    ],
  },
  {
    id: 'art-3',
    category: 'STRENGTH & PERSISTENCE',
    readTime: '5 MIN READ',
    title: 'WHAT CONSISTENCY ACTUALLY LOOKS LIKE',
    excerpt:
      'Social media portrays consistency as unbroken perfection. In reality, real consistency is quiet, boring, forgiving, and deeply grounded.',
    publishedDate: 'Editorial Vol. 11',
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=85',
    content: [
      'Consistency is not working out 7 days a week for 6 weeks and then burning out for three months.',
      'Consistency is showing up 3 times a week, month after month, year after year, through cold winters, stressful promotions, romantic breakups, and quiet ordinary Tuesdays.',
      'Some days your workout will feel magnetic and you’ll hit personal bests. Other days you will feel sluggish, your weights will feel heavy, and you will just go through the motions. Both count equally.',
      'Do not judge the quality of a habit by how you feel during it. Judge it by the quiet identity it builds within you over five years.',
    ],
  },
];

export const ROS_PICKS: CuratedPick[] = [
  {
    id: 'pick-1',
    name: 'Woven Fabric Glute & Mobility Bands',
    category: 'TRAINING ESSENTIAL',
    description: 'Non-slip woven fabric bands for warmups, hip mobility, and glute activation without rolling up.',
    roNote: 'I travel with these in my carry-on everywhere. Essential for waking up hips before deadlifts.',
    tag: 'Staple Gear',
    image:
      'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=600&q=85',
  },
  {
    id: 'pick-2',
    name: 'The Rooted Daily Linen Habit & Mindset Journal',
    category: 'MINDSET & INTENTION',
    description: 'Minimalist daily prompts focusing on physical biofeedback, wins, and boundary reflections.',
    roNote: 'Designed specifically for the women in my coaching community to anchor their morning and evening.',
    tag: 'Daily Ritual',
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=85',
  },
  {
    id: 'pick-3',
    name: 'Celtic Sea Salt & Unflavored Electrolyte Packets',
    category: 'HYDRATION & RECOVERY',
    description: 'Clean, sugar-free essential minerals for optimal hydration, muscle function, and brain clarity.',
    roNote: 'A pinch in 500ml water every morning before coffee. Game-changer for morning energy.',
    tag: 'Recovery',
    image:
      'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=85',
  },
  {
    id: 'pick-4',
    name: 'Pre-Seasoned Heavy Cast Iron Skillet',
    category: 'NOURISHMENT',
    description: 'The kitchen workhorse for high-heat searing, crispy salmon skin, and roasted root vegetables.',
    roNote: 'Simple, timeless cookware. Nothing cooks protein or retains flavor quite like a good cast iron.',
    tag: 'Kitchen Staple',
    image:
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=85',
  },
];
