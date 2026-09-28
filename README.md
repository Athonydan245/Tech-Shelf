# 🚀 TECHSHELF - Nền Tảng Tài Liệu Digital Marketing & Tech

> Xây dựng hệ thống Landing Page thu hút khách hàng tiềm năng (Lead Generation), tích hợp Tracking Real-time và Data Dashboard.

---

## 📖 Tổng Quan Dự Án
**TECHSHELF** ra đời nhằm giải quyết bài toán thu thập và quản trị dữ liệu khách hàng (Data-driven Marketing). Hệ thống không chỉ cung cấp giao diện hiển thị tài liệu đẹp mắt cho người dùng, mà còn được tích hợp các luồng (flow) nghiệp vụ Marketing thực chiến như bắt sự kiện (Event Tracking), lưu trữ thông số UTM, và kiểm soát chất lượng Lead.

---

## ✨ Các Chức Năng Nổi Bật

### 1. Trải Nghiệm Người Dùng (Frontend & UX/UI)
* **Dark/Light Mode Toggle:** Tối ưu hóa thị giác người dùng bằng tính năng chuyển đổi giao diện linh hoạt.
* **Featured Hook & Interactive Quiz:** Phân loại chân dung khách hàng thông qua bài trắc nghiệm ngắn, từ đó gợi ý các đầu sách/tài liệu cá nhân hóa để tăng tỷ lệ điền form.
* **Smooth Navigation:** Thanh điều hướng sử dụng thuật toán cuộn trang mượt mà (Smooth Scroll) thay vì URL tĩnh, giữ chân người dùng trên cùng một trang (Single Page).

### 2. Nghiệp Vụ Xử Lý Dữ Liệu (Lead Processing)
* **Form Validation (Chống Spam):** Số điện thoại được rào chặt bằng Regex (Bắt buộc bắt đầu bằng số `0`, độ dài 10-11 số), loại bỏ triệt để dữ liệu rác trước khi đẩy về Telesale.
* **Local Data Storage & Export:** Toàn bộ thông tin đăng ký (Tên, Email, SĐT, Lĩnh vực quan tâm, UTM Nguồn) được mã hóa và lưu trữ tự động. Cung cấp tính năng **Xuất file CSV** trực tiếp tại trang quản trị.

### 3. Hệ Thống Tracking & Analytics (Data-Driven)
* **Real-time Event Tracking:** Mô phỏng cơ chế hoạt động của Google Tag Manager, ghi nhận mọi hành vi (Click, View, Submit) vào hệ thống Log.
* **Dynamic Analytics Dashboard:** Trang báo cáo số liệu (`/analytics`) xây dựng theo chuẩn Looker Studio, trình bày trực quan Phễu chuyển đổi (Funnel), Tỷ lệ CR, và phân bổ nguồn Traffic.

---

## 🛠 Kiến Trúc & Công Nghệ
* **Framework:** React 19, TypeScript, Vite
* **Styling:** Tailwind CSS v4 (Sử dụng CSS biến thiên cho Dark/Light Mode)
* **State & Routing:** React Hooks (useState, useEffect), React Router DOM
* **Deployment System:** Vercel (CI/CD Automated)

---

## ⚙️ Hướng Dẫn Cài Đặt (Local Development)

```bash
# 1. Clone dự án về máy tính
git clone [https://github.com/Tên_Tài_Khoản_Của_Bạn/techshelf-react.git](https://github.com/Tên_Tài_Khoản_Của_Bạn/techshelf-react.git)
cd techshelf-react

# 2. Cài đặt các thư viện phụ thuộc
npm install

# 3. Chạy Server môi trường Dev
npm run dev
# Mở http://localhost:5173 trên trình duyệt để sử dụng.

Tác giả / Sinh viên thực hiện: Nguyễn Quang Huy

Chuyên ngành: Software Engineering

Trường: FPT University

Mục tiêu dự án: Thiết kế phục vụ việc mô phỏng hệ thống Web & Digital Marketing trong học tập.

© 2026 TECHSHELF System. Designed & Developed by Nguyễn Quang Huy.