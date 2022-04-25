let patients = {
    name: ["Tom", "Jerry"],
    height: [9, 10],
    mass: [8, 45],
    tomBmi: function () {
        return (patients.mass[0] / (patients.height[0] * patients.height[0]));
    },
    jerryBmi: function () {
        return (patients.mass[1] / (patients.height[1] * patients.height[1]));
    }

}
console.log(`Is Tom’s BMI higher than Jerry’s? ${patients.tomBmi() > patients.jerryBmi()}`)
