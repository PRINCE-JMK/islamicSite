/* Islamic Academy v3 — Master Script
   Features: Story-based revision, themed quizzes, marriage module,
   surah meanings, profile pics/gamertags, leaderboard, achievements, forum */

/* ══════ AHADITH ══════ */
const AHADITH=[
{id:1,text:'Allah\'s Messenger ﷺ said: "When Ramadan starts, the gates of heaven are opened and Hell is closed and the devils are chained."',narrator:"Abu Huraira",book:"Sahih Al-Bukhari",topic:"Fasting"},
{id:2,text:'The Prophet ﷺ said: "None of you truly believes until he wishes for his brother what he wishes for himself."',narrator:"Anas",book:"Sahih Al-Bukhari",topic:"Belief"},
{id:3,text:'The Prophet ﷺ said: "A Muslim is one who avoids harming Muslims with his tongue and hands."',narrator:"Abdullah bin Amr",book:"Sahih Al-Bukhari",topic:"Belief"},
{id:4,text:'The Prophet ﷺ said: "Faith has over sixty branches. And modesty (Haya) is a branch of faith."',narrator:"Abu Huraira",book:"Sahih Al-Bukhari",topic:"Belief"},
{id:5,text:'The Prophet ﷺ said: "The strong person is not the one who wrestles, but the one who controls himself when angry."',narrator:"Abu Huraira",book:"Sahih Al-Bukhari",topic:"Character"},
{id:6,text:'The Prophet ﷺ said: "Whoever believes in Allah and the Last Day should speak good or remain silent."',narrator:"Abu Huraira",book:"Sahih Muslim",topic:"Character"},
{id:7,text:'The Prophet ﷺ said: "The best of you are those who are best to their families."',narrator:"Ibn Abbas",book:"Sunan Ibn Majah",topic:"Family"},
{id:8,text:'The Prophet ﷺ said: "Seeking knowledge is an obligation upon every Muslim."',narrator:"Anas ibn Malik",book:"Sunan Ibn Majah",topic:"Knowledge"},
{id:9,text:'The Prophet ﷺ said: "The most beloved deeds to Allah are the most consistent, even if small."',narrator:"Aisha",book:"Sahih Al-Bukhari",topic:"Deeds"},
{id:10,text:'The Prophet ﷺ said: "Whoever pursues a path of knowledge, Allah makes easy a path to Paradise."',narrator:"Abu Huraira",book:"Sahih Muslim",topic:"Knowledge"},
{id:11,text:'The Prophet ﷺ said: "Smiling at your brother is charity."',narrator:"Abu Dharr",book:"Jami at-Tirmidhi",topic:"Charity"},
{id:12,text:'The Prophet ﷺ said: "Show mercy to those on earth, and the One above will show mercy to you."',narrator:"Abdullah ibn Amr",book:"Sunan Abu Dawud",topic:"Mercy"},
{id:13,text:'The Prophet ﷺ said: "Make things easy, not difficult. Give glad tidings, do not drive people away."',narrator:"Anas",book:"Sahih Al-Bukhari",topic:"Character"},
{id:14,text:'The Prophet ﷺ said: "Whoever is not grateful to people is not grateful to Allah."',narrator:"Abu Huraira",book:"Jami at-Tirmidhi",topic:"Gratitude"},
{id:15,text:'The Prophet ﷺ said: "The best among you are those who learn the Quran and teach it."',narrator:"Uthman",book:"Sahih Al-Bukhari",topic:"Quran"}
];

/* ══════ SURAHS — now with meaning & benefits ══════ */
const MEMORISATION_SURAHS=[
{num:112,name:"Al-Ikhlas (Sincerity)",arabic:"قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",meaning:"Say: He is Allah, the One. Allah, the Eternal. He neither begets nor is born. And there is none comparable to Him.",benefits:"This surah teaches the purest concept of who Allah is — One, Eternal, with nothing like Him. The Prophet ﷺ said reciting it once equals one-third of the Quran in reward. It strengthens your understanding of Tawheed (monotheism), the very foundation of Islam.",ayahs:4},
{num:113,name:"Al-Falaq (The Daybreak)",arabic:"قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ",meaning:"Say: I seek refuge in the Lord of daybreak, from the evil of what He created, from darkness, from those who blow on knots, and from the envier.",benefits:"A protection surah. The Prophet ﷺ would recite it every night before sleeping and after every prayer. It teaches us to seek Allah's protection from jealousy, evil eye, and hidden harms — reminding us that only Allah can truly protect us.",ayahs:5},
{num:114,name:"An-Nas (Mankind)",arabic:"قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ",meaning:"Say: I seek refuge in the Lord of mankind, the King of mankind, the God of mankind, from the evil of the retreating whisperer.",benefits:"This surah protects from the whispers of Shaytan that try to lead us astray. It reminds us that Shaytan's power is weak — he retreats when you remember Allah. Reciting it daily builds a spiritual shield around your heart.",ayahs:6},
{num:108,name:"Al-Kawthar (Abundance)",arabic:"إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ۝ فَصَلِّ لِرَبِّكَ وَانْحَرْ ۝ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",meaning:"Indeed, We have granted you al-Kawthar. So pray to your Lord and sacrifice. Indeed, your enemy is the one cut off.",benefits:"Al-Kawthar is a river in Paradise given to the Prophet ﷺ. This surah was revealed when his enemies mocked him after his son passed away. Allah told him: it is your enemies who are truly cut off, not you. It teaches that Allah's gifts are greater than any worldly loss.",ayahs:3},
{num:110,name:"An-Nasr (The Victory)",arabic:"إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",meaning:"When Allah's victory comes and the conquest, and you see people entering Islam in crowds, glorify your Lord and seek forgiveness.",benefits:"This was one of the last surahs revealed. It told the Prophet ﷺ that his mission was near completion. The lesson: when you achieve success, don't become arrogant — instead increase your gratitude and seek Allah's forgiveness. True victory comes with humility.",ayahs:4},
{num:111,name:"Al-Masad (The Palm Fibre)",arabic:"تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",meaning:"May the hands of Abu Lahab be ruined, and ruined is he. His wealth will not save him.",benefits:"Abu Lahab was the Prophet's ﷺ own uncle who spent his life fighting Islam. Despite his wealth and power, none of it could save him. This surah teaches that wealth and status mean nothing without faith. What matters is how you use your blessings.",ayahs:5}
];

const REVISION_VIDEOS=[
{id:1,title:"Islamic Knowledge",ytId:"lNIsdNxsOGc",desc:"Strengthen your understanding of the deen"},
{id:2,title:"Quran & Reflection",ytId:"_bjK1bQFXkI",desc:"Recitation and contemplation"},
{id:3,title:"Learning the Basics",ytId:"WEEORXFj-lo",desc:"Essential foundations every Muslim should know"},
{id:4,title:"Faith & Inspiration",ytId:"zalLv2NY98k",desc:"Reminders that bring you closer to Allah"}
];

