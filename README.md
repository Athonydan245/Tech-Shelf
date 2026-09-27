# 🚀 TECHSHELF - Digital Marketing & Technology Resource Library

> Nền tảng Landing Page cung cấp tài liệu công nghệ, tích hợp hệ thống đo lường chuyển đổi (Conversion Tracking) và Dashboard phân tích dữ liệu trực quan.

---

## 👤 Thông tin tác giả
* **Họ và tên:** Nguyễn Quang Huy
* **Chuyên ngành:** Software Engineering
* **Trường:** FPT University

---

## 📖 Giới thiệu dự án
**TECHSHELF** được xây dựng nhằm giải quyết bài toán thu hút khách hàng tiềm năng (Lead Generation) kết hợp với tư duy quản trị dựa trên dữ liệu (Data-driven Marketing). Trang web không chỉ cung cấp giao diện trực quan, chuyên nghiệp cho người dùng cuối mà còn tích hợp các nghiệp vụ đo lường chiến dịch thực chiến.

---

## ✨ Tính năng nổi bật & Nghiệp vụ kỹ thuật

### 1. Giao diện người dùng (Frontend & UX/UI)
* **Phong cách Dark Mode hiện đại:** Tối ưu hóa trải nghiệm thị giác với gam màu tối chủ đạo, kết hợp hiệu ứng đổ bóng (Shadow) và chuyển động nổi (Hover 3D) mượt mà.
* **Tài liệu nổi bật (Featured Section):** Trưng bày các ấn phẩm, ebook và tài liệu chuyên sâu kèm thẻ phân loại (Tags) rõ ràng.
* **Trắc nghiệm định hướng (Interactive Quiz):** Giúp người dùng phân loại nhu cầu học tập và nhận gợi ý tài liệu cá nhân hóa.
* **Hỏi đáp thông minh (FAQ):** Hệ thống accordion mở rộng giải đáp chi tiết các thắc mắc chuyên sâu, loại bỏ rào cản tâm lý khi đăng ký.

### 2. Nghiệp vụ thu thập Lead & Chống Spam
* **Form đăng ký thông minh:** Tích hợp kiểm soát dữ liệu đầu vào (Validation).
* **Chuẩn hóa số điện thoại Việt Nam:** Tự động kiểm tra định dạng số điện thoại (bắt buộc bắt đầu bằng số `0`, tổng độ dài từ 10-11 chữ số) nhằm lọc sạch dữ liệu rác cho đội ngũ Telesale.

### 3. Hệ thống Tracking & Analytics (Điểm nhấn kỹ thuật)
* **Mô phỏng DataLayer & GA4:** Theo dõi hành vi người dùng (Page View, Button Clicks, Form Submissions) trực tiếp qua Console Log.
* **Quản lý UTM Source:** Tự động bắt và lưu trữ các tham số chiến dịch (`utm_source`, `utm_medium`, `utm_campaign`) từ URL vào `SessionStorage` để phục vụ đo lường nguồn traffic.
* **Marketing Dashboard (Looker Studio Demo):** Trang quản trị báo cáo thời gian thực (`/analytics`) hiển thị phễu chuyển đổi (Conversion Funnel), tỷ lệ chuyển đổi (CR), chi phí dự tính trên mỗi Lead (CPL) cùng hiệu ứng mô phỏng dòng dữ liệu chuyển động (Real-time Simulation).

---

## 🛠 Công nghệ sử dụng
* **Core:** React 19, TypeScript, Vite
* **Styling:** Tailwind CSS v4
* **Routing:** React Router DOM
* **Deployment:** Vercel

---

## 📂 Cấu trúc thư mục dự án

```text
techshelf-react/
├── public/               # Tài nguyên tĩnh
├── src/
│   ├── components/       # Các thành phần giao diện (Header, Hero, Features, FAQ, LeadForm,...)
│   ├── pages/            # Các trang chính (Home.tsx, Analytics.tsx)
│   ├── utils/            # Tiện ích xử lý tracking và UTMs (tracking.ts)
│   ├── App.tsx           # Định nghĩa tuyến đường (Routes)
│   ├── main.tsx          # Điểm khởi chạy ứng dụng
│   └── index.css         # Cấu hình Tailwind CSS
├── package.json
└── README.md

⚙️ Hướng dẫn cài đặt và chạy cục bộ (Local)
Để chạy dự án trên máy tính cá nhân, hãy thực hiện các bước sau:

Clone repository về máy:

git clone [https://github.com/Tên_Tài_Khoản_Của_Bạn/techshelf-react.git](https://github.com/Tên_Tài_Khoản_Của_Bạn/techshelf-react.git)
cd techshelf-react

Cài đặt các gói thư viện (Dependencies):

npm install

Khởi động môi trường phát triển:

npm run dev

Truy cập đường dẫn hiển thị trên terminal (thường là http://localhost:5173) để trải nghiệm.

👤 Thông tin tác giả & Bản quyền

Họ và tên: Nguyễn Quang Huy

Chuyên ngành: Software Engineering

Trường: FPT University (FPT University Can Tho)

© 2026 TECHSHELF Library. All rights reserved. Designed by Nguyễn Quang Huy.