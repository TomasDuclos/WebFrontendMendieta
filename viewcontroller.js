function ComponentInitialization(){

    let TextBox= document.getElementById("TextBox");
    let TextBox2= document.getElementById("TextBox2");
    let BtnGet= document.getElementById("BtnGet");
    let BtnGetId= document.getElementById("BtnGetId");
    let BtnAdd= document.getElementById("BtnAdd");
    let BtnMod= document.getElementById("BtnMod");    
    let BtnDelete= document.getElementById("BtnDelete");
    let actions=requestHandler();
    let exampleActivity={"Id":"6","Area":"Educación","Titulo":"Insertar robots","Descripcion":"Inserción de la robótica en el Aula","Duracion":"60 hrs"};


    BtnGet.addEventListener("click",function()
    {
        let result=actions.getActivities();
        result.then(function(res){
        console.log(res);
        //here will be the function that will make the HTML document
        
        //res.forEach(element => {
         // Cardmaker(element);         
        //});   
        })
    });

    BtnGetId.addEventListener("click",function()
    {        
        let result=actions.getActivityId(TextBox.value);
        result.then(function(res){
        console.log(res);
        //here will be the function that will remake the HTML document
        })
    });
    
    BtnAdd.addEventListener("click",function()
    {       
        let activity=TextBox2.value;
        debugger;
        let result=actions.AddActivity(JSON.parse(activity));
        result.then(function(res){
        console.log(res);
        //here will be the function that will remake the HTML document
        })
    });

    BtnMod.addEventListener("click",function()
    {   
        let Activityid=TextBox.value;
        let activityMod=TextBox2.value;
        let result=actions.ModifyActivity(Activityid,JSON.parse(activityMod));
        debugger;
        result.then(function(res){
        console.log(res);
        //here will be the function that will make the HTML document
        })
    });
    
    BtnDelete.addEventListener("click",function()
    {   
        let Activityid=TextBox.value;
        let result=actions.DeleteActivity(Activityid);
        debugger;
        result.then(function(res){
        console.log(res);
        //here will be the function that will make the HTML document
        })
    });

    //Funtion for maker html

    /* 
    <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Card Two</h2>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary btn-sm">More Info</a>
          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->
    */
    function Cardmaker(activity)
    {
        const row=document.getElementById("row1");

        const cardBase=document.createElement('div');
        cardBase.className='col-md-4 mb-5';

        const card=document.createElement('div');
        card.className='card h-100';

        const cardBody=document.createElement('div');
        cardBody.className='card-body';

        const TitleBody = document.createElement('h2');
        TitleBody.textContent = activity.Titulo;
        TitleBody.className = "card-title";        
        const TextBody = document.createElement('p');
        TextBody.textContent = activity.Descripcion;
        TextBody.className = "card-text";

        
        const cardFooter=document.createElement('div');
        cardFooter.className='card-footer';
        const buttonInfo = document.createElement('a');
        buttonInfo.className = "btn btn-primary btn-sm";
        buttonInfo.textContent = "More Info";

        row.appendChild(cardBase);
        cardBase.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(TitleBody);
        cardBody.appendChild(TextBody);

        card.appendChild(cardFooter);
        cardFooter.appendChild(buttonInfo);
    } 




}
//{"Id": "1", "Area": "artevisual", "Titulo": "Insertar robots", "Descripcion": "Inserción de la robótica en el Aula", "Duracion": "50 hrs"}