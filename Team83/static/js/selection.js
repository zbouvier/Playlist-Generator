  

function selection_screen() {



    // create svg element:
    var svg = d3.select("#mycircle").append("svg").attr("width", 1000).attr("height", 800)

    var data =  [
        {"cx":350, "cy":200, "r":50, "x":325, "label":"Happy", "color": "#C70039","genre":["blues","country","hiphop","pop","rnb","rock/alternative"]}, 
        {"cx":150, "cy":400, "r":50, "x":137, "label":"Sad","color": "#1D0E0C", "genre":["blues","country","hiphop","pop","rnb","rock/alternative"]}, 
        {"cx":550, "cy":400, "r":50, "x":505, "label":"Energetic","color": "#FFC300","genre":["blues","country","edm_dance","hiphop","pop","rnb","rock/alternative"]},
        {"cx":350, "cy":600,"r":50, "x":328 , "label":"Calm","color": "#334EFF","genre":["blues","country","hiphop","pop","rnb","rock/alternative"]}
      ]
    // Add the path using this helper function
     
    svg.append('text')
                .attr('id',"header_text")
                .text('Welcome! Scroll down for curated playlist after selecting Mood and Genre!')
                .style("font-size", "15px")
                .attr('text-anchor','center')
                .attr('x',100)
                .attr('y',20)
                .attr('fill','#FFFFFF');

    data.forEach(data => {
        
        var isclicked = false; 
        var g = svg
        .append('g')
        g
            .append('circle')
            .attr('cx', data.cx)
            .attr('cy', data.cy)
            .attr('r', data.r)
            .attr('fill', data.color)
            .on('mouseover', function(d, i) {
                d3.select(this).style("cursor", "pointer"); 

              })
              .on("click",function(d,i){  
                isclicked = true;
                handleMouseClick(data)  }
               )
              .on('mouseout',function(d,i){ 
                d3.select(this).style("pointer", "cursor"); 
 
                
            })
    
        g
            .append('text')
            .attr('x', data.x)
            .attr('y', data.cy+5)
            .attr('fill', '#FFFFFF')
            .text(data.label)
            .style("font-size", "20px")
            .on('mouseover', function(d, i) {
                d3.select(this).style("cursor", "pointer")})
            .on("click",function(d,i){  
                    isclicked = true;
                    handleMouseClick(data)  }
                )
            

            function handleMouseClick(data)
            {  
                svg.selectAll("#main_text").remove()
                svg.append('text')
                .attr('x', 265)
                .attr('y', 400)
                .attr("id", "other_text")
                .text('Select a Genre!')
                .attr('fill', '#FFFFFF')
                .style("font-size", "20px")
                genre = data.genre
               genre.forEach(gen=> {
                if (data.label=='Happy' && gen=='blues')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(30));
                    new_cy = data.cy - ((data.r+50) * Math.cos(30));
                    text = 'blues';
                    text_cx = new_cx-15; 
                    text_cy = new_cy+5;
                    text_col = "#e51ee8";
                }
                if (data.label=='Happy' && gen=='country')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(90));
                    new_cy = data.cy - ((data.r+50) * Math.cos(90));
                    text = 'country';
                    text_cx = new_cx-22; 
                    text_cy = new_cy+5;
                    text_col = "#825f30";
                }
                if (data.label=='Happy' && gen=='hiphop')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(180));
                    new_cy = data.cy - ((data.r+50) * Math.cos(180));
                    text = 'hiphop';
                    text_cx = new_cx-20; 
                    text_cy = new_cy+5;
                    text_col ="#6179ed"
                }
                if (data.label=='Happy' && gen=='pop')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(45));
                    new_cy = data.cy - ((data.r+50) * Math.cos(45));
                    text = 'pop';
                    text_cx = new_cx-10; 
                    text_cy = new_cy+5;
                    text_col = "#84ed64";
                }
                if (data.label=='Happy' && gen=='rnb')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(135));
                    new_cy = data.cy - ((data.r+50) * Math.cos(135));
                    text = 'rnb';
                    text_cx = new_cx-10; 
                    text_cy = new_cy+5;
                    text_col = "#13ede2";
                }
                if (data.label=='Happy' && gen=='rock/alternative')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(75));
                    new_cy = data.cy - ((data.r+50) * Math.cos(75));
                    text = 'rock/alt';
                    text_cx = new_cx-25; 
                    text_cy = new_cy+5;
                    text_col = "#f23311";
                }
                if (data.label=='Sad' && gen=='blues')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(30));
                    new_cy = data.cy - ((data.r+50) * Math.cos(30));
                    text = 'blues';
                    text_cx = new_cx-15; 
                    text_cy = new_cy+5;
                    text_col = "#e51ee8";
                }
                if (data.label=='Sad' && gen=='country')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(90));
                    new_cy = data.cy - ((data.r+50) * Math.cos(90));
                    text = 'country';
                    text_cx = new_cx-22; 
                    text_cy = new_cy+5;
                    text_col = "#825f30"
                }
                if (data.label=='Sad' && gen=='hiphop')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(180));
                    new_cy = data.cy - ((data.r+50) * Math.cos(180));
                    text = 'hiphop';
                    text_cx = new_cx-20; 
                    text_cy = new_cy+5;
                    text_col = "#6179ed"
                }
                if (data.label=='Sad' && gen=='pop')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(45));
                    new_cy = data.cy - ((data.r+50) * Math.cos(45));
                    text = 'pop';
                    text_cx = new_cx-10; 
                    text_cy = new_cy+5;
                    text_col = "#84ed64";
                }
                if (data.label=='Sad' && gen=='rnb')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(135));
                    new_cy = data.cy - ((data.r+50) * Math.cos(135));
                    text = 'rnb';
                    text_cx = new_cx-10; 
                    text_cy = new_cy+5;
                    text_col = "#13ede2";
                }
                if (data.label=='Sad' && gen=='rock/alternative')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(75));
                    new_cy = data.cy - ((data.r+50) * Math.cos(75));
                    text = 'rock/alt';
                    text_cx = new_cx-25; 
                    text_cy = new_cy+5;
                    text_col = "#f23311";
                }
                if (data.label=='Energetic' && gen=='blues')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(30));
                    new_cy = data.cy - ((data.r+50) * Math.cos(30));
                    text = 'blues';
                    text_cx = new_cx-15; 
                    text_cy = new_cy+5;
                    text_col = "#e51ee8";
                }
                if (data.label=='Energetic' && gen=='country')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(90));
                    new_cy = data.cy - ((data.r+50) * Math.cos(90));
                    text = 'country';
                    text_cx = new_cx-22; 
                    text_cy = new_cy+5;
                    text_col = "#825f30"
                }
                if (data.label=='Energetic' && gen=='hiphop')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(180));
                    new_cy = data.cy - ((data.r+50) * Math.cos(180));
                    text = 'hiphop';
                    text_cx = new_cx-20; 
                    text_cy = new_cy+5;
                    text_col= "#6179ed"
                }
                if (data.label=='Energetic' && gen=='pop')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(45));
                    new_cy = data.cy - ((data.r+50) * Math.cos(45))+20;
                    text = 'pop';
                    text_cx = new_cx-10; 
                    text_cy = new_cy+5;
                    text_col = "#84ed64";
                }
                if (data.label=='Energetic' && gen=='rnb')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(135));
                    new_cy = data.cy - ((data.r+50) * Math.cos(135));
                    text = 'rnb';
                    text_cx = new_cx-10; 
                    text_cy = new_cy+5;
                    text_col = "#13ede2"
                }
                if (data.label=='Energetic' && gen=='rock/alternative')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(75))-20;
                    new_cy = data.cy - ((data.r+50) * Math.cos(75))+10;
                    text = 'rock/alt';
                    text_cx = new_cx-25; 
                    text_cy = new_cy+5;
                    text_col = "#f23311";
                }
                if (data.label=='Energetic' && gen=='edm_dance')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(18))+100;
                    new_cy = data.cy - ((data.r+50) * Math.cos(18))-20;
                    text = 'edm dance';
                    text_cx = new_cx-29; 
                    text_cy = new_cy+5;
                    text_col = "#e6f026"
                }
                if (data.label=='Calm' && gen=='blues')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(30));
                    new_cy = data.cy - ((data.r+50) * Math.cos(30));
                    text = 'blues';
                    text_cx = new_cx-15; 
                    text_cy = new_cy+5;
                    text_col = "#e51ee8"
                }
                if (data.label=='Calm' && gen=='country')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(90));
                    new_cy = data.cy - ((data.r+50) * Math.cos(90));
                    text = 'country';
                    text_cx = new_cx-22; 
                    text_cy = new_cy+5;
                    text_col = "#825f30";
                }
                if (data.label=='Calm' && gen=='hiphop')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(180));
                    new_cy = data.cy - ((data.r+50) * Math.cos(180));
                    text = 'hiphop';
                    text_cx = new_cx-20; 
                    text_cy = new_cy+5;
                    text_col= "#6179ed"
                }
                if (data.label=='Calm' && gen=='pop')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(45));
                    new_cy = data.cy - ((data.r+50) * Math.cos(45));
                    text = 'pop';
                    text_cx = new_cx-10; 
                    text_cy = new_cy+5;
                    text_col = "#84ed64";
                }
                if (data.label=='Calm' && gen=='rnb')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(135));
                    new_cy = data.cy - ((data.r+50) * Math.cos(135));
                    text = 'rnb';
                    text_cx = new_cx-10; 
                    text_cy = new_cy+5;
                    text_col = "#13ede2"
                }
                if (data.label=='Calm' && gen=='rock/alternative')
                {   
                    new_cx = data.cx + ((data.r+50) * Math.sin(75));
                    new_cy = data.cy - ((data.r+50) * Math.cos(75));
                    text = 'rock/alt';
                    text_cx = new_cx-25; 
                    text_cy = new_cy+5;
                    text_col = "#f23311";
                }
               g.append('circle')
               .attr('cx',new_cx)
               .attr('cy', new_cy)
               .attr('id','genre_circle'+data.label)
               .attr('r', 30)
               .attr('stroke','black')
               .attr('fill',text_col)
               //this on-click function should call the similarity score function
               .on("click",function(d,i){
                console.log(data.label);console.log(gen);
               svg.selectAll('#selection_text').remove()
               svg.selectAll('#other_text').remove()
               svg.append('text')
                .attr('id',"selection_text")
                .text('You selected '+ data.label+ ' and '+gen+ '!')
                .style("font-size", "20px")
                .attr('text-anchor','top-right')
                .attr('x',130)
                .attr('y',50)
                .attr('fill','#FFFFFF');
                console.log("sending 1");
                var new_location = "?genres=" + gen + "&" + "moods=" + data.label+"#scroll"
                window.location.href = new_location;
                
               })
               .on("mouseover", function(d,i){d3.select(this).style("cursor", "pointer");
               d3.select(this)
               .attr('r', 40);})
               .on("mouseout", function(d,i){d3.select(this).style("cursor", "pointer");
               d3.select(this)
               .attr('r', 30);})

               g
            .append('text')
            .attr('x',text_cx)
            .attr('y',text_cy)
            .attr('fill', '#FFFFFF')
            .attr('id','genre_text'+data.label)
            .text(text)
            .attr('text-anchor','center')
            .style("font-size", "14px")
            .on("click",function(d,i){
                svg.selectAll('#selection_text').remove()
                svg.selectAll('#other_text').remove()
                svg.append('text')
                .attr('id',"selection_text")
                .text('You selected '+ data.label+ ' and '+gen+ '!')
                .attr('fill','#FFFFFF')
                .style("font-size", "20px")
                .attr('text-anchor','top-right')
                .attr('x',130)
                .attr('y',50)
                var new_location = "?genres=" + gen + "&" + "moods=" + data.label + "#scroll"
                window.location.href = new_location;
                console.log(data.label);console.log(gen)})
            .on("mouseover", function(d,i){d3.select(this).style("cursor", "pointer")})

            
               
            
            })
        

            }

    })
    svg.append('text')
    .attr('x', 270)
    .attr('y', 400)
    .attr("id", "main_text")
    .text('Select a mood!')
    .attr('fill','#FFFFFF')
    .style("font-size", "20px")



    
}