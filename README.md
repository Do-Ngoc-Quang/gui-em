# Gửi Em

Một app Next.js hoạt họa màu hồng, dùng để **thay lời tỏ tình**.

Người nhận mở một phong bì sáp hồng, rồi đi qua bảy cảnh: kỷ niệm, chòm sao lý do, trò chơi nút “Không” chạy trốn, bức thư đánh máy, câu hỏi lớn, và màn chúc mừng.

## Chạy app

```bash
cd gui-em
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000). Đưa điện thoại hoặc laptop cho người ấy, rồi để họ tự chạm vào dấu sáp.

## Viết lại cho đúng chuyện của hai bạn

Sửa file `src/content/confession.ts`:

- `from` / `to`: Anh–Em, hoặc tên thật
- `spark.memories`: ba kỷ niệm
- `stars.reasons`: sáu lý do
- `letter.body`: lời tỏ tình
- `question.prompt`: câu hỏi cuối

## Nhạc nền

Bài đang gắn: **Ăm Chã Húi — Lâm Thằn Lằn**, phát **online** từ MV chính thức trên YouTube khi mở phong bì. Player nhỏ góc trái vẫn hiện (YouTube yêu cầu nhìn thấy được).
