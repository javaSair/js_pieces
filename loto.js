let n = { // Номера ранее преобретенного билета
    "11": 1,
	"число в билете" : 1
}  
let maxDublicate = 0; // динамическая переменная совпадений 
let countControlDublicate = 2; // Искомое количество дублирующихся номеров в обоих билетах (меньше 2 ищет очень долго)
let bilet = null;
let isStop = false; // Для возможности приостановить работу скрипта
function scan(){
    let t = document.querySelectorAll(".sc-1xf4pma-0.lbSLeD") //  документов (билетов)

    ex:for(s =0; s < t.length; s++){
        let d = t[s].querySelectorAll("div>div.sc-xk3x01-1>div") // значения в документах (чисел)
        if(maxDublicate <= countControlDublicate)
            e: for(let x = 0; x < d.length; x++){
                let y = d[x].innerText;
                let c = n[y] 
                    if(y && c === 1)
                        maxDublicate+=1;
            }
        console.log(maxDublicate)
        if(maxDublicate <= countControlDublicate){
            isStop = true
            t[s].querySelector('.sc-1ied8f1-0.kMpmyN.sc-704av3-2.dAtQEZ').click(); // Выделить найденный билет
        }


    }
 
        maxDublicate = 0;
        // document.querySelector("button .sc-1ied8f1-0.kMpmyN.sc-sh3kwq-1.fxmBBb").click() // id="refreshTicketsBig"
        if(!isStop)
            document.querySelector("#refreshTicketsBig").click()
            setTimeout(function(){
                if(!isStop){
                    scan()
                }

            }, 800) // 800 для комфортного обновления списка билетов
  
}

scan();