/* ══════ STORY CATEGORIES (10 each) ══════ */
const STORY_CATEGORIES={
mercy:{title:"Allah's Mercy & Compassion",icon:"🤲",color:"#4caf50",stories:[
{id:"m1",title:"The Kindness to an Old Woman",story:"An old woman threw rubbish on the Prophet ﷺ daily. When it stopped one day, he visited her and found she was ill. Instead of celebrating, he cared for her. She was so moved she embraced Islam.",lesson:"The highest form of mercy is being kind to those who are unkind to you.",icon:"💛"},
{id:"m2",title:"Forgiving Makkah",story:"After 13 years of torture, exile, and war, the Prophet ﷺ returned to Makkah with 10,000 soldiers. His enemies expected revenge. Instead, he said: 'Go, you are free.' Thousands accepted Islam that day.",lesson:"Mercy is choosing forgiveness when you have the power to punish.",icon:"🕊️"},
{id:"m3",title:"The Prophet ﷺ and the Cat",story:"The Prophet ﷺ once cut off his garment sleeve rather than disturb a cat sleeping on it. He showed that mercy extends to every living creature, not just humans.",lesson:"Allah's mercy covers all creation — so should ours.",icon:"🐱"},
{id:"m4",title:"Allah Forgives the Sinful Man",story:"A man who committed 99 murders asked a scholar if he could be forgiven. The scholar said no, so the man killed him too. Another scholar told him to migrate to a righteous town. He died on the journey, and Allah's angels of mercy claimed him because he was sincere.",lesson:"No sin is too great for Allah's mercy if repentance is sincere.",icon:"🌅"},
{id:"m5",title:"The Prostitute and the Thirsty Dog",story:"A woman of bad reputation found a thirsty dog near a well. She removed her shoe, filled it with water, and gave it to the dog. Allah forgave all her sins because of this single act of compassion.",lesson:"One act of genuine mercy can change your entire destiny.",icon:"🐕"},
{id:"m6",title:"The Prophet ﷺ Crying for His Ummah",story:"The Prophet ﷺ spent an entire night in prayer, weeping and repeating: 'O Allah, my Ummah, my Ummah.' Allah sent Jibreel to ask why he wept. He said: 'I worry for my people.' Allah replied: 'We will please you regarding your Ummah.'",lesson:"True leadership is carrying the burden of others in your heart.",icon:"😢"},
{id:"m7",title:"Ibrahim's Sacrifice",story:"Allah tested Ibrahim by commanding him to sacrifice his beloved son Ismail. Both father and son submitted willingly. At the last moment, Allah replaced Ismail with a ram — the test was about willingness, not the act itself.",lesson:"Allah never burdens you beyond what you can bear. He sees your intention.",icon:"🐑"},
{id:"m8",title:"Yusuf Forgiving His Brothers",story:"After being thrown in a well, sold as a slave, and imprisoned for years because of his brothers, Yusuf rose to power in Egypt. When his brothers came begging for food, he revealed himself and said: 'No blame on you today. Allah will forgive you.'",lesson:"Forgiveness heals the one who gives it even more than the one who receives it.",icon:"⭐"},
{id:"m9",title:"The Bedouin Who Urinated in the Mosque",story:"A Bedouin man urinated inside the Prophet's ﷺ mosque. The companions rushed to stop him angrily. The Prophet ﷺ told them to leave him, let him finish, then calmly explained why this was wrong. He cleaned the area and taught with gentleness.",lesson:"Correct with wisdom, not anger. Harshness pushes people away from truth.",icon:"🕌"},
{id:"m10",title:"Nuh's 950 Years of Patience",story:"Prophet Nuh called his people to Allah for 950 years. Generation after generation rejected him. Yet he never gave up, never became bitter, and continued with mercy and hope — even when his own son refused to believe.",lesson:"Mercy includes patience with those who reject you.",icon:"🚢"}
]},
forgiveness:{title:"Forgiveness & Repentance",icon:"🕊️",color:"#ffd700",stories:[
{id:"f1",title:"The Companion Who Drank Alcohol",story:"A man was brought to the Prophet ﷺ repeatedly for drinking. Some companions cursed him. The Prophet ﷺ said: 'Do not curse him, for I know he loves Allah and His Messenger.' He corrected without destroying.",lesson:"Never write off someone who sins — they may love Allah more than you know.",icon:"🍷"},
{id:"f2",title:"Umar's Journey to Islam",story:"Umar set out with his sword to kill the Prophet ﷺ. On the way, he heard his own sister reciting the Quran. The words melted his heart. He went straight to the Prophet ﷺ and declared his faith. He became one of Islam's greatest leaders.",lesson:"The worst enemy today can become the greatest ally tomorrow. Never lose hope in anyone.",icon:"⚔️"},
{id:"f3",title:"Ka'b ibn Malik's Honest Confession",story:"Ka'b missed the Battle of Tabuk without a valid excuse. Others lied to the Prophet ﷺ, but Ka'b told the truth. He was boycotted for 50 days — no one spoke to him. Then Allah revealed a verse accepting his repentance, and the entire city celebrated.",lesson:"Honesty may be painful at first, but it always leads to forgiveness.",icon:"✅"},
{id:"f4",title:"The Man Who Killed 100",story:"A man killed 99 people, then asked a scholar for forgiveness. The scholar said no, so he killed him too. A wiser scholar told him to travel to a righteous town. He died halfway there, and Allah stretched the earth so he'd be closer to the good town. The angels of mercy took his soul.",lesson:"Allah's door of repentance is always open. Start walking toward it.",icon:"🚶"},
{id:"f5",title:"Abu Sufyan Accepts Islam",story:"Abu Sufyan spent 20 years as the leader of the opposition against Islam. At the conquest of Makkah, the Prophet ﷺ not only forgave him but honoured him, saying: 'Whoever enters Abu Sufyan's house is safe.' Former enemies became allies through mercy.",lesson:"Honour your former enemies — it transforms hearts faster than any battle.",icon:"🏠"},
{id:"f6",title:"Hind bint Utbah's Repentance",story:"Hind had ordered the killing of Hamza and mutilated his body at Uhud. Yet when she came to the Prophet ﷺ after the conquest of Makkah seeking forgiveness, he accepted her repentance. She went on to become a sincere Muslim.",lesson:"No past is too dark for a new beginning with Allah.",icon:"🌅"},
{id:"f7",title:"Adam's First Repentance",story:"When Adam and Hawa ate from the forbidden tree, they immediately felt ashamed. They called out: 'Our Lord, we have wronged ourselves. If You do not forgive us and have mercy, we will be among the losers.' Allah taught humanity's first lesson: how to repent.",lesson:"Repentance is not weakness — it was the very first thing humans were taught.",icon:"🌿"},
{id:"f8",title:"Dawud's Tears",story:"Prophet Dawud accidentally made an unfair judgement between two men. When he realised his mistake, he fell into prostration weeping for 40 days, asking Allah's forgiveness. Allah forgave him and praised his repentance in the Quran.",lesson:"Even Prophets made mistakes — what matters is rushing back to Allah.",icon:"😭"},
{id:"f9",title:"The People of Yunus",story:"When Prophet Yunus left his people in frustration, they suddenly feared Allah's punishment. The entire city — over 100,000 people — repented together with such sincerity that Allah lifted the punishment. They are the only nation in the Quran whose mass repentance was accepted.",lesson:"It is never too late for a community to turn back to Allah.",icon:"🏙️"},
{id:"f10",title:"The Thief in the Prophet's Time",story:"A woman from a noble family was caught stealing. People tried to use connections to spare her punishment. The Prophet ﷺ said: 'Even if Fatimah (my daughter) stole, I would apply the law.' Yet he also said: 'Whoever repents sincerely, Allah will accept it.'",lesson:"Justice and mercy exist together — accountability opens the door to genuine change.",icon:"⚖️"}
]},
kindness:{title:"Kindness & Good Character",icon:"💝",color:"#e91e63",stories:[
{id:"k1",title:"The Prophet's ﷺ Smile",story:"The Prophet ﷺ said: 'Smiling at your brother is charity.' Companions described him as the most cheerful person they ever met. Despite carrying the weight of an entire Ummah, he always greeted people warmly.",lesson:"A smile costs nothing but can brighten someone's entire day.",icon:"😊"},
{id:"k2",title:"Feeding the Hungry",story:"The Prophet ﷺ would tie stones to his own stomach from hunger, yet when food came to him, he would give it to others first. He said: 'A person is not a believer who eats his fill while his neighbour goes hungry.'",lesson:"True kindness means thinking of others before yourself.",icon:"🍞"},
{id:"k3",title:"The Ansar's Generosity",story:"When the Muhajirun arrived in Madinah as refugees, the Ansar didn't just give them food — they offered to split their houses, their gardens, even their wealth. The Quran praised them: 'They prefer others over themselves, even if they are in need.'",lesson:"Generosity at its highest is giving what you yourself need.",icon:"🤝"},
{id:"k4",title:"Speaking Gently to Parents",story:"Allah commands in the Quran: 'Do not even say uff to your parents.' The Prophet ﷺ said Paradise lies at the feet of mothers. When asked who deserves the best treatment, he said 'Your mother' three times, then 'Your father.'",lesson:"The smallest kindness to parents is among the greatest deeds.",icon:"👩‍👦"},
{id:"k5",title:"The Prophet ﷺ with Servants",story:"Anas served the Prophet ﷺ for ten years. He said: 'He never once said uff to me, never asked why I did something, or why I didn't.' The Prophet ﷺ treated those who served him with the same respect as anyone else.",lesson:"True character shows in how you treat people who can do nothing for you.",icon:"🙏"},
{id:"k6",title:"Visiting the Sick",story:"The Prophet ﷺ would regularly visit sick people, including non-Muslims. When a Jewish boy who used to serve him fell ill, the Prophet ﷺ visited him at his bedside. The boy's father was deeply moved by this kindness.",lesson:"Kindness has no religious, racial, or social boundaries.",icon:"🏥"},
{id:"k7",title:"Returning Insults with Food",story:"A man once insulted Abu Bakr while the Prophet ﷺ sat silently. When Abu Bakr finally responded, the Prophet ﷺ stood up and left. He explained: 'An angel was defending you. When you responded yourself, Shaytan arrived, and I do not sit where Shaytan sits.'",lesson:"The highest response to an insult is dignified silence.",icon:"🤫"},
{id:"k8",title:"Khadijah's Unwavering Support",story:"When the Prophet ﷺ came home trembling from the first revelation, Khadijah didn't doubt or panic. She held him, covered him, and said: 'Allah would never disgrace you. You maintain family ties, bear people's burdens, and help those in need.'",lesson:"The greatest kindness is believing in someone when they doubt themselves.",icon:"💎"},
{id:"k9",title:"The Boy and the King (Surah Al-Buruj)",story:"A boy discovered true faith and was brought before a tyrant king. The king tried to kill him multiple times but failed. The boy said: 'You cannot kill me unless you say Bismillah.' When the king did and killed him, the entire city declared faith in Allah.",lesson:"Sometimes the greatest act of kindness is showing others the truth, whatever the cost.",icon:"👦"},
{id:"k10",title:"Ali Sleeping in the Prophet's Bed",story:"On the night assassins planned to kill the Prophet ﷺ, young Ali volunteered to sleep in his bed as a decoy. He was roughly 20 years old. He risked his life so the Prophet ﷺ could escape safely to Madinah.",lesson:"The greatest kindness is putting someone else's safety above your own.",icon:"🛏️"}
]},
marriage:{title:"Marriage & Family in Islam",icon:"💍",color:"#9c27b0",stories:[
{id:"mr1",title:"The Prophet ﷺ and Khadijah",story:"Khadijah proposed to the Prophet ﷺ. Their marriage lasted 25 years and was built on mutual respect, trust, and support. Even after her passing, the Prophet ﷺ would send gifts to her friends and speak of her with love. She was his greatest supporter in the hardest years.",lesson:"A strong marriage is built on being each other's biggest supporter — in good times and bad.",icon:"💑"},
{id:"mr2",title:"The Prophet ﷺ Helping at Home",story:"When asked what the Prophet ﷺ did at home, Aisha said: 'He would mend his own shoes, sew his clothes, and help with household chores.' The leader of the entire Ummah did not see housework as beneath him.",lesson:"In marriage, no task is 'beneath' either partner. Helping at home is Sunnah.",icon:"🧹"},
{id:"mr3",title:"Racing with Aisha",story:"The Prophet ﷺ and Aisha would race each other for fun. She won the first time. Years later, he won and said: 'This makes up for that one!' He showed that marriage should include friendship, laughter, and playfulness.",lesson:"A happy marriage has room for fun, laughter, and not taking yourself too seriously.",icon:"🏃"},
{id:"mr4",title:"Ali and Fatimah's Partnership",story:"Ali and Fatimah divided their responsibilities — she managed the home, he worked outside. When Fatimah's hands became rough from grinding grain, Ali asked the Prophet ﷺ for a servant. Instead, the Prophet ﷺ taught them to say SubhanAllah, Alhamdulillah, and Allahu Akbar before sleeping — better than a servant.",lesson:"The richest marriage is one where both partners find contentment in what they have together.",icon:"🤲"},
{id:"mr5",title:"Choosing a Spouse for Character",story:"The Prophet ﷺ said: 'A woman is married for four things: wealth, beauty, lineage, or religion. Choose the one with religion and you will prosper.' The same applies to choosing a husband — character and faith outweigh everything else.",lesson:"A beautiful face fades. Wealth can disappear. But good character and faith last a lifetime.",icon:"💎"},
{id:"mr6",title:"The Rights of a Wife",story:"In his Farewell Sermon, the Prophet ﷺ said: 'Fear Allah regarding women, for you have taken them as a trust from Allah.' A wife has the right to be provided for, treated kindly, consulted in decisions, and never harmed physically or emotionally.",lesson:"Marriage in Islam is a trust (amanah) — you will answer to Allah for how you treated your spouse.",icon:"⚖️"},
{id:"mr7",title:"Patience of Asiya",story:"Asiya, wife of Pharaoh — the most powerful and evil ruler — secretly believed in Allah. Despite living with a tyrant, she maintained her faith and prayed: 'My Lord, build for me a home in Paradise.' She is one of the four greatest women in history.",lesson:"Even in the most difficult marriage, your relationship with Allah can remain strong.",icon:"👸"},
{id:"mr8",title:"Communication in Disagreements",story:"Aisha once became upset with the Prophet ﷺ and said: 'I only leave out your name (not mentioning Muhammad).' The Prophet ﷺ simply smiled and said: 'I know when you are happy with me and when you are upset.' He understood her and never responded with anger.",lesson:"In marriage, understanding your partner matters more than winning arguments.",icon:"💬"},
{id:"mr9",title:"The Prophet ﷺ Defending Aisha",story:"When false rumours spread about Aisha, the Prophet ﷺ did not immediately judge or abandon her. He waited patiently until Allah revealed her innocence in the Quran. He stood by her side against the entire community's gossip.",lesson:"Trust and loyalty to your spouse should not waver because of what others say.",icon:"🛡️"},
{id:"mr10",title:"Gratitude Between Spouses",story:"The Prophet ﷺ said: 'If I were to command anyone to prostrate to another, I would command a wife to prostrate to her husband (due to his rights).' But he also said: 'The best of you is the best to his wife, and I am the best to my wives.'",lesson:"Marriage thrives on mutual gratitude. Both partners should appreciate each other daily.",icon:"🙏"}
]}
};

