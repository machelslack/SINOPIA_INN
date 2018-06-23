
let dayCount = 1;

function returnMonth(currentYear, currentMonth) {

    let weeks = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay(),
        lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();


    for (var index = 0; index < 5; index++) {

        weeks.push(renderTableCells(index, firstDay, lastDay));
       
    }

    return weeks
}


function renderTableCells(index, firstDay, lastDay) {

    let days = [];

    for (var x = 0; x <= 6; x++) {

        if (index == 0 && x < firstDay) {

            days.push({ day: '' });

        }
        else if(dayCount >lastDay ) {

            days.push( {day:'' } );

        }
        else {

            // $day = date("d", mktime(0, 0, 0, $month, $day, $period));

            // $html.= '<td class="daydiv" data-id="'.$month.'">'.$day.'</td>';

            // $day = $day + 1;

            // $count = $count + 1;

            days.push({ day: dayCount });

            dayCount++;


        }




    }

    return days;




}
export default returnMonth;