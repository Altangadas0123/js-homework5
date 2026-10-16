// =================================================================
// const cart = [{name: "Үзэг", quantity: 1}, {name: "Дэвтэр", quantity: 2}];
// if (cart[0].quantity > 1) {
//   cart[0].quantity = cart[0].quantity - 1;
// } else if (cart[0].quantity === 1) {
//   cart.splice(0, 1);
// } else {
//   console.log("Хасах бараа алга");
// }
// console.log(cart);
// =================================================================
// const settings = {sound: true, notifications : false};
// const selectedKey = "notifications";
// if (selectedKey in settings) {
//   settings.notifications = !settings.notifications;
// } else {
//   console.log("Тохиргоо олдсонгүй");
// };
// console.log(settings);
// =================================================================
// const profile = {username: "nomi"};
// const takenNames = ["admin", "guest", "bat"];
// const newUsername = "saraa";
// if (newUsername.length < 4) {
//   console.log("Нэр хэт богино");
// } else if (profile.username === newUsername) {
//   console.log("Нэр өөрчлөгдөөгүй");
// } else if (takenNames.includes(newUsername)) {
//   console.log("Энэ нэр ашиглагдаж байна");
// } else {
//   profile.username = newUsername;
// };
// console.log(profile);
// =================================================================
// const file = {name: "lesson.pdf", extension: "pdf", sizeMB: 8};
// const allowedExtensions = ["pdf", "txt"];
// if (!allowedExtensions.includes(file.extension)) {
//   console.log("Файлын төрөл тохирохгүй");
// } else if (allowedExtensions.includes(file.extension) && file.sizeMB > 10) {
//   console.log("Файл хэт том");
// } else {
//   console.log("Файлыг байршуулах боломжтой");
// };
// =================================================================
// const existingMeeting = {start: 10, end: 12};
// const newMeeting = {start: 11, end: 13};
// if (newMeeting.start >= newMeeting.end) {
//   console.log("Цагийн мэдээлэл буруу")
// } else if ((existingMeeting.start > newMeeting.start && existingMeeting.start < newMeeting.end)
//   || (existingMeeting.end > newMeeting.start && existingMeeting.end < newMeeting.end)
//   || (existingMeeting.start <= newMeeting.start && existingMeeting.end >= newMeeting.end)) {
//   console.log("Уулзалтын цаг давхцаж байна");
// } else {
//   console.log("done");
// };
// =================================================================
/*
// shuud buh potion ashiglah bol ene 2 arge 

const character = { health: 70, maxHealth: 100, potion: 2 };
let necessaryPotion = 0;
let usedPotion = 0;

if (character.health > 0 && character.health < 20) {
  necessaryPotion = 3;
} else if (character.health >= 20 && character.health < 60) {
  necessaryPotion = 2;
} else if (character.health < character.maxHealth && character.health >= 60) {
  necessaryPotion = 1;
} else {
  necessaryPotion = 0;
}

if (character.health === character.maxHealth) {
  console.log(`health ${character.health}. ${character.potion} potion ашиглахгүй`);
} else if (character.health < character.maxHealth && character.potion === 0) {
  console.log(`Эм дууссан`);
} else if (character.potion >= necessaryPotion) {
  character.health = character.health + necessaryPotion * 40;
  character.potion = character.potion - necessaryPotion;
} else {
  usedPotion = necessaryPotion - (necessaryPotion - character.potion)
  character.health = character.health + usedPotion * 40;
  character.potion = character.potion - usedPotion;
};

if (character.health > character.maxHealth) {
  character.health = character.maxHealth;
};

console.log(character);



const character = { health: 1, maxHealth: 100, potion: 2 };

if (character.potion < 1) {
  console.log(`Эм дууссан`);
} else if (character.health > 0 && character.health < 20 && character.potion >= 3) {
  character.health = character.potion * 40 + character.health;
  character.potion = character.potion - 3;
} else {
  character.health = character.potion * 40 + character.health;
  character.potion = 0;
}


if (character.health > character.maxHealth) {
  character.health = character.maxHealth;
};

 console.log(character);
*/



// const character = { health: 1, maxHealth: 100, potion: 2 };

// if (character.health < character.maxHealth) {
//   if (character.potion < 1) {
//     console.log(`Эм дууссан`);
//   } else {
//     character.potion -=1;
//     character.health += 40;
//     if (character.health > character.maxHealth) {
//     character.health = 100;
//     }
//   }
// } else {};
// console.log(character);


// =================================================================
// const mobilePlan = {remainingGB: 5, extraUsedGB: 0, allowExtra: true};
// const requestedGB = 7;
// if (mobilePlan.remainingGB >= requestedGB) {
//   mobilePlan.remainingGB = mobilePlan.remainingGB - requestedGB;
// } else if (mobilePlan.remainingGB < requestedGB && mobilePlan.allowExtra === true) {
//   mobilePlan.extraUsedGB = requestedGB - mobilePlan.remainingGB;
//   mobilePlan.remainingGB = 0;
// };
// console.log(mobilePlan.remainingGB, mobilePlan.extraUsedGB);
// =================================================================
// const parking = {hours: -3, isMember: true};
// let firstHour = 3000;
// let afterFirstHour = 2000;
// let price = 0;
// if (parking.hours < 1 && parking.isMember === false && parking.hours > 0) {
//   price = firstHour;
//   console.log(price);
// } else if (parking.hours >= 1 && parking.isMember === false && parking.hours > 0) {
//   price = (parking.hours - 1) * afterFirstHour;
//   price += firstHour;
//   console.log(price);
// } else if (parking.hours < 1 && parking.isMember === true && parking.hours > 0) {
//   price = firstHour - (firstHour * 0.2);
//   console.log(price);
// } else if (parking.hours >= 1 && parking.isMember === true && parking.hours > 0) {
//   price = (parking.hours - 1) * afterFirstHour;
//   price += firstHour;
//   price = price - (price * 0.2); 
//   console.log(price);
// } else {
//   console.log("Хугацаа буруу")
// };
// =================================================================
// const contact = {email: "", phone: "99112233"};
// if (contact.email !== "") {
//   console.log(contact.email);
// } else if (contact.email === "" && contact.phone !== "") {
//   console.log(contact.phone);
// } else {
//   console.log("Холбоо барих мэдээлэл алга");
// };
// =================================================================
// const team = {members: ["Ану", "Бат", "Сараа"], captain: "Тэмүүлэн"};
// if (team.members.length === 3 && team.members.includes(team.captain)) {
//   console.log("Баг баталгаажлаа");
// } else if (team.members.length !== 3 && team.members.includes(team.captain)) {
//   console.log("Багын гишүүдийн тоо 3 биш");
// } else if (team.members.length === 3 && !team.members.includes(team.captain)) {
//   console.log("Ахлагч багийн гишүүн биш байна");
// } else {
//   console.log("Ахлагч багийн гишүүн биш байна & Багын гишүүдийн тоо 3 биш");
// } ;
// =================================================================
const account = {password: "old123", isLocked: false};
const currentPassword = "old123";
const newPassword = "newpass88";
const confirmPassword = "newpass88";
if (account.isLocked === false && currentPassword === account.password && newPassword.length >= 8 && newPassword === confirmPassword) {
  account.password = newPassword;
  console.log(account.password);
}
// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================
