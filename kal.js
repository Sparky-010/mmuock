let currentDate = new Date();

    function renderCalendar(date) {
        const monthYearElement = document.getElementById('month-year');
        const calendarGridElement = document.getElementById('calendar-grid');
        const dmonth = document.getElementById('month');
        const dmonths = ['Tạ Sang', 'Besangbèpíǽ', 'Besangbètàt', 'Besanglekuā', 'Besangbètå', 'Besăngǹtùògò', 'Besangšîâmbíǽ', 'Besangléfà', 'Besanglepụè', 'Besangléqèm', 'Besangntsôpmọ', 'Besangntsôppíǽ']
        const d = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

        const month = date.getMonth();
        const year = date.getFullYear();

        monthYearElement.textContent = `${date.toLocaleString('default', { month: 'long' })}`;
        const yearFig = document.querySelector('#yearFig').textContent = `${year}`;
        if (monthYearElement.innerText === 'January') {
            dmonth.textContent = dmonths[0];
        }else if (monthYearElement.innerText === 'February') {
            dmonth.textContent = dmonths[1];
        }else if (monthYearElement.innerText === 'March') {
            dmonth.textContent = dmonths[2];
        }else if (monthYearElement.innerText === 'April') {
            dmonth.textContent = dmonths[3];
        }else if (monthYearElement.innerText === 'May') {
            dmonth.textContent = dmonths[4];
        }else if (monthYearElement.innerText === 'June') {
            dmonth.textContent = dmonths[5];
        }else if (monthYearElement.innerText === 'July') {
            dmonth.textContent = dmonths[6];
        }else if (monthYearElement.innerText === 'August') {
            dmonth.textContent = dmonths[7];
        }else if (monthYearElement.innerText === 'September') {
            dmonth.textContent = dmonths[8];
        }else if (monthYearElement.innerText === 'October') {
            dmonth.textContent = dmonths[9];
        }else if (monthYearElement.innerText === 'November') {
            dmonth.textContent = dmonths[10];
        }else{
            dmonth.textContent = dmonths[11];
        }

        const firstDay = new Date(year, month, 1);
        const firstDayOfWeek = firstDay.getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const wish = document.getElementById('wish')
        const wishx = document.getElementById('wishx')

        calendarGridElement.innerHTML = '';

        // Add empty cells for days before the first day
        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            calendarGridElement.appendChild(emptyCell);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.classList.add('day');
            dayCell.textContent = day;

            if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                dayCell.classList.add('today');
                dayCell.innerHTML = day  + '<br>'+d[new Date().getDay()];
            }
            
            
            calendarGridElement.appendChild(dayCell);
        }
    }

    document.getElementById('prev-month-btn').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    // document.getElementById('next-month-btn').addEventListener('click', () => {
    //     currentDate.setMonth(currentDate.getMonth() + 1);
    //     renderCalendar(currentDate);
    // });

    // Initial render
    renderCalendar(currentDate);