const mysql = require('mysql');
const param = require('jquery-param');
const najax = require('najax');
const tenDaysInSeconds = 10*24*60*60*1000;


//автозапуск обновления бд каждые 10 дней
sendRequest(0);
setInterval(() => { sendRequest(0) }, tenDaysInSeconds);


function sendRequest(offset) {
  najax({
      url: getOffsetUrl(0),
      type: "GET",
      dataType: "jsonp",
      success: function(data) {
          if (data.error) {console.log(data.error); return;}
          getVideoArr(data.response.count)
            .then((videos) => Update(videos.sort((a,b) => b.date - a.date)));
      }
  });
}

function getOffsetUrl(offset) {
  return getUrl('video.get', {v: 5.81, owner_id: -22301031, offset: offset, count: 200})
}

function getUrl(method, params) {
  if (!method) throw new Error('Invalid method');
  params = params || {};
  params['access_token'] = 'aac586bea8e957f9651ed5a6aaed2262465e7dca77b542ea6b30eb6959e709d164b75b210ce8957dba897';
  return "https://api.vk.com/method/" + method + "?" + param(params);
}

async function getVideoArr(count) {
  let videos = [];
  for (let i = 0; i < Math.ceil(count / 200) ; i++)
  {
      await najax({
          url: getOffsetUrl(i * 200),
          type: "GET",
          dataType: "jsonp",
          success: function(d) {videos.push(...d.response.items);}
      });
  }
  return videos;
} 


 function Update(videosArray) {
    //подключение БД
    const connection = mysql.createConnection({
        host: process.env.DB_HOST, 
        user:  process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD
    });
    connection.connect(errors => {
        if (errors) {
            console.log(errors);
            return errors;
        }
        console.log('Database ----- OK')
    });

    //добавление нового файла в БД
    videosArray.forEach(video => {
        connection.query('INSERT IGNORE INTO videos SET ?', video,  (errors) => {
            if (errors) {
                console.log(errors);
                return errors;
            }
        });    
    });

    // отключние БД
    connection.end(errors => {
        if (errors) {
            console.log(errors);
            return errors;
        }
        console.log('Database ----- Close')
    });
}


  