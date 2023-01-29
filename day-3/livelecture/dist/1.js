//literals
let gender = "male";
var Days;
(function (Days) {
    Days[Days["Mon"] = 0] = "Mon";
    Days[Days["Tue"] = 1] = "Tue";
    Days[Days["Wed"] = 2] = "Wed";
})(Days || (Days = {}));
let daysOfWeek = Days;
console.log(daysOfWeek);