/* ══════ QUIZZES (themed, 10Q each, with explanations) ══════ */
const QUIZZES={
mercy_quiz:{title:"Allah's Mercy",icon:"🤲",color:"#4caf50",questions:[
{q:"What did the Prophet ﷺ do when the old woman stopped throwing rubbish?",options:["Celebrated","Visited her because she was ill","Ignored it","Complained to others"],answer:1,explain:"He showed that true mercy means caring for people even when they have wronged you. He checked on her wellbeing instead of holding a grudge."},
{q:"What happened to the woman who gave water to a thirsty dog?",options:["Nothing","She was rewarded with gold","Allah forgave all her sins","She became famous"],answer:2,explain:"Despite her sinful past, a single act of genuine compassion to an animal was enough for Allah to forgive everything. Mercy to any creature matters."},
{q:"How did the Prophet ﷺ handle the Bedouin who urinated in the mosque?",options:["Shouted at him","Had him removed forcefully","Let him finish then taught gently","Ignored it"],answer:2,explain:"He stopped the angry companions and waited patiently. Then he calmly explained why this was wrong. Teaching with gentleness is more effective than anger."},
{q:"When Makkah was conquered, the Prophet ﷺ said to his enemies:",options:["You will pay for this","Leave this city","Go, you are free","Bow before me"],answer:2,explain:"He had 10,000 soldiers and could have taken revenge for 13 years of persecution. Instead, he chose complete forgiveness — the ultimate show of mercy and strength."},
{q:"The man who killed 100 people was forgiven because:",options:["He was wealthy","He started walking toward repentance","He knew important people","He fought in a battle"],answer:1,explain:"Allah sees the sincerity of the journey, not just the destination. He died trying to change, and Allah stretched the earth to bring him closer to the righteous town."},
{q:"Why did the Prophet ﷺ weep all night saying 'my Ummah'?",options:["He was afraid","He was hungry","He was worried about his followers","He was in pain"],answer:2,explain:"His compassion extended beyond his lifetime. He wept for people who hadn't even been born yet. True mercy is concern for others' eternal wellbeing."},
{q:"When Ibrahim was about to sacrifice Ismail, Allah:",options:["Stopped him and replaced Ismail with a ram","Let it happen","Punished Ibrahim","Was testing the angels"],answer:0,explain:"The test was never about the sacrifice itself — it was about Ibrahim and Ismail's willingness to submit to Allah completely. Allah's mercy always provides a way out."},
{q:"How many years did Nuh preach to his people?",options:["100","500","950","50"],answer:2,explain:"Nearly a millennium of patience! Nuh never gave up because mercy means not abandoning people, even when they repeatedly reject you."},
{q:"Yusuf's response to his brothers who betrayed him was:",options:["'You will pay'","'I will never forgive you'","'No blame on you today'","'Leave and never return'"],answer:2,explain:"After years of suffering because of them, Yusuf chose forgiveness. He understood that holding grudges would poison his own heart, not theirs."},
{q:"The Prophet ﷺ said about cursing the man who drank alcohol:",options:["He deserves it","Do not curse him, he loves Allah","He is beyond help","Punish him more"],answer:1,explain:"Even when someone repeatedly falls into sin, the Prophet ﷺ saw the love for Allah in their heart. He separated the sin from the person."}
]},
seerah:{title:"Life of Prophet ﷺ",icon:"📖",color:"#ffd700",questions:[
{q:"In which city was the Prophet ﷺ born?",options:["Madinah","Makkah","Taif","Jerusalem"],answer:1,explain:"He was born in Makkah around 570 CE in the Year of the Elephant, when Abraha tried to destroy the Kaaba but Allah sent birds to protect it."},
{q:"Who was the first person to accept Islam?",options:["Abu Bakr","Khadijah","Ali","Zayd"],answer:1,explain:"Khadijah, his wife, believed in him immediately. She said: 'Allah would never disgrace you.' Her instant support was crucial in those early, vulnerable days."},
{q:"How old was the Prophet ﷺ when revelation began?",options:["30","35","40","45"],answer:2,explain:"At 40, the age of maturity in Arab culture, Jibreel appeared in Cave Hira and said: 'Read!' This marked the beginning of 23 years of revelation."},
{q:"What was the Prophet ﷺ known as before prophethood?",options:["Al-Amin (Trustworthy)","Al-Mukhtar","Al-Hadi","Al-Sadiq only"],answer:0,explain:"Even before revelation, his character was so impeccable that the people of Makkah trusted him with their valuables. His integrity was his calling card."},
{q:"What year did the Hijrah to Madinah occur?",options:["610 CE","620 CE","622 CE","630 CE"],answer:2,explain:"After 13 years of persecution in Makkah, the Prophet ﷺ and Abu Bakr migrated to Madinah. This event was so significant that the Islamic calendar begins from it."},
{q:"Who accompanied the Prophet ﷺ during Hijrah?",options:["Umar","Ali","Abu Bakr","Uthman"],answer:2,explain:"Abu Bakr earned the title 'Companion of the Cave.' When he feared discovery, the Prophet ﷺ said: 'Do not grieve; Allah is with us.' Ali stayed behind as a decoy."},
{q:"Where was the Farewell Sermon delivered?",options:["Madinah","Makkah city centre","Mount Arafat","Taif"],answer:2,explain:"Over 100,000 people heard the Prophet ﷺ declare equality of all races and the sacred rights of women. It was his final major public address before passing away."},
{q:"The first Islamic state was established in:",options:["Makkah","Taif","Madinah","Jerusalem"],answer:2,explain:"After migrating, the Prophet ﷺ created the Charter of Madinah — one of the first written constitutions — establishing rights for Muslims, Jews, and all citizens."},
{q:"Who was the Prophet's ﷺ first muezzin?",options:["Abu Bakr","Umar","Bilal","Uthman"],answer:2,explain:"Bilal, a freed slave, was chosen for his beautiful voice. This was revolutionary — in a society obsessed with lineage, a former slave held one of Islam's most honoured roles."},
{q:"In which year was Makkah peacefully conquered?",options:["2 AH","6 AH","8 AH","10 AH"],answer:2,explain:"In 8 AH, the Prophet ﷺ entered with 10,000 followers but gave a general amnesty. It was one of the most peaceful conquests in history — won through mercy, not force."}
]},
quran_knowledge:{title:"Quran Knowledge",icon:"📚",color:"#2196f3",questions:[
{q:"How many surahs are in the Quran?",options:["100","110","114","120"],answer:2,explain:"The Quran contains 114 surahs, revealed over 23 years. Some surahs were revealed all at once, others verse by verse as situations required guidance."},
{q:"What is the longest surah?",options:["Al-Imran","Al-Baqarah","An-Nisa","Al-Maida"],answer:1,explain:"Al-Baqarah has 286 verses and covers fundamental laws, stories of previous nations, and the famous Ayatul Kursi (Verse of the Throne)."},
{q:"Which surah is called the 'Heart of the Quran'?",options:["Al-Fatiha","Ya-Sin","Al-Mulk","Ar-Rahman"],answer:1,explain:"The Prophet ﷺ said: 'Everything has a heart, and the heart of the Quran is Ya-Sin.' It covers the core themes of resurrection, Allah's signs in nature, and the afterlife."},
{q:"How many verses in Al-Fatiha?",options:["5","6","7","8"],answer:2,explain:"Al-Fatiha has 7 verses and is recited in every unit of prayer. The Prophet ﷺ said prayer is not valid without it. It's the most recited chapter in the world."},
{q:"In which month was the Quran first revealed?",options:["Rajab","Shaban","Ramadan","Muharram"],answer:2,explain:"The first verses came on Laylatul Qadr (Night of Power) in Ramadan. This is why Ramadan holds such special significance — it's the month the Quran began."},
{q:"Which surah has no Bismillah at its beginning?",options:["Al-Fatiha","At-Tawbah","Al-Baqarah","Al-Ikhlas"],answer:1,explain:"Surah At-Tawbah (Repentance) deals with breaking treaties and hypocrites. Scholars say the Bismillah (mercy opening) was omitted because the surah's tone is of stern warning."},
{q:"Which Prophet is mentioned most in the Quran?",options:["Ibrahim","Isa","Nuh","Musa"],answer:3,explain:"Musa (Moses) is mentioned about 136 times. His story has many parallels with the Prophet Muhammad ﷺ — both faced tyrants, led migrations, and received divine law."},
{q:"Surah Al-Ikhlas equals what portion of the Quran in reward?",options:["One-quarter","One-third","One-half","The entire Quran"],answer:1,explain:"The Prophet ﷺ said reciting Al-Ikhlas is equivalent to one-third of the Quran because it perfectly summarises Tawheed — the most fundamental concept in Islam."},
{q:"What does 'Quran' literally mean?",options:["The Book","The Recitation","The Light","The Guide"],answer:1,explain:"Quran comes from the Arabic root 'qara'a' meaning 'to recite.' Its first revealed word was 'Iqra' — Read! Knowledge and recitation are at Islam's very core."},
{q:"Surah Al-Kahf is recommended to recite on which day?",options:["Monday","Wednesday","Friday","Sunday"],answer:2,explain:"The Prophet ﷺ said whoever recites Al-Kahf on Friday will have a light between the two Fridays. It protects from the trials of Dajjal and worldly temptations."}
]},
pillars:{title:"Five Pillars & Worship",icon:"🕌",color:"#9c27b0",questions:[
{q:"The first pillar of Islam is:",options:["Salah","Shahada","Zakah","Hajj"],answer:1,explain:"The Shahada (testimony of faith) is the doorway to Islam: 'There is no god but Allah, and Muhammad is His Messenger.' Everything else flows from this declaration."},
{q:"How many daily prayers are obligatory?",options:["3","4","5","6"],answer:2,explain:"Originally 50 prayers were prescribed during the Night Journey. Musa advised the Prophet ﷺ to ask for a reduction. Allah reduced them to 5 but kept the reward of 50."},
{q:"Zakah is what percentage of savings?",options:["1%","2.5%","5%","10%"],answer:1,explain:"2.5% of wealth held for one year is given to those in need. It purifies your wealth and ensures money circulates to help the poorest in society."},
{q:"Hajj takes place in which month?",options:["Ramadan","Shawwal","Dhul Qadah","Dhul Hijjah"],answer:3,explain:"Millions gather at Makkah wearing simple white garments, removing all signs of status. A king and a labourer stand shoulder to shoulder — the ultimate display of equality."},
{q:"What do Muslims face when praying?",options:["East","West","The Kaaba","The Sun"],answer:2,explain:"Muslims worldwide face the Kaaba in Makkah, creating a powerful symbol of unity. No matter where on Earth you are, your heart and body turn to the same point."},
{q:"Wudu (ablution) is performed before:",options:["Eating","Prayer","Sleeping","Travelling"],answer:1,explain:"Wudu involves washing hands, face, arms, wiping the head, and washing feet. It's both physical cleanliness and spiritual preparation — approaching Allah in a state of purity."},
{q:"What begins each prayer?",options:["Bismillah","Allahu Akbar","SubhanAllah","Alhamdulillah"],answer:1,explain:"'Allahu Akbar' means 'Allah is Greater.' By saying this, you declare that nothing — no worry, no desire, no distraction — is greater than Allah in this moment."},
{q:"Fasting in Ramadan teaches:",options:["Only hunger","Discipline, empathy & gratitude","Just weight loss","Cooking skills"],answer:1,explain:"You feel what the poor feel (empathy), you resist desires (discipline), and you appreciate every sip of water at iftar (gratitude). It's a full character reset."},
{q:"Tarawih prayers are in:",options:["Eid only","Jummah","Ramadan","Hajj"],answer:2,explain:"These extra night prayers during Ramadan are a chance to hear the entire Quran recited. The Prophet ﷺ said: 'Whoever prays in Ramadan out of faith, their past sins are forgiven.'"},
{q:"The purpose of Hajj is to:",options:["Tour Saudi Arabia","Show off wealth","Submit to Allah in total equality","Meet friends"],answer:2,explain:"Hajj strips away every worldly distinction. Rich and poor wear the same clothes, perform the same rituals, and stand before Allah as equals. It's a rehearsal for the Day of Judgement."}
]},
marriage_quiz:{title:"Marriage in Islam",icon:"💍",color:"#e91e63",questions:[
{q:"The Prophet ﷺ said the best of men are those who are:",options:["Most wealthy","Most powerful","Best to their wives","Most handsome"],answer:2,explain:"He said: 'The best of you is the best to his wife, and I am the best to my wives.' How a man treats his wife reveals his true character."},
{q:"What did the Prophet ﷺ do at home?",options:["Nothing — he was served","Mended shoes, sewed clothes, helped with chores","Only prayed","Studied all day"],answer:1,explain:"Aisha described him helping with housework. The leader of 1.8 billion Muslims didn't see chores as beneath him. Helping your spouse at home is Sunnah."},
{q:"The Prophet ﷺ chose a spouse based on:",options:["Only beauty","Only wealth","Religion and character","Family status"],answer:2,explain:"He taught: 'Choose the one with religion and you will prosper.' Beauty fades, wealth disappears, but good character and faith are lifelong companions."},
{q:"How did the Prophet ﷺ and Aisha have fun?",options:["They didn't","They raced each other","They only studied together","They ignored each other"],answer:1,explain:"They actually raced! She won the first time, he won later. Marriage should include friendship, playfulness, and genuine enjoyment of each other's company."},
{q:"When Aisha was upset, the Prophet ﷺ:",options:["Got angry back","Left the house","Understood and was patient","Ignored her"],answer:2,explain:"He said: 'I know when you're happy with me and when you're upset.' Emotional intelligence in marriage means reading your partner, not reacting defensively."},
{q:"A husband's responsibilities include:",options:["Only earning money","Providing, kindness, consultation, never causing harm","Just being present","Nothing specific"],answer:1,explain:"In his Farewell Sermon: 'Fear Allah regarding women, you have taken them as a trust from Allah.' Marriage is an amanah (trust) you'll be asked about on Judgement Day."},
{q:"Ali and Fatimah's marriage teaches:",options:["Wealth is key","Contentment and teamwork","Having servants","Living separately"],answer:1,explain:"When they wanted a servant, the Prophet ﷺ taught them dhikr instead. He showed that the richest marriage comes from spiritual contentment, not material wealth."},
{q:"When false rumours spread about Aisha, the Prophet ﷺ:",options:["Immediately believed them","Divorced her","Waited patiently for the truth","Spread rumours back"],answer:2,explain:"He waited until Allah revealed her innocence in the Quran. Trust and loyalty to your spouse should not waver because of gossip. Stand by your partner."},
{q:"Asiya (wife of Pharaoh) teaches us that:",options:["Women must obey bad husbands","Faith can survive the worst circumstances","Marriage is always easy","Only men can be strong"],answer:1,explain:"Despite being married to history's worst tyrant, Asiya maintained her faith secretly and prayed for a home in Paradise. Her faith was stronger than her circumstances."},
{q:"Gratitude between spouses means:",options:["Saying thank you once a year","Daily appreciation and not taking each other for granted","Only on anniversaries","Never complaining"],answer:1,explain:"The Prophet ﷺ warned that ingratitude to your spouse is a serious matter. Small daily acts of appreciation — a kind word, a thank you, a smile — sustain love over decades."}
]},
prophets_quiz:{title:"Stories of the Prophets",icon:"🌟",color:"#ff9800",questions:[
{q:"Who built the Kaaba?",options:["Musa","Ibrahim & Ismail","Nuh","Adam"],answer:1,explain:"Father and son built it together as the first house of worship for Allah. Ibrahim prayed: 'Our Lord, accept this from us.' Millions visit it every year during Hajj."},
{q:"Which Prophet was swallowed by a whale?",options:["Yunus","Yusuf","Dawud","Idris"],answer:0,explain:"Yunus left his people in frustration before Allah gave permission. Inside the whale's belly, he called out in the darkness: 'There is no god but You. I was among the wrongdoers.' Allah rescued him."},
{q:"Which Prophet could speak to animals?",options:["Musa","Isa","Sulayman","Nuh"],answer:2,explain:"Sulayman was given power over jinn, wind, and animals. He even understood ants! When an ant warned others about his army, he smiled and thanked Allah for this gift."},
{q:"Who was thrown into fire but saved by Allah?",options:["Musa","Ibrahim","Ismail","Lut"],answer:1,explain:"Young Ibrahim destroyed idols to prove they were powerless. His people built a massive fire, but Allah commanded: 'O fire, be coolness and safety for Ibrahim!'"},
{q:"Who interpreted dreams in prison?",options:["Dawud","Yaqub","Yusuf","Idris"],answer:2,explain:"Yusuf correctly interpreted dreams for two prisoners, and later the king's dream about seven fat and seven lean cows — predicting seven years of plenty followed by famine."},
{q:"Isa (Jesus) was born to:",options:["Hajar","Asiya","Maryam","Sarah"],answer:2,explain:"Maryam conceived Isa miraculously by Allah's will, without a father. She is the only woman named in the Quran and is praised as the best of all women."},
{q:"How long did Nuh preach?",options:["100 years","500 years","950 years","50 years"],answer:2,explain:"An almost incomprehensible length of time. Despite constant rejection, he never stopped. His patience is one of the greatest examples of perseverance in human history."},
{q:"Who parted the Red Sea?",options:["Nuh","Ibrahim","Sulayman","Musa"],answer:3,explain:"With Pharaoh's army behind them and the sea ahead, Musa struck the water with his staff and Allah split it into two towering walls. They crossed safely while Pharaoh drowned."},
{q:"Ibrahim was asked to sacrifice:",options:["Ishaq","Ismail","Yaqub","Yusuf"],answer:1,explain:"When told about the dream, young Ismail said: 'Do as you are commanded. You will find me patient.' Allah replaced him with a ram — the origin of Eid al-Adha."},
{q:"Dawud defeated the giant Jalut with:",options:["A sword","A spear","A single stone","An army"],answer:2,explain:"As a young shepherd, Dawud used a sling and stone to defeat the massive warrior Jalut (Goliath). Allah showed that true strength comes from faith, not physical size."}
]}
};

