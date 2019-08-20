# API V2

# Routing
การค้นหาเส้นทางโดยอ้างอิงจากตำแหน่งเริ่มต้นและจุดหมายปลายทาง
> **GET** `https://api-maps.thinknet.co.th/v1/masstransit/route`

### Query
| ชื่อ | รายละเอียด |
|----|-----------|
| src | จุดเริ่มต้นของเส้นทางใช้ค่า Latitude, Longitude |
| dst | จุดเริ่มต้นของเส้นทางใช้ค่า Latitude, Longitude |
| filter | array parameter สำหรับเลือกประเภทการเดินทาง (optional) <br> 1 = รถไฟฟ้า <br> 2 = รถเมล์ <br> 3 = เรือ <br> 4 = รถไฟ <br> 5 = รถด่วนพิเศษบีอาร์ที |


### Response
| ชื่อ | รายละเอียด |
|----|-----------|
| code | success = 200, error code |
| data | ข้อมูล Routing แบบต่างๆ |
| id | route id |
| type |ประเภทของ Routing <br> 1 = เส้นทางที่เปลี่ยนสายน้อยสุด <br> 3 = เส้นทางที่ใช้เวลาเดินทางน้อยสุด <br> 4 = เส้นทางที่ค่าโดยสารถูกที่สุด |
| distance | ระยะทางรวมของการเดินทาง (เมตร) |
| time | ระยะเวลารวมของการเดินทาง (วินาที) |
| route | ข้อมูล edge ของ Routing |
| waypoint | ข้อมูล node ของ Routing เช่น จุดการเปลี่ยนสายรถเมล์ เป็นต้น |

#### route
| ชื่อ | รายละเอียด |
|----|-----------|
| seq | ลำดับการเดินทางของ (edge, node) |
| tn_type | ประเภทของ edge <br> 0 = ทางเชื่อมระหว่าง edge ประเภทต่างๆ <br> 1 = รถไฟฟ้า <br> 2 = รถเมล์ <br> 3 = เรือ <br> 4 = รถไฟ <br> 5 = รถด่วนพิเศษบีอาร์ที |
| time | ระยะของ edge (วินาที) |
| distance | ระยะทางของ edge (เมตร) |
| tn_id | geometry id ของ edge <br> "10001" = edge ของการเปลี่ยนเส้นทาง(ขึ้น)เช่น การขึ้นรถเมล์สายใหม่ เป็นต้น <br> "10002" = edge ของการเปลี่ยนเส้นทาง(ลง)เช่น การลงจากรถเมล์ เป็นต้น <br> "20001" = edge ของการเดินด้วยเท้า <br> "อื่นๆ" = edge id ของ THiNKNET​ Maps |

#### waypoint
| ชื่อ | รายละเอียด |
|----|-----------|
| seq | ลำดับการเดินทางของ (edge, node) |
| node_id | node id |
| nameth | ชื่อภาษาไทยของ node |
| nameen | 	ชื่อภาษาอังกฤษของ node |
| geom | geometry ของ node (geojson) |

## ตัวอย่าง

ค้นหาเส้นทางโดยใช้จุดเริ่มต้นเป็น Node ID และปลายทางเป็น Node ID
##### Request

> **URL:** https://api-maps.thinknet.co.th/v1/masstransit/route?src=13.727151,100.531407&dst=13.796254,100.520507

ค้นหาเส้นทางโดยใช้จุดเริ่มต้นเป็น Latitude, Longitude และปลายทางเป็น Latitude, Longitude 

```json
{
  "code":200,
  "data":[
    {
      "id":2,
      "type":3,
      "distance":13104.61168086004,
      "time":3898.7857430615627,
      "price":50.5,
      "route":[
        {
          "seq":2,
          "time":273.8577637387383,
          "distance":356.0150928603598,
          "tn_type":0,
          "tn_id":"20001",
          "edge_id":"2515757",
          "nameth":"เดินจาก 13.727151,100.531407 ไป สถานีรถไฟฟ้าบีทีเอสศาลาแดง",
          "nameen":"Walk : $13.727151,100.531407 to สถานีรถไฟฟ้าบีทีเอสศาลาแดง",
          "geom":"{\"type\":\"LineString\",\"coordinates\":[[100.531407,13.727151],[100.534365682209,13.7285617330323]]}"
        },
        {
          "seq":4,
          "time":60,
          "distance":0.721636268594103,
          "tn_type":1,
          "tn_id":"10001",
          "edge_id":"2401588",
          "nameth":"รถไฟฟ้า BTS สายสีลม",
          "nameen":"BTS Skytrain Silom Line",
          "geom":"{\"type\":\"LineString\",\"coordinates\":[[100.534365682209,13.7285617330323],[100.53436342234,13.7285676353598]]}"
        },
        ...
      ],
      "waypoint":[
        {
          "seq":1,
          "node_id":"-1",
          "tn_type":0,
          "nameth":"13.727151,100.531407",
          "nameen":"13.727151,100.531407",
          "geom":"{\"type\":\"Point\",\"coordinates\":[100.531407,13.727151]}"
        },
        {
          "seq":3,
          "node_id":"85",
          "tn_type":1,
          "nameth":"สถานีรถไฟฟ้าบีทีเอสศาลาแดง",
          "nameen":"สถานีรถไฟฟ้าบีทีเอสศาลาแดง",
          "geom":"{\"type\":\"Point\",\"coordinates\":[100.534365682209,13.7285617330323]}"
        },
        ...
      ]
    },
    ...
  ]
}
```

```json
{
    "errors": [
        {
            "value": 200,
            "msg": "Should be String",
            "param": "lastName",
            "location": "body"
        },
        {
            "value": 200,
            "msg": "EducationLevel ID is out of available range. More information at http://developers.thinknet.co.th/jobthai-upgrade/docs/resume-service/docs/v1/API/Update%20Resume%20API.html#education-level",
            "param": "educationLevelID",
            "location": "body"
        }
    ]
}
```
