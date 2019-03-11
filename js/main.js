/*
Мини игра "Минг Бонг". Восстал монстр Минг Бонг! Храбрые борцы с монстрами спешат на помощь! 
Изначально Минг Бонг имеет 50 единиц здоровья. Каждый ход игры Минг Бонг выпивает магическое 
зелье, которые ему поставляет в неограниченном количестве злая колдунья Сардулья. Оно 
восстанавливает ему некое количество здоровья. Затем борцы с монстрами 
поливают его из антимонстропушкаруса, и это снимает ему некое количество здоровья. 
Затем начинается новый ход. Если в любой миг здоровье Минг Бонга превысит 100, то он 
поработит мир. Если в любой миг здоровье Минг Бонга упадет до 0, то он умирает, 
а Сардулья отправляется в тюрьму для злых колдуний.
*/

var healPointByMingBong = 50, // HP Минг Бонга
    maxHPbyMingBong = 50, // максимальное зафиксированное здоровье Минг Бонга
    minHPbyMingBong = 50, // минимальное зафиксированное здоровье Минг Бонга
    damage = 0, // нанесенный урон
    maxDamage = 0, // максимальный нанесенный урон
    healing = 0, // излеченное здоровье
    maxHealing = 0, // максимальное количество излеченного здоровья
    steps = 0, // количество ходов игры
    winner; // победитель

// генерация рандомного числа от 0 до 50
function damageOrHealing() {
    return Math.round(Math.random()*51);
}

// возврат уровня ХП после удара
function hpDamage() {
    return healPointByMingBong - damage;
}

//возврат уровня ХП после лечения зельем
function hpHealing() {
    return healPointByMingBong + healing;
}

function getPostInfo() {
    document.getElementById('post-info').innerHTML = ('Излечено: ' + healing + ' HP')
}

// обработка нажатия на кнопку
function buttonOnClick() {
    // проверка на геймовер
    if ((healPointByMingBong <= 0) || (healPointByMingBong >= 100)) {
        return console.log('Игра окончена. Вы не можете больше сделать ход. Всего сделано ходов: ' + steps);
    }
    
    // счетчик ходов
    ++steps;
    
    // лечение
    healing = damageOrHealing();
    console.log('Излечено: ' + healing + ' HP');
    healPointByMingBong = hpHealing();
    console.log('Уровень ХП: ' + healPointByMingBong);
    document.getElementById('heal-point').value = healPointByMingBong;
    document.getElementById('next-to-heal-point').innerHTML = (healPointByMingBong + 'HP');
    if (healPointByMingBong <= 0) {
        return console.log('Уровень ХП достиг 0. Монстр мертв.');
    } else if (healPointByMingBong >= 100) {
        return console.log('Уровень ХП достиг 100. Монстр поработил мир.');
    }
    
    // урон
    damage = damageOrHealing();
    console.log('Нанесенный урон: ' + damage + ' HP');
    healPointByMingBong = hpDamage();
    console.log('Уровень ХП: ' + healPointByMingBong);
    console.log('Сделано ходов: ' + steps);
    document.getElementById('heal-point').value = healPointByMingBong;
    document.getElementById('next-to-heal-point').innerHTML = (healPointByMingBong + 'HP');
    if (healPointByMingBong <= 0) {
        return console.log('Уровень ХП достиг 0. Монстр мертв.');
    } else if (healPointByMingBong >= 100) {
        return console.log('Уровень ХП достиг 100. Монстр поработил мир.');
    }
}

document.getElementById('next-step').onclick = buttonOnClick;

