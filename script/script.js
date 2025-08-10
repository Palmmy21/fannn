const passwordFixed = "110266"; // รหัสผ่าน

function checkPassword(){
    const input = document.getElementById('password').value;
    const error = document.getElementById('error');
    if(input === passwordFixed){
        window.location.href = "/thx.html";
    } else {
        error.textContent = "รหัสไม่ถูกต้อง ลองอีกครั้ง";
    }
}

