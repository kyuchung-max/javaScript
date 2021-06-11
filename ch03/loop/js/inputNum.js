
        var n = 1;
        var inputNum = prompt("숫자 입력", "1")
        if(inputNum !== null){
            while(true){
                document.write(n +"<br>");
           
                n += 1;

                if(n > inputNum){
                break;
                
                }
            }
        }
        else document.write("입력 취소 하셨습니다");
    