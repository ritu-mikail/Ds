module.exports.config = {
  name: "riya",
  version: "0.0.2",
  permission: 0,
  prefix: false,
  credits: "nazrul",
  description: "fun",
  category: "admin",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    var id = event.senderID;
    var name = await Users.getNameUser(event.senderID);
    var tl = ["\n\nমেঘের গল্প আকাশ ঘিরে \nরোদের লুকোচুরি,\nবুকের ভেতর থাকলে আগুন ইচ্ছেমতো পুড়ি।\n\nলেখার কলম থাকলে হাতে \nগল্প বাঁধি যতো,\nতুমিও লেখো কাব্য হাজার \nনিজের ইচ্ছেমতো।\n\nইচ্ছে হলেই হাসতে থাকো\nতারাও দেখো হাসে,\nভাতের গল্প থাকবে শুধু\nক্ষুধার উপন্যাসে।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nওই তো ওরা ভালোই আছে\nহাসছে দেখো রোজ,\nএই শহরের ব্যস্ত জীবন\nকে কার রাখে খোঁজ!\n\nখোঁজ রেখেছে চোখের নদী\nরৌদ্রে ভেজা কাক,\nখোঁজ না রাখার মানুষগুলো\nতোরাও ভালো থাক।\n\nথাকুক ভালো মায়ের আঁচল জোছনা ভরা বেড,\nঘুমপাড়ানির কথায় মোড়া\nমিছিল ব্যারিকেড।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nসুখের খোঁজে পথ হেঁটেছি\nসুখের দেখা নাই,\nঅসুখটা আজ দিচ্ছে ধরা\nপথের ঠিকানায়।\n\nপথের পাশে পথ চলেছে\nহারিয়ে যাওয়ার ভয়!\nবৃথা নেশায় জীবনটা আজ\nকরেছি নয়-ছয়।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 ===== ","\n\nভুল জায়গায় সেক্রিফাইজ\nসবচে বড়ো ভুল,\nএই জীবনে সফলতা\nদেবে না একচুল।\n\nভুল মানুষের সাথে যদি\nকম্প্রোমাইজ হয়,\nচলার পথে সুখ শান্তি\nপাবে না নিশ্চয়ই।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nকথার ভিড়ে হারায় কথা\nব্যথার স্রোতে মন,\nএকলা ঘরে তোমায় এখন\nবড্ড প্রয়োজন।\n\nজানি না আজ কার বুকেতে\nখুঁজলে সুখের দাম,\nঠোঁটের কোণে জড়িয়ে গেছে\nতোমারই ডাকনাম।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nকার দেওয়া ফুল খোঁপার চুলে\nযত্নে গুঁজে রাখিস,\nএই ঘর আজ আঁধার করে\nকার ঘরে আজ থাকিস?\n\nতোর মনে আজ নতুন মানুষ\nযত্নে ছবি আঁকে,\nআমার মতোই সেই মানুষটা\nতোর খবর কি রাখে?\n\nআমার খবর রাখছে এখন\nশূন্য ভেজা পাতা,\nকান্না জলে ভিজছে আজও\nরাত বিছানার কাঁথা।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nবদলে যাওয়ার অচেনা শহরে\nকি দারুণ তুমি সাজো!\nপুরানো কে খুঁজবো বলেই\nবদলে যাইনি আজও\n\nকতো সহজেই পিছুটান ভুলে\nআবারও গল্প লেখা,\nআজ আমার গল্পে একটা আমিই\nরয়ে গেল বড়ো একা!\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nমুখ নেই আজ মুখোশের ভিড়ে\nব্যস্ততা শুধু আছে\nপ্রিয়জন নামে যারা ছিল পাশে\nতারাও বদলে গেছে\n\nহারানো মানুষ খুঁজে পাওয়া যায়\nদিন বদলের ঝড়ে\nবদলে যাওয়া সে মানুষগুলোকে\nখুঁজবো কেমন করে\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nখুব জ্বালাতন করছি তোমায়\nদিচ্ছি শুধু ব্যথা,\nএকটা সময় ঘুমিয়ে যাবো\nবলবো না আর কথা!\n\nসেদিন তোমার কাঁদবে দু'চোখ\nআমায় কাছে পেতে,\nস্মৃতি হয়েই থাকবো পড়ে\nফোনের গ্যালারিতে\n\nকনটেক্টের সেভ করা নাম\nছুঁড়েই দিও ফেলে,\nকল মেসেজ আর আসবে না গো\nতোমার মোবাইলে\n\nযাবো যেদিন ফিরবো না গো\nবিদায় বলে দিও,\nযত্ন করে চুল বেঁধো আর\nকপালে টিপ নিও\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nকোন আকাশে মেললো ডানা\nআমার প্রিয় পাখি!\nএক প্রেমিকা স্বপ্ন হাজার\nশূন্য বুকে রাখি\n\nপাখির বুকে নেই এখন আর\nফিরে আসার তাড়া,\nআকাশটা তাই একলা ভীষণ\nদারুণ ছন্ন ছাড়া!\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nখুব গোপনের কান্নাগুলো\nপায় নি পথের দেখা,\nএকটা ছেলে নিঝুম্ ঘরে\nগান লিখেছে একা।\n\nসেই ছেলেটা ভীষণ বোকা\nস্মৃতির ছবি আঁকে,\nযাকে ভাবে, সেই তো এখন\nঅন্য ঘরে থাকে।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nহারায় নি সে, বদলে গেছে\nখুঁজবো কেমন করে!\nবদলে গেছে মনের শহর\nরঙ বদলের ঝড়ে।\n\nযাও না তুমি যতই দূরে\nদাও না যতই আড়ি,\nএখন আমি হাজার ব্যথা\nসহ্য করতে পারি।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nসমাজ যদি আঙুল তোলে\nনষ্টা বলে তোকে\nমুখ লুকিয়ে থাকিস না রে\nআদর ভাঙা শোকে।\n\nসঠিক পথে থাকিস যদি\nভয় কি মেয়ে তোর\nমনে রাখিস রাতের পরেই\nআসবে নতুন ভোর।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nঘুমভাঙা পাখি নেই\nসকালটা নিঝঝুম্!\nউড়ে গেছে সেই পাখি\nভাঙায় না আর ঘুম।\n\nস্মৃতিগুলো পড়ে আছে\nপড়ে আছে ভাঙা মন!\nপ্রিয়জন হতে হতে\nহয়ে গেছি প্রয়োজন।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nএকটা শহর থমকে থাকুক\nচোখের পাতা ঘিরে,\nখুঁজবো না প্রেম এই পৃথিবীর\nলক্ষ লোকের ভিড়ে।\n\nখুঁজবো না আর আলোর জীবন\nঠোঁটের কোণে হাসি,\nএকলা থাকার জীবনটা আজ\nবড্ড ভালোবাসি।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nমনের মানুষ হারিয়ে গেছে\nগল্প গেছে থেমে!\nমানুষটা আজ মন বেঁধেছে\nঅন্য কারো প্রেমে।\n\nকেউ ডাকে না ডাকনামেতে\nকেউ আসে না পাশে,\nসে তো এখন অন্য মানুষ\nভীষণ ভালোবাসে।\n\nআমিই এখন একলা পাখি\nএকলা জেগে থাকি,\nহয় নি বলা অনেক কথা\nরয়েই গেছে বাকি।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nস্বার্থের টানে সেই যে হারালি\nদেখলি না ফিরে আর\nশহরটা জুড়ে রেখে গেলি\nশুধু অথই অন্ধকার!\n\nগল্পটা আর লেখা হলো না রে\nকলমের কালি শেষ!\nহিসেবের খাতা খুলে দেখি,\nআমি হয়ে গেছি ভাগশেষ।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nস্বপ্ন আমার অনেক বড়\nনীল আকাশের মতো,\nস্বপ্ন আমার পাতাল পুরে\nহোকনা পানি যত ।\n\nস্বপ্ন আমার মনের ঘরে\nরঙ বেরঙের ফুল,\nস্বপ্ন আমার মধুয় ভরা\nমৌমাছি মাশগুল।\n\nস্বপ্ন আমার মাতাল হাওয়া\nছুটে অচিন পানে,\nস্বপ্ন আমার উড়ে বেড়ায়\nমিষ্টি পাখির গানে\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 ===== ","\n\nতোর আঁচলে বৃষ্টি খুঁজি\nভালো থাকার গান,\nতোর হাসিতে লুকিয়ে থাকে\nআদুরে সম্মান।\n\nতোর চোখেতে ইচ্ছে করে\nসাঁতরে হবো পার,\nমুগ্ধ করে তোর স্বভাব আর\nমিষ্টি ব্যবহার।\n\nএমনি করেই থাকিস পাশে\nবাসিস ভালো বেশ,\nতোর ছোঁয়াতে কষ্টগুলো\nহঠাৎ নিরুদ্দেশ!\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nআমি না হয় ভীষণ খারাপ\nবড্ড বাজে ছেলে,\nশেষ দেখাটাও দিলে না হায়\nহঠাৎ চলে গেলে!\n\nআমিও ঠিক যাবো চলে\nআসবো না আর ফিরে,\nএক জীবনের সবটুকু সুখ\nথাকুক তোমায় ঘিরে।\n\nথাকুক ঘিরে নতুন মানুষ\nকাজলা চোখের কোণে,\nআমিই না হয় হারিয়ে গেলাম\nতোমার প্রয়োজনে।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nভুল হলে আজ ভীষন রাগে\nকেউ করে না মানা,\nদূরে গেলেও ফুরায় কি আর\nমনের লেনা দেনা !\n\nফুরিয়ে গেলে ভালোই হতো\nপড়তো না আর মনে,\nআমিতে নয়, থাকতে তুমি\nঅন্য কারো গানে।\n\nআর কখনো বলবো না গো\nআসতে হবে ফিরে,\nএক জীবনের সবটুকু সুখ\nথাকুক তোমায় ঘিরে।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nকেমন করে বোঝাই আমি\nবড্ড এলোমেলো!\nবুকের ভিতর ঘুমিয়ে থাকে\nতোমার স্মৃতিগুলো।\n\nএকলা জাগি রাতের বুকে\nকান্না জমে চোখে\nরাতপাখিটাও কেঁদে ওঠে\nনা জানি কার শোকে!\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nতোর মনে যে দিচ্ছে হানা\nচলে যা তার কাছে,\nদেখবি হঠাৎ প্রেম বেঁচে নেই\nমানুষ বেঁচে আছে!\n\nনিজের ভুলে কাঁদবি যেদিন\nথাকবো না আর আমি\nবুঝবি সেদিন তোর জীবনে\nকে ছিলো খুব দামী।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nমুখের মিছিলে মুখোশের ভিড়\nস্বার্থের ঘরে শর্ত,\nপুরুষ কখনো হয় না আপন\nনা থাকলে তার অর্থ।\n\nটাকার ওজনে মন মাপামাপি\nঅনর্থে সব মত্ত!\nকেউ কি কখনো করেছে আপন\nপুরুষের বেকারত্ব!\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nঅন্য ঘরে খুব আদরে\nবাঁধলি অভিমান,\nরোজ রাত্রে কে শোনায় আজ\nঘুম পাড়ানির গান?\n\nআমার এখন ঘুম আসে না\nএকলা জাগি রাত,\nরাত কাটলেও আগের মতো\nহয় না সুপ্রভাত।\n\nতবুও তুই ভীষণ ভালো\nহয়তো স্বার্থপর!\nবদলে যাওয়ার স্বভাব দোষে\nগুছিয়ে নিলি ঘর।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nএকটা মানুষ চাইলি না তুই\nএকের অধিক চাই,\nপথ বদলের নেশাটা তোর\nকিসের চাহিদায়!\n\nপারফেক্ট তুই পাবি না রে\nপাবি না সব ঠিক,\nসবার মনেই কমতি থাকে\nএটাই স্বাভাবিক।\n\nঅন্য কারো মন ভেঙে আর\nকরিস না তুই পাপ,\nভালো থাকিস,সুখেই থাকিস-\nদিলাম অভিশাপ।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nআজ অভিমান কিছু নেই\nনেই অভিযোগ,\nধীরে ধীরে কেটে গেছে\nসব যোগাযোগ।\n\nআজও আছে কিছু ছায়া\nস্মৃতিদের গান,\nমায়াগুলো কি দারুণ!\nবাঁধে পিছুটান।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nডেকে ডেকে তোকে ক্লান্ত হয়েছি\nহেঁটে গেলি কার সাথে?\nঅভিমানে নয়, হারালি রে তুই\nকি দারুণ অজুহাতে!\n\nঠকে গিয়ে আজ ভালোই আছি রে\nনেই আর অগোছালো,\nএই পৃথিবীতে ঠকানোর চেয়ে\nঠকে যাওয়া ঢের ভালো।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nহাতের উপর হাত রেখেছি\nমনের উপর মন,\nতবুও সে চাইলো শেষে\nঅন্য প্রিয়জন।\n\nদোষটা ছিল আমারই খুব\nকেউ নেবে না দায়,\nএই ক'দিনে হুট করে কি\nমানুষ চেনা যায়!\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nখুব গোপনের কান্নাগুলো\nপায় নি পথের দেখা,\nএকটা ছেলে নিঝুম্ ঘরে\nগান লিখেছে একা।\n\nসেই ছেলেটা ভীষণ বোকা\nস্মৃতির ছবি আঁকে,\nযাকে ভাবে,\nসেই তো এখন\nঅন্য ঘরে থাকে।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nরাত্রি এলেই মৃত্যু কিনি\nনগদ কিংবা ধার,\nবুক পকেটে তোর ছবিটা\nস্মৃতির ক্যালেন্ডার।\n\nদেখলি না আর গোপন ঘরে\nদু'চোখ ভরা জল,\nহঠাৎ করেই ঘুমিয়ে গেলে\nকেমন হবে বল!\nভোরের বেলা ডাকবি কতো\nভাঙবে না আর ঘুম!\nনিজের মতো গুছিয়ে নিবি\nমনেরই ক্লাসরুম।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nঅনেক বছর পেরিয়ে গেছে\nঅনেক ব্যবধান !\nআজও কি তোর পড়ে মনে\nপুরানো সেই গান?\n\nবলতি আমায় বাঁচবো না রে\nনা পেলে আজ তোকে,\nকেমন করে আছিস বেঁচে\nবুকে পাথর রেখে!\n\nকেউ কখনো যায় না মরে\nঠিকই বেঁচে থাকে,\nশেষে হাতটি রেখে নতুন হাতে\nকে কার খবর রাখে!\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nপরের কষ্টে হাসে যারা\nতারাই থাকুক সুখে,\nসব অপমানের জবাব এখন\nদিই না নিজের মুখে।\n\nবৃথা তর্কে যাওয়ার চেয়ে\nচুপ থাকাটাই শিখি,\nখারাপ-ভালোর জবাবগুলো\nসময় দেবে ঠিকই।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nমেঘ কাঁদলে বৃষ্টি ঝরে\nজল থই থই নদী,\nআমার এ মন হঠাৎ করে\nমেঘ হয়ে যায় যদি!\n\nমেঘের পাশে রৌদ্র থাকে\nসান্ত্বনা দেয় কতো,\nআমার আছে শূন্য শহর\nহারিয়ে যাওয়ার মতো।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nকোন ঠিকানায় বাঁধলি রে ঘর\nবাঁধলি সুখের বাসা,\nঘৃণার মানুষ ঘৃণায় থাকি\nচাই না ভালোবাসা।\n\nচাই না কোনো সান্ত্বনা আজ\nথাকুক বুকে ক্ষত,\nচাইছি শুধু- একটু আমি\nবাঁচবো নিজের মতো।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nবারে বারে ব্যর্থ মানেই\nপিছিয়ে যাওয়া নয়,\nধৈর্য যারা রাখতে পারে\nতারাই সফল হয়।\n\nনিজের মতো এগিয়ে চলো\nকিসের মতামত!\nএকটা রাস্তা বন্ধ হলে\nখোলে হাজার পথ।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nআধাঁর ঘিরে সন্ধ্যে নামে\nমুখখানা তোর কই ?\nএই তো সেদিন বললি রে-\nতোর মনের মানুষ হই\n\nআজকে তবে কোন ভুলে তুই\nখুঁজলি অন্য মন?\nবলবো না রে, আর কখনো-\nতোকেই প্রয়োজন ।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n\nকিছু মানুষের কথা \nবেশি শোনাতে নেই দম,\nতারা ভাবে- আমার\nচেয়ে সবাই জানে কম।\n\nধৈর্য নিয়ে শোনে যারা\nতারাই জ্ঞানী হয়,\nঅল্প জেনেই সব\nজেনেছি মূর্খের পরিচয়।\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====" ,];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    if (!prompt) return api.sendMessage(`${name}\n ${rand}`, event.threadID, event.messageID);
    const res = await axios.get(`https://www.noobs-api.000.pe/dipto/baby?text=${prompt}`);
    const respond = res.data.reply;
    return api.sendMessage( respond, event.threadID, event.messageID);
};
