/**
 * Chỉnh hết lời tỏ tình tại đây.
 * Đổi tên, kỷ niệm, lý do và bức thư cho đúng câu chuyện của hai bạn.
 */
export const confession = {
  from: "anh",
  to: "Xuân",

  envelope: {
    eyebrow: "Dành riêng cho Xuân",
    title: "Em bé ơi, anh có một điều muốn nói",
    hint: "Chạm vào dấu sáp hồng để mở thư",
  },

  spark: {
    chapter: "Chương I",
    title: "Mọi chuyện bắt đầu rất nhẹ",
    subtitle: "Ba khoảnh khắc anh không quên. Chạm vào từng tấm ảnh nhé, em bé.",
    memories: [
      {
        title: "Nụ cười ấy",
        text: "Anh không nhớ lúc ấy mình đang nói về chuyện gì. Chỉ nhớ em bé cười, rồi cả khoảng không gian như chậm lại một nhịp.",
      },
      {
        title: "Những dòng tin",
        text: "Có những đêm anh cầm điện thoại, đọc đi đọc lại một câu rất bình thường của Xuân, rồi bỗng thấy lòng ấm đến lạ.",
      },
      {
        title: "Em ở lại",
        text: "Người ta bước qua đời nhau rất nhanh. Còn em bé thì không. Em ở lại trong đầu anh, rất tự nhiên, như vốn dĩ phải thế.",
      },
    ],
  },

  stars: {
    chapter: "Chương II",
    title: "Nếu mỗi lý do là một vì sao",
    subtitle: "Chạm vào từng ngôi sao. Anh gom chúng thành một chòm.",
    reasons: [
      "Vì nụ cười của em bé làm anh thấy ngày nào cũng đáng mở mắt.",
      "Vì giọng Xuân, dù chỉ nói chuyện vặt, cũng khiến anh muốn nghe thêm.",
      "Vì em dịu dàng theo cách không cần giả vờ.",
      "Vì khi em bé giận, anh vẫn thấy thương, chứ không muốn chạy.",
      "Vì Xuân khiến anh muốn trở thành phiên bản tử tế hơn.",
      "Vì đơn giản là em. Xuân. Em bé của anh. Chỉ thế cũng đủ.",
    ],
  },

  game: {
    chapter: "Chương III",
    title: "Một câu hỏi nhỏ thôi",
    prompt: "Em bé có muốn đọc bức thư anh giấu từ lâu không?",
    yes: "Có, em muốn",
    no: "Không",
    noTease: "Thôi được mà…",
  },

  letter: {
    chapter: "Chương IV",
    title: "Lời anh chưa kịp nói",
    skip: "Chạm để đọc hết",
    body: `Xuân à,

Anh viết những dòng này vì lời nói thường hay run. Nên anh gọi em như mọi ngày — em bé — cho lòng mình vững hơn một chút.

Từ lúc em bước vào những ngày của anh, thế giới không trở nên ồn ào hơn. Nó dịu lại. Những chuyện rất nhỏ bỗng có chỗ để nhớ. Anh thấy mình muốn kể, muốn hỏi, muốn ở lại thêm một chút.

Anh thích em.
Không phải một chút cho có.
Mà là muốn cùng em bé đi hết những ngày bình thường, và cả những ngày chẳng bình thường chút nào.

Nếu Xuân cũng thấy một điều gì đó — dù chỉ mới lóe lên — thì anh xin được thương em. Công khai. Dài lâu. Và rất thật.`,
  },

  question: {
    chapter: "Chương cuối",
    title: "Vậy thì…",
    prompt: "Xuân ơi, em bé có đồng ý làm người yêu của anh không?",
    yes: "Đồng ý",
    wait: "Để anh chờ thêm một chút",
  },

  celebration: {
    title: "Cảm ơn em bé",
    accepted: "Từ hôm nay, những ngày bình thường của anh có tên Xuân.",
    waiting: "Không sao. Yêu cũng là biết chờ. Anh vẫn ở đây, rất dịu dàng, vẫn gọi em là em bé.",
    replay: "Đọc lại từ đầu",
  },

  photos: {
    from: "/photos/anh.jpg",
    to: "/photos/xuan.jpg",
    fromLabel: "anh",
    toLabel: "em bé",
  },

  /**
   * Phát online MV chính thức trên YouTube (không tải file).
   * https://www.youtube.com/watch?v=qJhts_cgrqY
   */
  music: {
    youtubeId: "qJhts_cgrqY",
    title: "Ăm Chã Húi",
    artist: "Lâm Thằn Lằn",
    volume: 48,
  },
} as const;

export const scenes = [
  "envelope",
  "spark",
  "stars",
  "game",
  "letter",
  "question",
  "celebration",
] as const;

export type SceneId = (typeof scenes)[number];
