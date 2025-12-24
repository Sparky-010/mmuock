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
            if (currentDate.getDate() === '25' && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                wish.innerHTML = '<h2 class="text-white font-bold">🎉Merry🎅🎄Christmas🎉</h2>'
                wishx.style = 'text-align: center;'
                wishx.innerHTML = '<h2 class="text-white font-bold">🎉Merry🎅🎄Christmas🎉</h2>'
            }// console.log(currentDate.getDate());
            // }else if (currentDate.getDate() === 1 && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
            //     wish.innerHTML = '<h2 class="text-white font-bold">🍾Happy🥂New🥳Year🎆</h2>'
            //     wishx.style = 'text-align: center;'
            //     wishx.innerHTML = '<h2 class="text-white font-bold">🍾Happy 🥂New 🥳Year🎆</h2>'
            // }
            
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

//  time

    function updateTime() {
        const njie = ['Nzẹmzěm🌅', 'Tašig ndéndè☀️', 'Taŋšig🌤️', 'Mbodŋjœ̌🌤️', 'Tzẹtzem🌇', 'Létụ̌🌒']
        const num = ['Tạ', 'Bèpíǽ', 'Bètàt', 'Lekuā', 'Bètå', 'ǹtùògò', 'šîâmbíǽ', 'Léfà', 'Lepụè', 'Léqèm', 'Tsôpmọ', 'Tsôppíǽ']
        const now = new Date();
        const r = document.getElementById('time')
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const hours12 = (hours % 12 || 12).toString().padStart(2, '0');
        
        const timeString = `${hours12}:${minutes} ${ampm}`;

        


        if (ampm === 'AM') {
            document.getElementById('am').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[0]}</span>`
        } else if (ampm === 'PM' && hours12 <= 2) {
            document.getElementById('am').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[2]}</span>`
        }else if (ampm === 'PM' && hours12 > 2 && hours12 <= 4) {
            document.getElementById('am').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[3]}</span>`
        }else if (ampm === 'PM' && hours12 > 4 && hours12 <= 6) {
            document.getElementById('am').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[4]}</span>`
        }else {
            document.getElementById('am').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[5]}</span>`
        }
        // reading time
        function Ntzẹmtzěm() {
            if (hours12 === '01' && ampm === 'AM') {
                // console.log(`<b>Read as:</b> Beneq ${num[0]} ${njie[0]}`);
                document.getElementById('read').innerHTML = `Read as: <i class="read"><u>${num[0]}</u> Neq ${njie[0]}</i>`
            } else if (hours12 === '02' && ampm === 'AM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[1]}</u> ${njie[0]}</i>`
            }
            else if (hours12 === '03' && ampm === 'AM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[2]}</u> ${njie[0]}</i>`
            }
            else if (hours12 === '04' && ampm === 'AM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[3]}</u> ${njie[0]}</i>`
            }
            else if (hours12 === '05' && ampm === 'AM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[4]}</u> ${njie[0]}</i>`
            }
            else if (hours12 === '06' && ampm === 'AM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[5]}</u> ${njie[0]}</i>`
            }
            else if (hours12 === '07' && ampm === 'AM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[6]}</u> ${njie[0]}</i>`
            }
            else if (hours12 === '08' && ampm === 'AM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[7]}</u> ${njie[0]}</i>`
            }
            else if (hours12 === '09' && ampm === 'AM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[8]}</u> ${njie[0]}</i>`
            }
            else if (hours12 === '10' && ampm === 'AM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[9]}</u> ${njie[0]}</i>`
            }
            else if (hours12 === '11' && ampm === 'AM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[10]}</u> ${njie[0]}</i>`
            }else if (hours12 === '12' && ampm === 'PM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[11]}</u> ${njie[1]}</i>`
            }
        }

        Ntzẹmtzěm();

        function Taŋšig() {
            if (hours12 === '01' && ampm === 'PM') {
                // console.log(`<b>Read as:</b> Beneq ${num[0]} ${njie[0]}`);
                document.getElementById('read').innerHTML = `Read as: <i class="read"><u>${num[0]}</u> Neq ${njie[2]}</i>`
            } else if (hours12 === '02' && ampm === 'PM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[1]}</u> ${njie[2]}</i>`
            }
            else if (hours12 === '03' && ampm === 'PM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[2]}</u> ${njie[3]}</i>`
            }
            else if (hours12 === '04' && ampm === 'PM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[3]}</u> ${njie[3]}</i>`
            }
            else if (hours12 === '05' && ampm === 'PM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[4]}</u> ${njie[4]}</i>`
            }
            else if (hours12 === '06' && ampm === 'PM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[5]}</u> ${njie[4]}</i>`
            }
            else if (hours12 === '07' && ampm === 'PM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[6]}</u> ${njie[5]}</i>`
            }
            else if (hours12 === '08' && ampm === 'PM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[7]}</u> ${njie[5]}</i>`
            }
            else if (hours12 === '09' && ampm === 'PM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[8]}</u> ${njie[5]}</i>`
            }
            else if (hours12 === '10' && ampm === 'PM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[9]}</u> ${njie[5]}</i>`
            }
            else if (hours12 === '11' && ampm === 'PM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[10]}</u> ${njie[5]}</i>`
            }else if (hours12 === '12' && ampm === 'AM') {
                document.getElementById('read').innerHTML = `Read as: <i class="read">Beneq <u>${num[11]}</u> ${njie[0]}</i>`
            }
        }

        Taŋšig();

        time.textContent = timeString;
    }

    setInterval(updateTime, 1000);
    updateTime();

    const dev =  document.getElementById('dev')
    const nfd =  document.getElementById('nfd')
    const nfdC =  document.getElementById('nfdC')
    const about =  document.getElementById('about')
    const fabout =  document.getElementById('fabout')
    const clos =  document.getElementById('close')
    const dwn =  document.getElementById('dwn')
    const dwnl =  document.getElementById('dwnl')
    const  nClose =  document.getElementById('nClose')

    // closs 404
    function closs(){
        nfd.style = 'display: none;';
        console.log(nfd.style);
    }
    clos.addEventListener('click', closs);


    // about page
    function del() {
        nfd.style = 'display: initial;';
        console.log(nfd.classList);
        nfd.classList.add = 'p-5 border';
        nfdC.innerHTML = '<h2 class="font-bold text-gray-600 text-3xl underline">404</h2> <p class="text-[1rem] text-gray-600">Page could not be found. <br> Page is currently not available.</p>';
        setTimeout(closs, 9000);
    }
    about.addEventListener('click', del);
    fabout.addEventListener('click', del);
    
    // ndembeze.com unavailable
    dev.addEventListener('click', e =>{
        nfd.style = 'display: initial;'
        nfd.classList.add = 'p-5 border';
        nfdC.innerHTML = '<h2 class="font-bold text-gray-600 text-3xl underline">404</h2> <p class="text-[1rem] text-gray-600"><b>ndembeze.com</b> could not be found. <br> <b>ndembeze.com</b> is currently not available.</p>';
        setTimeout(closs, 9000);
    })

    // download notification
    function dwnc(){
        dwn.style = 'display: none;'
    }
    setTimeout(e => {
        dwn.style = 'display: initial;';
        dwn.classList.add = 'p-5 border';
        dwnl.innerHTML = '<h2 class="font-bold text-gray-600 text-3xl underline">Leteh Time & Kalenda.</h2> <br> <p class="text-[1rem] text-gray-600">Download the Mmuock Leteh Time and Kalenda now. <br> <span>Download Application <a href="./app-release.apk" download="mmuockTK" class="text-blue-700">Android</a> or <a href="./ios_source.tar.gz" download="mmuockTK" class="text-blue-700">iPhone</a></span></p>';
        setTimeout(dwnc, 10000);
    }, 10000)

    nClose.addEventListener('click', dwnc)

