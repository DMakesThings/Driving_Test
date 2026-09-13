// Questions extracted from "A1/A Theoretical 250 Questions Test" (Saigon Driving License).
// No answer key is marked in the source PDF, so no correct answer is indicated here.
const QUESTIONS = [
  { id: 1, question: "Phần của đường bộ được sử dụng cho phương tiện giao thông đường bộ đi lại là gì?", options: [
    "1. Phần mặt đường và lề đường.",
    "2. Phần đường xe chạy.",
    "3. Phần đường xe cơ giới."
  ]},
  { id: 2, question: "Làn đường là gì?", options: [
    "1. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
    "2. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn.",
    "3. Là đường cho xe ô tô chạy, dừng, đỗ an toàn."
  ]},
  { id: 3, question: "Khổ giới hạn của đường bộ được hiểu như thế nào là đúng?", options: [
    "1. Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ.",
    "2. Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
    "3. Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn."
  ]},
  { id: 4, question: "Dải phân cách được lắp đặt để làm gì?", options: [
    "1. Để phân chia các làn đường dành cho xe cơ giới và xe thô sơ trên đường cao tốc.",
    "2. Để phân chia phần đường xe chạy thành hai chiều riêng biệt hoặc để phân chia phần đường dành cho xe cơ giới và xe thô sơ hoặc của nhiều loại xe khác nhau trên cùng một chiều đường.",
    "3. Để phân tách phần đường xe chạy và hành lang an toàn giao thông."
  ]},
  { id: 5, question: "Vạch kẻ đường là gì?", options: [
    "1. Là báo hiệu đường bộ để hỗ trợ cảnh báo nguy hiểm cho người tham gia giao thông đường bộ.",
    "2. Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
    "3. Là báo hiệu cho người tham gia giao thông đường bộ về các thông tin của đường bộ.",
    "4. Cả ba ý trên."
  ]},
  { id: 6, question: "Người điều khiển phương tiện tham gia giao thông đường bộ được hiểu như thế nào là đúng?", options: [
    "1. Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng.",
    "2. Là người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
    "3. Cả hai ý trên."
  ]},
  { id: 7, question: "Người lái xe được hiểu như thế nào là đúng?", options: [
    "1. Là người điều khiển xe cơ giới.",
    "2. Là người điều khiển xe thô sơ.",
    "3. Là người điều khiển xe máy chuyên dùng."
  ]},
  { id: 8, question: "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe cơ giới?", options: [
    "1. Xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng; xe đạp, xe đạp máy, xe đạp điện.",
    "2. Xe ô tô; rơ moóc được kéo bởi xe ô tô; sơ mi rơ moóc được kéo bởi ô tô đầu kéo; xe chở người bốn bánh có gắn động cơ; xe chở hàng bốn bánh có gắn động cơ; xe mô tô, xe gắn máy và các loại xe tương tự."
  ]},
  { id: 9, question: "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe thô sơ?", options: [
    "1. Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự.",
    "2. Xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
    "3. Xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo."
  ]},
  { id: 10, question: "Phương tiện giao thông đường bộ gồm những loại nào?", options: [
    "1. Phương tiện giao thông cơ giới đường bộ.",
    "2. Phương tiện giao thông thô sơ đường bộ, xe máy chuyên dùng và các loại xe tương tự.",
    "3. Cả hai ý trên."
  ]},
  { id: 11, question: "Người tham gia giao thông đường bộ gồm những đối tượng nào?", options: [
    "1. Người điều khiển, người được chở trên phương tiện tham gia giao thông đường bộ.",
    "2. Người điều khiển, dẫn dắt vật nuôi trên đường bộ; người đi bộ trên đường bộ.",
    "3. Cả hai ý trên."
  ]},
  { id: 12, question: "Người điều khiển phương tiện tham gia giao thông đường bộ gồm những đối tượng nào dưới đây?", options: [
    "1. Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
    "2. Người điều khiển xe máy chuyên dùng.",
    "3. Cả hai ý trên."
  ]},
  { id: 13, question: "Người điều khiển giao thông đường bộ được hiểu như thế nào là đúng?", options: [
    "1. Là người điều khiển phương tiện tham gia giao thông đường bộ.",
    "2. Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
    "3. Là người tham gia giao thông đường bộ."
  ]},
  { id: 14, question: "Hành vi nào dưới đây bị nghiêm cấm?", options: [
    "1. Sử dụng xe đạp đi trên các tuyến quốc lộ.",
    "2. Rải vật sắc nhọn, đổ chất gây trơn trượt trên đường bộ.",
    "3. Cả hai ý trên."
  ]},
  { id: 15, question: "Hành vi đưa xe cơ giới, xe máy chuyên dùng tham gia giao thông đường bộ nào dưới đây bị cấm?", options: [
    "1. Không có chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường.",
    "2. Hết niên hạn sử dụng.",
    "3. Cả hai ý trên."
  ]},
  { id: 16, question: "Tổ chức đua xe được phép thực hiện khi nào?", options: [
    "1. Trên đường phố không có người qua lại.",
    "2. Được người dân ủng hộ.",
    "3. Được cơ quan có thẩm quyền cấp phép."
  ]},
  { id: 17, question: "Hành vi đua xe trái phép bị xử lý như thế nào?", options: [
    "1. Chỉ bị nhắc nhở.",
    "2. Tùy theo mức độ của hành vi vi phạm có thể bị xử lý hành chính hoặc xử lý hình sự."
  ]},
  { id: 18, question: "Người điều khiển phương tiện tham gia giao thông đường bộ mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?", options: [
    "1. Bị nghiêm cấm.",
    "2. Không bị nghiêm cấm.",
    "3. Không bị nghiêm cấm, nếu nồng độ cồn trong máu ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông."
  ]},
  { id: 19, question: "Theo Luật Phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?", options: [
    "1. Người điều khiển xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
    "2. Người được chở trên xe cơ giới.",
    "3. Cả hai ý trên."
  ]},
  { id: 20, question: "Hành vi giao xe ô tô, mô tô cho người nào sau đây tham gia giao thông đường bộ bị nghiêm cấm?", options: [
    "1. Người chưa đủ tuổi theo quy định.",
    "2. Người không có giấy phép lái xe.",
    "3. Người có giấy phép lái xe nhưng đã bị trừ hết 12 điểm.",
    "4. Cả ba ý trên."
  ]},
  { id: 21, question: "Hành vi nào sau đây bị nghiêm cấm?", options: [
    "1. Điều khiển xe cơ giới lạng lách, đánh võng, rú ga liên tục khi tham gia giao thông trên đường.",
    "2. Xúc phạm, đe dọa, cản trở, chống đối hoặc không chấp hành hiệu lệnh, hướng dẫn, yêu cầu kiểm tra, kiểm soát của người thi hành công vụ về bảo đảm trật tự, an toàn giao thông đường bộ.",
    "3. Cả hai ý trên."
  ]},
  { id: 22, question: "Các hành vi nào sau đây bị cấm đối với phương tiện tham gia giao thông đường bộ?", options: [
    "1. Cải tạo xe ô tô loại khác thành xe ô tô chở người phục vụ mục đích quốc phòng, an ninh.",
    "2. Cải tạo trái phép; cố ý can thiệp làm sai lệch chỉ số trên đồng hồ báo quãng đường đã chạy của xe ô tô; cắt, hàn, tẩy xóa, đục sửa, đóng lại trái phép số khung, số động cơ của xe cơ giới, xe máy chuyên dùng."
  ]},
  { id: 23, question: "Hành vi nào sau đây bị cấm?", options: [
    "1. Lắp đặt, sử dụng thiết bị âm thanh, ánh sáng trên xe cơ giới, xe máy chuyên dùng gây mất trật tự, an toàn giao thông đường bộ.",
    "2. Cản trở người, phương tiện tham gia giao thông trên đường bộ; ném gạch, đất, đá, cát hoặc vật thể khác vào người, phương tiện đang tham gia giao thông trên đường bộ.",
    "3. Cả hai ý trên."
  ]},
  { id: 24, question: "Việc sản xuất, sử dụng, mua, bán trái phép biển số xe có bị nghiêm cấm hay không?", options: [
    "1. Không bị nghiêm cấm.",
    "2. Bị nghiêm cấm.",
    "3. Bị nghiêm cấm tuỳ trường hợp."
  ]},
  { id: 25, question: "Khi điều khiển phương tiện tham gia giao thông, những hành vi nào dưới đây bị nghiêm cấm?", options: [
    "1. Thay đổi tốc độ của xe nhiều lần.",
    "2. Điều khiển phương tiện sau 23 giờ trong ngày.",
    "3. Lạng lách, đánh võng, rú ga liên tục."
  ]},
  { id: 26, question: "Có bao nhiêu nhóm biển báo hiệu đường bộ?", options: [
    "1. Ba nhóm: Biển báo cấm, biển báo nguy hiểm và biển hiệu lệnh.",
    "2. Bốn nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh và biển phụ.",
    "3. Năm nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh, biển chỉ dẫn, biển phụ."
  ]},
  { id: 27, question: "Tại nơi có vạch kẻ đường hoặc tại nơi mà người đi bộ, xe lăn của người khuyết tật đang qua đường, người điều khiển phương tiện tham gia giao thông phải thực hiện như thế nào?", options: [
    "1. Giảm tốc độ và nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường đảm bảo an toàn.",
    "2. Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn cho người đi bộ, xe lăn của người khuyết tật qua đường.",
    "3. Quan sát, tăng tốc độ và điều khiển phương tiện nhanh chóng đi qua."
  ]},
  { id: 28, question: "Người điều khiển xe mô tô phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?", options: [
    "1. Đường hẹp, đường vòng, đường quanh co, đường đèo, dốc.",
    "2. Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ.",
    "3. Trời mưa, gió, sương, khói, bụi, mặt đường trơn trượt, lầy lội, có nhiều đất đá, vật liệu rơi vãi ảnh hưởng đến an toàn giao thông đường bộ.",
    "4. Cả ba ý trên."
  ]},
  { id: 29, question: "Khi gặp hiệu lệnh điều khiển của Cảnh sát giao thông như hình dưới đây thì người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?", image: "images/q029.png", options: [
    "1. Người tham gia giao thông đường bộ ở các hướng phải dừng lại.",
    "2. Người tham gia giao thông đường bộ ở các hướng được đi theo chiều gậy chỉ của Cảnh sát giao thông.",
    "3. Người tham gia giao thông đường bộ ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông đường bộ ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
    "4. Người tham gia giao thông đường bộ ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông đường bộ ở phía bên phải và phía bên trái người điều khiển được đi tất cả các hướng."
  ]},
  { id: 30, question: "Khi gặp hiệu lệnh điều khiển của Cảnh sát giao thông như hình dưới đây thì người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?", image: "images/q030.png", options: [
    "1. Người tham gia giao thông đường bộ ở phía sau Cảnh sát giao thông được đi, các hướng khác phải dừng lại.",
    "2. Người tham gia giao thông đường bộ được rẽ phải theo chiều mũi tên màu xanh ở bục Cảnh sát giao thông.",
    "3. Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.",
    "4. Người tham gia giao thông đường bộ ở phía trước Cảnh sát giao thông phải dừng lại, các hướng khác được đi."
  ]},
  { id: 31, question: "Khi hiệu lệnh của người điều khiển giao thông trái với tín hiệu đèn giao thông hoặc biển báo hiệu đường bộ thì người tham gia giao thông đường bộ phải chấp hành báo hiệu đường bộ nào dưới đây?", options: [
    "1. Theo hiệu lệnh của người điều khiển giao thông.",
    "2. Theo tín hiệu đèn giao thông.",
    "3. Theo biển báo hiệu đường bộ."
  ]},
  { id: 32, question: "Khi ở một vị trí vừa có biển báo hiệu đặt cố định vừa có biển báo hiệu tạm thời mà hai biển có ý nghĩa khác nhau, người tham gia giao thông đường bộ phải chấp hành hiệu lệnh của biển báo hiệu nào?", options: [
    "1. Biển báo hiệu đặt cố định.",
    "2. Biển báo hiệu tạm thời.",
    "3. Theo quyết định của người tham gia giao thông nhưng phải bảo đảm an toàn."
  ]},
  { id: 33, question: "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển phương tiện tham gia giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?", options: [
    "1. Dừng lại trước vạch dừng; trường hợp đang đi trên vạch dừng hoặc đã đi qua vạch dừng mà tín hiệu đèn màu vàng thì được đi tiếp; trường hợp tín hiệu đèn màu vàng nhấp nháy, người điều khiển phương tiện tham gia giao thông đường bộ được đi nhưng phải quan sát, giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường hoặc các phương tiện khác.",
    "2. Tăng tốc độ nhanh chóng vượt qua nút giao.",
    "3. Quan sát, giảm tốc độ, từ từ vượt qua nút giao."
  ]},
  { id: 34, question: "Người lái xe trên đường cần chấp hành quy định về tốc độ tối đa như thế nào?", options: [
    "1. Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng.",
    "2. Chỉ lớn hơn tốc độ tối đa cho phép khi vào ban đêm.",
    "3. Không vượt quá tốc độ tối đa cho phép."
  ]},
  { id: 35, question: "Phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?", options: [
    "1. Đi về bên trái theo chiều đi của mình.",
    "2. Đi về bên phải theo chiều đi của mình.",
    "3. Đi ở bất cứ bên nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác."
  ]},
  { id: 36, question: "Trên một chiều đường có vạch kẻ phân làn đường, người lái xe cơ giới, xe máy chuyên dùng phải điều khiển xe đi trên làn đường nào?", options: [
    "1. Đi trên làn đường bên phải trong cùng.",
    "2. Đi trên làn đường bên trái.",
    "3. Đi ở bất cứ làn nào nhưng phải bảo đảm tốc độ cho phép."
  ]},
  { id: 37, question: "Người lái xe phải giảm tốc độ, có tín hiệu rẽ phải và đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?", options: [
    "1. Khi xe chạy phía trước có tín hiệu vượt xe khác.",
    "2. Khi phía trước có xe chạy ngược chiều.",
    "3. Khi xe sau xin vượt nếu đủ điều kiện an toàn.",
    "4. Khi xe sau có tín hiệu vượt bên phải."
  ]},
  { id: 38, question: "Vượt xe là gì?", options: [
    "1. Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.",
    "2. Là tình huống giao thông trên đường có từ hai làn đường dành cho xe cơ giới cùng chiều trở lên được phân biệt bằng vạch kẻ đường, xe đi phía sau di chuyển lên trước xe phía trước theo quy tắc sử dụng làn đường."
  ]},
  { id: 39, question: "Người lái xe được phép vượt xe trên cầu hẹp có một làn đường, đường cong có tầm nhìn bị hạn chế hay không?", options: [
    "1. Được phép vượt khi đường vắng.",
    "2. Không được phép vượt.",
    "3. Được phép vượt khi có việc gấp."
  ]},
  { id: 40, question: "Muốn vượt xe phía trước, người lái xe mô tô phải có tín hiệu như thế nào dưới đây để bảo đảm an toàn?", options: [
    "1. Bấm còi liên tục để xe phía trước biết xe mình xin vượt.",
    "2. Rú ga liên tục để xe phía trước biết xe mình xin vượt.",
    "3. Báo hiệu nhấp nháy bằng đèn chiếu sáng phía trước hoặc còi."
  ]},
  { id: 41, question: "Khi lái xe trong khu đông dân cư, khu vực cơ sở khám bệnh, chữa bệnh trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi trong thời gian nào?", options: [
    "1. Từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau.",
    "2. Từ 05 giờ đến 22 giờ.",
    "3. Từ 23 giờ ngày hôm trước đến 05 giờ sáng hôm sau."
  ]},
  { id: 42, question: "Người lái xe sử dụng đèn như thế nào khi đi trên các đoạn đường qua khu đông dân cư có hệ thống chiếu sáng đang hoạt động?", options: [
    "1. Chỉ bật đèn chiếu xa (đèn pha).",
    "2. Bật đèn chiếu xa (đèn pha) khi đường vắng, bật đèn chiếu gần (đèn cốt) khi có xe đi ngược chiều.",
    "3. Chỉ bật đèn chiếu gần (đèn cốt)."
  ]},
  { id: 43, question: "Khi điều khiển phương tiện tham gia giao thông, hành vi nào sau đây bị cấm?", options: [
    "1. Dùng tay cầm và sử dụng điện thoại hoặc thiết bị điện tử khác.",
    "2. Chỉ được chở người trên thùng xe ô tô chở hàng trong trường hợp chở người đi làm nhiệm vụ cứu nạn, cứu hộ, phòng, chống thiên tai, dịch bệnh hoặc thực hiện nhiệm vụ khẩn cấp."
  ]},
  { id: 44, question: "Người lái xe không được vượt xe khác khi gặp trường hợp nào dưới đây?", options: [
    "1. Trên cầu hẹp có một làn đường; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; khi gặp xe ưu tiên.",
    "2. Trên cầu có từ 02 làn xe trở lên.",
    "3. Trên đường có 02 làn đường được phân chia làn bằng vạch kẻ nét đứt."
  ]},
  { id: 45, question: "Nơi nào cấm quay đầu xe?", options: [
    "1. Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, gầm cầu vượt, ngầm.",
    "2. Tại nơi đường bộ giao nhau cùng mức với đường sắt, đường hẹp, đường dốc, đoạn đường cong tầm nhìn bị che khuất, trên đường cao tốc, trong hầm đường bộ, trên đường một chiều.",
    "3. Cả hai ý trên."
  ]},
  { id: 46, question: "Trước khi cho xe chuyển hướng, người lái xe phải làm gì để bảo đảm an toàn giao thông?", options: [
    "1. Phải quan sát, bảo đảm khoảng cách an toàn với xe phía sau.",
    "2. Giảm tốc độ và có tín hiệu báo hướng rẽ.",
    "3. Chuyển dần sang làn gần nhất với hướng rẽ. Khi bảo đảm an toàn, không gây trở ngại cho người và phương tiện khác mới được chuyển hướng.",
    "4. Cả ba ý trên."
  ]},
  { id: 47, question: "Khi chuyển làn đường, người lái xe phải bật đèn tín hiệu báo rẽ như thế nào là đúng quy tắc giao thông?", options: [
    "1. Khi bắt đầu chuyển làn đường.",
    "2. Trước khi thay đổi làn đường.",
    "3. Sau khi thay đổi làn đường."
  ]},
  { id: 48, question: "Người điều khiển phương tiện tham gia giao thông không được dừng xe, đỗ xe ở những vị trí nào sau đây?", options: [
    "1. Trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước.",
    "2. Trong phạm vi an toàn của đường sắt.",
    "3. Cả hai ý trên."
  ]},
  { id: 49, question: "Người điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?", options: [
    "1. Được phép.",
    "2. Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.",
    "3. Tùy trường hợp.",
    "4. Không được phép."
  ]},
  { id: 50, question: "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?", options: [
    "1. Buông cả hai tay; đứng, nằm trên xe điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
    "2. Chở tối đa hai người phía sau khi chở người bệnh đi cấp cứu, áp giải người có hành vi vi phạm pháp luật, trẻ em dưới 12 tuổi và người già yếu hoặc người khuyết tật."
  ]},
  { id: 51, question: "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?", options: [
    "1. Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
    "2. Sử dụng xe để chở người hoặc hàng hóa; để chân chạm xuống đất khi khởi hành.",
    "3. Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.",
    "4. Chở người ngồi sau dưới 16 tuổi."
  ]},
  { id: 52, question: "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ không được thực hiện hành vi nào sau đây?", options: [
    "1. Mang, vác vật cồng kềnh.",
    "2. Bám, kéo hoặc đẩy các phương tiện khác.",
    "3. Dùng tay cầm điện thoại hoặc các thiết bị điện tử khác.",
    "4. Ý 1 và ý 2."
  ]},
  { id: 53, question: "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được bám, kéo hoặc đẩy các phương tiện khác không?", options: [
    "1. Được phép.",
    "2. Được bám trong trường hợp phương tiện của mình bị hỏng.",
    "3. Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng.",
    "4. Không được phép."
  ]},
  { id: 54, question: "Người lái xe, người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy phải thực hiện quy định nào dưới đây?", options: [
    "1. Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách.",
    "2. Người lái xe phải đội mũ bảo hiểm, người được chở trên xe không nhất thiết phải đội mũ bảo hiểm.",
    "3. Phải đội mũ bảo hiểm nhưng không nhất thiết phải cài quai."
  ]},
  { id: 55, question: "Người lái xe mô tô hai bánh, xe gắn máy được phép chở tối đa hai người trong những trường hợp nào?", options: [
    "1. Chở người bệnh đi cấp cứu; áp giải người có hành vi vi phạm pháp luật; trẻ em dưới 12 tuổi; người già yếu hoặc người khuyết tật.",
    "2. Người đã uống rượu, bia; người trong cơ thể có chất ma tuý.",
    "3. Cả hai ý trên."
  ]},
  { id: 56, question: "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi nào dưới đây?", options: [
    "1. Đi xe dàn hàng ngang; buông cả hai tay.",
    "2. Sử dụng xe để kéo, đẩy xe khác, vật khác, dẫn dắt vật nuôi, mang, vác và chở vật cồng kềnh; chở người đứng trên xe, giá đèo hàng hoặc ngồi trên tay lái; xếp hàng hóa trên xe quá giới hạn quy định.",
    "3. Ngồi về một bên điều khiển xe; đứng, nằm trên xe điều khiển xe; thay người lái xe khi xe đang chạy; quay người về phía sau để điều khiển xe hoặc bịt mắt điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
    "4. Cả ba ý trên."
  ]},
  { id: 57, question: "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi nào sau đây?", options: [
    "1. Đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác.",
    "2. Sử dụng ô, thiết bị âm thanh, trừ thiết bị trợ thính.",
    "3. Cả hai ý trên."
  ]},
  { id: 58, question: "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện hành vi nào sau đây?", options: [
    "1. Đi trên phần đường, làn đường quy định, chấp hành hiệu lệnh của người điều khiển giao thông, đèn tín hiệu giao thông.",
    "2. Đi xe dàn hàng ngang, đi xe vào phần đường dành cho người đi bộ.",
    "3. Cả hai ý trên."
  ]},
  { id: 59, question: "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được sử dụng ô khi trời mưa hay không?", options: [
    "1. Được sử dụng.",
    "2. Chỉ người ngồi sau được sử dụng.",
    "3. Không được sử dụng.",
    "4. Được sử dụng nếu không có áo mưa."
  ]},
  { id: 60, question: "Người được chở trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?", options: [
    "1. Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
    "2. Không được phép.",
    "3. Chỉ được thực hiện trên đường vắng."
  ]},
  { id: 61, question: "Trường hợp người được chở trên xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô và các loại xe tương tự xe gắn máy không đội \"mũ bảo hiểm cho người đi mô tô, xe máy\" hoặc không cài quai đúng quy cách (trừ trường hợp chở người bệnh đi cấp cứu, trẻ em dưới 06 tuổi, áp giải người có hành vi vi phạm pháp luật) thì việc xử phạt vi phạm hành chính được quy định như thế nào?", options: [
    "1. Không bị xử phạt chỉ bị nhắc nhở.",
    "2. Người được chở không bị xử phạt, chỉ xử phạt người điều khiển xe mô tô, xe gắn máy.",
    "3. Người được chở bị xử phạt, không xử phạt người điều khiển xe mô tô, xe gắn máy.",
    "4. Xử phạt cả người điều khiển và người được chở trên xe mô tô, xe gắn máy."
  ]},
  { id: 62, question: "Trong các trường hợp dưới đây, để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?", options: [
    "1. Phải đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách, không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
    "2. Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải bảo đảm an toàn.",
    "3. Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa."
  ]},
  { id: 63, question: "Thứ tự xuống phà như thế nào là đúng quy tắc giao thông?", options: [
    "1. Xe thô sơ, người đi bộ xuống trước, xe cơ giới, xe máy chuyên dùng xuống sau.",
    "2. Xe cơ giới, xe máy chuyên dùng xuống trước, xe thô sơ, người đi bộ xuống sau.",
    "3. Xe cơ giới, xe thô sơ xuống trước, xe máy chuyên dùng, người đi bộ xuống sau."
  ]},
  { id: 64, question: "Khi lái xe trong đô thị và khu đông dân cư trong thời gian từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau, nếu cần vượt một xe khác, người lái xe phải báo hiệu như thế nào là đúng quy tắc giao thông?", options: [
    "1. Chỉ được báo hiệu bằng còi.",
    "2. Phải báo hiệu bằng cả còi và đèn.",
    "3. Chỉ được báo hiệu bằng đèn."
  ]},
  { id: 65, question: "Khi điều khiển xe chạy trên đường, biết có xe sau xin vượt, nếu đủ điều kiện an toàn người điều khiển phương tiện phải làm gì?", options: [
    "1. Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt.",
    "2. Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
    "3. Cho xe đi sát về bên trái của phần đường xe chạy và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt."
  ]},
  { id: 66, question: "Trên đường không phân chia thành hai chiều xe chạy riêng biệt, người điều khiển phương tiện tham gia giao thông đường bộ phải tránh xe đi ngược chiều như thế nào để bảo đảm an toàn?", options: [
    "1. Giảm tốc độ và cho xe đi về bên phải theo chiều xe chạy của mình.",
    "2. Một trong hai xe phải dừng lại cho xe kia đi qua mới được đi.",
    "3. Tăng tốc độ, cho xe đi về bên phải theo chiều xe chạy của mình để nhanh chóng vượt qua."
  ]},
  { id: 67, question: "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?", options: [
    "1. Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe đi ngược chiều.",
    "2. Xe xuống dốc phải nhường đường cho xe lên dốc.",
    "3. Xe có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật phía trước.",
    "4. Cả ba ý trên."
  ]},
  { id: 68, question: "Người lái xe phải làm gì để bảo đảm an toàn khi lái xe trên đường cong có tầm nhìn bị hạn chế?", options: [
    "1. Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn.",
    "2. Đi sang làn đường của xe ngược chiều để mở rộng tầm nhìn và vượt xe khác.",
    "3. Cho xe đi sát bên phải làn đường, bật tín hiệu báo hiệu để vượt bên phải xe khác."
  ]},
  { id: 69, question: "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên, đường nhánh phải nhường đường như thế nào là đúng quy tắc giao thông?", options: [
    "1. Nhường đường cho xe đi ở bên phải mình tới.",
    "2. Nhường đường cho xe đi ở bên trái mình tới.",
    "3. Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới."
  ]},
  { id: 70, question: "Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người lái xe phải nhường đường như thế nào là đúng quy tắc giao thông?", options: [
    "1. Nhường đường cho xe đi đến từ bên phải.",
    "2. Nhường đường cho xe đi đến từ bên trái.",
    "3. Không phải nhường đường."
  ]},
  { id: 71, question: "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?", options: [
    "1. Phải nhường đường cho xe đi đến từ bên phải.",
    "2. Xe báo hiệu xin đường trước, xe đó được đi trước.",
    "3. Phải nhường đường cho xe đi đến từ bên trái."
  ]},
  { id: 72, question: "Người lái xe phải nhanh chóng giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường cho các loại xe nào dưới đây?", options: [
    "1. Xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác; xe của lực lượng quân sự, công an và kiểm sát; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương; xe hộ đê không có tín hiệu ưu tiên theo quy định.",
    "2. Xe ưu tiên gồm xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác được huy động đi làm nhiệm vụ chữa cháy; xe của lực lượng quân sự, công an và kiểm sát đi làm nhiệm vụ khẩn cấp; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương đi làm nhiệm vụ cấp cứu; xe hộ đê đi làm nhiệm vụ; xe đi làm nhiệm vụ cứu nạn, cứu hộ, khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật; đoàn xe tang.",
    "3. Xe ô tô, xe máy, đoàn xe đang diễu hành có tổ chức có báo tín hiệu xin vượt bằng còi và đèn."
  ]},
  { id: 73, question: "Khi có tín hiệu của xe ưu tiên, người và phương tiện tham gia giao thông đường bộ phải tuân thủ quy định nào dưới đây?", options: [
    "1. Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường.",
    "2. Tăng tốc độ và đi sát lề đường bên phải để nhường đường.",
    "3. Giảm tốc độ, đi sát lề đường bên trái để nhường đường."
  ]},
  { id: 74, question: "Khi đang lái xe, phía trước có một xe Cảnh sát giao thông không phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?", options: [
    "1. Không được vượt.",
    "2. Được phép vượt ở phần đường dành cho người đi bộ qua đường.",
    "3. Được vượt khi bảo đảm an toàn."
  ]},
  { id: 75, question: "Khi đang lái xe, phía trước có một xe cứu thương đang phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?", options: [
    "1. Không được vượt.",
    "2. Được vượt khi đang đi trên cầu.",
    "3. Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
    "4. Được vượt khi bảo đảm an toàn."
  ]},
  { id: 76, question: "Khi tới đường ngang không có người gác, chắn đường bộ, chuông, đèn tín hiệu, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?", options: [
    "1. Dừng lại về bên phải đường của mình, trước vạch dừng xe và quan sát hai phía, khi không có phương tiện giao thông đường sắt tới mới được đi qua.",
    "2. Quan sát hai phía, khi không có phương tiện giao thông đường sắt tới thì nhanh chóng đi qua.",
    "3. Dừng lại khoảng cách tối thiểu 3 mét tính từ ray đường sắt gần nhất, khi không có phương tiện giao thông đường sắt tới thì nhanh chóng đi qua."
  ]},
  { id: 77, question: "Tại đường ngang, cầu chung đường sắt, khi có hiệu lệnh của nhân viên gác chắn, đèn đỏ sáng nhấp nháy, chuông kêu, chắn đường bộ đang dịch chuyển hoặc đã đóng, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?", options: [
    "1. Dừng lại về bên trái đường của mình, trước vạch dừng xe.",
    "2. Dừng lại giữa đường của mình, trước vạch dừng xe.",
    "3. Dừng lại về bên phải đường của mình, trước vạch dừng xe."
  ]},
  { id: 78, question: "Người tham gia giao thông đường bộ phải dừng lại về bên phải đường của mình trước vạch dừng xe tại đường ngang, cầu chung đường sắt khi có báo hiệu nào dưới đây?", options: [
    "1. Hiệu lệnh của nhân viên gác chắn.",
    "2. Đèn đỏ sáng nhấp nháy, chuông kêu.",
    "3. Chắn đường bộ đang dịch chuyển hoặc đã đóng.",
    "4. Cả ba ý trên."
  ]},
  { id: 79, question: "Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?", options: [
    "1. Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu gần; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹ thuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe, người điều khiển xe máy chuyên dùng phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn.",
    "2. Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu xa; được dừng xe, đỗ xe khi cần thiết.",
    "3. Phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết."
  ]},
  { id: 80, question: "Người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?", options: [
    "1. Có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế.",
    "2. Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ; có vật nuôi đi trên đường hoặc chăn thả ở ven đường.",
    "3. Điểm dừng xe, đỗ xe trên đường bộ có khách đang lên, xuống xe.",
    "4. Cả ba ý trên."
  ]},
  { id: 81, question: "Người lái xe được phép vượt xe khác về bên phải trong trường hợp nào dưới đây?", options: [
    "1. Xe phía trước có tín hiệu rẽ trái hoặc đang rẽ trái hoặc khi xe chuyên dùng đang làm việc trên đường mà không thể vượt bên trái.",
    "2. Xe phía trước đang đi sát lề đường bên trái.",
    "3. Cả hai ý trên."
  ]},
  { id: 82, question: "Khi có xe xin vượt, người lái xe mô tô xử lý như thế nào nếu đủ điều kiện an toàn cho xe phía sau vượt?", options: [
    "1. Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
    "2. Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
    "3. Tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua."
  ]},
  { id: 83, question: "Những trường hợp nào dưới đây không được đi trên đường cao tốc, trừ người, phương tiện giao thông đường bộ và thiết bị phục vụ việc quản lý, bảo trì đường cao tốc?", options: [
    "1. Xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn tốc độ tối thiểu quy định đối với đường cao tốc, xe chở người bốn bánh có gắn động cơ, xe chở hàng bốn bánh có gắn động cơ, xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô, xe gắn máy, xe thô sơ, người đi bộ.",
    "2. Xe máy chuyên dùng có tốc độ thiết kế lớn hơn tốc độ tối thiểu quy định đối với đường cao tốc.",
    "3. Xe ô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 80 km/h."
  ]},
  { id: 84, question: "Theo quy định về độ tuổi, người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe mô tô hai bánh có dung tích xi lanh đến 125 cm3 và xe ô tô chở người đến 8 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg?", options: [
    "1. 16 tuổi.",
    "2. 17 tuổi",
    "3. 18 tuổi."
  ]},
  { id: 85, question: "Người đủ 16 tuổi đến dưới 18 tuổi chỉ được điều khiển các loại xe nào dưới đây?", options: [
    "1. Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 .",
    "2. Xe gắn máy.",
    "3. Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg; các loại xe ô tô quy định cho giấy phép lái xe hạng B kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
    "4. Cả ba ý trên."
  ]},
  { id: 86, question: "Người có Giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?", options: [
    "1. Xe mô tô hai bánh có dung tích xi-lanh 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
    "2. Xe mô tô ba bánh.",
    "3. Cả hai ý trên."
  ]},
  { id: 87, question: "Người có Giấy phép lái xe mô tô hạng A1 được cấp sau ngày 01/01/2025 được phép điều khiển loại xe nào dưới đây?", options: [
    "1. Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
    "2. Xe mô tô ba bánh.",
    "3. Cả hai ý trên."
  ]},
  { id: 88, question: "Người có Giấy phép lái xe mô tô hạng A được phép điều khiển loại xe nào dưới đây?", options: [
    "1. Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
    "2. Xe mô tô hai bánh có dung tích xi-lanh trên 125 cm3 hoặc có công suất động cơ điện trên 11 kW.",
    "3. Cả hai ý trên."
  ]},
  { id: 89, question: "Người lái xe khi tham gia giao thông đường bộ phải đảm bảo các điều kiện nào dưới đây?", options: [
    "1. Phải đủ tuổi, sức khỏe theo quy định của pháp luật; có giấy phép lái xe đang còn điểm, còn hiệu lực phù hợp với loại xe đang điều khiển do cơ quan có thẩm quyền cấp (trừ người lái xe gắn máy).",
    "2. Phải là người đứng tên trong đăng ký xe.",
    "3. Cả hai ý trên."
  ]},
  { id: 90, question: "Khi tham gia giao thông đường bộ, người lái xe phải mang theo các giấy tờ gì?", options: [
    "1. Chứng nhận đăng ký xe hoặc bản sao Chứng nhận đăng ký xe có chứng thực kèm bản gốc giấy tờ xác nhận của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài còn hiệu lực trong trường hợp xe đang được thế chấp tại tổ chức tín dụng, chi nhánh ngân hàng nước ngoài.",
    "2. Giấy phép lái xe phù hợp với loại xe đang điều khiển; chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường đối với xe cơ giới theo quy định của pháp luật; chứng nhận bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới.",
    "3. Trường hợp các giấy tờ nêu trên đã được tích hợp vào tài khoản định danh điện tử thì việc xuất trình, kiểm tra có thể thực hiện thông qua tài khoản định danh điện tử.",
    "4. Cả ba ý trên."
  ]},
  { id: 91, question: "Người có giấy phép lái xe chưa bị trừ hết 12 điểm, được phục hồi điểm giấy phép lái xe trong trường hợp nào sau đây?", options: [
    "1. Không được phục hồi.",
    "2. Được phục hồi đủ 12 điểm, nếu không bị trừ điểm trong thời hạn 12 tháng từ ngày bị trừ điểm gần nhất."
  ]},
  { id: 92, question: "Người có giấy phép lái xe đã bị trừ hết điểm phải làm gì để phục hồi điểm giấy phép lái xe?", options: [
    "1. Không vi phạm pháp luật trật tự, an toàn giao thông đường bộ trong thời gian 12 tháng kể từ ngày bị trừ hết điểm.",
    "2. Sau thời hạn ít nhất là 06 tháng kể từ ngày bị trừ hết điểm, người có giấy phép lái xe được tham gia kiểm tra nội dung kiến thức pháp luật về trật tự, an toàn giao thông đường bộ theo quy định, có kết quả đạt yêu cầu thì được phục hồi đủ 12 điểm.",
    "3. Cả hai ý trên."
  ]},
  { id: 93, question: "Trách nhiệm của tổ chức, cá nhân đứng tên trong giấy chứng nhận đăng ký xe khi chưa thực hiện thu hồi chứng nhận đăng ký xe, biển số xe được quy định như thế nào?", options: [
    "1. Tiếp tục chịu trách nhiệm của chủ xe.",
    "2. Không chịu trách nhiệm sau khi đã chuyển nhượng, trao đổi, tặng, cho."
  ]},
  { id: 94, question: "Trên đường bộ, trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?", options: [
    "1. 60 km/h.",
    "2. 50 km/h.",
    "3. 40 km/h."
  ]},
  { id: 95, question: "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?", options: [
    "1. 60 km/h.",
    "2. 50 km/h.",
    "3. 40 km/h."
  ]},
  { id: 96, question: "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?", options: [
    "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
    "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
    "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
    "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
  ]},
  { id: 97, question: "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 60 km/h?", options: [
    "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
    "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
    "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
    "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
  ]},
  { id: 98, question: "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thể xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?", options: [
    "1. Gặp biển báo nguy hiểm và cảnh báo trên đường.",
    "2. Gặp biển chỉ dẫn trên đường.",
    "3. Gặp biển báo hết mọi lệnh cấm.",
    "4. Gặp biển báo hết hạn chế tốc độ tối đa cho phép."
  ]},
  { id: 99, question: "Khi gặp xe buýt đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào dưới đây?", options: [
    "1. Tăng tốc độ để nhanh chóng vượt qua xe buýt.",
    "2. Quan sát, giảm tốc độ đi qua xe buýt hoặc dừng lại để bảo đảm an toàn."
  ]},
  { id: 100, question: "Việc sử dụng xe mô tô, xe gắn máy, xe thô sơ để vận chuyển hành khách, hàng hóa phải thực hiện các quy định nào dưới đây để đảm bảo an toàn giao thông?", options: [
    "1. Kiểm tra điều kiện bảo đảm an toàn của xe trước khi tham gia giao thông đường bộ; mang đủ giấy tờ theo quy định của pháp luật.",
    "2. Kiểm tra việc sắp xếp hàng hóa bảo đảm an toàn; không chở quá số người, chở hành lý, hàng hoá vượt quá khối lượng cho phép hoặc vượt quá khổ giới hạn của xe.",
    "3. Cả hai ý trên."
  ]},
  { id: 101, question: "Những hành vi nào sau đây thể hiện là người có văn hóa giao thông?", options: [
    "1. Luôn tuân thủ pháp luật về trật tự, an toàn giao thông đường bộ, nhường nhịn và giúp đỡ người khác.",
    "2. Đi nhanh, vượt đèn đỏ nếu không có lực lượng Công an.",
    "3. Bấm còi và nháy đèn liên tục để cảnh báo xe khác.",
    "4. Tránh nhường đường để đi nhanh hơn."
  ]},
  { id: 102, question: "Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?", options: [
    "1. Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông, là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.",
    "2. Là sự tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa giữa những người tham gia giao thông với nhau.",
    "3. Cả hai ý trên."
  ]},
  { id: 103, question: "Người lái xe không điều khiển xe đi đúng làn đường quy định, phóng nhanh, vượt ẩu, vượt đèn đỏ, đi vào đường cấm được coi là hành vi nào trong các hành vi dưới đây?", options: [
    "1. Là thiếu văn hóa giao thông, vi phạm pháp luật về trật tự, an toàn giao thông đường bộ.",
    "2. Là thiếu văn hóa giao thông."
  ]},
  { id: 104, question: "Người lái xe có văn hóa giao thông khi tham gia giao thông đường bộ phải đáp ứng các điều kiện nào dưới đây?", options: [
    "1. Hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông đường bộ; có ý thức trách nhiệm với cộng đồng khi tham gia giao thông; tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa với những người cùng tham gia giao thông.",
    "2. Điều khiển xe vượt quá tốc độ, đi không đúng làn đường."
  ]},
  { id: 105, question: "Người lái xe mô tô có văn hóa giao thông khi tham gia giao thông phải tuân thủ những quy định nào dưới đây?", options: [
    "1. Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy chuẩn kỹ thuật quốc gia, cài quai đúng quy cách.",
    "2. Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông.",
    "3. Điều khiển xe và đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm."
  ]},
  { id: 106, question: "Trong các hành vi dưới đây, người lái xe có văn hóa giao thông phải ứng xử như thế nào?", options: [
    "1. Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.",
    "2. Điều khiển xe đi trên phần đường, làn đường có ít phương tiện giao thông; dừng xe, đỗ xe ở nơi thuận tiện hoặc theo yêu cầu của hành khách, của người thân.",
    "3. Dừng và đỗ xe ở nơi thuận tiện cho việc chuyên chở hành khách và giao nhận hàng hóa; sử dụng ít rượu, bia thì có thể lái xe."
  ]},
  { id: 107, question: "Khi tham gia giao thông việc sử dụng còi xe nên dùng như thế nào để thể hiện là người có văn hóa giao thông?", options: [
    "1. Chỉ bấm còi khi thật sự cần thiết, không bấm còi liên tục hoặc kéo dài, sử dụng còi với mức âm lượng theo quy định.",
    "2. Bấm còi liên tục để các xe khác nhường đường.",
    "3. Bấm còi to khi đi qua khu vực đông dân cư.",
    "4. Không cần dùng còi, tránh gây tiếng ồn là văn minh."
  ]},
  { id: 108, question: "Người điều khiển phương tiện tham gia giao thông đường bộ gây ra tai nạn giao thông đường bộ, người liên quan đến vụ tai nạn giao thông đường bộ có trách nhiệm gì dưới đây?", options: [
    "1. Dừng ngay phương tiện, cảnh báo nguy hiểm, giữ nguyên hiện trường, trợ giúp người bị nạn và báo tin cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh.",
    "2. Ở lại hiện trường vụ tai nạn giao thông đường bộ cho đến khi người của cơ quan Công an đến, trừ trường hợp phải đi cấp cứu, đưa người bị nạn đi cấp cứu hoặc xét thấy bị đe dọa đến tính mạng, sức khỏe nhưng phải đến trình báo ngay cơ quan Công an, Ủy ban nhân dân nơi gần nhất.",
    "3. Cung cấp thông tin xác định danh tính về bản thân, người liên quan đến vụ tai nạn giao thông đường bộ và thông tin liên quan của vụ tai nạn giao thông đường bộ cho cơ quan có thẩm quyền.",
    "4. Cả ba ý trên."
  ]},
  { id: 109, question: "Người có mặt tại nơi xảy ra vụ tai giao thông đường bộ có trách nhiệm gì dưới đây?", options: [
    "1. Giúp đỡ, cứu chữa kịp thời người bị nạn; báo tin ngay cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh hoặc Ủy ban nhân dân nơi gần nhất; tham gia bảo vệ hiện trường; tham gia bảo vệ tài sản của người bị nạn; cung cấp thông tin liên quan về vụ tai nạn theo yêu cầu của cơ quan có thẩm quyền.",
    "2. Chụp lại hình ảnh vụ tai nạn (nếu có thiết bị ghi hình) và nhanh chóng rời khỏi hiện trường vụ tai nạn."
  ]},
  { id: 110, question: "Trong đoạn đường hai chiều tại khu đông dân cư đang ùn tắc, người điều khiển xe mô tô có văn hóa giao thông sẽ lựa chọn cách xử lý tình huống nào dưới đây?", options: [
    "1. Cho xe lấn sang làn ngược chiều để nhanh chóng thoát khỏi nơi ùn tắc.",
    "2. Điều khiển xe trên vỉa hè để nhanh chóng thoát khỏi nơi ùn tắc.",
    "3. Kiên nhẫn tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu đèn giao thông, di chuyển trên đúng phần đường bên phải theo chiều đi, nhường đường cho các phương tiện đi ngược chiều."
  ]},
  { id: 111, question: "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?", options: [
    "1. Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
    "2. Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
    "3. Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe."
  ]},
  { id: 112, question: "Khi điều khiển xe trên đường vòng người lái xe cần phải làm gì để bảo đảm an toàn?", options: [
    "1. Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; giảm tốc độ tới mức cần thiết, về số thấp và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng.",
    "2. Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốc để nhanh chóng qua đường vòng và giảm tốc độ sau khi qua đường vòng."
  ]},
  { id: 113, question: "Khi điều khiển xe qua đường sắt, người lái xe cần phải thực hiện các thao tác nào dưới đây để bảo đảm an toàn?", options: [
    "1. Khi có chuông báo hoặc thanh chắn đã hạ xuống, người lái xe phải dừng xe tạm thời đúng khoảng cách an toàn, kéo phanh tay nếu đường dốc hoặc phải chờ lâu.",
    "2. Khi không có chuông báo hoặc thanh chắn không hạ xuống, người lái xe cần phải quan sát nếu thấy đủ điều kiện an toàn thì về số thấp, tăng ga nhẹ và không thay đổi số trong quá trình vượt qua đường sắt để tránh động cơ chết máy cho xe cho vượt qua.",
    "3. Cả hai ý trên."
  ]},
  { id: 114, question: "Trong các loại nhiên liệu dưới đây, loại nhiên liệu nào giảm thiểu ô nhiễm môi trường?", options: [
    "1. Xăng và dầu diesel.",
    "2. Xăng sinh học và khí sinh học.",
    "3. Ý 1 và ý 2."
  ]},
  { id: 115, question: "Các biện pháp tiết kiệm nhiên liệu khi chạy xe?", options: [
    "1. Bảo dưỡng xe theo định kỳ và có kế hoạch lộ trình trước khi xe chạy.",
    "2. Kiểm tra áp suất lốp theo quy định và chạy xe với tốc độ phù hợp với tình trạng mặt đường và mật độ giao thông trên đường.",
    "3. Cả hai ý trên."
  ]},
  { id: 116, question: "Khi tầm nhìn bị hạn chế bởi sương mù hoặc mưa to, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?", options: [
    "1. Tăng tốc độ, chạy gần xe trước, nhìn đèn hậu để định hướng.",
    "2. Giảm tốc độ, chạy cách xa xe trước với khoảng cách an toàn, bật đèn sương mù và đèn chiếu gần.",
    "3. Tăng tốc độ, bật đèn pha vượt qua xe chạy trước."
  ]},
  { id: 117, question: "Khi đèn pha của xe đi ngược chiều gây chói mắt, làm giảm khả năng quan sát trên đường, người lái xe xử lý như thế nào dưới đây để bảo đảm an toàn?", options: [
    "1. Giảm tốc độ, giữ vững tay lái, nhìn chếch sang lề đường bên phải.",
    "2. Bật đèn pha chiếu xa và giữ nguyên tốc độ.",
    "3. Tăng tốc độ, bật đèn pha đối diện xe phía trước."
  ]},
  { id: 118, question: "Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?", options: [
    "1. Sử dụng phanh trước.",
    "2. Sử dụng phanh sau.",
    "3. Giảm hết ga, sử dụng đồng thời cả phanh sau và phanh trước."
  ]},
  { id: 119, question: "Khi đang lái xe mô tô hoặc ô tô, nếu có nhu cầu sử dụng điện thoại để nhắn tin hoặc gọi điện, người lái xe phải thực hiện như thế nào trong các tình huống nêu dưới đây?", options: [
    "1. Giảm tốc độ để bảo đảm an toàn với xe phía trước và sử dụng điện thoại để liên lạc.",
    "2. Giảm tốc độ để dừng xe ở nơi cho phép sau đó sử dụng điện thoại để liên lạc.",
    "3. Tăng tốc độ để cách xa xe phía sau và sử dụng điện thoại để liên lạc."
  ]},
  { id: 120, question: "Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga tham gia giao thông dễ gây tai nạn nguy hiểm?", options: [
    "1. Sử dụng còi.",
    "2. Phanh đồng thời cả phanh trước và phanh sau.",
    "3. Chỉ sử dụng phanh trước."
  ]},
  { id: 121, question: "Khi điều khiển xe mô tô quay đầu, người lái xe cần thực hiện như thế nào để bảo đảm an toàn?", options: [
    "1. Bật tín hiệu báo rẽ trước khi quay đầu, từ từ giảm tốc độ đến mức có thể dừng lại.",
    "2. Chỉ quay đầu xe tại những nơi được phép quay đầu.",
    "3. Quan sát an toàn các phương tiện tới từ phía trước, phía sau, hai bên đồng thời nhường đường cho xe từ bên phải và phía trước đi tới.",
    "4. Cả ba ý trên."
  ]},
  { id: 122, question: "Tay ga trên xe mô tô hai bánh có tác dụng gì dưới đây?", options: [
    "1. Để điều khiển xe chạy về phía trước.",
    "2. Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.",
    "3. Để điều khiển xe chạy lùi.",
    "4. Ý 1 và ý 2."
  ]},
  { id: 123, question: "Gương chiếu hậu của xe mô tô hai bánh có tác dụng gì dưới đây?", options: [
    "1. Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
    "2. Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
    "3. Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.",
    "4. Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng."
  ]},
  { id: 124, question: "Để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào?", options: [
    "1. Tăng ga thật mạnh, giảm ga từ từ.",
    "2. Tăng ga thật mạnh, giảm ga thật nhanh.",
    "3. Tăng ga từ từ, giảm ga thật nhanh.",
    "4. Tăng ga từ từ, giảm ga từ từ."
  ]},
  { id: 125, question: "Để tránh đổ, ngã khi điều khiển xe mô tô hai bánh ở nơi đường xấu, nhỏ và hẹp, người lái xe cần xử lý như thế nào?", options: [
    "1. Đi ở tốc độ thấp, quan sát liên tục khoảng cách từ 05 m đến 10 m phía trước để điều chỉnh sớm hướng di chuyển.",
    "2. Trong quá trình di chuyển không nên dùng phanh trước tránh làm khóa bánh dẫn hướng.",
    "3. Không được lắc người sang trái hoặc phải nhiều, trọng tâm cơ thể cần trùng với trọng tâm của xe.",
    "4. Cả ba ý trên."
  ]},
  { id: 126, question: "Biển nào cấm máy kéo?", image: "images/q126.png", options: [
    "1. Biển 1.",
    "2. Biển 2 và biển 3.",
    "3. Biển 1 và biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 127, question: "Biển nào báo hiệu cấm xe mô tô ba bánh chở hàng đi qua?", image: "images/q127.png", options: [
    "1. Biển 1 và biển 2.",
    "2. Biển 1 và biển 3.",
    "3. Biển 2 và biển 3."
  ]},
  { id: 128, question: "Biển nào dưới đây xe gắn máy được phép đi vào?", image: "images/q128.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Cả hai biển."
  ]},
  { id: 129, question: "Biển nào báo hiệu cấm xe mô tô đi vào?", image: "images/q129.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 130, question: "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?", image: "images/q130.png", options: [
    "1. Không biển nào.",
    "2. Biển 1 và biển 2.",
    "3. Biển 2 và biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 131, question: "Biển nào cấm quay đầu xe?", image: "images/q131.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Không biển nào.",
    "4. Cả hai biển."
  ]},
  { id: 132, question: "Biển nào cấm xe rẽ trái?", image: "images/q132.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Cả hai biển."
  ]},
  { id: 133, question: "Khi gặp biển nào xe được rẽ trái?", image: "images/q133.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Không biển nào."
  ]},
  { id: 134, question: "Biển nào cấm các phương tiện rẽ phải?", image: "images/q134.png", options: [
    "1. Biển 1 và biển 2.",
    "2. Biển 1 và biển 3.",
    "3. Biển 2 và biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 135, question: "Biển nào cấm các phương tiện rẽ trái?", image: "images/q135.png", options: [
    "1. Biển 1 và biển 2.",
    "2. Biển 1 và biển 3.",
    "3. Biển 2 và biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 136, question: "Biển nào xe được phép rẽ trái?", image: "images/q136.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Không biển nào."
  ]},
  { id: 137, question: "Biển nào xe quay đầu không bị cấm?", image: "images/q137.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Cả hai biển."
  ]},
  { id: 138, question: "Biển nào xe được phép quay đầu nhưng không được rẽ trái?", image: "images/q138.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Cả hai biển."
  ]},
  { id: 139, question: "Biển nào là biển \"Cấm đi ngược chiều\"?", image: "images/q139.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Cả ba biển."
  ]},
  { id: 140, question: "Biển nào dưới đây các phương tiện không được phép đi vào?", image: "images/q140.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 1 và biển 2."
  ]},
  { id: 141, question: "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?", image: "images/q141.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Cả ba biển."
  ]},
  { id: 142, question: "Biển nào cấm tất cả các loại xe cơ giới và thô sơ đi lại trên đường, trừ xe ưu tiên theo luật định (nếu đường vẫn cho xe chạy được)?", image: "images/q142.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Cả hai biển."
  ]},
  { id: 143, question: "Biển báo này có ý nghĩa như thế nào?", image: "images/q143.png", options: [
    "1. Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.",
    "2. Tốc độ tối thiểu cho phép về ban đêm cho các phương tiện là 70 km/h."
  ]},
  { id: 144, question: "Biển này có hiệu lực đối với xe mô tô hai bánh, ba bánh chở hàng không?", image: "images/q144.png", options: [
    "1. Có.",
    "2. Không."
  ]},
  { id: 145, question: "Biển này có ý nghĩa như thế nào?", image: "images/q145.png", options: [
    "1. Cấm xe cơ giới (trừ xe ưu tiên theo luật định) đi thẳng.",
    "2. Cấm các loại xe cơ giới và xe mô tô (trừ xe ưu tiên theo luật định) đi về bên trái và bên phải.",
    "3. Hướng trái và phải không cấm xe cơ giới."
  ]},
  { id: 146, question: "Biển phụ đặt dưới biển cấm bóp còi có ý nghĩa như thế nào?", image: "images/q146.png", options: [
    "1. Báo khoảng cách đến nơi cấm bóp còi.",
    "2. Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.",
    "3. Báo cấm dùng còi có độ vang xa 500m."
  ]},
  { id: 147, question: "Chiều dài đoạn đường 500 m từ nơi đặt biển này, người lái xe có được phép bấm còi không?", image: "images/q147.png", options: [
    "1. Được phép.",
    "2. Không được phép."
  ]},
  { id: 148, question: "Biển nào xe mô tô hai bánh được đi vào?", image: "images/q148.png", options: [
    "1. Biển 1 và biển 2.",
    "2. Biển 1 và biển 3.",
    "3. Biển 2 và biển 3."
  ]},
  { id: 149, question: "Biển nào xe mô tô hai bánh không được đi vào?", image: "images/q149.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 150, question: "Ba biển này có hiệu lực như thế nào?", image: "images/q150.png", options: [
    "1. Cấm các loại xe ở biển phụ đi vào.",
    "2. Cấm các loại xe cơ giới đi vào trừ loại xe ở biển phụ."
  ]},
  { id: 151, question: "Biển này có ý nghĩa như thế nào?", image: "images/q151.png", options: [
    "1. Cấm dừng xe về hướng bên trái.",
    "2. Cấm dừng và đỗ xe theo hướng bên phải.",
    "3. Được phép đỗ xe và dừng xe theo hướng bên phải."
  ]},
  { id: 152, question: "Biển nào là biển \"Tốc độ tối đa cho phép về ban đêm\"?", image: "images/q152.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Cả hai biển."
  ]},
  { id: 153, question: "Biển nào báo hiệu hạn chế tốc độ của phương tiện không vượt quá trị số ghi trên biển?", image: "images/q153.png", options: [
    "1. Biển 1.",
    "2. Biển 2."
  ]},
  { id: 154, question: "Số 50 ghi trên biển báo dưới đây có ý nghĩa như thế nào?", image: "images/q154.png", options: [
    "1. Tốc độ tối đa các xe cơ giới được phép chạy.",
    "2. Tốc độ tối thiểu các xe cơ giới được phép chạy."
  ]},
  { id: 155, question: "Biển báo dưới đây có ý nghĩa như thế nào?", image: "images/q155.png", options: [
    "1. Báo hiệu tốc độ tối đa cho phép các xe cơ giới chạy.",
    "2. Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy."
  ]},
  { id: 156, question: "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?", image: "images/q156.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 157, question: "Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?", image: "images/q157.png", options: [
    "1. Biển 1.",
    "2. Biển 1 và biển 3.",
    "3. Biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 158, question: "Biển nào báo hiệu \"Đường dành cho xe thô sơ\"?", image: "images/q158.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 159, question: "Biển nào báo hiệu sắp đến chỗ giao nhau nguy hiểm?", image: "images/q159.png", options: [
    "1. Biển 1.",
    "2. Biển 1 và biển 2.",
    "3. Biển 2 và biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 160, question: "Biển nào báo hiệu \"Giao nhau với đường sắt có rào chắn\"?", image: "images/q160.png", options: [
    "1. Biển 1.",
    "2. Biển 2 và biển 3.",
    "3. Biển 3."
  ]},
  { id: 161, question: "Biển nào báo hiệu \"Giao nhau có tín hiệu đèn\"?", image: "images/q161.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 162, question: "Biển nào báo hiệu nguy hiểm giao nhau với đường sắt?", image: "images/q162.png", options: [
    "1. Biển 1 và biển 2.",
    "2. Biển 1 và biển 3.",
    "3. Biển 2 và biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 163, question: "Biển nào báo hiệu đường bộ giao nhau với đường sắt không có rào chắn?", image: "images/q163.png", options: [
    "1. Biển 1 và biển 2.",
    "2. Biển 1 và biển 3.",
    "3. Biển 2 và biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 164, question: "Biển nào báo hiệu sắp đến chỗ giao nhau giữa đường bộ và đường sắt?", image: "images/q164.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3.",
    "4. Biển 1 và biển 3."
  ]},
  { id: 165, question: "Biển nào báo hiệu \"Cửa chui\"?", image: "images/q165.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 166, question: "Hai biển này có ý nghĩa như thế nào?", image: "images/q166.png", options: [
    "1. Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.",
    "2. Để báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.",
    "3. Nơi đường sắt giao nhau với đường bộ."
  ]},
  { id: 167, question: "Biển nào báo hiệu \"Hết đoạn đường ưu tiên\"?", image: "images/q167.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 168, question: "Biển nào báo hiệu, chỉ dẫn xe đi trên đường này được quyền ưu tiên qua nơi giao nhau?", image: "images/q168.png", options: [
    "1. Biển 1 và biển 2.",
    "2. Biển 1 và biển 3.",
    "3. Biển 2 và biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 169, question: "Biển nào báo hiệu \"Giao nhau với đường không ưu tiên\"?", image: "images/q169.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3.",
    "4. Biển 2 và biển 3."
  ]},
  { id: 170, question: "Biển nào báo hiệu \"Giao nhau với đường ưu tiên\"?", image: "images/q170.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 171, question: "Biển nào báo hiệu \"Đường giao nhau\" của các tuyến đường cùng cấp?", image: "images/q171.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 172, question: "Biển nào báo hiệu \"Đường hai chiều\"?", image: "images/q172.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 173, question: "Biển nào báo hiệu phải giảm tốc độ, nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp?", image: "images/q173.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 174, question: "Biển nào chỉ dẫn \"Được ưu tiên qua đường hẹp\"?", image: "images/q174.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3.",
    "4. Biển 2 và biển 3."
  ]},
  { id: 175, question: "Biển nào báo hiệu \"Đường đôi\"?", image: "images/q175.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 176, question: "Biển nào báo hiệu \"Kết thúc đường đôi\"?", image: "images/q176.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 177, question: "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?", image: "images/q177.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 178, question: "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?", image: "images/q178.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 179, question: "Biển nào báo hiệu \"Chú ý chướng ngại vật\"?", image: "images/q179.png", options: [
    "1. Biển 1.",
    "2. Biển 2 và biển 3.",
    "3. Cả ba biển."
  ]},
  { id: 180, question: "Biển nào báo hiệu \"Đường hầm\"?", image: "images/q180.png", options: [
    "1. Cả ba biển.",
    "2. Biển 2.",
    "3. Biển 2 và biển 3."
  ]},
  { id: 181, question: "Biển nào dưới đây là biển \"Cầu hẹp\"?", image: "images/q181.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 182, question: "Gặp biển nào người tham gia giao thông phải đi chậm và thận trọng đề phòng khả năng xuất hiện và di chuyển bất ngờ của trẻ em trên mặt đường?", image: "images/q182.png", options: [
    "1. Biển 1.",
    "2. Biển 2."
  ]},
  { id: 183, question: "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?", image: "images/q183.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 184, question: "Biển nào dưới đây báo hiệu gần đến đoạn đường thường có trẻ em đi ngang qua?", image: "images/q184.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 185, question: "Biển nào sau đây là biển \"Dốc xuống nguy hiểm\"?", image: "images/q185.png", options: [
    "1. Biển 1.",
    "2. Biển 2."
  ]},
  { id: 186, question: "Biển báo này có ý nghĩa như thế nào?", image: "images/q186.png", options: [
    "1. Báo hiệu đường có ổ gà, lồi lõm.",
    "2. Báo hiệu đường có gồ giảm tốc phía trước."
  ]},
  { id: 187, question: "Các biển báo này có ý nghĩa như thế nào?", image: "images/q187.png", options: [
    "1. Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
    "2. Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
    "3. Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm."
  ]},
  { id: 188, question: "Biển nào báo hiệu các phương tiện phải tuân thủ tốc độ tối đa cho phép trên từng làn đường?", image: "images/q188.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Cả hai biển."
  ]},
  { id: 189, question: "Khi gặp biển nào thì các phương tiện không được đi vào, trừ xe ô tô và xe mô tô?", image: "images/q189.png", options: [
    "1. Biển 1.",
    "2. Biển 2."
  ]},
  { id: 190, question: "Biển này có ý nghĩa như thế nào?", image: "images/q190.png", options: [
    "1. Chỉ hướng đi phải theo.",
    "2. Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phải theo.",
    "3. Chỉ hướng đường phải theo."
  ]},
  { id: 191, question: "Biển nào (đặt trước ngã ba, ngã tư) cho phép xe được rẽ sang hướng khác?", image: "images/q191.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Không biển nào."
  ]},
  { id: 192, question: "Biển nào báo hiệu \"Hướng đi thẳng phải theo\"?", image: "images/q192.png", options: [
    "1. Biển 1.",
    "2. Biển 2."
  ]},
  { id: 193, question: "Biển nào báo hiệu \"Đường một chiều\"?", image: "images/q193.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Cả hai biển."
  ]},
  { id: 194, question: "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối đa cho phép\"?", image: "images/q194.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 195, question: "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối thiểu\"?", image: "images/q195.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 196, question: "Biển nào dưới đây báo hiệu hết cấm vượt?", image: "images/q196.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3.",
    "4. Biển 2 và biển 3."
  ]},
  { id: 197, question: "Trong các biển dưới đây biển nào là biển \"Hết mọi lệnh cấm\"?", image: "images/q197.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 198, question: "Biển nào cho phép được quay đầu xe đi theo hướng ngược lại khi đặt biển trước ngã ba, ngã tư?", image: "images/q198.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3.",
    "4. Không biển nào."
  ]},
  { id: 199, question: "Biển nào không cho phép rẽ phải?", image: "images/q199.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3.",
    "4. Biển 1 và biển 3."
  ]},
  { id: 200, question: "Khi đến chỗ giao nhau, gặp biển nào thì người lái xe không được cho xe đi thẳng, phải rẽ sang hướng khác?", image: "images/q200.png", options: [
    "1. Biển 1 và biển 2.",
    "2. Biển 1 và biển 3.",
    "3. Biển 2 và biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 201, question: "Biển số 1 có ý nghĩa như thế nào?", image: "images/q201.png", options: [
    "1. Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực.",
    "2. Biển chỉ dẫn hết hiệu lực khu vực đỗ xe trên các tuyến đường đối ngoại.",
    "3. Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại."
  ]},
  { id: 202, question: "Biển nào chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường?", image: "images/q202.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Cả hai biển.",
    "4. Không biển nào."
  ]},
  { id: 203, question: "Biển nào chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường?", image: "images/q203.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Cả hai biển.",
    "4. Không biển nào."
  ]},
  { id: 204, question: "Biển nào báo hiệu \"Nơi đỗ xe dành cho người khuyết tật\"?", image: "images/q204.png", options: [
    "1. Biển 1.",
    "2. Biển 2.",
    "3. Biển 3."
  ]},
  { id: 205, question: "Gặp biển báo này, người tham gia giao thông phải xử lý như thế nào?", image: "images/q205.png", options: [
    "1. Dừng xe tại khu vực có trạm Cảnh sát giao thông.",
    "2. Tiếp tục lưu thông với tốc độ bình thường.",
    "3. Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này."
  ]},
  { id: 206, question: "Gặp biển báo dưới đây, người lái xe có bắt buộc phải chạy vòng theo đảo an toàn theo hướng mũi tên khi muốn chuyển hướng hay không?", image: "images/q206.png", options: [
    "1. Bắt buộc.",
    "2. Không bắt buộc."
  ]},
  { id: 207, question: "Biển nào báo hiệu \"Cầu vượt liên thông\"?", image: "images/q207.png", options: [
    "1. Biển 2 và biển 3.",
    "2. Biển 1 và biển 2.",
    "3. Biển 1 và biển 3.",
    "4. Cả ba biển."
  ]},
  { id: 208, question: "Biển số 1 có ý nghĩa như thế nào?", image: "images/q208.png", options: [
    "1. Đi thẳng hoặc rẽ trái trên cầu vượt.",
    "2. Đi thẳng hoặc rẽ phải trên cầu vượt.",
    "3. Báo hiệu cầu vượt liên thông."
  ]},
  { id: 209, question: "Biển nào báo hiệu \"Tuyến đường cầu vượt cắt qua\"?", image: "images/q209.png", options: [
    "1. Biển 1 và biển 2.",
    "2. Biển 1 và biển 3.",
    "3. Biển 2 và biển 3."
  ]},
  { id: 210, question: "Biển báo dưới đây có ý nghĩa như thế nào?", image: "images/q210.png", options: [
    "1. Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp).",
    "2. Báo hiệu đường cụt phía trước.",
    "3. Báo hiệu nút giao gần nhất phía trước.",
    "4. Báo hiệu trạm dừng nghỉ phía trước."
  ]}
];
