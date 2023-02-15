use[3342]

CREATE TABLE Tourism
(
	PlaceID INT PRIMARY KEY IDENTITY(100,1),
	Name VARCHAR(100) NOT NULL,
	Pincode BIGINT NOT NULL,
	State VARCHAR(50) NOT NULL,
	Significance VARCHAR(20) NOT NULL CHECK (Significance IN ('Historic','Religious','Hillstation','Ocean','Amusement Park')),
	Description VARCHAR(MAX) NOT NULL
)

GO

CREATE TABLE ImageFiles
(
	EntryID INT PRIMARY KEY IDENTITY(1,1),
	PlaceID INT NOT NULL REFERENCES Tourism(PlaceID),
	ImageSource VARCHAR(MAX) NOT NULL
)
GO

insert into Tourism values ('Jodhpur Fort', 342001, 'Rajasthan', 'Historic', 'Jodhpur is a city in the Thar Desert of the northwest Indian state of Rajasthan. Its 15th-century Mehrangarh Fort is a former palace that’s now a museum, displaying weapons, paintings and elaborate royal palanquins (sedan chairs). Set on on a rocky outcrop, the fort overlooks the walled city, where many buildings are painted the city’s iconic shade of blue.' );


select * from Tourism
insert into ImageFiles values(109,'D:\Starmark-Pavan R\ASP DotNet\Angular Web API\WebAPI\WebAPI\Images\Taj1.jpg');

select * from ImageFiles

insert into Tourism values ('Manali', 175131, 'Himachal Pradesh', 'Hillstation', 'Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. Its also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass.' );

select * from employee

update ImageFiles set PlaceID = 101 where EntryID = 14;

D:\Starmark-Pavan R\ASP DotNet\Angular Web API\WebAPI\WebAPI\Images\Goa.jpg

DELETE from Tourism where PlaceID = 108;