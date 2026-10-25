# HocChu — Dữ liệu từ vựng HSK 3.0 tiếng Việt (cấp 1–3)

Đây là bộ dữ liệu từ vựng HSK 3.0 (2021) cấp 1–3 bằng tiếng Việt được dùng
trên trang học tiếng Trung [HocChu](https://hocchu.com/?utm_source=github&utm_medium=readme&utm_campaign=hsk_vi_data).

Mỗi từ gồm pinyin, từ loại, nghĩa tiếng Việt và nghĩa gốc tiếng Anh từ
CC-CEDICT. Dữ liệu được công bố theo giấy phép CC BY-SA 4.0 để người học,
người viết tài liệu và nhà phát triển ứng dụng có thể sử dụng lại.

## Nội dung

| Tệp | Nội dung |
| --- | --- |
| [`data/hsk-3.0-vi-levels-1-3.json`](data/hsk-3.0-vi-levels-1-3.json) | 2.209 từ ở định dạng JSON |
| [`data/hsk-3.0-vi-levels-1-3.csv`](data/hsk-3.0-vi-levels-1-3.csv) | Cùng nội dung ở định dạng CSV |

Các cấp có trong bộ dữ liệu: HSK 3.0 cấp 1–3
Số lượng từ: 2.209

Bộ dữ liệu không gồm HSK 4–7, HSK 2.0 cũ hoặc phần giải thích chi tiết theo
từng chữ Hán. Phần nghĩa tiếng Việt đã qua một lượt biên tập bằng AI nhưng
chưa được người bản ngữ xác nhận lần cuối.

## Định dạng dữ liệu

JSON gồm hai phần `meta` và `words`. Mỗi từ có dạng:

```json
{
  "level": 1,
  "word": "的",
  "pinyin": "de",
  "partOfSpeech": "u,n",
  "vietnamese": "trợ từ sở hữu; liên kết định ngữ với danh từ",
  "englishSource": "of; ~'s (possessive particle)"
}
```

Các cột CSV:

```text
level,word,pinyin,part_of_speech,vietnamese_definition,english_source_definition
```

## Học trên trang HocChu

- [Danh sách từ vựng HSK 1](https://hocchu.com/hsk/1/vocabulary?utm_source=github&utm_medium=readme&utm_campaign=hsk_vi_data)
- [Danh sách từ vựng HSK 3](https://hocchu.com/hsk/3/vocabulary?utm_source=github&utm_medium=readme&utm_campaign=hsk_vi_data)
- [Bảng pinyin và luyện thanh điệu](https://hocchu.com/pinyin?utm_source=github&utm_medium=readme&utm_campaign=hsk_vi_data)
- [Bài đọc theo cấp độ](https://hocchu.com/reading?utm_source=github&utm_medium=readme&utm_campaign=hsk_vi_data)
- [Dữ liệu và giấy phép](https://hocchu.com/licenses?utm_source=github&utm_medium=readme&utm_campaign=hsk_vi_data)

## Nguồn và giấy phép

- Danh sách từ HSK: `complete-hsk-vocabulary` (MIT) và danh sách chính thức
  HSK 3.0 (2021)
- Nghĩa gốc tiếng Anh: CC-CEDICT (CC BY-SA 4.0)
- Nghĩa tiếng Việt: bản dịch và biên tập dựa trên nghĩa CC-CEDICT
  (CC BY-SA 4.0)

Phần danh sách từ dùng giấy phép MIT; nghĩa CC-CEDICT và phần dịch, chỉnh sửa
dùng CC BY-SA 4.0. Xem [NOTICE.md](NOTICE.md) để biết cách ghi nguồn. Toàn văn
giấy phép có trong [LICENSE](LICENSE) và [LICENSES/](LICENSES/).

Nếu phát hiện lỗi dịch hoặc cách diễn đạt chưa tự nhiên, vui lòng gửi từ cần
sửa, dòng CSV hoặc URL trang và đề xuất chỉnh sửa tới
<halo@hocchu.com>.

## Tạo lại dữ liệu

Có thể tạo lại dữ liệu từ kho mã nguồn của trang HocChu:

```bash
HSK_SOURCE=../nihaolearn/data/content/hsk.json \
VI_DEFS=../nihaolearn/data/i18n/vi/hsk-definitions.json \
node scripts/export.mjs
```

---

## English

This repository contains the Vietnamese HSK 3.0 levels 1–3 dataset used by
[HocChu](https://hocchu.com/?utm_source=github&utm_medium=readme&utm_campaign=hsk_vi_data).

It contains 2,209 words with pinyin, part of speech, a Vietnamese definition,
and the original CC-CEDICT English definition. The Vietnamese text has received
an AI editorial pass but has not yet been certified by a native Vietnamese
speaker.

The word list is MIT-licensed; the CC-CEDICT definitions and their Vietnamese
translations are CC BY-SA 4.0. See [NOTICE.md](NOTICE.md) for attribution.
