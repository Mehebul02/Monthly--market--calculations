const btnSubmit=document.getElementById('btn_submiit')
btnSubmit.addEventListener('click',function(){
    // // // 1st cgpa 
    //  const firstCgpa=document.getElementById('1st_cgpa')
    //  const values=firstCgpa.value
    // const total=parseFloat(values) *100/5;
    // console.log(total)
    
    // // // 2nd cgpa 
    // const secondCgpa=document.getElementById('2nd_cgpa').value
    //  const secondCgpaTotal=parseFloat(secondCgpa)*100/5
   
    calculateTotal("1st_cgpa")
    calculateTotal("2nd_cgpa")
    calculateTotal("3rd_cgpa")
    tenPregnant('4th_cgpa')
    fiveteenPregnant('5th_cgpa')

   
})