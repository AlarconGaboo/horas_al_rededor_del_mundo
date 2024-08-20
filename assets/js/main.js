const cityData = [
    { id: 'santiago', timeZone: 'America/Santiago' },
    { id: 'paris', timeZone: 'Europe/Paris' },
    { id: 'london', timeZone: 'Europe/London' },
    { id: 'newyork', timeZone: 'America/New_York' },
    { id: 'stpetersburg', timeZone: 'Europe/Moscow' },
    { id: 'beijing', timeZone: 'Asia/Shanghai' },
    { id: 'seoul', timeZone: 'Asia/Seoul' }
];

function updateTime(cityId, timeZone) {
    const cityElement = document.getElementById(cityId);
    const timeElement = cityElement.querySelector('.time');
    
    function update() {
        const now = new Date();
        const options = {
            timeZone: timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        timeElement.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
    }
    
    update(); // Initial call
    setInterval(update, 1000); // Update every second
}

function showCity(city, delay) {
    setTimeout(() => {
        const cityElement = document.getElementById(city.id);
        cityElement.style.display = 'block';
        updateTime(city.id, city.timeZone);
    }, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    cityData.forEach((city, index) => {
        showCity(city, index * 4000);
    });
});
