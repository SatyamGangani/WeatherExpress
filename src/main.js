function searchCity(){
    let cityName = document.getElementById('city').value;
    fetch(`http://api.weatherapi.com/v1/current.json?key=5927a041178f4636acd135258222606&q=${cityName}&aqi=yes`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        let dataContainer = document.getElementById("dataContainer");
        if(data.error){
            dataContainer.innerHTML=`
            <img src='/assets/noresult.gif' class='d-block mx-auto mt-4'>
            `
        }
        else{
            let bgcolor = data.current.is_day==1 ? "#f9ffdf" : "#e2e2ff ";
            dataContainer.innerHTML  = 
            `
            <div class="container py-5 h-100">
          
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-md-8 col-lg-6 col-xl-4">
        
                <div class="card" style="color: #4B515D; border-radius: 35px;background-color:${bgcolor};">
                  <div class="card-body p-4">
        
                    <div class="d-flex">
                      <h6 class="flex-grow-1">${data.location.name},${data.location.country}</h6>
                    </div>
        
                    <div class="d-flex flex-column text-center mt-5 mb-4">
                      <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${data.current.temp_c}°C </h6>
                      <span class="small" style="color: #868B94">${data.current.condition.text}</span>
                    </div>
        
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1" style="font-size: 1rem;">
                        <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"><img src="/assets/wind-solid.svg" width="5%"> ${data.current.wind_kph} km/h
                          </span></div>
                        <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"><img src="/assets/humidity_icon.png" width="5%"> ${data.current.humidity}% </span>
                        </div>
                        <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1">Feels Like ${data.current.feelslike_c}°C</span>
                        </div>
                      </div>
                      <div>
                        <img src="${data.current.condition.icon}" width="100px">
                      </div>
                    </div>
        
                  </div>
                </div>
        
              </div>
            </div>
        
          </div>
            `
        }
    })
    .catch(error =>{
        let dataContainer = document.getElementById("dataContainer");
        // dataContainer.innerHTML="S";
        console.log(error); 
    });
}
