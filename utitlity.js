// 5%
function calculateTotal(id) {
  const values = document.getElementById(id).value;
  const total = (parseFloat(values) * 5) / 100;
  console.log(total);
  return total;
}
// 10%
function tenPregnant(id) {
  const tenPregnantText = document.getElementById(id).value;
  const tenPregnantTotal = (parseFloat(tenPregnantText) * 10) / 100;
  console.log(tenPregnantTotal);
  return tenPregnantTotal;
}
// 15%
function fiveteenPregnant(id) {
  const fiveteenPregnantText = document.getElementById(id).value;
  const fiveteenPregnantTotal = (parseFloat(fiveteenPregnantText) * 15) / 100;
  console.log(fiveteenPregnantTotal);
  return fiveteenPregnantTotal;
}
// 20%
function twentyPregnant(id) {
  const twentyPregnantText = document.getElementById(id).value;
  const twentyPregnantTotal = (parseFloat(twentyPregnantText) * 20) / 100;
  console.log(twentyPregnantTotal);
  return twentyPregnantTotal;
}
// 25%
function twentyFivePregnant(id) {
  const twentyFivePregnantValue = document.getElementById(id).value;
  const twentyFivePregnantTotal =
    (parseFloat(twentyFivePregnantValue) * 25) / 100;
  console.log(twentyFivePregnantTotal);
  return twentyFivePregnantTotal;
}

// setInner Text
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function cgpaToGrade(cgpa) {
  let totalCgpa = parseFloat(cgpa);
  console.log(typeof (totalCgpa))
  if (totalCgpa == 4) {
    return "A+";
  } else if (totalCgpa >= 3.5 && totalCgpa < 4) {
    return "A";
  } else if (totalCgpa >= 3 && totalCgpa < 3.5) {
    return "A-";
  } else if (totalCgpa >= 2.5 && totalCgpa < 3) {
    return "B";
  } else if (totalCgpa >= 2 && totalCgpa < 2.5) {
    return "B-";
  } else if (totalCgpa >= 1.5 && totalCgpa < 2) {
    return "C";
  } else {
    return "Fail";
  }
}