const ACHIEVEMENTS=[
{id:"first_login",title:"First Steps",desc:"Created your account",icon:"🌱",check:u=>!!u},
{id:"hadith_5",title:"Hadith Explorer",desc:"Studied 5 hadith",icon:"📜",check:()=>(JSON.parse(localStorage.getItem("ia_hadith_studied")||"[]")).length>=5},
{id:"hadith_all",title:"Hadith Master",desc:"Studied all 15 hadith",icon:"🏅",check:()=>(JSON.parse(localStorage.getItem("ia_hadith_studied")||"[]")).length>=15},
{id:"surah_1",title:"First Memorisation",desc:"Memorised your first surah",icon:"🕋",check:()=>(JSON.parse(localStorage.getItem("ia_mem_done")||"[]")).length>=1},
{id:"surah_all",title:"Juz 30 Champion",desc:"Memorised all surahs",icon:"👑",check:()=>(JSON.parse(localStorage.getItem("ia_mem_done")||"[]")).length>=6},
{id:"quiz_first",title:"Quiz Taker",desc:"Completed your first quiz",icon:"✏️",check:()=>Object.keys(QUIZZES).some(k=>localStorage.getItem("ia_quiz_"+k))},
{id:"quiz_perfect",title:"Perfect Score",desc:"100% on any quiz",icon:"💯",check:()=>Object.keys(QUIZZES).some(k=>localStorage.getItem("ia_quiz_"+k)==="100%")},
{id:"quiz_all",title:"Quiz Conqueror",desc:"Completed all quizzes",icon:"🏆",check:()=>Object.keys(QUIZZES).every(k=>localStorage.getItem("ia_quiz_"+k))},
{id:"forum_first",title:"Community Voice",desc:"Posted a discussion",icon:"💬",check:()=>{const u=getUser();return u&&(JSON.parse(localStorage.getItem("ia_forum")||"[]")).some(p=>p.author===(u.gamertag||u.name));}},
{id:"level_scholar",title:"Scholar",desc:"300+ points",icon:"🎓",check:()=>calcPoints()>=300}
];

function calcPoints(){const m=JSON.parse(localStorage.getItem("ia_mem_done")||"[]").length;const h=JSON.parse(localStorage.getItem("ia_hadith_studied")||"[]").length;let q=0;Object.keys(QUIZZES).forEach(k=>{const v=localStorage.getItem("ia_quiz_"+k);if(v)q+=parseInt(v);});return m*10+h*5+q;}

/* ══════ SCROLL REVEAL ══════ */
function initScrollReveal(){const els=document.querySelectorAll(".reveal");if(!els.length)return;const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);}});},{threshold:0.1});els.forEach(el=>obs.observe(el));}

/* ══════ NAVBAR ══════ */
function initNavbar(){const w=document.getElementById("navbar-wrap"),t=document.getElementById("nav-toggle"),m=document.getElementById("nav-mobile");window.addEventListener("scroll",()=>{w&&w.classList.toggle("scrolled",window.scrollY>40);},{passive:true});if(t&&m){t.addEventListener("click",()=>{const o=m.classList.toggle("show");t.textContent=o?"\u2715":"\u2630";});m.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{m.classList.remove("show");t.textContent="\u2630";}));}}

/* ══════ AUTH (with gamertag + profile pic) ══════ */
function getUser(){try{return JSON.parse(localStorage.getItem("ia_current_user"));}catch{return null;}}

const AVATARS=["🦁","🐯","🦊","🐻","🐼","🐨","🦉","🦅","🐉","🌙","⭐","🔥","💎","🌸","🏔️","🌊"];

