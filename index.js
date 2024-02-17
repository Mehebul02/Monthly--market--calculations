const btnSubmit = document.getElementById("btn_submiit");
btnSubmit.addEventListener("click", function () {
  calculateTotal("1st_cgpa");
  calculateTotal("2nd_cgpa");
  calculateTotal("3rd_cgpa");
  tenPregnant("4th_cgpa");
  fiveteenPregnant("5th_cgpa");
  twentyPregnant("6th_cgpa");
  twentyFivePregnant("7th_cgpa");
  fiveteenPregnant("8th_cgpa");

  const totalCgpa1 =
    calculateTotal("1st_cgpa") +
    calculateTotal("2nd_cgpa") +
    calculateTotal("3rd_cgpa") +
    tenPregnant("4th_cgpa") +
    fiveteenPregnant("5th_cgpa") +
    twentyPregnant("6th_cgpa") +
    twentyFivePregnant("7th_cgpa") +
    fiveteenPregnant("8th_cgpa");
  console.log(totalCgpa1);

  setInnerText("total_cgpa", totalCgpa1.toFixed(2));
  setInnerText("grade_point", cgpaToGrade(totalCgpa1.toFixed(2)));
  // cgpaToGrade("grade_point")
});

// let inputCheck = document.querySelectorAll(".cgpa_input");
// for (let i = 0; i < inputCheck.length; i++) {
//   inputCheck[i].addEventListener("input", function (e) {
//     let cgpaValue = e.target.value;
// if(!isNaN(cgpaValue) && cgpaValue >=1 && cgpaValue <= 4 && Number.isInteger(cgpaValue*4)/4){
//   inputCheck[i].value=cgpaValue;
// }
// else{
//   inputCheck[i].value = 4;
// }
//   });
// }
