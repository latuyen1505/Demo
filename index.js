Cách thức hoạt động của Gitignore là gì?

Có thể hiểu đơn giản là git sẽ bỏ qua file hoặc một tập các file trong project của chúng ta khi commit và push lên repository. Ví dụ:

    Các file mà IDE tự sinh ra trong quá trình build project -> Tránh tốn kém tài nguyên server lưu trữ project.
    Các file cấu hình đường dẫn của máy cá nhân -> Gây ra việc không build được project khi checkout về ở các máy thành viên khác.
    Các file cần phải giữ kín nếu như repository của bạn đang để public.
    …

Git quản lý các file mà chúng ta muốn “ignore” bằng file .gitignore được đặt ở trong thư mục root project.

Khi add 1 file mới vào git, git sẽ kiểm tra danh sách những file sẽ bỏ qua trong file .gitignore và không add chúng vào git. Đó mới chỉ là điều kiện cần, điều kiện đủ là files không có trong git cache nữa thì git nó mới bỏ qua, chứ files mà nằm trong git cache thì .gitignore sẽ vô tác dụng.