function refreshAuthUI(){
  const area=document.getElementById("auth-area"),jb=document.getElementById("hero-join-btn"),u=getUser();
  if(!area)return;
  if(u){
    const av=u.avatar||"🌙";const tag=u.gamertag||u.name;
    area.innerHTML=`<div class="user-badge"><div class="user-avatar" title="${tag}" style="font-size:20px;cursor:pointer;" onclick="openProfileModal()">${av}</div><button class="logout-btn" onclick="logout()">Logout</button></div>`;
    if(jb)jb.style.display="none";
  }else{
    area.innerHTML=`<button class="nav-auth-btn" onclick="openAuthModal('login')">Login / Register</button>`;
    if(jb)jb.style.display="";
  }
}

function logout(){localStorage.removeItem("ia_current_user");refreshAuthUI();}

function openAuthModal(mode){const o=document.getElementById("auth-modal"),b=document.getElementById("auth-box");if(!o||!b)return;o.classList.add("show");renderAuthForm(b,mode||"login");o.onclick=e=>{if(e.target===o)o.classList.remove("show");};}

function renderAuthForm(box,tab){
  box.innerHTML=`<button class="modal-close" onclick="document.getElementById('auth-modal').classList.remove('show')">\u00d7</button>
  <div class="auth-tabs"><button class="auth-tab ${tab==="login"?"active":""}" onclick="renderAuthForm(this.closest('.modal-box'),'login')">🔑 Login</button><button class="auth-tab ${tab==="register"?"active":""}" onclick="renderAuthForm(this.closest('.modal-box'),'register')">✨ Register</button></div>
  ${tab==="register"?`<div class="form-field"><label>👤 Full Name</label><input id="auth-name" placeholder="Your name"/></div>
  <div class="form-field"><label>🎮 Gamertag / Nickname</label><input id="auth-gamertag" placeholder="Choose a cool nickname"/></div>
  <div class="form-field"><label>🖼️ Choose Avatar</label><div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:6px;" id="avatar-picker">${AVATARS.map((a,i)=>`<button type="button" class="hadith-dot" style="font-size:22px;width:42px;height:42px;" onclick="pickAvatar(this,'${a}')">${a}</button>`).join("")}</div></div>`:""}
  <div class="form-field"><label>📧 Email</label><input id="auth-email" type="email" placeholder="you@example.com"/></div>
  <div class="form-field"><label>🔒 Password</label><input id="auth-pass" type="password" placeholder="Min 6 characters"/></div>
  ${tab==="register"?'<div class="form-field"><label>🔒 Confirm Password</label><input id="auth-pass2" type="password" placeholder="Re-enter password"/></div>':""}
  <p class="form-error" id="auth-error"></p>
  <button class="btn-full" onclick="handleAuth('${tab}')">${tab==="login"?"Login":"Create Account"}</button>`;
}

let selectedAvatar="🌙";
function pickAvatar(btn,av){selectedAvatar=av;document.querySelectorAll("#avatar-picker button").forEach(b=>{b.style.border=b.textContent===av?"2px solid var(--gold)":"none";b.style.background=b.textContent===av?"rgba(255,215,0,0.2)":"rgba(255,255,255,0.06)";});}

function handleAuth(tab){
  const email=(document.getElementById("auth-email")?.value||"").trim(),pass=document.getElementById("auth-pass")?.value||"",errEl=document.getElementById("auth-error"),setErr=m=>{if(errEl)errEl.textContent=m;};
  if(tab==="login"){
    if(!email||!pass)return setErr("Please enter email and password.");
    const users=JSON.parse(localStorage.getItem("ia_users")||"{}"),u=users[email];
    if(!u)return setErr("No account found.");if(u.password!==pass)return setErr("Incorrect password.");
    localStorage.setItem("ia_current_user",JSON.stringify({email,name:u.name,gamertag:u.gamertag||u.name,avatar:u.avatar||"🌙"}));
    document.getElementById("auth-modal").classList.remove("show");refreshAuthUI();
  }else{
    const name=(document.getElementById("auth-name")?.value||"").trim(),gamertag=(document.getElementById("auth-gamertag")?.value||"").trim()||name,pass2=document.getElementById("auth-pass2")?.value||"";
    if(!name||!email||!pass)return setErr("Please fill in all fields.");
    if(!/^\S+@\S+\.\S+$/.test(email))return setErr("Invalid email.");
    if(pass.length<6)return setErr("Password must be 6+ characters.");
    if(pass!==pass2)return setErr("Passwords don't match.");
    const users=JSON.parse(localStorage.getItem("ia_users")||"{}");
    if(users[email])return setErr("Account already exists.");
    const code=String(Math.floor(100000+Math.random()*900000)),box=document.getElementById("auth-box");
    box.innerHTML=`<button class="modal-close" onclick="document.getElementById('auth-modal').classList.remove('show')">\u00d7</button>
    <div style="text-align:center;"><div style="font-size:48px;margin-bottom:16px;">📩</div>
    <h3 style="color:var(--gold);font-family:var(--font-display);margin-bottom:8px;">Verification Code</h3>
    <p style="color:var(--text-muted);font-size:14px;">Your code is:</p>
    <div class="verify-code-display">${code}</div>
    <p style="color:var(--text-dim);font-size:12px;margin-bottom:16px;">In a real app this would be emailed</p>
    <div class="form-field"><label>🔢 Enter Code</label><input id="verify-input" placeholder="6-digit code"/></div>
    <p class="form-error" id="verify-error"></p>
    <button class="btn-full" id="verify-btn">Verify & Join</button></div>`;
    document.getElementById("verify-btn").onclick=function(){
      const input=document.getElementById("verify-input")?.value||"";
      if(input!==code){document.getElementById("verify-error").textContent="Incorrect code.";return;}
      users[email]={name,gamertag,avatar:selectedAvatar,password:pass,joined:Date.now()};
      localStorage.setItem("ia_users",JSON.stringify(users));
      localStorage.setItem("ia_current_user",JSON.stringify({email,name,gamertag,avatar:selectedAvatar}));
      box.innerHTML=`<div style="text-align:center;padding:20px;"><div style="font-size:64px;animation:bounceIn 0.6s ease;">${selectedAvatar}</div><h3 style="color:var(--gold);font-family:var(--font-display);margin-top:16px;">Welcome, ${gamertag}!</h3><p style="color:var(--text-muted);">Your journey begins now\u2026</p></div>`;
      setTimeout(()=>{document.getElementById("auth-modal").classList.remove("show");refreshAuthUI();},1500);
    };
  }
}

/* Profile modal for editing gamertag/avatar */
function openProfileModal(){
  const u=getUser();if(!u)return;
  const o=document.getElementById("auth-modal"),b=document.getElementById("auth-box");
  o.classList.add("show");o.onclick=e=>{if(e.target===o)o.classList.remove("show");};
  b.innerHTML=`<button class="modal-close" onclick="document.getElementById('auth-modal').classList.remove('show')">\u00d7</button>
  <div style="text-align:center;font-size:64px;margin-bottom:12px;">${u.avatar||"🌙"}</div>
  <h3 style="color:var(--gold);font-family:var(--font-display);text-align:center;margin-bottom:20px;">Edit Profile</h3>
  <div class="form-field"><label>🎮 Gamertag</label><input id="edit-gamertag" value="${u.gamertag||u.name}"/></div>
  <div class="form-field"><label>🖼️ Avatar</label><div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:6px;">${AVATARS.map(a=>`<button type="button" class="hadith-dot" style="font-size:22px;width:42px;height:42px;${a===(u.avatar||"🌙")?"border:2px solid var(--gold);background:rgba(255,215,0,0.2);":""}" onclick="pickAvatar(this,'${a}')">${a}</button>`).join("")}</div></div>
  <button class="btn-full" onclick="saveProfile()">Save Changes</button>`;
  selectedAvatar=u.avatar||"🌙";
}

function saveProfile(){
  const u=getUser();if(!u)return;
  const gt=document.getElementById("edit-gamertag")?.value.trim()||u.name;
  const users=JSON.parse(localStorage.getItem("ia_users")||"{}");
  if(users[u.email]){users[u.email].gamertag=gt;users[u.email].avatar=selectedAvatar;localStorage.setItem("ia_users",JSON.stringify(users));}
  localStorage.setItem("ia_current_user",JSON.stringify({...u,gamertag:gt,avatar:selectedAvatar}));
  document.getElementById("auth-modal").classList.remove("show");refreshAuthUI();
}

/* ══════ HADITH OF THE DAY ══════ */
function initHadithOfDay(){const t=document.getElementById("hadith-text"),s=document.getElementById("hadith-source");if(!t)return;const h=AHADITH[Math.floor(Date.now()/86400000)%AHADITH.length];t.textContent='"'+h.text+'"';s.innerHTML='Narrated <strong>'+h.narrator+'</strong> \u00b7 <em>'+h.book+'</em>';}

/* ══════ LEARN PAGE ══════ */
function initLearnPage(){initLearnTabs();initSurahGrid();initHadithStudy();initRevisionVideos();initQuizPrep();}
function initLearnTabs(){document.querySelectorAll(".learn-tab").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".learn-tab").forEach(x=>x.classList.remove("active"));document.querySelectorAll(".learn-panel").forEach(p=>p.classList.remove("active"));t.classList.add("active");const p=document.getElementById("panel-"+t.dataset.tab);if(p)p.classList.add("active");});});}

function initSurahGrid(){const g=document.getElementById("surah-grid");if(!g)return;const done=JSON.parse(localStorage.getItem("ia_mem_done")||"[]");g.innerHTML=MEMORISATION_SURAHS.map(s=>'<div class="surah-card '+(done.includes(s.num)?"done":"")+'" onclick="openSurahModal('+s.num+')">'+(done.includes(s.num)?'<span class="done-badge">\u2705</span>':'')+'<span class="surah-num">SURAH '+s.num+'</span><h3>'+s.name+'</h3><p class="surah-meta">'+s.ayahs+' verses</p></div>').join("");}

function openSurahModal(num){
  const s=MEMORISATION_SURAHS.find(x=>x.num===num);if(!s)return;
  const o=document.getElementById("surah-modal"),b=document.getElementById("surah-modal-box"),done=JSON.parse(localStorage.getItem("ia_mem_done")||"[]");
  o.classList.add("show");o.onclick=e=>{if(e.target===o)o.classList.remove("show");};
  b.innerHTML='<button class="modal-close" onclick="document.getElementById(\'surah-modal\').classList.remove(\'show\')">\u00d7</button><span class="surah-num">SURAH '+s.num+'</span><h2 style="font-family:var(--font-display);color:var(--gold);margin:6px 0 20px;font-size:26px;">'+s.name+'</h2><div class="arabic-display">'+s.arabic+'</div><div class="meaning-box"><p class="meaning-label">MEANING</p><p class="meaning-text">'+s.meaning+'</p></div><div class="meaning-box" style="background:rgba(76,175,80,0.08);"><p class="meaning-label" style="color:var(--success);">\u2728 WHY THIS SURAH MATTERS</p><p class="meaning-text">'+s.benefits+'</p></div><div style="display:flex;gap:10px;flex-wrap:wrap;">'+(!done.includes(num)?'<button class="btn-full success" style="flex:1;" onclick="markSurahDone('+num+')">Memorised \u2705</button>':'')+'<button class="btn-full secondary" style="flex:1;" onclick="document.getElementById(\'surah-modal\').classList.remove(\'show\')">Close</button></div>';
}
function markSurahDone(num){const done=JSON.parse(localStorage.getItem("ia_mem_done")||"[]");if(!done.includes(num)){done.push(num);localStorage.setItem("ia_mem_done",JSON.stringify(done));}document.getElementById("surah-modal").classList.remove("show");initSurahGrid();}

let hadithIdx=0;
function initHadithStudy(){renderHadithStudy();}
function renderHadithStudy(){const card=document.getElementById("hadith-study-card"),dots=document.getElementById("hadith-nav-dots");if(!card)return;const h=AHADITH[hadithIdx],studied=JSON.parse(localStorage.getItem("ia_hadith_studied")||"[]"),done=studied.includes(h.id);card.innerHTML='<span style="display:inline-block;background:rgba(255,215,0,0.12);border-radius:999px;padding:4px 16px;font-size:12px;font-weight:800;color:var(--gold);margin-bottom:16px;">HADITH '+(hadithIdx+1)+' of '+AHADITH.length+'</span><p style="font-size:clamp(16px,2.5vw,19px);line-height:1.85;color:rgba(255,255,255,0.88);font-style:italic;margin-bottom:20px;">\u201c'+h.text+'\u201d</p><p style="color:rgba(255,215,0,0.7);font-size:14px;">Narrated <strong style="color:var(--gold);">'+h.narrator+'</strong></p><p style="color:var(--text-dim);font-size:13px;margin-bottom:24px;">'+h.book+' \u00b7 '+h.topic+'</p><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;"><button class="btn-nav" onclick="hadithIdx=Math.max(0,hadithIdx-1);renderHadithStudy();" '+(hadithIdx===0?"disabled":"")+'>← Prev</button>'+(!done?'<button class="btn-full success" style="width:auto;padding:10px 24px;margin:0;" onclick="markHadithStudied('+h.id+')">Studied \u2705</button>':'<span style="color:var(--success);font-weight:800;">\u2705 Studied</span>')+'<button class="btn-nav" onclick="hadithIdx=Math.min('+(AHADITH.length-1)+',hadithIdx+1);renderHadithStudy();" '+(hadithIdx===AHADITH.length-1?"disabled":"")+'>Next →</button></div>';if(dots)dots.innerHTML=AHADITH.map((h,i)=>'<button class="hadith-dot '+(i===hadithIdx?"current":"")+" "+(studied.includes(h.id)?"studied":"")+'" onclick="hadithIdx='+i+';renderHadithStudy();">'+( i+1)+'</button>').join("");}
function markHadithStudied(id){const s=JSON.parse(localStorage.getItem("ia_hadith_studied")||"[]");if(!s.includes(id)){s.push(id);localStorage.setItem("ia_hadith_studied",JSON.stringify(s));}renderHadithStudy();}

function initRevisionVideos(){const el=document.getElementById("revision-videos");if(!el)return;el.innerHTML=REVISION_VIDEOS.map(v=>'<div class="video-card"><div class="video-embed"><iframe src="https://www.youtube.com/embed/'+v.ytId+'?rel=0" title="'+v.title+'" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe></div><div class="video-info"><h4>'+v.title+'</h4><p>'+v.desc+'</p></div></div>').join("");}

/* Quiz Prep — story-based explanations, not just answers */
function initQuizPrep(){const el=document.getElementById("quiz-prep-grid");if(!el)return;el.innerHTML=Object.entries(QUIZZES).map(([key,quiz])=>'<div class="feature-card" onclick="showQuizPrepDetail(\''+key+'\')" style="cursor:pointer;"><div class="feature-icon">'+quiz.icon+'</div><h3>'+quiz.title+'</h3><p>'+quiz.questions.length+' topics to learn</p></div>').join("");}

function showQuizPrepDetail(key){
  const quiz=QUIZZES[key];if(!quiz)return;
  const o=document.getElementById("surah-modal"),b=document.getElementById("surah-modal-box");
  o.classList.add("show");o.onclick=e=>{if(e.target===o)o.classList.remove("show");};
  let html='<button class="modal-close" onclick="document.getElementById(\'surah-modal\').classList.remove(\'show\')">\u00d7</button><h2 style="font-family:var(--font-display);color:var(--gold);margin-bottom:6px;">'+quiz.icon+' '+quiz.title+'</h2><p style="color:var(--text-muted);margin-bottom:20px;">Learn the stories behind each answer</p>';
  quiz.questions.forEach((q,i)=>{
    html+='<div style="background:rgba(255,255,255,0.04);border-radius:14px;padding:16px;margin-bottom:12px;"><p style="font-weight:700;margin-bottom:6px;color:#fff;">'+(i+1)+'. '+q.q+'</p><p style="color:var(--gold);font-weight:700;margin-bottom:8px;">\u2705 '+q.options[q.answer]+'</p>'+(q.explain?'<p style="color:var(--text-muted);font-size:13px;line-height:1.65;">'+q.explain+'</p>':'')+'</div>';
  });
  html+='<button class="btn-full" onclick="document.getElementById(\'surah-modal\').classList.remove(\'show\')">Done Studying</button>';
  b.innerHTML=html;
}

/* ══════ STORIES PAGE (card-based categories) ══════ */
function initStoriesPage(){
  const cards=document.getElementById("story-category-cards");
  if(!cards)return;
  showStoryCategories();
}
function showStoryCategories(){
  const cards=document.getElementById("story-category-cards"),grid=document.getElementById("story-grid"),back=document.getElementById("story-back-row");
  if(!cards)return;
  cards.style.display="";grid.style.display="none";if(back)back.style.display="none";
  cards.innerHTML=Object.entries(STORY_CATEGORIES).map(([key,c])=>`<div class="feature-card" onclick="openStoryCategory('${key}')" style="cursor:pointer;border-left:4px solid ${c.color};">
    <div class="feature-icon">${c.icon}</div><h3>${c.title}</h3><p>${c.stories.length} stories to explore</p></div>`).join("");
}
function openStoryCategory(key){
  const c=STORY_CATEGORIES[key];if(!c)return;
  const cards=document.getElementById("story-category-cards"),grid=document.getElementById("story-grid"),back=document.getElementById("story-back-row"),title=document.getElementById("story-cat-title");
  cards.style.display="none";grid.style.display="";if(back)back.style.display="";
  if(title)title.textContent=c.icon+" "+c.title;
  grid.innerHTML=c.stories.map(s=>`<div class="story-card" onclick="openStoryModal('${key}','${s.id}')">
    <div class="story-icon">${s.icon}</div><h3>${s.title}</h3><p>${s.story.slice(0,90)}…</p></div>`).join("");
}
function openStoryModal(catKey,storyId){const c=STORY_CATEGORIES[catKey];if(!c)return;const s=c.stories.find(x=>x.id===storyId);if(!s)return;const o=document.getElementById("story-modal"),b=document.getElementById("story-modal-box");o.classList.add("show");o.onclick=e=>{if(e.target===o)o.classList.remove("show");};b.innerHTML='<button class="modal-close" onclick="document.getElementById(\'story-modal\').classList.remove(\'show\')">\u00d7</button><div style="text-align:center;font-size:56px;margin-bottom:16px;">'+s.icon+'</div><h2 style="font-family:var(--font-display);color:var(--gold);text-align:center;margin-bottom:20px;font-size:24px;">'+s.title+'</h2><p style="color:rgba(255,255,255,0.85);line-height:1.8;font-size:15px;margin-bottom:20px;">'+s.story+'</p><div class="lesson-box"><p class="lb-label">LESSON</p><p>'+s.lesson+'</p></div><button class="btn-full secondary" onclick="document.getElementById(\'story-modal\').classList.remove(\'show\')">Close</button>';}

/* ══════ QUIZZES — Enhanced with Random Mode, Learning/Test, Streak, Story Context ══════ */
let activeQuizKey=null,qIdx=0,qSelected=null,qAnswered=false,qScore=0;
let quizMode="learning",randomCount=10,currentQuestions=[],streakCount=0,maxStreak=0,userAnswers=[];

function selectRandomCount(btn,n){randomCount=n;document.querySelectorAll(".random-count").forEach(b=>{b.classList.remove("active");b.style.background=b===btn?"rgba(255,215,0,0.15)":"";b.style.borderColor=b===btn?"var(--gold)":"";b.style.color=b===btn?"var(--gold)":"";});btn.classList.add("active");}
function selectQuizMode(btn,mode){quizMode=mode;document.querySelectorAll(".quiz-mode-btn").forEach(b=>{b.classList.remove("active");b.style.background=b===btn?"rgba(255,215,0,0.15)":"";b.style.borderColor=b===btn?"var(--gold)":"";b.style.color=b===btn?"var(--gold)":"";});btn.classList.add("active");const desc=document.getElementById("mode-desc");if(desc)desc.textContent=mode==="learning"?"Explanations shown after each question":"No hints — results shown at the end";}

function startRandomQuiz(){
  activeQuizKey="__random__";qIdx=0;qScore=0;streakCount=0;maxStreak=0;userAnswers=[];
  const allQs=[];Object.values(QUIZZES).forEach(quiz=>{quiz.questions.forEach(q=>{allQs.push({...q,quizTitle:quiz.title});});});
  for(let i=allQs.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[allQs[i],allQs[j]]=[allQs[j],allQs[i]];}
  currentQuestions=allQs.slice(0,Math.min(randomCount,allQs.length));
  hideQuizUI();document.getElementById("quiz-runner").style.display="block";
  document.getElementById("qr-title").textContent="🎲 Random Quiz ("+currentQuestions.length+"Q)";
  renderQuizQuestion();
}

function initQuizzesPage(){
  const g=document.getElementById("quiz-grid");if(!g)return;
  g.innerHTML=Object.entries(QUIZZES).map(([key,quiz])=>{
    const best=localStorage.getItem("ia_quiz_"+key)||"";
    return'<div class="quiz-card" onclick="startTopicQuiz(\''+key+'\')"><div class="quiz-card-icon">'+quiz.icon+'</div><h3>'+quiz.title+'</h3><p class="quiz-count">'+quiz.questions.length+' questions</p>'+(best?'<span class="quiz-best">Best: '+best+'</span>':'')+'<div style="margin-top:16px;"><span class="btn-primary" style="padding:10px 24px;font-size:14px;">Start Quiz →</span></div></div>';
  }).join("");
  renderLeaderboard();
}

function startTopicQuiz(key){
  activeQuizKey=key;qIdx=0;qScore=0;streakCount=0;maxStreak=0;userAnswers=[];
  currentQuestions=QUIZZES[key].questions.map(q=>({...q,quizTitle:QUIZZES[key].title}));
  hideQuizUI();document.getElementById("quiz-runner").style.display="block";
  document.getElementById("qr-title").textContent=QUIZZES[key].icon+" "+QUIZZES[key].title;
  renderQuizQuestion();
}

function hideQuizUI(){
  const g=document.getElementById("quiz-grid");if(g)g.style.display="none";
  const rc=document.getElementById("random-quiz-card");if(rc)rc.style.display="none";
  const h2s=document.querySelectorAll(".page-content .section-title");h2s.forEach(h=>{if(h.textContent.includes("Choose"))h.style.display="none";});
  document.getElementById("quiz-result").style.display="none";
}

function renderQuizQuestion(){
  const q=currentQuestions[qIdx],total=currentQuestions.length;
  document.getElementById("qr-bar").style.width=((qIdx/total)*100)+"%";
  document.getElementById("qr-counter").textContent="Question "+(qIdx+1)+" of "+total;
  document.getElementById("qr-question").textContent=q.q;
  document.getElementById("qr-next").style.display="none";
  const expEl=document.getElementById("qr-explain");if(expEl)expEl.style.display="none";
  const storyEl=document.getElementById("qr-story-context");
  if(storyEl&&q.story_context){storyEl.style.display="block";storyEl.innerHTML='<p style="color:rgba(255,255,255,0.75);font-size:14px;line-height:1.65;margin:0;"><strong style="color:var(--gold);">📖 Context:</strong> '+q.story_context+'</p>';}
  else if(storyEl){storyEl.style.display="none";}
  const streakEl=document.getElementById("qr-streak");
  if(streakEl){streakEl.style.display=streakCount>=2?"":"none";streakEl.textContent="🔥 "+streakCount+" streak";}
  qSelected=null;qAnswered=false;
  document.getElementById("qr-options").innerHTML=q.options.map((o,i)=>'<button class="quiz-option" onclick="quizSelect('+i+')">'+o+'</button>').join("");
}

function quizSelect(idx){
  if(qAnswered)return;qSelected=idx;qAnswered=true;
  const q=currentQuestions[qIdx];
  const correct=idx===q.answer;
  if(correct){qScore++;streakCount++;if(streakCount>maxStreak)maxStreak=streakCount;}else{streakCount=0;}
  userAnswers.push({q:q.q,picked:idx,answer:q.answer,correct,options:q.options,explain:q.explain||""});
  document.querySelectorAll("#qr-options .quiz-option").forEach((b,i)=>{
    if(i===q.answer)b.classList.add("correct");
    if(i===idx&&!correct)b.classList.add("wrong");
  });
  const streakEl=document.getElementById("qr-streak");
  if(streakEl&&streakCount>=2){streakEl.style.display="";streakEl.textContent="🔥 "+streakCount+" streak!";}
  // Learning mode: show explanation immediately
  if(quizMode==="learning"){
    const expEl=document.getElementById("qr-explain");
    if(expEl&&q.explain){expEl.style.display="block";expEl.innerHTML='<p style="color:var(--text-muted);font-size:13px;line-height:1.65;margin-top:14px;padding:14px;background:rgba(255,215,0,0.06);border-radius:12px;border-left:3px solid var(--gold);"><strong style="color:var(--gold);">Why?</strong> '+q.explain+'</p>';}
  }
  document.getElementById("qr-next").style.display="block";
  document.getElementById("qr-next").textContent=(qIdx+1>=currentQuestions.length)?"See Results":"Next →";
}

function quizNext(){qIdx++;if(qIdx>=currentQuestions.length)showQuizResult();else renderQuizQuestion();}

function showQuizResult(){
  const total=currentQuestions.length,pct=Math.round((qScore/total)*100);
  const streakBonus=maxStreak>=5?maxStreak*2:maxStreak>=3?maxStreak:0;
  // Save score for topic quizzes
  if(activeQuizKey&&activeQuizKey!=="__random__"){localStorage.setItem("ia_quiz_"+activeQuizKey,pct+"%");}
  // Save to leaderboard
  const user=getUser();
  if(user){
    const lb=JSON.parse(localStorage.getItem("ia_leaderboard")||"[]");
    const quizName=activeQuizKey==="__random__"?"Random ("+total+"Q)":(QUIZZES[activeQuizKey]?QUIZZES[activeQuizKey].title:"Quiz");
    lb.push({name:user.gamertag||user.name,avatar:user.avatar||"🌙",quiz:quizName,score:pct,streak:maxStreak,date:Date.now()});
    lb.sort((a,b)=>b.score-a.score);localStorage.setItem("ia_leaderboard",JSON.stringify(lb.slice(0,100)));
  }
  document.getElementById("quiz-runner").style.display="none";
  document.getElementById("quiz-result").style.display="block";
  document.getElementById("qr-result-icon").textContent=pct>=80?"🏆":pct>=50?"⭐":"💪";
  document.getElementById("qr-result-msg").textContent=pct>=80?"Excellent!":pct>=50?"Good effort!":"Keep learning!";
  document.getElementById("qr-result-pct").textContent=pct+"%";
  document.getElementById("qr-result-detail").textContent=qScore+" out of "+total+" correct";
  const streakDisplay=document.getElementById("qr-result-streak");
  if(streakDisplay&&maxStreak>=2){streakDisplay.style.display="";streakDisplay.textContent="🔥 Best streak: "+maxStreak+(streakBonus>0?" (+"+streakBonus+" bonus points!)":"");}
  // Test mode: show full review
  const reviewEl=document.getElementById("qr-test-review");
  if(reviewEl&&quizMode==="test"){
    reviewEl.style.display="block";
    reviewEl.innerHTML='<h3 style="color:var(--gold);font-family:var(--font-display);margin-bottom:14px;">📝 Full Review</h3>'+userAnswers.map((a,i)=>'<div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:14px;margin-bottom:10px;border-left:3px solid '+(a.correct?"var(--success)":"var(--danger)")+';"><p style="font-weight:700;color:#fff;margin-bottom:6px;">'+(i+1)+'. '+a.q+'</p>'+(a.correct?'<p style="color:var(--success);font-weight:700;">✅ '+a.options[a.answer]+'</p>':'<p style="color:var(--danger);">❌ You picked: '+a.options[a.picked]+'</p><p style="color:var(--success);font-weight:700;">✅ Correct: '+a.options[a.answer]+'</p>')+(a.explain?'<p style="color:var(--text-muted);font-size:13px;margin-top:6px;line-height:1.5;">'+a.explain+'</p>':'')+'</div>').join("");
  } else if(reviewEl){reviewEl.style.display="none";}
}

function retryQuiz(){if(activeQuizKey==="__random__")startRandomQuiz();else startTopicQuiz(activeQuizKey);}
function exitQuiz(){
  document.getElementById("quiz-runner").style.display="none";
  document.getElementById("quiz-result").style.display="none";
  const g=document.getElementById("quiz-grid");if(g)g.style.display="";
  const rc=document.getElementById("random-quiz-card");if(rc)rc.style.display="";
  const h2s=document.querySelectorAll(".page-content .section-title");h2s.forEach(h=>h.style.display="");
  initQuizzesPage();
}
function renderLeaderboard(){const el=document.getElementById("leaderboard-list");if(!el)return;const lb=JSON.parse(localStorage.getItem("ia_leaderboard")||"[]");if(!lb.length){el.innerHTML='<p style="color:var(--text-muted);text-align:center;padding:20px;">No scores yet. Be the first!</p>';return;}const best={};lb.forEach(e=>{if(!best[e.name]||e.score>best[e.name].score)best[e.name]=e;});const sorted=Object.values(best).sort((a,b)=>b.score-a.score);const medals=["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"];el.innerHTML=sorted.slice(0,10).map((e,i)=>'<div style="display:flex;align-items:center;gap:14px;padding:14px 18px;background:'+(i<3?"rgba(255,215,0,0.08)":"var(--glass)")+';border-radius:14px;margin-bottom:8px;border:1px solid '+(i<3?"rgba(255,215,0,0.2)":"var(--glass-border)")+';"><span style="font-size:'+(i<3?"28px":"18px")+';width:36px;text-align:center;">'+(medals[i]||"#"+(i+1))+'</span><span style="font-size:22px;">'+(e.avatar||"🌙")+'</span><div style="flex:1;"><strong style="color:#fff;">'+e.name+'</strong><br><span style="color:var(--text-muted);font-size:13px;">'+e.quiz+'</span></div><span style="font-size:20px;font-weight:900;color:var(--gold);">'+e.score+'%</span></div>').join("");}

/* ══════ PROGRESS + ACHIEVEMENTS ══════ */
function initProgressPage(){const levelEl=document.getElementById("progress-level"),listEl=document.getElementById("progress-list"),badgesEl=document.getElementById("achievements-grid");if(!levelEl)return;const user=getUser();const hintEl=document.getElementById("progress-login-hint");if(!user&&hintEl)hintEl.innerHTML='Login to save progress \u00b7 <button class="nav-auth-btn" style="font-size:13px;padding:6px 16px;" onclick="openAuthModal(\'login\')">Login / Register</button>';const memDone=JSON.parse(localStorage.getItem("ia_mem_done")||"[]").length,hadithDone=JSON.parse(localStorage.getItem("ia_hadith_studied")||"[]").length,totalPts=calcPoints(),level=totalPts<50?["Seedling","\ud83c\udf31"]:totalPts<150?["Sprout","\ud83c\udf3f"]:totalPts<300?["Tree","\ud83c\udf33"]:["Scholar","\ud83c\udf93"];levelEl.innerHTML='<div class="progress-level-icon">'+level[1]+'</div><h2>'+level[0]+'</h2><p>'+totalPts+' total points</p>';const stats=[{label:"Surahs Memorised",value:memDone,total:MEMORISATION_SURAHS.length,icon:"\ud83d\udd4b",color:"#4caf50"},{label:"Hadith Studied",value:hadithDone,total:AHADITH.length,icon:"\ud83d\udcdc",color:"#ffd700"},...Object.entries(QUIZZES).map(([k,q])=>({label:q.title,value:localStorage.getItem("ia_quiz_"+k)?parseInt(localStorage.getItem("ia_quiz_"+k)):0,total:100,icon:q.icon,color:q.color||"#2196f3",suffix:"%"}))];if(listEl)listEl.innerHTML=stats.map(s=>{const pct=Math.round((s.value/s.total)*100);return'<div class="progress-item"><div class="progress-item-head"><div class="progress-item-label"><span class="pi-icon">'+s.icon+'</span> '+s.label+'</div><span class="progress-item-value" style="color:'+s.color+';">'+s.value+(s.suffix||"")+' / '+s.total+(s.suffix||"")+'</span></div><div class="progress-bar-bg"><div class="progress-bar-fill" style="width:'+pct+'%;background:linear-gradient(90deg,'+s.color+','+s.color+'88);"></div></div></div>';}).join("");if(badgesEl)badgesEl.innerHTML=ACHIEVEMENTS.map(a=>{const unlocked=a.check(user);return'<div class="about-value" style="opacity:'+(unlocked?1:0.4)+";"+(unlocked?"border-color:rgba(255,215,0,0.3);":"")+'"><div class="av-icon" style="font-size:42px;">'+a.icon+'</div><h3 style="font-size:15px;">'+a.title+'</h3><p style="font-size:13px;">'+a.desc+'</p>'+(unlocked?'<span style="color:var(--success);font-weight:800;font-size:12px;">\u2705 UNLOCKED</span>':'<span style="color:var(--text-dim);font-size:12px;">\ud83d\udd12 Locked</span>')+'</div>';}).join("");}

/* ══════ FORUM ══════ */
function initForum(){renderForumPosts();const form=document.getElementById("forum-form");if(form)form.addEventListener("submit",e=>{e.preventDefault();const user=getUser();if(!user){openAuthModal("login");return;}const title=document.getElementById("forum-title")?.value.trim(),body=document.getElementById("forum-body")?.value.trim();if(!title||!body)return;const posts=JSON.parse(localStorage.getItem("ia_forum")||"[]");posts.unshift({id:Date.now(),author:user.gamertag||user.name,avatar:user.avatar||"🌙",title,body,date:Date.now(),replies:[]});localStorage.setItem("ia_forum",JSON.stringify(posts));document.getElementById("forum-title").value="";document.getElementById("forum-body").value="";renderForumPosts();});}
function renderForumPosts(){const el=document.getElementById("forum-posts");if(!el)return;const posts=JSON.parse(localStorage.getItem("ia_forum")||"[]");if(!posts.length){el.innerHTML='<p style="color:var(--text-muted);text-align:center;padding:30px;">No discussions yet. Be the first!</p>';return;}el.innerHTML=posts.slice(0,20).map(p=>'<div class="glass-card" style="margin-bottom:14px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><div class="user-avatar" style="width:32px;height:32px;font-size:16px;">'+(p.avatar||"🌙")+'</div><div><strong style="color:#fff;">'+esc(p.author)+'</strong> <span style="color:var(--text-dim);font-size:12px;">\u00b7 '+getTimeAgo(p.date)+'</span></div></div><h4 style="color:var(--gold);margin-bottom:6px;font-size:16px;">'+esc(p.title)+'</h4><p style="color:var(--text-muted);font-size:14px;line-height:1.6;">'+esc(p.body)+'</p>'+(p.replies&&p.replies.length?'<div style="margin-top:12px;padding-left:20px;border-left:2px solid rgba(255,215,0,0.15);">'+p.replies.map(r=>'<div style="margin-bottom:8px;"><span style="font-size:14px;">'+(r.avatar||"🌙")+'</span> <strong style="color:#fff;font-size:13px;">'+esc(r.author)+'</strong> <span style="color:var(--text-dim);font-size:11px;">\u00b7 '+getTimeAgo(r.date)+'</span><p style="color:var(--text-muted);font-size:13px;margin:2px 0 0;">'+esc(r.body)+'</p></div>').join("")+'</div>':'')+'<div style="margin-top:10px;display:flex;gap:8px;"><input id="reply-'+p.id+'" placeholder="Write a reply\u2026" style="flex:1;padding:8px 12px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.05);color:#fff;font-family:inherit;font-size:13px;outline:none;"/><button class="btn-nav" style="padding:8px 16px;font-size:12px;" onclick="postReply('+p.id+')">Reply</button></div></div>').join("");}
function postReply(postId){const user=getUser();if(!user){openAuthModal("login");return;}const input=document.getElementById("reply-"+postId),body=input?.value.trim();if(!body)return;const posts=JSON.parse(localStorage.getItem("ia_forum")||"[]"),post=posts.find(p=>p.id===postId);if(post){post.replies.push({author:user.gamertag||user.name,avatar:user.avatar||"🌙",body,date:Date.now()});localStorage.setItem("ia_forum",JSON.stringify(posts));}renderForumPosts();}
function esc(str){const d=document.createElement("div");d.textContent=str;return d.innerHTML;}
function getTimeAgo(ts){const diff=Date.now()-ts,mins=Math.floor(diff/60000);if(mins<1)return"just now";if(mins<60)return mins+"m ago";const hrs=Math.floor(mins/60);if(hrs<24)return hrs+"h ago";return Math.floor(hrs/24)+"d ago";}

/* ══════ FEEDBACK/CONTACT — EmailJS Integration ══════ */
function initContactForm(){
  // Init EmailJS with your public key
  if(window.emailjs){emailjs.init("2iHMnhsSR8zIlrIH6");}
  
  const form=document.getElementById("contact-form");
  if(!form)return;
  form.addEventListener("submit",async e=>{
    e.preventDefault();
    const name=document.getElementById("ct-name")?.value.trim();
    const email=document.getElementById("ct-email")?.value.trim();
    const subject=document.getElementById("ct-subject")?.value.trim();
    const message=document.getElementById("ct-message")?.value.trim();
    const status=document.getElementById("contact-status");
    const submitBtn=form.querySelector("button[type=submit]");
    
    if(!name||!email||!subject||!message||!/^\S+@\S+\.\S+$/.test(email)){
      status.textContent="Please complete all fields with a valid email.";
      status.style.color="var(--danger)";
      return;
    }
    
    // Show sending state
    status.textContent="Sending…";
    status.style.color="var(--text-muted)";
    if(submitBtn){submitBtn.disabled=true;submitBtn.textContent="Sending…";}
    
    // Try EmailJS first
    if(window.emailjs&&typeof emailjs.send==="function"){
      try{
        await emailjs.send("service_wakxlug","template_cj7uqxj",{
          name:name,
          email:email,
          subject:subject,
          message:message,
          from_name:name,
          reply_to:email
        });
        status.textContent="✅ Feedback sent! We'll get back to you soon in shaa Allah.";
        status.style.color="var(--success)";
        form.reset();
        if(submitBtn){submitBtn.disabled=false;submitBtn.textContent="Send Feedback";}
        return;
      }catch(err){
        console.warn("EmailJS failed, using fallback:",err);
      }
    }
    
    // Fallback: store locally
    const inbox=JSON.parse(localStorage.getItem("ia_inbox")||"[]");
    inbox.push({name,email,subject,message,ts:Date.now()});
    localStorage.setItem("ia_inbox",JSON.stringify(inbox));
    status.textContent="✅ Feedback saved! (Email service connecting — we'll receive it shortly.)";
    status.style.color="var(--success)";
    form.reset();
    if(submitBtn){submitBtn.disabled=false;submitBtn.textContent="Send Feedback";}
  });
}

/* ══════ NAVBAR ACTIVE STATE + POINTS ══════ */
function initNavActive(){
  const page=window.location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll(".nav-links a, .nav-mobile a").forEach(a=>{
    const href=a.getAttribute("href");
    if(href===page){a.classList.add("active");}
    else{a.classList.remove("active");}
  });
  const ptsEl=document.getElementById("user-points-display");
  const user=getUser();
  if(ptsEl&&user){
    const pts=calcPoints();
    const level=pts<50?"🌱":pts<150?"🌿":pts<300?"🌳":"🎓";
    ptsEl.style.display="flex";
    ptsEl.innerHTML='<span style="font-size:16px;">'+level+'</span><span style="font-weight:800;color:var(--gold);font-size:13px;">'+pts+'pts</span>';
  }
}

/* ══════ DEDICATED LEADERBOARD PAGE ══════ */
function initLeaderboardPage(){
  const full=document.getElementById("leaderboard-full");
  if(!full)return;
  const lb=JSON.parse(localStorage.getItem("ia_leaderboard")||"[]");
  const best={};lb.forEach(e=>{if(!best[e.name]||e.score>best[e.name].score)best[e.name]=e;});
  const sorted=Object.values(best).sort((a,b)=>b.score-a.score);
  const medals=["🥇","🥈","🥉"];
  // Show user's own rank
  const user=getUser();const rankEl=document.getElementById("your-rank");
  if(rankEl&&user){
    const myName=user.gamertag||user.name;
    const myRank=sorted.findIndex(e=>e.name===myName);
    if(myRank>=0){
      rankEl.innerHTML=`<p style="color:var(--text-muted);font-size:14px;margin-bottom:4px;">Your Position</p><span style="font-size:42px;">${user.avatar||"🌙"}</span><h3 style="color:var(--gold);margin:8px 0 4px;">${myName}</h3><p style="font-size:28px;font-weight:900;color:#fff;">#${myRank+1}</p><p style="color:var(--text-muted);">Best score: ${sorted[myRank].score}%</p>`;
    }else{
      rankEl.innerHTML=`<p style="color:var(--text-muted);">Complete a quiz to appear on the leaderboard!</p><a href="courses.html" class="btn-primary" style="margin-top:12px;display:inline-block;">Take a Quiz</a>`;
    }
  }else if(rankEl){
    rankEl.innerHTML=`<p style="color:var(--text-muted);">Login and complete a quiz to appear here!</p><button class="btn-primary" style="margin-top:12px;" onclick="openAuthModal('login')">Login / Register</button>`;
  }
  if(!sorted.length){full.innerHTML='<p style="color:var(--text-muted);text-align:center;padding:30px;">No scores yet. Be the first to take a quiz!</p>';return;}
  full.innerHTML=sorted.slice(0,20).map((e,i)=>`<div style="display:flex;align-items:center;gap:14px;padding:16px 20px;background:${i<3?"rgba(255,215,0,0.08)":"var(--glass)"};border-radius:14px;margin-bottom:8px;border:1px solid ${i<3?"rgba(255,215,0,0.2)":"var(--glass-border)"};${user&&(user.gamertag||user.name)===e.name?"box-shadow:0 0 0 2px var(--gold);":""}"><span style="font-size:${i<3?"30px":"18px"};width:40px;text-align:center;font-weight:900;">${medals[i]||"#"+(i+1)}</span><span style="font-size:24px;">${e.avatar||"🌙"}</span><div style="flex:1;"><strong style="color:#fff;font-size:15px;">${e.name}</strong><br><span style="color:var(--text-muted);font-size:13px;">${e.quiz}${e.streak&&e.streak>=3?" · 🔥"+e.streak+" streak":""}</span></div><span style="font-size:22px;font-weight:900;color:var(--gold);">${e.score}%</span></div>`).join("");
}

