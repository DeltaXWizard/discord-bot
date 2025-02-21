import { BeccaLyria } from "../interfaces/BeccaLyria";

export const BeccaColours: BeccaLyria["colours"] = {
  default: 0x8b4283,
  success: 0x1f8b4c,
  warning: 0xc27c0e,
  error: 0x992d22,
};

export const BeccaPhrases: BeccaLyria["responses"] = {
  missingGuild: [
    "It seems I cannot locate your guild record. <:BeccaHuh:877278300739887134>",
    "Are you sure that guild actually exists? <:BeccaNotes:883854700762505287>",
    "Well that's odd... your guild does not seem to be in my archives. <:BeccaShrug:872577688441880627>",
  ],
  invalidCommand: [
    "I am not sure how this happened, but that spell does not appear to be valid. <:BeccaSweat:872577688647381032>",
    "Well that's awkward - I don't actually know that spell. <:BeccaThink:872577687410081853>",
    "Hmm... I have not heard of that spell before. <:BeccaNotes:883854700762505287>",
  ],
  noPermission: [
    "You do not have the correct skills to use this spell. <:BeccaFacepalm:872577686541840514>",
    "I am afraid I cannot allow you to do that. <:BeccaBan:897545793886634085>",
    "Maybe one day you can use this spell. Today is not the day. <:BeccaWink:867102883635789844>",
  ],
  ownerOnly: [
    "Only nhcarrigan can ask me to do this. <:BeccaSmug:872577688022421566>",
    "There is only one person special enough to use this spell. It's not you. <:BeccaSip:867102882259533874>",
    "Yeah, I don't think so. This spell isn't meant for you. <:BeccaLaugh:877278301830414396>",
  ],
  noModBecca: [
    "Brave of you to try to make me your target. Foolish, but brave. <:BeccaHyper:890349403481722881>",
    "How dare you try to turn on me? You shall regret this. <:BeccaAngry:877278332843085824>",
    "Excuse me? Who do you think you are? <:BeccaBan:897545793886634085>",
  ],
  noModSelf: [
    "Are... are you asking me to smite you? That's weird. <:BeccaThink:872577687410081853>",
    "I try not to judge people's requests, but yours is especially strange. <:BeccaYikes:877278299066347632>",
    "I punish you on my terms, not yours. And I don't feel like doing so today. <:BeccaYawn:867102883823353937>",
  ],
};

export const BeccaSass: BeccaLyria["sass"] = {
  greeting: [
    "Well, I *was* having a good time. Unfortunate. <:BeccaCry:877278301419348032>",
    "Oh, are we finally important enough for you to grace us with your presence? <:BeccaSmug:872577688022421566>",
    "Look who decided to show up. It sure took you long enough. Did you get lost? <:BeccaHuh:877278300739887134>",
  ],
  amirite: [
    "I'm almost certain you're not, but to be fair, I wasn't listening. <:BeccaDrunk:877278301402583110>",
    "You? Right? The chances of that happening are lower than the chances of me failing. <:BeccaLaugh:877278301830414396>",
    "Highly doubtful. But I suppose there's a first time for everything. <:BeccaWoah:877278300949585980>",
  ],
  sorry: [
    "Oh, did you just apologise? About time. <:BeccaSigh:872577687632371753>",
    "What exactly are you sorry for? I'm sure it's a long list. <:BeccaHuh:877278300739887134>",
    "You can apologise all you want - I doubt you'll get forgiveness. <:BeccaFacepalm:872577686541840514>",
  ],
  selfthanks: [
    "I suppose you need a pat on the back badly enough to thank yourself. <:BeccaFacepalm:872577686541840514>",
    "Well, if no one else is thanking you, I suppose saying it to yourself has to work. <:BeccaSmug:872577688022421566>",
    "Huh. There's narcissism, and then there's you. <:BeccaSigh:872577687632371753>",
  ],
  beccathanks: [
    "You are quite welcome. But do not expect my constant help. <:BeccaSmile:867102883848912966>",
    "You know, for all I do around here that is not even *close* to enough gratitude. <:BeccaPout:867102882791424070>",
    "Wow, it's about time you said thanks. Too little too late. <:BeccaAngry:877278332843085824>",
  ],
};
