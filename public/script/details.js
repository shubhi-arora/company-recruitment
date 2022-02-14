
const fileTypes=["application/docx","application/pdf"];
$(".drop-1").click(function(){

document.getElementById("input-1").value=$(this).attr("value");
  // $(".input-1").text($(this).attr("value"));
  // console.log(($(this).attr("value")));
// var val =  $("#input-1").t;
// console.log(val);
// var txt=txt+$(this).attr("value");
// $("#input-1").value=txt;
//   console.log(($(this).attr("value")));


});


$(".drop-2").click(function(){
  document.getElementById("input-2").value=$(this).attr("value");
  //console.log(($(this).attr("value")));
});
$(".drop-3").click(function(){
    document.getElementById("input-3").value=$(this).attr("value");
  //console.log(($(this).attr("value")));
});
$(".drop-4").click(function(){
    document.getElementById("input-4").value=$(this).attr("value");
  //console.log(($(this).attr("value")));
});
$(".drop-5").click(function(){
  document.getElementById("input-5").value=$(this).attr("value");
  //console.log(($(this).attr("value")));
});

// const val=document.getElementById("#formFileLg").files[0];
// console.log(val);
//   if(!fileTypes.includes(val.type))
//   alert("Choose only doc, pdf files");



//   $(".upload").click(function(){
//   var fileinput=$("#formFileLg");
//   var file=fileinput[0].size;
//   console.log(file);
//   var sizefile=returnFileSize(file);
//   console.log(sizefile);
//   $(".uploadtext").text("Size of file is "+ sizefile);
// });
//
// function returnFileSize(number) {
//   if(number <1024) {
//     return number + 'bytes';
//   } else if(number >= 1024 && number < 1048576) {
//     return (number/1024).toFixed(3) + 'KB';
//   } else if(number >= 1048576) {
//     return (number/1048576).toFixed(3) + 'MB';
//   }
// }
