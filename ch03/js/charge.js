<script>
        
       // var age = 7;
        var charge;
        var age =  prompt("나이 입력");
        if(age !== null){
            if(age < 8){
            document.write("미취학<br>");
            charge = 1000;
            
            }
            else if(age >= 8 && age < 14){
            document.write("초등학생<br>");
            charge = 2000;
            
             }
            document.write("입장료는 <span class = 'accent'> " + charge + "</span> 원 입니다");
            //console.log("나이는 " + age + "세 입니다")
        }
        else{
            document.write("입력 취소 됨");
        }
    </script>