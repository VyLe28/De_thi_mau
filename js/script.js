// coding implementation
// end coding implementation
function check() {
    const email = document.getElementById("email").value;
    const comment = document.getElementById("com").value; 
    const rate = document.getElementById("rate").value;

    // Kiểm tra định dạng email
    const ePattern = /^[a-zA-Z0-9]+@[a-z]+\.[com]{2,}$/;
    if (!ePattern.test(email)) {
      alert("Định dạng email không đúng!");
      return false;
    }

    // Kiểm tra trường comment có dữ liệu không
    if (comment.trim() === "") {
      alert("Vui lòng nhập nội dung comment!");
      return false;
    }

    // Kiểm tra trường rate (phải là số từ 1 đến 5)
    const rateValue = parseInt(rate, 10);
    if (isNaN(rateValue) || rateValue < 1 || rateValue > 5) {
      alert("Rating phải là số từ 1 đến 5!");
      return false;
    }

    alert("Form đã được gửi đi!");
    return true;
  }