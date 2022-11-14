<!DOCTYPE html>
<html>
<title>Shel 201 Pass checker</title>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="css/style.css" />
    <script>
    function validateForm(){
        let midterm1Marks=document.forms["getUserMarks"]["midterm1"].value;
        let midterm2Marks=document.forms["getUserMarks"]["midterm2"].value;
        let maMarks=document.forms["getUserMarks"]["ma_array"].value;
        maMarksArray=maMarks.split(",").map(Number);
        maMarks_avg=maMarksArray.reduce((a, b) => a + b, 0) / maMarksArray.length;
        maMarks_avg=maMarks_avg*100/30
        // alert(maMarks_avg);
        
        
        // let maMarks_avg=maMarks/30*100;
        
        let finalMarksRequired=(80-(maMarks_avg*0.10 + midterm1Marks*0.25 + midterm2Marks*0.25))/0.4
        alert(finalMarksRequired);
        
    }
    </script>
</head>
<body>
    <form name="getUserMarks" onsubmit="return validateForm()">  
        <h1>Will I pass SHel's CSE 201 class? Let's find out!</h1>
        <input type="text" name="midterm1" placeholder="Midterm 1 Marks(out of 100)" required> </br> </br>
        <input type="text" name="midterm2" placeholder="Midterm 2 Marks(out of 100)" required> </br> </br>
        <input type="text" name="ma_array" placeholder="MA's score till now(out of 30) required"> </br></br>
        <input type="submit" value="Submit">
        
    </form>

</body>
</html>