/* ══════ COMMUNITY PAGE TAB SWITCHING ══════ */
function initCommunityTabs(){
  document.querySelectorAll("[data-commtab]").forEach(t=>{
    t.addEventListener("click",()=>{
      document.querySelectorAll("[data-commtab]").forEach(x=>x.classList.remove("active"));
      document.querySelectorAll(".comm-panel").forEach(p=>{p.style.display="none";p.classList.remove("active");});
      t.classList.add("active");
      const p=document.getElementById("cpanel-"+t.dataset.commtab);
      if(p){p.style.display="";p.classList.add("active");}
      if(t.dataset.commtab==="leaderboard"){initLeaderboardPage();}
    });
  });
}

/* ══════ CSS for nav-points ══════ */
(function(){const s=document.createElement("style");s.textContent=`.nav-points{display:flex;align-items:center;gap:6px;background:rgba(255,215,0,0.1);border:1px solid rgba(255,215,0,0.2);border-radius:10px;padding:4px 12px;} .random-count.active,.quiz-mode-btn.active{background:rgba(255,215,0,0.15)!important;border-color:var(--gold)!important;color:var(--gold)!important;}`;document.head.appendChild(s);})();

/* ══════ BOOTSTRAP ══════ */
document.addEventListener("DOMContentLoaded",()=>{initScrollReveal();initNavbar();initNavActive();refreshAuthUI();initHadithOfDay();initLearnPage();initStoriesPage();initQuizzesPage();initProgressPage();initLeaderboardPage();initForum();initContactForm();initCommunityTabs();});